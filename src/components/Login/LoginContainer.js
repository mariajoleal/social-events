import React, { Component } from 'react'
import LoginComponent from './LoginComponent';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePass = this.handlePass.bind(this);
  }

  handleSubmit() {
    console.log('aa');
  }

  handleUsername(e) {
    const username = e.target.value;

    this.setState({
      username
    });
  }

  handlePass(e) {
    const password = e.target.value;

    this.setState({
      password
    });
  }

  render() { 
    return (  
      <LoginComponent
        onSubmit={this.handleSubmit}
        onUsernameChange={this.handleUsername}
        onPasswordChange={this.handlePass}
      />
    );
  }
}
 
export default LoginContainer;