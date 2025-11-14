from fastapi import (
    APIRouter, Depends, HTTPException, Query, UploadFile, File, Form, status
)
from sqlalchemy.orm import Session, joinedload
from typing import List, Optional
from uuid import UUID
from datetime import datetime
from app.db.models import Event, EventImage
from app.schemas.event import EventOut
from app.api.deps import get_db, get_current_admin
from app.core.cloudinary_service import upload_image, delete_image
from datetime import datetime


router = APIRouter(prefix="/events", tags=["Events"])


@router.get("/", response_model=List[EventOut])
def list_events(
    db: Session = Depends(get_db),
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=200),
):
    events = (
        db.query(Event)
        .options(joinedload(Event.images))
        .order_by(Event.created_at.desc())
        .offset(skip)
        .limit(limit)
        .all()
    )
    return events




@router.get("/upcoming", response_model=List[EventOut])
def list_upcoming_events(
    db: Session = Depends(get_db),
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=100),
):
    now = datetime.now()
    events = (
        db.query(Event)
        .filter(Event.event_date >= now)
        .order_by(Event.event_date.asc())
        .offset(skip)
        .limit(limit)
        .all()
    )
    return events



@router.get("/{event_id}", response_model=EventOut)
def get_event(
    event_id: UUID,
    db: Session = Depends(get_db),
):
    event = (
        db.query(Event)
        .options(joinedload(Event.images))
        .filter(Event.id == event_id)
        .first()
    )
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")
    return event


@router.post("/admin", response_model=EventOut, status_code=status.HTTP_201_CREATED)
async def admin_create_event(
    title: str = Form(...),
    description: str = Form(...),
    event_date: str = Form(...),
    location: Optional[str] = Form(None),
    images: List[UploadFile] = File([]),
    captions: List[str] = Form([]),
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    # Parse date
    try:
        parsed_date = datetime.fromisoformat(event_date)
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid event_date format. Use ISO 8601.")

    event = Event(
        title=title,
        description=description,
        event_date=parsed_date,
        location=location,
    )
    db.add(event)
    db.commit()
    db.refresh(event)

    # Upload images
    for idx, upload in enumerate(images):
        if not upload.filename:
            continue
        caption = captions[idx] if idx < len(captions) else None
        result = upload_image(upload.file, folder="events")
        event_image = EventImage(
            event_id=event.id,
            image_url=result["secure_url"],
            public_id=result["public_id"],
            caption=caption,
            order=idx,
        )
        db.add(event_image)

    db.commit()
    db.refresh(event)
    return event


@router.put("/admin/{event_id}", response_model=EventOut)
async def admin_update_event(
    event_id: UUID,
    title: Optional[str] = Form(None),
    description: Optional[str] = Form(None),
    event_date: Optional[str] = Form(None),
    location: Optional[str] = Form(None),
    images: List[UploadFile] = File([]),
    captions: List[str] = Form([]),
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    event = db.get(Event, event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    if title is not None:
        event.title = title
    if description is not None:
        event.description = description
    if event_date is not None:
        event.event_date = datetime.fromisoformat(event_date)
    if location is not None:
        event.location = location

    # Add new images
    if images and images != [None]:
        base_order = len(event.images)
        for idx, upload in enumerate(images):
            if not upload.filename:
                continue
            caption = captions[idx] if idx < len(captions) else None
            result = upload_image(upload.file, folder="events")
            event_image = EventImage(
                event_id=event.id,
                image_url=result["secure_url"],
                public_id=result["public_id"],
                caption=caption,
                order=base_order + idx,
            )
            db.add(event_image)

    db.commit()
    db.refresh(event)
    return event


@router.delete("/admin/{event_id}", status_code=status.HTTP_204_NO_CONTENT)
async def admin_delete_event(
    event_id: UUID,
    db: Session = Depends(get_db),
    admin=Depends(get_current_admin),
):
    event = db.get(Event, event_id)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    for img in event.images:
        try:
            delete_image(img.public_id)
        except Exception:
            pass

    db.delete(event)
    db.commit()
    return None
