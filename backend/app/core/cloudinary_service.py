import cloudinary.uploader

def upload_image(file, folder: str):
    """Upload an image file to Cloudinary."""
    return cloudinary.uploader.upload(
        file,
        folder=folder,
        resource_type="image",
        overwrite=True,
    )

def delete_image(public_id: str):
    """Delete image by public_id from Cloudinary."""
    try:
        cloudinary.uploader.destroy(public_id)
    except Exception:
        pass
