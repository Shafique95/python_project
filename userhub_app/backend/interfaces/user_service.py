from abc import ABC, abstractmethod
from typing import List
from schemas.user import UserCreate, UserRead

class IUserService(ABC):
    @abstractmethod
    async def list_users(self) -> List[UserRead]:
        pass

    @abstractmethod
    async def create_user(self, user: UserCreate) -> UserRead:
        pass 

    @abstractmethod
    async def delete_user(self, user_id: int) -> None:
        pass 

    @abstractmethod
    async def update_user(self, user_id: int, user: 'UserUpdate') -> 'UserRead':
        pass 