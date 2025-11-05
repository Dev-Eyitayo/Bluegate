from fastapi import Depends, HTTPException, status, UploadFile, File
from fastapi.security import OAuth2PasswordBearer
from jose import jwt, JWTError
from sqlalchemy.orm import Session
from app.db import session

from app.db.models import Admin
from app.core.config import settings


import os
import shutil
from datetime import datetime

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login")

def get_db():
    db = session.SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_current_admin(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)) -> Admin:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        admin_id: str = payload.get("sub")
        if admin_id is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    admin = db.query(Admin).filter(Admin.id == str(admin_id)).first()
    if admin is None:
        raise credentials_exception
    return admin






MEDIA_ROOT = "media/blog"
os.makedirs(MEDIA_ROOT, exist_ok=True)

def save_upload_file(upload_file: UploadFile, slug: str) -> str:
    date_path = datetime.now().strftime("%Y/%m")
    post_dir = os.path.join(MEDIA_ROOT, date_path, slug)
    os.makedirs(post_dir, exist_ok=True)

    file_ext = upload_file.filename.split(".")[-1]
    filename = f"{datetime.now().strftime('%Y%m%d_%H%M%S')}.{file_ext}"
    file_path = os.path.join(post_dir, filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(upload_file.file, buffer)

    # Return relative path for DB
    return f"blog/{date_path}/{slug}/{filename}"