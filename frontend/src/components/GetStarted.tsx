import { useState } from 'react';
import {useFormStatus} from 'react-dom';
import IngredientsList from './Ingredients';


export default function GetStarted() {

  const [goals, setGoals] = useState({
    weightLoss: false,
    diabetes: false,
    kidneyDisease: false,
  });

  return (
    <div>

      <IngredientsList/>
     
 
    </div>
  );
}