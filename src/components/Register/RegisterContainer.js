import React, { Component } from "react";
// import { Link } from "react-router-dom";
import RegisterComponent from './RegisterComponent';
import { register } from '../../utils/api';
import SuccessComponent from './SuccesComponent';
 
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e)  {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    register(newUser)
      .then((res) => {
        this.setState({
          success: true,
          name: res.data.name,
        });
      })
    
  };
  
  render() {
    const { success, name } = this.state;
    
    return (
        success ? <SuccessComponent name={name} /> :
      <RegisterComponent handleSubmit={this.onSubmit} handleChange={this.onChange}/>
    );
  }
}
export default Register;