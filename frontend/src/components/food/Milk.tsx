import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Milk(){

    const [state, setState] = useState({
        milk_almond: false,
        milk_coconut: false,
        milk_cows: false,
        milk_oat: false,
        milk_soy: false
      });

      const {
        milk_almond,
        milk_coconut,
        milk_cows,
        milk_oat,
        milk_soy
} = state


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (

        <FormControl
          required
       
          component="fieldset"
          sx={{ m: 3 }}
          variant="standard"
        >
          {/* <FormLabel component="legend">Spices</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={milk_almond} onChange={handleChange} name="milk_almond" />
              }
              label="Almond"
            />
            <FormControlLabel
              control={
                <Checkbox checked={milk_cows} onChange={handleChange} name="milk_cows" />
              }
              label="Cows"
            />
            <FormControlLabel
              control={
                <Checkbox checked={milk_coconut} onChange={handleChange} name="milk_coconut" />
              }
              label="Coconut"
            />
            <FormControlLabel
              control={
                <Checkbox checked={milk_oat} onChange={handleChange} name="milk_oat" />
              }
              label="Oat Milk"
            />
            <FormControlLabel
              control={
                <Checkbox checked={milk_soy} onChange={handleChange} name="milk_soy" />
              }
              label="Soy Milk"
            />
 

      
          </FormGroup>
        </FormControl>

    )
  }