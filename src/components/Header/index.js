import React from "react";
import Logo from "../../logo.svg";
import "./header.css";
import { Link } from "react-router-dom";
import path from "../../Path";

const Header = () => {
  const { login, home } = path;
  return (
    <header>
      <nav className="nav container">
        <Link to={home}>
          <img src={Logo} alt="" className="nav__logo" />
        </Link>

        <div className="nav__options">
          <a href="" className="nav__options__links">
            {" "}
            Learn More
          </a>
          <Link to={login} className="nav__options__links link-btn-outline">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
