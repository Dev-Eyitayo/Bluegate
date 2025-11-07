from pydantic import BaseModel, field_validator
from typing import Any, Optional
from datetime import datetime
from uuid import UUID


class TrainingPaymentBase(BaseModel):
    file_url: str
    public_id: str
    file_type: Optional[str] = None


class TrainingPaymentResponse(TrainingPaymentBase):
    id: UUID
    uploaded_at: datetime

    class Config:
        from_attributes = True


class TrainingApplicationBase(BaseModel):
    data: dict[str, Any]


class TrainingApplicationCreate(TrainingApplicationBase):
    pass


class TrainingApplicationResponse(TrainingApplicationBase):
    id: UUID
    created_at: datetime
    payment: Optional[TrainingPaymentResponse] = None

    @field_validator("created_at", mode="before")
    def fix_datetime_format(cls, v):
        if isinstance(v, str):
            # normalize timezone suffix +00 to +00:00
            v = v.replace("+00", "+00:00")
            return datetime.fromisoformat(v)
        return v

    class Config:
        from_attributes = True
