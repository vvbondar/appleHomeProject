import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {login} from "../../actions/auth";
import LoginForm from "../forms/LoginForm";

class LoginPage extends Component {

  static propTypes = {
    login : PropTypes.func.isRequired
  };

  submit = data => this.props.login(data)

  render() {
    return (
      <div>
        <h1>Войти</h1>
        <LoginForm submit = {this.submit}/>
      </div>
    );
  }

}

export default connect(null, {login})(LoginPage);
