import React from "react";
import SignIn from "../../components/Auth/SignIn";
import "./loginPage.css";
import { Link } from "react-router-dom";
import Path from "../../Path";
import FormLayout from "../FormLayout";

const LoginForm = () => {
  const { signup } = Path;
  return (
    <div className="login-page__form center-column-item">
      <h1>Log in</h1>
      <div className="login-page__form__input">
        <SignIn />
      </div>
      <small>
        Don't have an account?{" "}
        <Link to={signup} className="login-page__form__input__link">
          create account
        </Link>
      </small>
    </div>
  );
};

const Login = () => {
  return <FormLayout component={LoginForm} />;
};

export default Login;
