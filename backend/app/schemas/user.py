from pydantic import BaseModel, EmailStr
from uuid import UUID

class AdminBase(BaseModel):
    email: EmailStr
    full_name: str | None = None

class AdminCreate(AdminBase):
    password: str

class AdminOut(AdminBase):
    id: UUID
    is_active: bool

    model_config = {
        "from_attributes": True
    }

class TokenWithUser(BaseModel):
    access_token: str
    token_type: str
    user: AdminOut   

class LoginRequest(BaseModel):
    email: EmailStr
    password: str