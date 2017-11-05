import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from "validator";
import {Form, Button, Message, Input} from "semantic-ui-react";

class LoginForm extends Component {

  static propTypes = {
    submit: PropTypes.func.isRequired
  };

  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors:[]
  };

  onChange = e =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (errors.length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
    }
  }
  validate = data => {
    const errors = [];
    if(!Validator.isEmail(data.email)) errors.push("Неверный Email");
    if(!data.password) errors.push("Пароль не может быть пустым");
    // TODO Add some other validations on client
    return errors;
  }

  render() {
    const {data, loading, errors} = this.state;
    return (
      <div>
          <Form
            onSubmit = {this.onSubmit}
            loading = {loading}
            error = {errors.length > 0}
            >
            <Message
              error
              list = {errors}
            />
            <Form.Field
              required
              error = {errors.length > 0}
              label = "Email"
              type = "email"
              id = "email"
              name = "email"
              control = {Input}
              placeholder = "Введите Email"
              value = {data.email}
              onChange = {this.onChange}
            />
            <Form.Field
              error = {errors.length > 0}
              label = "Пароль"
              type = "password"
              id = "password"
              name = "password"
              control = {Input}
              placeholder = "Введите пароль"
              value = {data.password}
              onChange = {this.onChange}
              required
            />
            <Button primary>Войти</Button>
          </Form>
      </div>
    );
  }

}

export default LoginForm;
