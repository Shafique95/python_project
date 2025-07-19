from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models.user import User
from schemas.user import UserCreate, UserRead, UserUpdate
from interfaces.user_repository import IUserRepository

class UserRepository(IUserRepository):
    """Spring Data Repository-এর মতো কাজ করে"""
    def __init__(self, session: AsyncSession):
        self.session = session

    async def list_users(self) -> List[UserRead]:
        result = await self.session.execute(select(User))
        users = result.scalars().all()
        return [UserRead.model_validate(u) for u in users]

    async def create_user(self, user: UserCreate) -> UserRead:
        db_user = User(name=user.name, email=user.email)
        self.session.add(db_user)
        await self.session.commit()
        await self.session.refresh(db_user)
        return UserRead.model_validate(db_user)

    async def delete_user(self, user_id: int) -> None:
        user = await self.session.get(User, user_id)
        if user:
            await self.session.delete(user)
            await self.session.commit()

    async def update_user(self, user_id: int, user: UserUpdate) -> UserRead:
        db_user = await self.session.get(User, user_id)
        if not db_user:
            raise Exception('User not found')
        if user.name is not None:
            db_user.name = user.name
        if user.email is not None:
            db_user.email = user.email
        self.session.add(db_user)
        await self.session.commit()
        await self.session.refresh(db_user)
        return UserRead.model_validate(db_user) 