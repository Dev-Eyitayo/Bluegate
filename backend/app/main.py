from fastapi import FastAPI
from fastapi.openapi.models import OAuthFlows as OAuthFlowsModel, SecurityScheme
from fastapi.security import OAuth2PasswordBearer
from app.api.v1 import auth, admin, volunteer, blog, training, event
from app.db import models, session
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from .core.cloudinary_config import init_cloudinary
from fastapi.openapi.utils import get_openapi


models.Base.metadata.create_all(bind=session.engine)
init_cloudinary()

app = FastAPI(
    title="BlueGate Initiative API",
    description="BlueGate CRM: Admin content management system",
    version="1.0.0",
    contact={
        "name": "BlueGate Support",
        "email": "info@bluegateinitiative.org",
        "url": "https://bluegateinitiative.org"
    },
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# Allowed origins — your frontend URLs
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    # Add your production URL later, e.g.:
    "https://bluegateinitiative.vercel.app"
]



app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,          # allow these origins
    allow_credentials=True,
    allow_methods=["*"],            # allow all HTTP methods
    allow_headers=["*"],            # allow all headers
)


app.mount("/media", StaticFiles(directory="media"), name="media")


# Include routers
app.include_router(auth.router, prefix="/api/v1")
app.include_router(admin.router, prefix="/api/v1")
app.include_router(volunteer.router, prefix="/api/v1")
app.include_router(blog.router, prefix="/api/v1")
app.include_router(training.router, prefix="/api/v1")
app.include_router(event.router, prefix="/api/v1")

@app.get("/")
def read_root():
    return {"message": "Hello ! This is an api built by @dev_eyitayo, follow me on X !"}

@app.get("/health", include_in_schema=False)
def health_check():
    return {"status": "ok"}


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title=app.title,
        version=app.version,
        description=app.description,
        routes=app.routes,
    )
    # Add Bearer auth globally
    openapi_schema["components"]["securitySchemes"] = {
        "BearerAuth": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
        }
    }
    for path in openapi_schema["paths"]:
        for method in openapi_schema["paths"][path]:
            openapi_schema["paths"][path][method]["security"] = [{"BearerAuth": []}]
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi
