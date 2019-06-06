import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LoginContainer from './components/Login/LoginContainer';
import EventsContainer from './components/Events/EventsContainer';
import Users from './components/Users/Users';
import RegisterContainer from './components/Register/RegisterContainer';
import { ProtectedRoute } from './protectedRoute';

const App = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <ProtectedRoute 
            exact
            path="/events" 
            component={EventsContainer} 
          />
          <Route path="/login/" component={LoginContainer} />
          <ProtectedRoute path="/users/" component={Users} />
          <Route path="/register/" component={RegisterContainer} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    );
}

export default App;
