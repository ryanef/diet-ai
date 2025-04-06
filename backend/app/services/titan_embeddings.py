async def titan_embeddings():
    model_id = "amazon.titan-embed-text-v1"
    api_request = {
        "modelId": model_id,
        "contentType": "application/json",
        "accept": "*/*",
        "body": "{\"inputText\":\"this is where you place your input text\"}"        
    }

# Link to Titan Embeddings AWS Bedrock - replace us-east-1 region if necessary
# https://us-east-1.console.aws.amazon.com/bedrock/home?region=us-east-1#/model-catalog/serverless/amazon.titan-embed-text-v1   