from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from app.db.models import Contact
from app.schemas.contact import ContactCreate, ContactResponse
from app.api.deps import get_db, get_current_admin

router = APIRouter(prefix="/contact", tags=["Contact Messages"])


# ===================================================
# PUBLIC — Submit message
# ===================================================

@router.post("/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact_message(
    data: ContactCreate,
    db: Session = Depends(get_db),
):
    new_msg = Contact(**data.model_dump())
    db.add(new_msg)
    db.commit()
    db.refresh(new_msg)
    return new_msg


# ===================================================
# ADMIN — Get all messages
# ===================================================

@router.get("/", response_model=List[ContactResponse])
def get_all_messages(
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
    reviewed: bool | None = Query(None, description="Filter reviewed or unreviewed"),
    skip: int = 0,
    limit: int = 20
):
    query = db.query(Contact)

    if reviewed is not None:
        query = query.filter(Contact.reviewed == reviewed)

    messages = (
        query.order_by(Contact.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )

    return messages


# ===================================================
# ADMIN — Get recent messages
# ===================================================

@router.get("/recent", response_model=List[ContactResponse])
def get_recent_messages(
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
    limit: int = 10
):
    """
    Fetch N most recent contact messages.
    """
    messages = (
        db.query(Contact)
        .order_by(Contact.created_at.desc())
        .limit(limit)
        .all()
    )
    return messages


# ===================================================
# ADMIN — Get single message
# ===================================================

@router.get("/{message_id}", response_model=ContactResponse)
def get_message(
    message_id: UUID,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    message = db.query(Contact).filter(Contact.id == message_id).first()

    if not message:
        raise HTTPException(status_code=404, detail="Message not found")

    return message


# ===================================================
# ADMIN — Mark as reviewed
# ===================================================

@router.put("/{message_id}/review", response_model=ContactResponse)
def mark_message_reviewed(
    message_id: UUID,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    message = db.query(Contact).filter(Contact.id == message_id).first()

    if not message:
        raise HTTPException(status_code=404, detail="Message not found")

    message.reviewed = True
    db.commit()
    db.refresh(message)

    return message


# ===================================================
# ADMIN — Delete a message
# ===================================================

@router.delete("/{message_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_message(
    message_id: UUID,
    db: Session = Depends(get_db),
    current_admin=Depends(get_current_admin),
):
    message = db.query(Contact).filter(Contact.id == message_id).first()

    if not message:
        raise HTTPException(status_code=404, detail="Message not found")

    db.delete(message)
    db.commit()
    return None
