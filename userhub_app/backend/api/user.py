from fastapi import APIRouter, Depends, status
from typing import List
from schemas.user import UserCreate, UserRead, UserUpdate
from core.container import get_user_service
from interfaces.user_service import IUserService

router = APIRouter(prefix="/api/v1/users", tags=["users"])

@router.get("/", response_model=List[UserRead])
async def list_users(user_service: IUserService = Depends(get_user_service)):
    return await user_service.list_users()

@router.post("/", response_model=UserRead, status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate, user_service: IUserService = Depends(get_user_service)):
    return await user_service.create_user(user)

@router.delete("/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user(user_id: int, user_service: IUserService = Depends(get_user_service)):
    await user_service.delete_user(user_id)

@router.put("/{user_id}", response_model=UserRead)
async def update_user(user_id: int, user: UserUpdate, user_service: IUserService = Depends(get_user_service)):
    return await user_service.update_user(user_id, user) 