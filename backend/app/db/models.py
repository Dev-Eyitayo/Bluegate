from sqlalchemy import Column, Integer, String, Boolean, Text, ARRAY
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import UUID
import uuid

Base = declarative_base()

class Admin(Base):
    __tablename__ = "admins"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    is_active = Column(Boolean, default=True)




class Volunteer(Base):
    __tablename__ = "volunteers"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    age = Column(Integer, nullable=True)
    gender = Column(String(10), nullable=True)
    email = Column(String(100), nullable=True)
    address = Column(String(255), nullable=True)
    languages = Column(String(255), nullable=True)

    education_level = Column(String(100), nullable=True)
    specialization = Column(String(100), nullable=True)
    is_student = Column(String(10), nullable=True)
    institution = Column(String(255), nullable=True)
    course = Column(String(100), nullable=True)

    employer = Column(String(255), nullable=True)
    position = Column(String(100), nullable=True)
    employment_date = Column(String(50), nullable=True)
    employer_address = Column(String(255), nullable=True)
    notify_employer = Column(String(10), nullable=True)

    special_skills = Column(Text, nullable=True)
    memberships = Column(Text, nullable=True)
    experience = Column(Text, nullable=True)
    preparation = Column(Text, nullable=True)
    motivation = Column(Text, nullable=True)

    emergency_contact = Column(String(100), nullable=True)
    emergency_phone = Column(String(50), nullable=True)

    availability = Column(ARRAY(String), nullable=True)
    interests = Column(ARRAY(String), nullable=True)

    ref_name_1 = Column(String(100), nullable=True)
    ref_relationship_1 = Column(String(100), nullable=True)
    ref_length_1 = Column(String(50), nullable=True)
    ref_phone_1 = Column(String(50), nullable=True)
    ref_name_2 = Column(String(100), nullable=True)
    ref_relationship_2 = Column(String(100), nullable=True)
    ref_length_2 = Column(String(50), nullable=True)
    ref_phone_2 = Column(String(50), nullable=True)
    ref_name_3 = Column(String(100), nullable=True)
    ref_relationship_3 = Column(String(100), nullable=True)
    ref_length_3 = Column(String(50), nullable=True)
    ref_phone_3 = Column(String(50), nullable=True)

    agree = Column(Boolean, default=False)
