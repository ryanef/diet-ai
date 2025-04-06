import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Fruit(){

    const [state, setState] = useState({
        apples: false,
        oranges: false,
        strawberries: false,
        blueberries: false,
        cranberries: false,
        grapes: false,
        pineapple: false,
      });
    const {
      apples,
      oranges,
      cranberries,
      grapes,
      strawberries,
      blueberries,
      pineapple,
    } = state


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (
  
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Fruits</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox  checked={apples} onChange={handleChange} name="apples" />
              }
              label="Apples"
            />
            <FormControlLabel
              control={
                <Checkbox checked={oranges} onChange={handleChange} name="oranges" />
              }
              label="Oranges"
            />
            <FormControlLabel
              control={
                <Checkbox checked={strawberries} onChange={handleChange} name="strawberries" />
              }
              label="Strawberries"
            />
            <FormControlLabel
              control={
                <Checkbox checked={blueberries} onChange={handleChange} name="blueberries" />
              }
              label="Blueberries"
            />
            <FormControlLabel
              control={
                <Checkbox checked={cranberries} onChange={handleChange} name="cranberries" />
              }
              label="Cranberries"
            />
            <FormControlLabel
              control={
                <Checkbox checked={pineapple} onChange={handleChange} name="pineapple" />
              }
              label="Pineapple"
            />
            <FormControlLabel
              control={
                <Checkbox checked={grapes} onChange={handleChange} name="grapes" />
              }
              label="Grapes"
            />
          </FormGroup>

        </FormControl>

    )
  }