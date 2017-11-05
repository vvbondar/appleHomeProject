import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Validator from "validator";
import {Form, Button, Message, Label, Input} from "semantic-ui-react";

class RegisterForm extends Component {

  static propTypes = {
    submit: PropTypes.func.isRequired
  };

  state = {
    data: {
      name: "",
      surname: "",
      login: "",
      email: "",
      password: "",
      phone: ""
    },
    loading: false,
    errors:[]
  };

  onChange = e =>
  this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = (e) => {
    e.preventDefualt();
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
              error = {errors.length > 0}
              label = "Имя"
              type = "input"
              id = "name"
              name = "name"
              control = {Input}
              placeholder = "Введите ваше имя"
              value = {data.name}
              onChange = {this.onChange}
              required
            />
            <Form.Field
              error = {errors.length > 0}
              label = "Фамилия"
              type = "input"
              id = "surname"
              name = "surname"
              control = {Input}
              placeholder = "Введите вашу фамилию"
              value = {data.surname}
              onChange = {this.onChange}
              required
            />
            <Form.Field
              error = {errors.length > 0}
              label = "Логин"
              type = "input"
              id = "login"
              name = "login"
              control = {Input}
              placeholder = "Введите ваш логин"
              value = {data.login}
              onChange = {this.onChange}
              required
            />
            <Form.Field
              error = {errors.length > 0}
              label = "Email"
              type = "input"
              id = "email"
              name = "email"
              control = {Input}
              placeholder = "Введите Email"
              value = {data.email}
              onChange = {this.onChange}
              required
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
            <Form.Field
              required
              error = {errors.length > 0}
              label = "Телефон"
              id = "phone"
              name = "phone"
              control = {Input}
              placeholder = "Введите телефон"
              value = {data.phone}
              onChange = {this.onChange}
            >
              <Label tiny>+380</Label>
              <input/>
            </Form.Field>

            <Button primary>Зарегистироваться</Button>
          </Form>
      </div>
    );
  }

}

export default RegisterForm;
