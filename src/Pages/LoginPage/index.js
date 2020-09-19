import React from "react";
import Login from "../../components/Login";
import "./loginPage.css";
import t from "../../img/try.jpg";
import background from "../../img/background.jpg";
import photo from "../../img/photo.jpg";

const LoginPage = () => {
  return (
    <main className="login-page">
      <div className="login-page__content center-column-item">
        <ul className="login-page__content__list">
          <li>
            <div className="login-page__content__list__item">
              <img
                src={background}
                alt=""
                className="login-page__content__list__item__img"
              />
              <p> Get a pair in one click</p>
            </div>
          </li>
          <li>
            <div className="login-page__content__list__item left-padding">
              <img
                src={photo}
                alt=""
                className="login-page__content__list__item__img"
              />
              <p> Available all over the world</p>
            </div>
          </li>
          <li>
            <div className="login-page__content__list__item ">
              <img
                src={t}
                alt=""
                className="login-page__content__list__item__img"
              />
              <p> Connect with your friend's friend</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="login-page__form center-column-item">
        <h1>Log in</h1>
        <div className="login-page__form__input">
          <Login />
        </div>
        <small>
          Don't have an account? <a>Sign up</a>
        </small>
      </div>
    </main>
  );
};

export default LoginPage;
