import uvicorn
from fastapi import FastAPI
from api import user
from db.base import Base
from db.session import engine

app = FastAPI(title="UserHub Backend")
app.include_router(user.router)

# ডাটাবেজ টেবিল তৈরি
@app.on_event("startup")
async def on_startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 