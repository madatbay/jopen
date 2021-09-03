from pydantic import BaseModel
from sqlalchemy.sql.sqltypes import Integer
from datetime import datetime

class BoardBase(BaseModel):
    title: str
    describtion: str
    url: str
    company_name: str
    logo_url: str

class BoardCreate(BoardBase):
    pass

class Board(BoardBase):
    id: str
    created_at: datetime

    class Config:
        orm_mode = True