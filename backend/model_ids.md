## Claude 3.7

anthropic.claude-3-7-sonnet-20250219-v1:0
```
{
  "modelId": "anthropic.claude-3-7-sonnet-20250219-v1:0",
  "contentType": "application/json",
  "accept": "application/json",
  "body": {
    "anthropic_version": "bedrock-2023-05-31",
    "max_tokens": 200,
    "top_k": 250,
    "stop_sequences": [],
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
```

## DeepSeek

deepseek.r1-v1:0
```
{
  "modelId": "deepseek.r1-v1:0",
  "contentType": "application/json",
  "accept": "application/json",
  "body": {
    "inferenceConfig": {
      "max_tokens": 512
    },
    "messages": [
      {
        "role": "user",
        "content": "this is where you place your input text"
      }
    ]
  }
}
```


## Multimodal


huggingface-vlm-mistral-pixtral-12b-2409

messages = [
    {
        "role": "user",
        "content": [{"type": "text", "text": prompt}, {"type": "image_url", "image_url": {"url": image_url}}]
    },
]



## Embeddings

amazon.titan-embed-text-v2:0

{
 "modelId": "amazon.titan-embed-text-v2:0",
 "contentType": "application/json",
 "accept": "*/*",
 "body": "{\"inputText\":\"this is where you place your input text\", \"dimensions\": 512, \"normalize\": true}"
}