import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


export default function Meat(){

    const [state, setState] = useState({
        chicken_breasts: false,
        chicken_thighs: false,
        ground_beef: false,
        eggs: false,
        pork: false,
        turkey_sliced: false,
        turkey_ground: false,
        turkey_sausage: false,
        tofu: false,
        texturedVegetableProtein: false,
        sausage: false,
        ham: false,
        soyCurls: false,
        seitan: false,        
      });

      const {
        chicken_breasts,
        chicken_thighs,
        ground_beef,
        eggs,
        pork,
        turkey_sliced,
        turkey_ground,
        turkey_sausage,
        tofu,
        texturedVegetableProtein,
        sausage,
        ham,
        soyCurls,
        seitan,        
      } = state;


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

    return (
        <FormControl sx={{ m: 3 }} variant="standard" >
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={chicken_breasts} onChange={handleChange} name="chicken_breasts" />
              }
              label="Chicken Breasts"
            />
            <FormControlLabel
              control={
                <Checkbox checked={chicken_thighs} onChange={handleChange} name="chicken_thighs" />
              }
              label="Chicken Thighs"
            />
            <FormControlLabel
              control={
                <Checkbox checked={eggs} onChange={handleChange} name="eggs" />
              }
              label="Eggs"
            />
            <FormControlLabel
              control={
                <Checkbox checked={ground_beef} onChange={handleChange} name="ground_beef" />
              }
              label="Ground Beef"
            />
            <FormControlLabel
              control={
                <Checkbox checked={pork} onChange={handleChange} name="pork" />
              }
              label="Pork"
            />
            <FormControlLabel
              control={
                <Checkbox checked={sausage} onChange={handleChange} name="sausage" />
              }
              label="Sausage"
            />
            <FormControlLabel
              control={
                <Checkbox checked={ham} onChange={handleChange} name="ham" />
              }
              label="Ham"
            />
            <FormControlLabel
              control={
                <Checkbox checked={turkey_sliced} onChange={handleChange} name="turkey_sliced" />
              }
              label="Turkey (Sliced)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={turkey_sausage} onChange={handleChange} name="turkey_sausage" />
              }
              label="Turkey (Sausage)"
            />
            <FormControlLabel
              control={
                <Checkbox checked={turkey_ground} onChange={handleChange} name="turkey_ground" />
              }
              label="Turkey (Ground)"
            />
          </FormGroup>

          <h4>Meat Substitutes</h4>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={tofu} onChange={handleChange} name="tofu" />
              }
              label="Tofu"
            />
            <FormControlLabel
              control={
                <Checkbox checked={soyCurls} onChange={handleChange} name="soyCurls" />
              }
              label="Soy Curls"
            />
            <FormControlLabel
              control={
                <Checkbox checked={texturedVegetableProtein} onChange={handleChange} name="texturedVegetableProtein" />
              }
              label="Textured Vegetable Protein"
            />
            <FormControlLabel
              control={
                <Checkbox checked={seitan} onChange={handleChange} name="seitan" />
              }
              label="Seitan"
            />

          </FormGroup>
        </FormControl>

    )
  }