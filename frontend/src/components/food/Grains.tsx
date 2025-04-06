import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Grains(){

    const [state, setState] = useState({
        brown_rice: false,
        white_rice: false,
        oats: false,
        quinoa: false,
        white_bread: false,
        pita_bread: false,
        whole_grain_bread: false,   
      });
      const {
        brown_rice,
        white_rice,
        oats,
        quinoa,
        white_bread,
        pita_bread,
        whole_grain_bread,   
    } = state


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
                <Checkbox checked={brown_rice} onChange={handleChange} name="brown_rice" />
              }
              label="Brown Rice"
            />
            <FormControlLabel
              control={
                <Checkbox checked={white_rice} onChange={handleChange} name="white_rice" />
              }
              label="White Rice"
            />
            <FormControlLabel
              control={
                <Checkbox checked={oats} onChange={handleChange} name="oats" />
              }
              label="Oats"
            />
            <FormControlLabel
              control={
                <Checkbox checked={quinoa} onChange={handleChange} name="quinoa" />
              }
              label="Quinoa"
            />
            <FormControlLabel
              control={
                <Checkbox checked={white_bread} onChange={handleChange} name="white_bread" />
              }
              label="White Bread"
            />
            <FormControlLabel
              control={
                <Checkbox checked={whole_grain_bread} onChange={handleChange} name="whole_grain_bread" />
              }
              label="Whole Grain Bread"
            />
            <FormControlLabel
              control={
                <Checkbox checked={pita_bread} onChange={handleChange} name="pita_bread" />
              }
              label="Pita Bread"
            />
          </FormGroup>

        </FormControl>

    )
  }