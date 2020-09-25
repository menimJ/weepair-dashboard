import React from "react";
import Logo from "../../logo.svg";
import classes from "./Nav.module.css"
import { Link } from "react-router-dom";
import path from "../../../Path";

const Header = (props) => {
  const { login, home } = path;
  return (
    <header>
      <nav className="nav container"> 
        <Link to={home}>
          <img src={Logo} alt="" className={classes.nav_logo} />
        </Link>

        <div className="nav__options"> 
          <Link to="" className={classes.nav_options_links}>
            {" "}
            Learn More
          </Link>
          <Link to={login} className={[classes.nav_options_links, classes.link-btn-outline].join('')}>
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
  