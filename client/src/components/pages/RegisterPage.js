import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {register} from "../../actions/auth";
import RegisterForm from "../forms/RegisterForm";

class RegisterPage extends Component {

  static propTypes = {
    register : PropTypes.func.isRequired
  };

  submit = data => this.props.register(data)

  render() {
    return (
      <div>
        <h1>Регистрация</h1>
        <RegisterForm submit = {this.submit}/>
      </div>
    );
  }

}

export default connect(null, {register})(RegisterPage);
