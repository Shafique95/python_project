from typing import List
from interfaces.user_service import IUserService
from interfaces.user_repository import IUserRepository
from schemas.user import UserCreate, UserRead, UserUpdate

class UserService(IUserService):
    """Spring @Service-এর মতো কাজ করে"""
    def __init__(self, user_repository: IUserRepository):
        self.user_repository = user_repository

    async def list_users(self) -> List[UserRead]:
        return await self.user_repository.list_users()

    async def create_user(self, user: UserCreate) -> UserRead:
        return await self.user_repository.create_user(user)

    async def delete_user(self, user_id: int) -> None:
        return await self.user_repository.delete_user(user_id)

    async def update_user(self, user_id: int, user: UserUpdate) -> UserRead:
        return await self.user_repository.update_user(user_id, user) 