
import {MessageInterface} from '../types/types.ts';

export const getRecipe = async (message: MessageInterface) => {
  
    const response = await fetch('http://localhost:5000/ai/recipe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
    const data  = await response.json()
    return data
  };
