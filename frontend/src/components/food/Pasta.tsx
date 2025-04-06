import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

  export default function Pasta(){

    const [state, setState] = useState({
        spaghettiWhole: false,
        spaghettiWhite: false,
        ramen: false,
        udon: false,

        shiratakiNoodles: false,

        beanPasta: false,
        eggPasta: false,
        whitePasta: false,
        wholeGrainPasta: false,
     
      });

      const {
        spaghettiWhole,
        spaghettiWhite,
        shiratakiNoodles,
        beanPasta,
        eggPasta,

        wholeGrainPasta,
     
      } = state;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
          <FormControlLabel
              control={
                <Checkbox checked={beanPasta} onChange={handleChange} name="beanPasta" />
              }
              label="Bean based Pastas (chickpea, black bean, edamame, lentil, etc)  typically highest in potassium, protein, and fiber "
            />
          <FormControlLabel
              control={
                <Checkbox checked={eggPasta} onChange={handleChange} name="eggPasta" />
              }
              label="Egg Noodles / Egg based pasta"
            />
            <FormControlLabel
              control={
                <Checkbox checked={spaghettiWhite} onChange={handleChange} name="spaghetti" />
              }
              label="Spaghetti (white, refined)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={spaghettiWhole} onChange={handleChange} name="spaghettiWhole" />
              }
              label="Spaghetti (whole wheat / whole grain)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={shiratakiNoodles} onChange={handleChange} name="shiratakiNoodles" />
              }
              label="Shirataki Noodles"
            />

            <FormControlLabel
              control={
                <Checkbox checked={wholeGrainPasta} onChange={handleChange} name="wholeGrainPasta" />
              }
              label="Whole Wheat or Whole Grain Pasta -  typically higher in potassium, protein, and fiber"
            />



          </FormGroup>

        </FormControl>

    )
  }