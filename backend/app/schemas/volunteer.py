from pydantic import BaseModel
from typing import Any, Optional

class VolunteerApplicationCreate(BaseModel):
    data: Any  # the full form data object from frontend

class VolunteerApplicationOut(BaseModel):
    id: int
    data: Any
    reviewed: bool

    class Config:
        orm_mode = True
