from sqlalchemy import Column, Integer, String, DateTime

from .database import Base


class Board(Base):
    __tablename__ = "boards"

    id = Column(String, primary_key=True, index=True)

    title = Column(String)
    describtion = Column(String)
    url = Column(String)

    company_name = Column(String)
    logo_url = Column(String)

    created_at = Column(DateTime)
