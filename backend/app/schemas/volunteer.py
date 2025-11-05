from pydantic import BaseModel, Field
from datetime import datetime
from typing import Any, Dict

class VolunteerApplicationCreate(BaseModel):
    data: Dict[str, Any] = Field(..., description="The raw volunteer form data")

class VolunteerApplicationOut(BaseModel):
    id: int
    data: Dict[str, Any]
    reviewed: bool
    created_at: datetime

    class Config:
        from_attributes = True
