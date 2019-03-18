import React from 'react'
import Input from '../Input/InputComponent';
import Button from '@material-ui/core/Button';

const Form = (props) => {  
  return (
    <form onSubmit={props.handleSubmit}>
      <Input 
        title="Username"
        handleChange={props.onUsernameChange}
        name="username"
        type="text"
      /> 
      <Input
        title="Password"
        handleChange={props.onPasswordChange}
        name="password"
        type="password"
      />
      <Button variant="contained" color="primary" onClick={props.handleSubmit}>
        Login
      </Button> 
    </form>
  );
}
 
export default Form;
