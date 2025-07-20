import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """অ্যাপ কনফিগারেশন, .env থেকে লোড হয়"""
    DATABASE_URL: str = os.getenv(
        "DATABASE_URL",
        # "mysql+aiomysql://root:root@localhost:3306/userhub_db", // my home ps db config
        "mysql+aiomysql://root:root1234@localhost:3306/userhub_db"#// my office ps db config

    ) 