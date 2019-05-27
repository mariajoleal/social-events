import React, { Component } from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'

class NavBar extends Component {  
  constructor() {
    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() { 
    const { value } = this.state;

    return (
      <AppBar className="navbar" position="static" title="My App">
          <Toolbar>
            <Typography variant="h6" color="inherit" >
              Social Events
            </Typography>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Events" component={Link} to={"/events"} />>
              <Tab label="Users" component={Link} to={"/users/"} />
            </Tabs>
          </Toolbar>
        </AppBar>
      );
  }
}
 
export default NavBar;