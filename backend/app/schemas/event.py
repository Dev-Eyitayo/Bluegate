from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from uuid import UUID

class EventImageBase(BaseModel):
    image_url: str
    public_id: str
    caption: Optional[str] = None
    order: int = 0

class EventImageCreate(EventImageBase):
    pass

class EventImageOut(EventImageBase):
    id: UUID

    class Config:
        from_attributes = True


class EventBase(BaseModel):
    title: str
    description: Optional[str] = None
    event_date: datetime
    location: Optional[str] = None

class EventCreate(EventBase):
    pass

class EventUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    event_date: Optional[datetime] = None
    location: Optional[str] = None

class EventOut(EventBase):
    id: UUID
    created_at: datetime
    updated_at: Optional[datetime] = None
    images: List[EventImageOut] = []

    class Config:
        from_attributes = True

EventOut.model_rebuild()
