from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from core.config import Config

engine = create_async_engine(Config.DATABASE_URL, echo=True, future=True)

AsyncSessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False
)

def get_session():
    """FastAPI Depends()-এর জন্য session provider"""
    session = AsyncSessionLocal()
    try:
        yield session
    finally:
        session.close() 