import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Input from '@mui/material/Input';


export default function UserComment(){

    const [state, setState] = useState("");
    const ariaLabel = { 'aria-label': 'user comment' };
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value);
      };

    return (
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormGroup>
            <FormControlLabel
                label=""
                control={
                    <Input
                    value={state}
                    name="user_comment"
                    placeholder="(Optional) A brief comment about your food preferences or ingredients"
                    inputProps={ariaLabel}
                    sx={{minWidth: '550px'}}
                    onChange={handleChange} />                     
                }
            />
          </FormGroup>
        </FormControl>

    )
  }