from datetime import datetime
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import SessionLocal, engine

from app.dependencies import get_token_header

models.Base.metadata.create_all(bind=engine)

router = APIRouter(
    prefix="/api/v1/boards",
    tags=["Boards"],
    responses={404: {"description": "Board not found"}},
    # dependencies=[Depends(get_token_header)]
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@router.get("/all/", response_model=List[schemas.Board])
async def read_boards(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    boards = db.query(models.Board).offset(skip).limit(limit).all()
    return boards


@router.get("/{board_id}", response_model=schemas.Board)
async def get_board(board_id: str, db: Session = Depends(get_db)):
    board = db.query(models.Board).filter(models.Board.id == board_id).first()
    if board is None:
        raise HTTPException(
            status_code=404, detail="Board {} not fount".format(board_id)
        )
    return board


@router.post("/create/", response_model=schemas.Board)
async def create_board(
    board_id: str, board: schemas.BoardCreate, db: Session = Depends(get_db)
):
    board_check = db.query(models.Board).filter(models.Board.id == board_id).first()
    if board_check:
        raise HTTPException(status_code=400, detail="Board already registered")
    print(board)
    db_board = models.Board(
        id=board_id,
        title=board.title,
        describtion=board.describtion,
        url=board.url,
        company_name=board.company_name,
        logo_url=board.logo_url,
        created_at=datetime.now(),
    )
    db.add(db_board)
    db.commit()
    db.refresh(db_board)
    return db_board
