import  { useState, useActionState, startTransition} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordions from './Accordions';
import UserComment from './UserComment';
import {Message, getRecipe} from  '../services/actions'
import RecipeDisplay from './RecipeDisplay';


const action = async (prevState, formData: FormData) => { 

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

  const data = await getRecipe(message)

  return data
}

export default function IngredientsList(){
   const [message, formAction, isPending] = useActionState(action, null);
   console.log("message")
   console.log(message?.message)


    return (
      <>
      <Typography variant="h4" component="h2">Quick Start - Pick your Ingredients</Typography>
       {message? (
        <>
        <h2>Recipe Ideas</h2>
       <RecipeDisplay recipes={message}/>
        </>
        ) : (  
      <Box component="form" action={formAction} sx={{ display: 'flex', flexWrap: 'wrap' }}>
             <Box>
              <Accordions/>
              <UserComment/>
             </Box>
             <button type="submit" disabled={isPending} className="submitButton">Get Recipe Ideas</button>
      </Box>)}
      </>
    )
  }