from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import boards

from .dependencies import get_token_header

app = FastAPI(
    title="Jopen",
    description="Jopen open source job board tool",
    version="0.0.1",
    contact={
        "name": "Madat Bay",
        "url": "https://madatbay.com",
        "email": "medet.bayramov22@gmail.com",
    },
    license_info={
        "name": "No license provided",
    },
    # dependencies=[Depends(get_token_header)]
)

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(boards.router)


@app.get("/api/v1/", tags=["Root"])
async def root():
    return {"message": "Jopen API v1"}
