import React from 'react';
import Form from '../SharedComponents/Form/FormComponent';
import './Login.css';

const LoginComponent = (props) => {
  return (
    <div>
      <Form
        handleSubmit={props.onSubmit}
        onUsernameChange={props.onUsernameChange}
        onPasswordChange={props.onPasswordChange}
      />
    </div>
  );
};

export default LoginComponent;