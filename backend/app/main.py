from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.claude_sonnet import claude_sonnet
from pydantic import BaseModel

class Message(BaseModel):
    conditions: list[str]  
    ingredients: list[str]  
    user_comment: str | None

class RecipeSummary(BaseModel):
    title: str
    description: str
    benefits: str


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
def ai(message: Message) -> list[RecipeSummary] :

    print(message)
    get_recipe = claude_sonnet(message)
    return get_recipe

