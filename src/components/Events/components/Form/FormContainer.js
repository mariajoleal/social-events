import React, { Component } from 'react'
import FormComponent from './FormComponent';
import moment from 'moment';
import {uploadImage} from '../../../../utils/api';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedDate: new Date(),
      name: "",
      dateTime: "", 
      place: "", 
      createdBy: "",
      attending: 0,
      image: "",
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onImageUpload = (file) => {
    const preset= 'n0mpalqf';  
    const formData = new FormData();
    
    formData.append('file', file);
    formData.append('upload_preset', preset);

    uploadImage(formData)
      .then((res) =>{
        const data = res.data;
        const finalURL = data.secure_url; 
        this.setState({
          finalURL:finalURL,
        });
      })
        
  }

  handleDateChange = (date) => {
    this.setState({
      selectedDate:date,
    });
  }

  onSubmit = () => {
    const { name, place, selectedDate, finalURL } = this.state
    const event = {
      name,
      dateTime: moment(selectedDate).format(), 
      place, 
      createdBy: "Maria Jose Leal",
      attending: 1,
      image: finalURL
    };
    
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
        handleChange={this.onChange}
        handleAdd={this.onSubmit}
        handleUpload={this.onImageUpload}
      />
    );
  }
}
 
export default Form;