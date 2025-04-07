export interface Message {
    conditions: string[],
    ingredients: string[],
    user_comment: string | null
  }
export const getRecipe = async (message: Message) => {
    const response = await fetch('http://localhost:5000/ai/recipe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
    if (response.ok){
      const data = await response.json()
      console.log("from the server")
      console.log(data)
      return data
    }
    else {
      return "error"
    }
  };
  