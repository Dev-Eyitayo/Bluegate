# app/api/volunteer.py
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.db import session
from app.db.models import VolunteerApplication
from app.schemas.volunteer import VolunteerApplicationCreate, VolunteerApplicationOut
from typing import List, Optional
from app.api.deps import get_current_admin, get_db

router = APIRouter(prefix="/volunteers", tags=["Volunteer"])



@router.post("/", response_model=VolunteerApplicationOut)
def submit_application(application: VolunteerApplicationCreate, db: Session = Depends(get_db)):
    """Public route — anyone can submit."""
    new_app = VolunteerApplication(data=application.data)
    db.add(new_app)
    db.commit()
    db.refresh(new_app)
    return new_app


@router.get("/", response_model=List[VolunteerApplicationOut])
def get_all_applications(
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
    reviewed: Optional[bool] = Query(None, description="Filter by reviewed status (true/false)"),
    skip: int = Query(0, ge=0, description="Number of records to skip for pagination"),
    limit: int = Query(10, ge=1, le=100, description="Maximum number of records to return"),
):
    """
    Admin-only route — view all submitted forms.
    - Returns unreviewed ones first.
    - Supports pagination and optional filtering.
    """
    query = db.query(VolunteerApplication)

    # Optional filtering by reviewed status
    if reviewed is not None:
        query = query.filter(VolunteerApplication.reviewed == reviewed)

    # Always order unreviewed ones first
    query = query.order_by(VolunteerApplication.reviewed.asc(), VolunteerApplication.id.desc())

    # Apply pagination
    applications = query.offset(skip).limit(limit).all()
    return applications

@router.put("/{application_id}/review", response_model=VolunteerApplicationOut)
def mark_reviewed(application_id: int, db: Session = Depends(get_db), current_admin=Depends(get_current_admin)):
    """Admin marks a submission as reviewed."""
    app_record = db.query(VolunteerApplication).filter(VolunteerApplication.id == application_id).first()
    if not app_record:
        raise HTTPException(status_code=404, detail="Application not found")
    app_record.reviewed = True
    db.commit()
    db.refresh(app_record)
    return app_record
