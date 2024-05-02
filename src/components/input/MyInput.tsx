import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MyInputProps } from '../../interfaces/Interfaces';

export default function MyInput({onChange, value}: MyInputProps) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        onChange={onChange}
        label="Сумма"
        value={value}
        type="number"
        variant="outlined" 
        color="secondary" 
        sx={{
            backgroundColor:"#b0bec5"
        }} />

    </Box>
  );
}