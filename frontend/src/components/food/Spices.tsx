import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Spices(){

    const [state, setState] = useState({
        spice_salt: false,
        spice_pepper: false,
        spice_cayenne: false,
        spice_chili: false,
        spice_cinnamon: false,
        spice_cumin: false,
        spice_ginger: false,
        spice_paprika: false,
        spice_oregano: false,
        spice_parsley: false,
        spice_onionPowder: false,
        spice_onionChopped: false,
        spice_garlicMinced: false,
        spice_garlicPowder: false,
        spice_redPepper: false,
        spice_basil: false,
        spice_cilantro: false,
        spice_nutmeg: false,
        spice_anise: false,
        spice_thyme: false
      });

      const {
        spice_salt,
        spice_pepper,
        spice_cayenne,
        spice_chili,
        spice_cinnamon,
        spice_cumin,
        spice_paprika,
        spice_oregano,
        spice_ginger,
        spice_parsley,
        spice_onionPowder,
        spice_onionChopped,
        spice_garlicMinced,
        spice_garlicPowder,
        spice_redPepper,
        spice_basil,
        spice_cilantro,
        spice_nutmeg,
        spice_anise,
        spice_thyme} = state


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
                <Checkbox checked={spice_salt} onChange={handleChange} name="spice_salt" />
              }
              label="Salt"
            />

            <FormControlLabel
              control={
                <Checkbox checked={spice_pepper} onChange={handleChange} name="spice_pepper" />
              }
              label="Pepper"
            />
            <FormControlLabel
              control={
                <Checkbox checked={spice_cayenne} onChange={handleChange} name="spice_cayenne" />
              }
              label="Cayenne"
            />          
         
            <FormControlLabel
              control={
                <Checkbox checked={spice_chili} onChange={handleChange} name="spice_chili" />
              }
              label="Chili"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_cumin} onChange={handleChange} name="spice_cumin" />
              }
              label="Cumin"
            />          
         
            <FormControlLabel
              control={
                <Checkbox checked={spice_cinnamon} onChange={handleChange} name="spice_cinnamon" />
              }
              label="Cinnamon"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_paprika} onChange={handleChange} name="spice_paprika" />
              }
              label="Paprika"
            /> 
            <FormControlLabel
              control={
                <Checkbox checked={spice_oregano} onChange={handleChange} name="spice_oregano" />
              }
              label="Oregano"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_parsley} onChange={handleChange} name="spice_parsley" />
              }
              label="Parsley"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_ginger} onChange={handleChange} name="spice_ginger" />
              }
              label="Ginger"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_onionChopped} onChange={handleChange} name="spice_onionChopped" />
              }
              label="Onion (chopped)"
            />
                        <FormControlLabel
              control={
                <Checkbox checked={spice_onionPowder} onChange={handleChange} name="spice_onionPowder" />
              }
              label="Onion (powder)"
            />            
            <FormControlLabel
              control={
                <Checkbox checked={spice_garlicMinced} onChange={handleChange} name="spice_garlicMinced" />
              }
              label="Garlic (minced)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={spice_garlicPowder} onChange={handleChange} name="spice_garlicPowder" />
              }
              label="Garlic (powder)"
            />              
            <FormControlLabel
              control={
                <Checkbox checked={spice_redPepper} onChange={handleChange} name="spice_redPepper" />
              }
              label="Red Pepper"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_basil} onChange={handleChange} name="spice_basil" />
              }
              label="Basil"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_thyme} onChange={handleChange} name="spice_thyme" />
              }
              label="Thyme"
            />          
            <FormControlLabel
              control={
                <Checkbox checked={spice_cilantro} onChange={handleChange} name="spice_cilantro" />
              }
              label="Cilantro"
            />    
            <FormControlLabel
              control={
                <Checkbox checked={spice_nutmeg} onChange={handleChange} name="spice_nutmeg" />
              }
              label="Nutmeg"
            />        
            <FormControlLabel
              control={
                <Checkbox checked={spice_anise} onChange={handleChange} name="spice_anise" />
              }
              label="Anise"
            />        
          </FormGroup>
        </FormControl>

    )
  }