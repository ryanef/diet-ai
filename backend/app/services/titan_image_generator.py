async def titan_image_generator():
    model_id = "amazon.titan-image-generator-v2:0"
    api_request = {
        "modelId": model_id,
        "contentType": "application/json",
        "accept": "application/json",
        "body": "{\"textToImageParams\":{\"text\":\"this is where you place your input text\"},\"taskType\":\"TEXT_IMAGE\",\"imageGenerationConfig\":{\"cfgScale\":8,\"seed\":42,\"quality\":\"standard\",\"width\":1024,\"height\":1024,\"numberOfImages\":3}}"
    }