import React, { Component } from 'react'
import EventsComponent from './EventsComponent';
import { getEvents, addEvent } from '../../utils/api';

class EventsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      loading: true,
    };

    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    getEvents()
      .then((res) => {
        this.setState({
          events: res.data.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  handleCreate(event) {
    addEvent(event)
    .then((res) => {
      const events = this.state.events;

      events.push(res.data); 
      this.setState({
        events,
        loading: false,
      });
    })
    .catch((err) => console.log(err));
  }

  render() { 
    const { loading, events } = this.state;

    return (  
      <EventsComponent
        loading={loading}
        data={events}
        handleCreate={this.handleCreate}
      />
    );
  }
}
 
export default EventsContainer;