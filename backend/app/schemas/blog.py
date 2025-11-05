from pydantic import BaseModel, HttpUrl, validator
from typing import List, Optional
from datetime import datetime
from uuid import UUID



class BlogImageBase(BaseModel):
    image_url: HttpUrl  # Cloudinary secure URL
    public_id: str      # Cloudinary public ID (used for delete/transform)
    caption: Optional[str] = None
    order: int = 0


class BlogImageCreate(BlogImageBase):
    pass


class BlogImageOut(BlogImageBase):
    id: UUID

    class Config:
        from_attributes = True  # ORM mode



class BlogPostBase(BaseModel):
    title: str
    slug: str
    excerpt: Optional[str] = None
    content: str
    is_published: bool = True

    @validator("slug")
    def slug_must_be_url_friendly(cls, v: str) -> str:
        if not v.replace("-", "").replace("_", "").isalnum():
            raise ValueError("Slug must contain only letters, numbers, hyphens, or underscores")
        return v.lower()


class BlogPostCreate(BlogPostBase):
    images: List[BlogImageCreate] = []


class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    is_published: Optional[bool] = None
    images: Optional[List[BlogImageCreate]] = None


class BlogPostOut(BlogPostBase):
    id: UUID
    created_at: datetime
    updated_at: Optional[datetime] = None
    images: List[BlogImageOut] = []

    class Config:
        from_attributes = True
