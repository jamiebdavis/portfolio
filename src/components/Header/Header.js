import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.Header}>
      <nav className="nav-wrapper transparent">
        <div className="container">
          <a className="brand-logo center">Jamie Davis - Portfoliio</a>
          <a className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact me</a>
            </li>
          </ul>
          <ul className="sidenav grey" id="mobile-menu">
            {" "}
            <li>
              <a href="/">About Me</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
