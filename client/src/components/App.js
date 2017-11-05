import React from 'react';
import {Route} from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = ({location}) => (
  <div className = "ui container">
    <Route
      exact
      path = '/'
      component = {HomePage}
      location = {location}
    />
    <Route
      exact
      path = "/login"
      component = {LoginPage}
      location = {location}
    />
    <Route
      exact
      path = "/register"
      component = {RegisterPage}
      location = {location}
    />
  </div>
);
App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;
