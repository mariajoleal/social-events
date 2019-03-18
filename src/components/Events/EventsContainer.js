import React, { Component } from 'react'
import EventsComponent from './EventsComponent';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: "",
      // password: "",
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleUsername = this.handleUsername.bind(this);
    // this.handlePass = this.handlePass.bind(this);
  }

  render() { 
    return (  
      <EventsComponent />
    );
  }
}
 
export default EventsContainer;