# UserHub Backend (FastAPI)

Spring Boot-এর মতো আর্কিটেকচারে তৈরি প্রোডাকশন-রেডি FastAPI প্রজেক্ট।

## রান করার নিয়ম

1. Poetry ইনস্টল করুন (যদি না থাকে):
   ```bash
   pip install poetry
   ```
2. ডিপেন্ডেন্সি ইন্সটল করুন:
   ```bash
   poetry install
   ```
3. `.env` ফাইল তৈরি করুন (যদি না থাকে):
   ```env
   DATABASE_URL=sqlite+aiosqlite:///./userhub.db
   ```
4. অ্যাপ রান করুন:
   ```bash
   poetry run uvicorn main:app --reload
   ```

## API
- List users: `GET /api/v1/users`
- Create user: `POST /api/v1/users`

## ফোল্ডার স্ট্রাকচার
- `api/` — FastAPI routers (Spring Controller-এর মতো)
- `services/` — বিজনেস লজিক (Spring @Service)
- `repositories/` — ডেটা অ্যাক্সেস (Spring Data Repository)
- `models/` — SQLAlchemy ORM মডেল
- `schemas/` — Pydantic DTO
- `interfaces/` — সার্ভিস ও রিপোজিটরি ইন্টারফেস (abc module)
- `core/` — কনফিগ ও DI কনটেইনার
- `db/` — SQLAlchemy base ও session
- `utils/` — শেয়ার্ড টুলস ও এক্সসেপশন 