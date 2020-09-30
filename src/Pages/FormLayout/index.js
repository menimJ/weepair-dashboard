import React, { Component } from "react";
import classes from "./formLayout.module.css";
import t from "../../img/try.jpg";
import background from "../../img/background.jpg";
import photo from "../../img/photo.jpg";
import classnames from "classnames";

const FormLayout = ({ component: Component, ...props }) => {
  return (
    <main className={classes["login-page"]}>
      <div
        className={classnames(
          classes["login-page__content"],
          classes["center-column-item"]
        )}
      >
        <ul className="login-page__content__list">
          <li>
            <div className={classes["login-page__content__list__item"]}>
              <img
                src={background}
                alt=""
                className={classes["login-page__content__list__item__img"]}
              />
              <p> Get a pair in one click</p>
            </div>
          </li>
          <li>
            <div
              className={classnames(
                classes["login-page__content__list__item"],
                classes["left-padding"]
              )}
            >
              <img
                src={photo}
                alt=""
                className={classes["login-page__content__list__item__img"]}
              />
              <p> Available all over the world</p>
            </div>
          </li>
          <li>
            <div className={classes["login-page__content__list__item"]}>
              <img
                src={t}
                alt=""
                className={classes["login-page__content__list__item__img"]}
              />
              <p> Connect with your friend's friend</p>
            </div>
          </li>
        </ul>
      </div>
      <Component {...props} />
    </main>
  );
};

export default FormLayout;
