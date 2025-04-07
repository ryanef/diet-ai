import boto3
from botocore.exceptions import ClientError
import json
from pydantic import BaseModel

class RecipeSummary(BaseModel):
    title: str
    description: str
    benefits: str

client = boto3.client("bedrock-runtime", region_name="us-east-1")

def claude_sonnet(message):
    model_id = "us.anthropic.claude-3-7-sonnet-20250219-v1:0"
    system_prompt = "The only thing in your response is a list of JSON objects. Look at a user's health conditions, optional comment and some of their ingredients. Return a list of JSON objects with the keys title, description, benefits. Description is a brief description of the recipe. Benefits will be a brief description why it it helps with the users medical conditions. No extra text before or after the JSON list."
    convert_message =message.model_dump_json()
    user_message = f'Give 3 recipe ideas based on the following information. : {convert_message}'
    conversation = [
        {
            "role": "user",
            "content": [{"text": user_message}],
        }
    ]
    try:
        response = client.converse(
            modelId=model_id,
            system=[{"text": system_prompt}],
            messages=conversation,
            inferenceConfig={"maxTokens": 512, "temperature": 0.5, "topP": 0.9},
        )

        # Extract and print the response text.
        response_text = response["output"]["message"]["content"][0]["text"]
        print(response_text)
        print(type(response_text))
        data=[]
       
        try:
            res = json.loads(response_text)
            for item in res:
                print(f'item: {item}')
                valid = RecipeSummary(**item)
                data.append(valid) 
            return data
        except ClientError as e:
            print(f'claude error: {e}') 
            print(e)
            

    except (ClientError, Exception) as e:
        print(f"ERROR: Can't invoke '{model_id}'. Reason: {e}")
        exit(1)
