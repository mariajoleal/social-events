import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from '../../utils/api';
import LoginComponent from './LoginComponent';

class LoginContainer extends Component {
  
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      success: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e)  {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
        email: this.state.email,
        password: this.state.password
      };
      login(userData)
        .then((res) => {
          this.setState({
            success: res.data.success
          });
        })
        .catch((err) => {
          let emailError;
          let passError; 
          let message;

          if(err.response.data.emailnotfound) {
            emailError = true;
            passError = false;
            message = err.response.data.emailnotfound;
          } else {
            emailError = false;
            passError = true;
            message = err.response.data.passwordincorrect;
          }
          
          this.setState({
            errors: {
              emailError,
              passError,
              message
            },
          });
        });        
  };

  render() {
    const { success, errors } = this.state;

    return (
      success ? <Redirect to='/events' /> :
      <LoginComponent 
        errors={errors}
        handleSubmit={this.onSubmit}
        handleChange={this.onChange}
      />
    );
  } 
}

export default LoginContainer;