import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


  export default function Conditions(){

    const [state, setState] = useState({
      type1_diabetes: false,
      type2_diabetes: true,
      chronic_kidney_disease: true
    });

      const {
        type1_diabetes,
        type2_diabetes,
        chronic_kidney_disease
      } = state;


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (
        <FormControl sx={{ m: 3 }} variant="standard" >
          <FormLabel component="legend">Conditions to Manage:</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={type1_diabetes} onChange={handleChange} name="type1_diabetes" />
              }
              label="Type 1 Diabetes"
            />

            <FormControlLabel
              control={
                <Checkbox checked={type2_diabetes} onChange={handleChange} name="type2_diabetes" />
              }
              label="Type 2 Diabetes"
            />

            <FormControlLabel
              control={
                <Checkbox checked={chronic_kidney_disease} onChange={handleChange} name="chronic_kidney_disease" />
              }
              label="Chronic Kidney Disease"
            />
          </FormGroup>
        </FormControl>

    )
  }