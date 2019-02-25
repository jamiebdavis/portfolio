import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../UI/Logo/Logo";

//add transparent toolbar to portfolio

//maybe  go with black and dark blue theme?

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      MENU
      <Logo />
      Nav Items
    </header>
  );
};

export default Toolbar;
