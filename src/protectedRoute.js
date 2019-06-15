import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import NavBar from './components/NavBar/NavBar';

export const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={ props => {
        if(auth.isUserAuthenticated()) {
          return (
            <>
              <NavBar {...props}/>
              <Component {...props} />
            </>
          );
        }
        else {
          return <Redirect to = {
            {
              pathname: "/",
              state: {
                from: props.location
              }
            }
          }
          />
        }
      }}
    />
  );
}