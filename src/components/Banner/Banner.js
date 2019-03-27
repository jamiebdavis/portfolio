import React from "react";
import classes from "./Banner.module.css";
import { Spring } from "react-spring/renderprops";

const Banner = () => {
  return (
    <div>
      <Spring
        from={{ opacity: 0, marginLeft: -1500 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {props => (
          <div style={props} className={classes.Banner}>
            <h1>Jamie Davis</h1>
            <h4>Developer</h4>
          </div>
        )}
      </Spring>
    </div>
  );
};

export default Banner;
