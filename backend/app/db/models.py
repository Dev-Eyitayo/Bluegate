from sqlalchemy import Column, Integer, Text, String, Boolean, JSON, ForeignKey, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy import DateTime
from sqlalchemy.sql import func


Base = declarative_base()

class Admin(Base):
    __tablename__ = "admins"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)



class VolunteerApplication(Base):
    __tablename__ = "volunteer_applications"

    id = Column(Integer, primary_key=True, index=True)
    data = Column(JSON, nullable=False)  # to store all form data as JSON
    reviewed = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)





class BlogPost(Base):
    __tablename__ = "blog_posts"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    slug = Column(String(200), unique=True, index=True, nullable=False)
    title = Column(String(200), nullable=False)
    excerpt = Column(Text, nullable=True)
    content = Column(Text, nullable=False)
    is_published = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    images = relationship("BlogImage", back_populates="post", cascade="all, delete-orphan")


class BlogImage(Base):
    __tablename__ = "blog_images"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    post_id = Column(UUID(as_uuid=True), ForeignKey("blog_posts.id"), nullable=False)
    image_url = Column(String(500), nullable=False)     # Cloudinary secure URL
    public_id = Column(String(255), nullable=False)     # Cloudinary public_id
    caption = Column(String(300), nullable=True)
    order = Column(Integer, default=0)

    post = relationship("BlogPost", back_populates="images")