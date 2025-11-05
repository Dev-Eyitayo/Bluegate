from fastapi import (
    APIRouter, Depends, HTTPException, Query, UploadFile, File, Form, status
)
from sqlalchemy import func
from sqlalchemy.orm import Session, joinedload
from typing import List, Optional
from uuid import UUID
from app.db.models import BlogPost, BlogImage
from app.schemas.blog import BlogPostCreate, BlogPostUpdate, BlogPostOut
from app.api.deps import get_db, get_current_admin
from app.core.cloudinary_service import upload_image, delete_image

router = APIRouter(prefix="/blogs", tags=["Blog"])




# ==============================
# ADMIN ENDPOINTS (protected)
# ==============================

@router.get("/admin", response_model=List[BlogPostOut])
def admin_list_all_posts(
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=200),
):
    posts = (
        db.query(BlogPost)
        .order_by(BlogPost.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )
    return posts


@router.get("/admin/{post_id}", response_model=BlogPostOut)
def admin_get_post(
    post_id: UUID,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    post = db.get(BlogPost, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


@router.post("/admin", response_model=BlogPostOut, status_code=status.HTTP_201_CREATED)
async def admin_create_post(
    title: str = Form(...),
    slug: str = Form(...),
    content: str = Form(...),
    excerpt: Optional[str] = Form(None),
    is_published: bool = Form(True),
    images: List[UploadFile] = File([]),
    captions: List[str] = Form([]),
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    # Validate slug
    if db.query(BlogPost).filter(BlogPost.slug == slug).first():
        raise HTTPException(status_code=400, detail="Slug already exists")

    # Create post
    post = BlogPost(
        title=title,
        slug=slug,
        content=content,
        excerpt=excerpt,
        is_published=is_published,
    )
    db.add(post)
    db.commit()
    db.refresh(post)

    # Upload images
    for idx, file in enumerate(images):
        if file.content_type not in ["image/jpeg", "image/png", "image/webp", "image/gif"]:
            raise HTTPException(status_code=400, detail=f"Invalid file type: {file.filename}")

        result = upload_image(file.file, folder=f"blog/{slug}")
        caption = captions[idx] if idx < len(captions) else None

        img = BlogImage(
            post_id=post.id,
            image_url=result["secure_url"],
            public_id=result["public_id"],
            caption=caption,
            order=idx,
        )
        db.add(img)

    db.commit()
    db.refresh(post)
    return post


@router.put("/admin/{post_id}", response_model=BlogPostOut)
async def admin_update_post(
    post_id: UUID,
    title: Optional[str] = Form(None),
    slug: Optional[str] = Form(None),
    content: Optional[str] = Form(None),
    excerpt: Optional[str] = Form(None),
    is_published: Optional[bool] = Form(None),
    images: Optional[List[UploadFile]] = File(None),           # new images
    captions: Optional[List[str]] = Form(None),                # captions for new images
    remove_images: Optional[List[str]] = Form(None),           # list of image IDs to delete
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    post = db.get(BlogPost, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    # === UPDATE TEXT FIELDS ===
    if title is not None:
        post.title = title
    if slug is not None:
        existing = db.query(BlogPost).filter(BlogPost.slug == slug, BlogPost.id != post_id).first()
        if existing:
            raise HTTPException(status_code=400, detail="Slug already in use")
        post.slug = slug
    if content is not None:
        post.content = content
    if excerpt is not None:
        post.excerpt = excerpt
    if is_published is not None:
        post.is_published = is_published

    # === HANDLE IMAGE REMOVALS ===
    if remove_images:
        for img_id in remove_images:
            img = db.query(BlogImage).filter(BlogImage.id == img_id, BlogImage.post_id == post_id).first()
            if img:
                try:
                    delete_image(img.public_id)
                except:
                    pass  # ignore Cloudinary errors
                db.delete(img)

    # === ADD NEW IMAGES (only if provided) ===
    if images and images != [None]:  # FastAPI sends [None] if no file
        # Optional: delete all old if you want "replace" behavior
        # But we want "add", so skip

        base_order = db.query(func.max(BlogImage.order)).filter(BlogImage.post_id == post_id).scalar() or -1

        for idx, file in enumerate(images):
            if not file.filename:
                continue  # skip empty

            if file.content_type not in ["image/jpeg", "image/png", "image/webp", "image/gif"]:
                raise HTTPException(status_code=400, detail=f"Invalid file type: {file.filename}")

            result = upload_image(file.file, folder=f"blog/{post.slug or post_id}")
            caption = captions[idx] if captions and idx < len(captions) else None

            img = BlogImage(
                post_id=post.id,
                image_url=result["secure_url"],
                public_id=result["public_id"],
                caption=caption,
                order=base_order + idx + 1,
            )
            db.add(img)

    db.commit()
    db.refresh(post)
    return post


@router.delete("/admin/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def admin_delete_post(
    post_id: UUID,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    post = db.get(BlogPost, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    # Delete images from Cloudinary
    for img in post.images:
        try:
            delete_image(img.public_id)
        except:
            pass

    db.delete(post)
    db.commit()
    return None






# ==============================
# PUBLIC ENDPOINTS
# ==============================

@router.get("/", response_model=List[BlogPostOut])
def list_published_posts(
    db: Session = Depends(get_db),
    skip: int = Query(0, ge=0),
    limit: int = Query(10, ge=1, le=50),
):
    posts = (
        db.query(BlogPost)
        .filter(BlogPost.is_published == True)
        .order_by(BlogPost.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )
    return posts


@router.get("/{slug}", response_model=BlogPostOut)
def get_post_by_slug(slug: str, db: Session = Depends(get_db)):
    post = (
        db.query(BlogPost)
        .options(joinedload(BlogPost.images))  # ← CRITICAL: Load images!
        .filter(BlogPost.slug == slug, BlogPost.is_published == True)
        .first()
    )
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post

