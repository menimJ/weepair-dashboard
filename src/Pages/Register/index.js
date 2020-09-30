import React from "react";

import SignUp from "../../components/Auth/SignUp";

import { Link } from "react-router-dom";
import Path from "../../Path";
import FormLayout from "../FormLayout";
import "./register.css";

const SignUpForm = () => {
  const { signup } = Path;
  return (
    <div className="login-page__form center-column-item">
      <h1>Create account</h1>
      <div className="login-page__form__input">
        <SignUp />
      </div>
      <small>
        Already have an account?{" "}
        <Link to={signup} className="login-page__form__input__link">
          Log in
        </Link>
      </small>
    </div>
  );
};

const Register = () => {
  return <FormLayout component={SignUpForm} />;
};

export default Register;
