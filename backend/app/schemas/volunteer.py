from pydantic import BaseModel, Field, field_validator
from datetime import datetime
from typing import Any, Dict

class VolunteerApplicationCreate(BaseModel):
    data: Dict[str, Any] = Field(..., description="The raw volunteer form data")

class VolunteerApplicationOut(BaseModel):
    id: int
    data: Dict[str, Any]
    reviewed: bool
    created_at: datetime

    @field_validator("created_at", mode="before")
    def fix_datetime_format(cls, v):
        if isinstance(v, str):
            # normalize timezone suffix +00 to +00:00
            v = v.replace("+00", "+00:00")
            return datetime.fromisoformat(v)
        return v
    
    class Config:
        from_attributes = True
