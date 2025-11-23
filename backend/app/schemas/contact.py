from pydantic import BaseModel, EmailStr
from uuid import UUID
from datetime import datetime


class ContactBase(BaseModel):
    full_name: str
    email: EmailStr
    number: str | None = None
    subject: str | None = None
    message: str


class ContactCreate(ContactBase):
    pass


class ContactResponse(ContactBase):
    id: UUID
    reviewed: bool
    created_at: datetime

    class Config:
        from_attributes = True
