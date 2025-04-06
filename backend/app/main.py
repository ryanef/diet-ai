from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

class Message(BaseModel):
    conditions: list[str]  
    ingredients: list[str]  
    user_comment: str | None


origins = [
    "http://localhost",
    "http://localhost:3000",
]


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World!!"}


@app.post("/ai/recipe")
async def ai(message: Message):

    print(message)
    return {"message": "ai route"}

