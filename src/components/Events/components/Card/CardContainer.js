import React, { Component } from 'react'
import CardComponent from './CardComponent';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      expanded:false,
      event: props.data,
    };

    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState({ 
      expanded: !this.state.expanded,
    });
  }

  render() { 
    const { expanded, event } = this.state;

    return (  
      <CardComponent expanded={expanded} handleExpandClick={this.handleExpandClick} event={event}/>
    );
  }
}
 
export default CardContainer;