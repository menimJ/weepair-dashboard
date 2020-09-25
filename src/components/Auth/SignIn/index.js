import React from "react";
import Login from "./Login";
import classes from "./sigin.module.css";
import classnames from 'classnames';
// import { Link } from 'react-router-dom';
// import t from "../../img/try.jpg";
// import background from "../../img/background.jpg";
// import photo from "../../img/photo.jpg";

const LoginPage = () => {
    return (
        <main className={classes.login_page}>
            <div className ={classnames('center-column-item',classes.login_page__content)}>
                <ul className={classes.login_page__content__list}>
                    <li>
                        <div className={classes.login_page__content__list__item}>
                            {/* <img
                            src={background}
                            alt=""
                            className={classes.login_page__content__list__item__img}
                        /> */}
                            <p> Get a pair in one click</p>
                        </div>
                    </li>
                    <li>
                        <div className={[classes.login_page__content__list__item, classes.left_padding].join('')}>
                        {/* <img
                            src={photo}
                            alt=""
                            className={classes.login_page__content__list__item__img}
                        /> */}
                            <p> Available all over the world</p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.login_page__content__list__item} >
                            {/* <img
                                src={t}
                                alt=""
                                className={classes.login_page__content__list__item__img}
                            /> */}
                            <p> Connect with your friend's friend</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className ={classnames('center-column-item',classes.login_page__form)}>
            
                <h1>Log in</h1>
                <div className={classes.login_page__form__input}>
                    <Login />
                </div>
                <small>
                    Don't have an account?
                      {/* <Link to='#'>Sign up</Link> */}
                </small>
            </div>
        </main>
    );
};

export default LoginPage;
