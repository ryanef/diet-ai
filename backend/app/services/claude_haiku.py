
async def claude3_haiku():
    # agents, RAG, chat optimized, text generation, text-totext, reasoning, math, question answering
    model_id = "anthropic.claude-3-5-haiku-20241022-v1:0"
    api_request = {
        "modelId": model_id,
        "contentType": "application/json",
        "accept": "application/json",
        "body": {
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 200,
            "top_k": 250,
            "stopSequences": [],
            "temperature": 1,
            "top_p": 0.999,
            "messages": [
            {
                "role": "user",
                "content": [
                {
                    "type": "text",
                    "text": "hello world"
                }
                ]
            }
            ]
        }
    }