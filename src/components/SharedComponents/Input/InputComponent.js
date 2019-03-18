import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  return (
    <>
      <TextField
        id={props.name}
        label={props.title}
        onChange={props.handleChange}
        type={props.type}
        margin="normal"
        variant="outlined"
        // error
      />
      <br/>
    </>
  )
}

export default Input;