from fastapi import (
    APIRouter, Depends, HTTPException, Query, UploadFile, File, Form, status
)
from sqlalchemy.orm import Session
from typing import List, Optional
from uuid import UUID
from app.db.models import BlogPost, BlogImage
from app.schemas.blog import BlogPostCreate, BlogPostUpdate, BlogPostOut
from app.api.deps import get_db, get_current_admin
from app.core.cloudinary_service import upload_image, delete_image

router = APIRouter(prefix="/blogs", tags=["Blog"])


# === PUBLIC: List all published posts ===
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


# === PUBLIC: Get single post by slug ===
@router.get("/{slug}", response_model=BlogPostOut)
def get_post_by_slug(slug: str, db: Session = Depends(get_db)):
    post = (
        db.query(BlogPost)
        .filter(BlogPost.slug == slug, BlogPost.is_published == True)
        .first()
    )
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return post


# === ADMIN: Create post (with Cloudinary upload) ===
@router.post("/", response_model=BlogPostOut, status_code=status.HTTP_201_CREATED)
async def create_post(
    title: str = Form(...),
    slug: str = Form(...),
    content: str = Form(...),
    excerpt: Optional[str] = Form(None),
    is_published: bool = Form(True),
    images: List[UploadFile] = File([]),
    captions: Optional[List[str]] = Form([]),
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    # --- Check slug uniqueness ---
    if db.query(BlogPost).filter(BlogPost.slug == slug).first():
        raise HTTPException(status_code=400, detail="Slug already exists")

    # --- Create post ---
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

    # --- Upload images to Cloudinary ---
    for idx, file in enumerate(images):
        if file.content_type not in ["image/jpeg", "image/png", "image/webp"]:
            raise HTTPException(status_code=400, detail=f"Invalid file type: {file.filename}")

        upload_result = upload_image(file.file, folder=f"blog/{slug}")

        img = BlogImage(
            post_id=post.id,
            image_url=upload_result["secure_url"],
            public_id=upload_result["public_id"],
            caption=captions[idx] if idx < len(captions) else None,
            order=idx,
        )
        db.add(img)

    db.commit()
    db.refresh(post)
    return post


# === ADMIN: Update post ===
@router.put("/{post_id}", response_model=BlogPostOut)
def update_post(
    post_id: UUID,
    update_data: BlogPostUpdate,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    post = db.query(BlogPost).filter(BlogPost.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    update_dict = update_data.dict(exclude_unset=True)

    # --- Validate new slug ---
    if "slug" in update_dict:
        slug_exists = (
            db.query(BlogPost)
            .filter(BlogPost.slug == update_dict["slug"], BlogPost.id != post_id)
            .first()
        )
        if slug_exists:
            raise HTTPException(status_code=400, detail="Slug already in use")

    # --- Update fields ---
    for key, value in update_dict.items():
        if key != "images":
            setattr(post, key, value)

    # --- Replace images if provided ---
    if update_data.images is not None:
        old_images = db.query(BlogImage).filter(BlogImage.post_id == post_id).all()
        for old in old_images:
            delete_image(old.public_id)
        db.query(BlogImage).filter(BlogImage.post_id == post_id).delete()

        for idx, img_data in enumerate(update_data.images):
            img = BlogImage(post_id=post_id, **img_data.dict(), order=idx)
            db.add(img)

    db.commit()
    db.refresh(post)
    return post


# === ADMIN: Delete post (and Cloudinary images) ===
@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(
    post_id: UUID,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    post = db.query(BlogPost).filter(BlogPost.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")

    for img in post.images:
        delete_image(img.public_id)

    db.delete(post)
    db.commit()
    return None
