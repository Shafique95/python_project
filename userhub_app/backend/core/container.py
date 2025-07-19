from fastapi import Depends
from db.session import get_session
from repositories.user_repository import UserRepository
from services.user_service import UserService
from interfaces.user_service import IUserService
from interfaces.user_repository import IUserRepository
from sqlalchemy.ext.asyncio import AsyncSession

def get_user_repository(session: AsyncSession = Depends(get_session)) -> IUserRepository:
    return UserRepository(session)

def get_user_service(
    user_repository: IUserRepository = Depends(get_user_repository),
) -> IUserService:
    return UserService(user_repository) 