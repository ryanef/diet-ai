def nova_pro():
    api_request = {
            "modelId": "amazon.nova-pro-v1:0",
            "contentType": "application/json",
            "accept": "application/json",
            "body": {
                "inferenceConfig": {
                "max_new_tokens": 1000
                },
                "messages": [
                {
                    "role": "user",
                    "content": [
                    {
                        "text": "this is where you place your input text"
                    }
                    ]
                }
                ]
            }
    }
   