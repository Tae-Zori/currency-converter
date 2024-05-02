import * as React from 'react';
import TextField from '@mui/material/TextField';
import { MySelectProps } from '../../interfaces/Interfaces';
import { Autocomplete } from '@mui/material';


export default function MySelect({options, label, readOnly = false, onChange}: MySelectProps){
  const isOptionEqualToValue = (option: any, value: any) => {
    return option.ID === value.ID; 
  };
  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={isOptionEqualToValue}
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => option.Name}
      disabled={readOnly}
      disableClearable
      onChange={onChange}
      sx={{ width: 300}}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

