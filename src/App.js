import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@material-ui/core';
import LoginContainer from './components/Login/LoginContainer';
import EventsContainer from './components/Events/EventsContainer';
import Users from './components/Users/Users';

class App extends Component {
  constructor(props) {
    super(props);
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
      <Router>
        <AppBar className="navbar" position="static" title="My App">
          <Toolbar>
            <Typography variant="h6" color="inherit" >
              Social Events
            </Typography>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Events" component={Link} to={"/"} />>
              <Tab label="Users" component={Link} to={"/users/"} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Route path="/" exact component={EventsContainer} />
        <Route path="/login/" component={LoginContainer} />
        <Route path="/users/" component={Users} />
      </Router>
    );
  }
}

export default App;
