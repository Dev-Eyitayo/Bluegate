# create_admin.py
import os
from sqlalchemy.orm import Session
from app.db.session import engine
from app.api.v1.admin import get_db
from app.db.models import Admin, Base
from passlib.context import CryptContext

# Load .env variables if needed
from dotenv import load_dotenv
load_dotenv()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_admin(email: str, full_name: str, password: str):
    Base.metadata.create_all(bind=engine)  # make sure tables exist
    db: Session = Session(bind=engine)
    
    existing = db.query(Admin).filter(Admin.email == email).first()
    if existing:
        print(f"Admin with email {email} already exists.")
        return

    hashed_password = pwd_context.hash(password)
    admin = Admin(email=email, full_name=full_name, hashed_password=hashed_password)
    db.add(admin)
    db.commit()
    db.refresh(admin)
    print(f"Admin created: {admin.email}")

if __name__ == "__main__":
    email = input("Admin email: ")
    full_name = input("Full name: ")
    password = input("Password: ")
    create_admin(email, full_name, password)
