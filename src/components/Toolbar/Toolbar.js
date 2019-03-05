import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../UI/Logo/Logo";
import Button from "../UI/Button/Button";

//add transparent toolbar to portfolio

//maybe  go with black and dark blue theme?

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      MENU
      <Logo />
      <nav>
        <Button>About Me</Button>
        <Button>Projects</Button>
        <Button>Contact Me</Button>
      </nav>
    </header>
  );
};

export default Toolbar;
