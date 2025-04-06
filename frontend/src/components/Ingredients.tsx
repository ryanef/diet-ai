import  { useState, startTransition} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordions from './Accordions';
import UserComment from './UserComment';

interface Message {
  conditions: string[],
  ingredients: string[],
  user_comment: string | null
}

export default function IngredientsList(){

  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const fetchData = async (message: Message) => {

    const response = await fetch('http://localhost:5000/ai/recipe', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message)
    });
    const result = await response.json();
    setApiData(result);
    return result
  };


  const handleSubmit = async (formData: FormData) => { 
      const message: Message = {
        conditions: [],
        ingredients: [],
        user_comment: null
      }
      const user_comm = formData.get("user_comment")?.toString() || null
      message.user_comment = user_comm
     
      for (const key of formData.keys()) {

        if ( key === 'type1_diabetes' ||
             key === 'type2_diabetes' || 
             key === 'chronic_kidney_disease'){
              message.conditions.push(key)
            }
        else if(key === 'user_comment'){
            continue
        }
        else{
              message.ingredients.push(key)
        }
      }
      // message.ingredients.("user_comment")
      setIsPending(true);
      startTransition(async () => {
        const res = await fetchData(message)
        console.log("res in handleSubmit:")
        console.log(res)
        if (error) {
          setError(error);
          return;
        }
      });
   }

    return (
      <>
      <Typography variant="h4" component="h2">Quick Start - Pick your Ingredients</Typography>
        <Box component="form" action={handleSubmit} sx={{ display: 'flex', flexWrap: 'wrap' }}>
             <Box>
              <Accordions/>
              <UserComment/>

             </Box>
             <button type="submit" disabled={isPending} className="submitButton">Get Recipe Ideas</button>
      </Box>
      </>
    )
  }