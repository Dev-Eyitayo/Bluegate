from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.user import AdminCreate, AdminOut
from app.db import session
from app.db.models import Admin
from app.core.security import get_password_hash
from app.api.deps import get_current_admin

router = APIRouter(prefix="/admin", tags=["Admin Management"])

def get_db():
    db = session.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.post("/create-temp", response_model=AdminOut)
def create_temp_admin(admin: AdminCreate, db: Session = Depends(get_db), _: Admin = Depends(get_current_admin)):
    """Temporary endpoint to create an admin (protected)"""
    
    existing = db.query(Admin).filter(Admin.email == admin.email).first()
    if existing:
        return existing
    
    hashed_password = get_password_hash(admin.password)
    new_admin = Admin(
        email=admin.email,
        full_name=admin.full_name,
        hashed_password=hashed_password,
    )
    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)

    return new_admin
