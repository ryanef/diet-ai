import IngredientsList from './Ingredients';
import Box from '@mui/material/Box';
import UserComment from './UserComment';
import { MessageInterface } from '../types/types';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

interface QuickStartFormProps {
  setUserMessage: Dispatch<SetStateAction<MessageInterface | null>>;
}

export default function QuickStartForm({setUserMessage}: QuickStartFormProps) {

  async function action(formData: FormData){

    const message: MessageInterface = {
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
    setUserMessage(message)
  }

  return (
    <Box component="form" action={action} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <IngredientsList/>
        <UserComment/>
        <Button type="submit" sx={{border: '1px solid black', padding: '1.5rem', fontSize: '1.1rem'}}>Get Recipe Ideas</Button>
    </Box> 
  );
}

