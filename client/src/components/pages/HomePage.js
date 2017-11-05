import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Главная</h1>
    <div>
      <Link to = "/login">Войти</Link> или <Link to = "/register">Зарегистрироваться</Link>
    </div>
  </div>
);

export default HomePage;
