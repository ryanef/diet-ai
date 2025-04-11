import {useState, useEffect, Suspense} from 'react';
import { Box } from '@mui/material';
import { MessageInterface } from '../types/types';
import Typography from '@mui/material/Typography';
import { getRecipe } from '../services/actions';
import RecipeDisplay from './RecipeDisplay';
import QuickStartForm from './QuickStartForm';
import Loading from './Loading';

function fetchRecipe(userMessage: MessageInterface){
  return getRecipe(userMessage)
}
interface Recipes {
  benefits: string;
  title: string;
  description: string;
}

export default function Hero() {
  const [userMessage, setUserMessage] = useState<MessageInterface | null>(null)
  const [recipes, setRecipe] = useState<Promise<Recipes[]> | null>(null)

  useEffect(()=>{
    if(userMessage){
      const fetchRecipes = fetchRecipe(userMessage)
      setRecipe(fetchRecipes)
    }
  }, [userMessage])

  return (
    <Box className="hero" sx={{maxWidth: '500px'}}>
     <Suspense fallback={<Loading/>}>
      <div className="hero-get-started">
        
        {recipes ? (<RecipeDisplay recipes={recipes} />) 
        : (  
          <div>
            <Typography variant="h4" component="h2">Quick Start - Pick your Ingredients</Typography>
              <QuickStartForm setUserMessage={setUserMessage} />

          </div>
        )}
      
      </div>
     </Suspense>
    </Box>
  );
}

