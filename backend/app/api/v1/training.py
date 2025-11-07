from fastapi import (
    APIRouter, Depends, HTTPException, Query, UploadFile, File, Form, status
)
from sqlalchemy.orm import Session
from typing import List, Optional 
from uuid import UUID
from app.db.models import TrainingApplication, TrainingPayment
from app.schemas.training import TrainingApplicationResponse
from app.api.deps import get_db, get_current_admin
from app.core.cloudinary_service import upload_image, delete_image
import json


router = APIRouter(prefix="/trainings", tags=["Training Applications"])


# ===================================================
# PUBLIC — Submit training application (with proof)
# ===================================================

@router.post("/", response_model=TrainingApplicationResponse, status_code=status.HTTP_201_CREATED)
async def submit_training_application(
    data: str = Form(..., description="JSON string containing the form data"),
    payment_proof: UploadFile = File(..., description="Payment proof (image/pdf)"),
    db: Session = Depends(get_db),
):
    """
    Public endpoint — submit a training application (payment proof required).
    """

    # Parse the JSON string from form-data
    try:
        parsed_data = json.loads(data)
    except json.JSONDecodeError:
        raise HTTPException(status_code=400, detail="Invalid JSON format in 'data' field")

    # Validate file type
    if payment_proof.content_type not in ["image/jpeg", "image/png", "application/pdf"]:
        raise HTTPException(status_code=400, detail="Unsupported file type. Use JPG, PNG, or PDF.")

    # Create the training application record
    new_app = TrainingApplication(data=parsed_data)
    db.add(new_app)
    db.commit()
    db.refresh(new_app)

    # Upload payment proof to Cloudinary
    upload_result = upload_image(payment_proof.file, folder=f"training_payments/{new_app.id}")

    payment = TrainingPayment(
        application_id=new_app.id,
        file_url=upload_result["secure_url"],
        public_id=upload_result["public_id"],
        file_type=payment_proof.content_type,
    )
    db.add(payment)
    db.commit()
    db.refresh(new_app)

    return new_app



# ===================================================
# ADMIN — Get all applications
# ===================================================

@router.get("/", response_model=List[TrainingApplicationResponse])
def get_all_training_applications(
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
    reviewed: Optional[bool] = Query(None, description="Filter by review status"),
    skip: int = 0,
    limit: int = 10,
):
    query = db.query(TrainingApplication)
    if reviewed is not None:
        query = query.filter(TrainingApplication.reviewed == reviewed)

    apps = (
        query.order_by(TrainingApplication.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )

    # Ensure data field is always a dict, not a JSON string
    for app in apps:
        if isinstance(app.data, str):
            try:
                import json
                app.data = json.loads(app.data)
            except Exception:
                app.data = {}

    return apps


# ===================================================
# ADMIN — Get single application
# ===================================================

@router.get("/{application_id}", response_model=TrainingApplicationResponse)
def get_training_application(
    application_id: UUID,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    """
    Admin-only — Fetch one training application with payment details
    """
    app = (
        db.query(TrainingApplication)
        .filter(TrainingApplication.id == application_id)
        .first()
    )

    if not app:
        raise HTTPException(status_code=404, detail="Application not found")

    # Parse JSON string if needed
    if isinstance(app.data, str):
        import json
        try:
            app.data = json.loads(app.data)
        except Exception:
            app.data = {}

    return app


# ===================================================
# ADMIN — Delete application + payment
# ===================================================

@router.delete("/{application_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_training_application(
    application_id: UUID,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    """
    Admin-only — Delete a training application and its Cloudinary payment proof
    """
    app = (
        db.query(TrainingApplication)
        .filter(TrainingApplication.id == application_id)
        .first()
    )

    if not app:
        raise HTTPException(status_code=404, detail="Application not found")

    # Delete payment proof from Cloudinary
    if app.payment:
        try:
            delete_image(app.payment.public_id)
        except Exception:
            pass
        db.delete(app.payment)

    db.delete(app)
    db.commit()
    return None


# ===================================================
# ADMIN — Mark as reviewed
# ===================================================

@router.put("/{application_id}/review", response_model=TrainingApplicationResponse)
def mark_training_application_reviewed(
    application_id: UUID,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    """
    Admin-only — Mark a training application as reviewed.
    """
    app_record = (
        db.query(TrainingApplication)
        .filter(TrainingApplication.id == application_id)
        .first()
    )

    if not app_record:
        raise HTTPException(status_code=404, detail="Application not found")

    app_record.reviewed = True
    db.commit()
    db.refresh(app_record)

    # Parse JSON string if needed
    if isinstance(app_record.data, str):
        import json
        try:
            app_record.data = json.loads(app_record.data)
        except Exception:
            app_record.data = {}

    return app_record
