import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import LoginContainer from './components/Login/LoginContainer';
import EventsContainer from './components/Events/EventsContainer';
import Users from './components/Users/Users';
import RegisterContainer from './components/Register/RegisterContainer';

const App = () => {
    return (
      <Router>
        <Route path="/" exact component={LoginContainer} />
        <Route path="/events" component={EventsContainer} />
        <Route path="/login/" component={LoginContainer} />
        <Route path="/users/" component={Users} />
        <Route path="/register/" component={RegisterContainer} />
      </Router>
    );
}

export default App;
