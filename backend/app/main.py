from fastapi import FastAPI
from fastapi.openapi.models import OAuthFlows as OAuthFlowsModel, SecurityScheme
from fastapi.security import OAuth2PasswordBearer
from app.api.v1 import auth, admin, volunteer
from app.db import models, session

models.Base.metadata.create_all(bind=session.engine)

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

# Include routers
app.include_router(auth.router, prefix="/api/v1")
app.include_router(admin.router, prefix="/api/v1")
app.include_router(volunteer.router, prefix="/api/v1")
@app.get("/")
def read_root():
    return {"message": "Hello ! This is an api built by @dev_eyitayo, follow me on X !"}

# Add security scheme for Swagger UI
from fastapi.openapi.utils import get_openapi

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
