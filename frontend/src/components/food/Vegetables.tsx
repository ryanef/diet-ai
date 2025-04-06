import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Vegetables(){

    const [state, setState] = useState({
        icebergLettuce: false,
        romaineLettuce: false,
        broccoli: false,
        carrots: false,
        garlic: false,
        leeks: false,
        kale: false,
        onionWhite: false,
        onionRed: false,
        onionYellow: false,
        potato: false,
        sweet_potato: false,
        tomatoes: false,
        zucchini: false
      });

      const {        icebergLettuce,
        romaineLettuce,
        broccoli,
        kale,
        carrots,
        potato,
        leeks,
        onionWhite,
        onionRed,
        onionYellow,
        sweet_potato,
        tomatoes,
        zucchini} = state


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
          <FormLabel component="legend">Vegetable</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={broccoli} onChange={handleChange} name="broccoli" />
              }
              label="Broccoli"
            />
            <FormControlLabel
              control={
                <Checkbox checked={carrots} onChange={handleChange} name="carrots" />
              }
              label="Carrots"
            />
            <FormControlLabel
              control={
                <Checkbox checked={kale} onChange={handleChange} name="kale" />
              }
              label="Kale"
            />
            <FormControlLabel
              control={
                <Checkbox checked={icebergLettuce} onChange={handleChange} name="icebergLettuce" />
              }
              label="Lettuce - Iceberg "
            />
            <FormControlLabel
              control={
                <Checkbox checked={romaineLettuce} onChange={handleChange} name="romaineLettuce" />
              }
              label="Lettuce - Romaine"
            />
            <FormControlLabel
              control={
                <Checkbox checked={leeks} onChange={handleChange} name="leeks" />
              }
              label="Leeks"
            />
            <FormControlLabel
              control={
                <Checkbox checked={onionWhite} onChange={handleChange} name="onionWhite" />
              }
              label="Onion (White)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={onionRed} onChange={handleChange} name="onionRed" />
              }
              label="Onion (Red)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={onionYellow} onChange={handleChange} name="onionYellow" />
              }
              label="Onion (Yellow)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={potato} onChange={handleChange} name="potato" />
              }
              label="Potatoes"
            />
            <FormControlLabel
              control={
                <Checkbox checked={sweet_potato} onChange={handleChange} name="sweet_potato" />
              }
              label="Sweet Potatoes"
            />
            <FormControlLabel
              control={
                <Checkbox checked={tomatoes} onChange={handleChange} name="tomatoes" />
              }
              label="Tomatoes"
            />
            <FormControlLabel
              control={
                <Checkbox checked={zucchini} onChange={handleChange} name="zucchini" />
              }
              label="Zucchini"
            />
          </FormGroup>
        </FormControl>

    )
  }