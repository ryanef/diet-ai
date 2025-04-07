import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Cheese(){

    const [state, setState] = useState({
        cheddar: true,
        mozzarella: false,
        parmesan: false,
        cream: false,
        brie: false,
        feta: false,
        swiss: false,
        provolone: false,
       
        cottage: false,
        montereyJack: false,
        quesoAsadero: false,
        quesadilla: false
      });

      const {
        cheddar,
        mozzarella,
        parmesan,
        cottage,
        cream,
        brie,
        feta,
        swiss,
        provolone,
        montereyJack,
        quesadilla
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={cheddar} onChange={handleChange} name="cheddar" />
              }
              label="Cheddar"
            />

            <FormControlLabel
              control={
                <Checkbox checked={mozzarella} onChange={handleChange} name="mozzarella" />
              }
              label="Mozzarella"
            />
            <FormControlLabel
              control={
                <Checkbox checked={parmesan} onChange={handleChange} name="parmesan" />
              }
              label="Parmesan"
            />          
         
            <FormControlLabel
              control={
                <Checkbox checked={cream} onChange={handleChange} name="cream" />
              }
              label="Cream"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={cottage} onChange={handleChange} name="cottage" />
              }
              label="Cottage"
            />          
         
            <FormControlLabel
              control={
                <Checkbox checked={swiss} onChange={handleChange} name="swiss" />
              }
              label="Swiss"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={feta} onChange={handleChange} name="feta" />
              }
              label="Feta"
            /> 
                        <FormControlLabel
              control={
                <Checkbox checked={brie} onChange={handleChange} name="brie" />
              }
              label="Brie"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={provolone} onChange={handleChange} name="provolone" />
              }
              label="Provolone"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={montereyJack} onChange={handleChange} name="montereyJack" />
              }
              label="Monterey Jack"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={quesadilla} onChange={handleChange} name="quesadilla" />
              }
              label="Quesadilla"
            />          
       
       
          </FormGroup>
        </FormControl>

    )
  }