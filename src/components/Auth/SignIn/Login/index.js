import React from "react";
const Login = () => {
  return (
    <form className="login-component-form">
      {/* <fieldset disabled></fieldset> */}
      <fieldset>
        <label for="emailValidation">Email</label>
        <input
          type="email"
          className="form-control is-invalid"
          id="emailValidation"
          // value=""
          required
        />
        <div id="emailValidation" className="invalid-feedback">
          invalid email/password.
        </div>

        <label for="passwordValidation">Password</label>
        <input
          type="password"
          className="form-control is-invalid"
          id="passwordValidation"
          // value=""
          required
        />
        <div id="passwordValidation" className="invalid-feedback">
          invalid email/password.
        </div>
        <button
          type="submit"
          class=" block-button btn btn-block top-buttom-margin"
        >
          Sign in
        </button>
      </fieldset>
    </form>
  );
};

export default Login;
