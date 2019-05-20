import React from 'react';
import Form from '../SharedComponents/Form/FormComponent';
import './Login.css';

const LoginComponent = (props) => {
  return (
      <Form
        handleSubmit={props.onSubmit}
        onUsernameChange={props.onUsernameChange}
        onPasswordChange={props.onPasswordChange}
      />
  );
};

export default LoginComponent;