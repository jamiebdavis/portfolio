import React from "react";
import classes from "./Header.module.css";
import Banner from "../Banner/Banner";
import AboutMe from "../AboutMe/AboutMe";

const Header = () => {
  return (
    <header className={classes.Header}>
      <nav className="nav-wrapper transparent">
        <div className="container">
          <a className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#services">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact me</a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/jamied_nyc/"
                className="btn-floating btn-small tooltipped"
                data-tooltip="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/jd_codes"
                className="btn-floating btn-small tooltipped"
                data-tooltip="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jamie-davis-87b48995/"
                className="btn-floating btn-small tooltipped"
                data-tooltip="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
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
      <Banner />
      <AboutMe />
    </header>
  );
};

export default Header;
