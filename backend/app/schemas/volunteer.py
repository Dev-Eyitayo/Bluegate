from pydantic import BaseModel, EmailStr
from typing import Optional, List

class VolunteerCreate(BaseModel):
    name: str
    age: Optional[int]
    gender: Optional[str]
    email: Optional[EmailStr]
    address: Optional[str]
    languages: Optional[str]

    education_level: Optional[str]
    specialization: Optional[str]
    is_student: Optional[str]
    institution: Optional[str]
    course: Optional[str]

    employer: Optional[str]
    position: Optional[str]
    employment_date: Optional[str]
    employer_address: Optional[str]
    notify_employer: Optional[str]

    special_skills: Optional[str]
    memberships: Optional[str]
    experience: Optional[str]
    preparation: Optional[str]
    motivation: Optional[str]

    emergency_contact: Optional[str]
    emergency_phone: Optional[str]

    availability: Optional[List[str]]
    interests: Optional[List[str]]

    ref_name_1: Optional[str]
    ref_relationship_1: Optional[str]
    ref_length_1: Optional[str]
    ref_phone_1: Optional[str]
    ref_name_2: Optional[str]
    ref_relationship_2: Optional[str]
    ref_length_2: Optional[str]
    ref_phone_2: Optional[str]
    ref_name_3: Optional[str]
    ref_relationship_3: Optional[str]
    ref_length_3: Optional[str]
    ref_phone_3: Optional[str]

    agree: bool
