def claude_image_to_text():
    model_id = "anthropic.claude-3-haiku-20240307-v1:0"
    api_request = {
        "modelId": model_id,
        "contentType": "application/json",
        "accept": "application/json",
        "body": {
            "anthropic_version": "bedrock-2023-05-31",
            "max_tokens": 1000,
            "messages": [
            {
                "role": "user",
                "content": [
                {
                    "type": "image",
                    "source": {
                    "type": "base64",
                    "media_type": "image/jpeg",
                    "data": "iVBORw..."
                    }
                },
                {
                    "type": "text",
                    "text": "What's in this image?"
                }
                ]
            }
            ]
        }       
    }