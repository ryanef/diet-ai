import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



  export default function Fish(){

    const [state, setState] = useState({

        tuna: false,
        salmon: false,
        tilapia: false,
        shrimp: false,

      });

    const {tuna, salmon, tilapia, shrimp} = state;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          {/* <FormLabel component="legend">Fish</FormLabel> */}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={tuna} onChange={handleChange} name="tuna" />
              }
              label="Tuna"
            />
            <FormControlLabel
              control={
                <Checkbox checked={salmon} onChange={handleChange} name="salmon" />
              }
              label="Salmon"
            />
            <FormControlLabel
              control={
                <Checkbox checked={tilapia} onChange={handleChange} name="tilapia" />
              }
              label="Tilapia"
            />
            <FormControlLabel
              control={
                <Checkbox checked={shrimp} onChange={handleChange} name="shrimp" />
              }
              label="Shrimp"
            />
          </FormGroup>

        </FormControl>

    )
  }