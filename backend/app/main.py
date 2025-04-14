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
    "http://localhost:80",
    "http://localhost:3000",
 
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World!!"}


@app.post("/ai/recipe")
def ai(message: Message):


    get_recipe = claude_sonnet(message)
    dummy_recipe = [{"success": True, "title": "title", "description": "description", "benefits": "benefits"}]
    return get_recipe

