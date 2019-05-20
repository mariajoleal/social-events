import React, { Component } from 'react'
import FormComponent from './FormComponent';
import moment from 'moment';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedDate: new Date('2014-08-18T21:11:54'),
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  }

  handlePlaceChange = e => {
    this.setState({ place: e.target.value });
  }

  handleAdd = () => {
    const { name, place, selectedDate } = this.state
    const event = {
      name,
      dateTime: moment(selectedDate).format(), 
      place, 
      createdBy: "mariajoleal",
      attending: 1,
    };
    
    // console.log(event);
    this.setState({ open: false});
    this.props.handleCreate(event);
    
  }

  render() { 
  const { open,  selectedDate } = this.state;

    return (  
      <FormComponent
        open={open}
        selectedDate={selectedDate}
        handleClose={this.handleClose}
        handleDateChange={this.handleDateChange}
        handleClickOpen={this.handleClickOpen}
        handleNameChange={this.handleNameChange}
        handlePlaceChange={this.handlePlaceChange}
        handleAdd={this.handleAdd}
      />
    );
  }
}
 
export default Form;