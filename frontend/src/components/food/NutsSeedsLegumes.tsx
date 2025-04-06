import React, { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


  export default function NutsSeedsLegumes(){

    const [state, setState] = useState({
        peanuts: false,
        cashews: false,
        chickpea: false,
        soyBeans: false,
        kidneyBeans: false,
        lentils: false,
        favaBeans: false,
        pintoBeans: false,
        blackBeans: false,
        peas: false,
        limaBeans: false,
        blackEyedPeas: false,
        redLentils: false
      });

      const {
        peanuts,
        cashews,
        chickpea,
        soyBeans,
        kidneyBeans,
        lentils,
        favaBeans,
        pintoBeans,
        blackBeans,
        peas,
        limaBeans,
        blackEyedPeas,
        redLentils
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
                <Checkbox  checked={peanuts} onChange={handleChange} name="peanuts" />
              }
              label="Peanuts"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={cashews} onChange={handleChange} name="cashews" />
              }
              label="Cashews"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={kidneyBeans} onChange={handleChange} name="kidneyBeans" />
              }
              label="Kidney Beans"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={pintoBeans} onChange={handleChange} name="pintoBeans" />
              }
              label="Pinto Beans"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={blackBeans} onChange={handleChange} name="blackBeans" />
              }
              label="Black Beans"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={lentils} onChange={handleChange} name="lentils" />
              }
              label="Lentils"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={soyBeans} onChange={handleChange} name="soyBeans" />
              }
              label="Soy Beans"
            />

            <FormControlLabel
              control={
                <Checkbox  checked={chickpea} onChange={handleChange} name="chickpea" />
              }
              label="Chickpea"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={limaBeans} onChange={handleChange} name="limaBeans" />
              }
              label="Lima Beans"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={blackEyedPeas} onChange={handleChange} name="blackEyedPeas" />
              }
              label="Black Eyed Peas"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={favaBeans} onChange={handleChange} name="favaBeans" />
              }
              label="Fava Beans"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={redLentils} onChange={handleChange} name="redLentils" />
              }
              label="Red Lentils"
            />
            <FormControlLabel
              control={
                <Checkbox  checked={peas} onChange={handleChange} name="peas" />
              }
              label="Peas"
            />

          </FormGroup>

        </FormControl>

    )
  }