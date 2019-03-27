import React from "react";
import image from "../../images/Linked in profile pic (1).jpg";
import classes from "./AboutMe.module.css";

//this section will be able me or projects

const Section = () => {
  return (
    <section className={classes.aboutMe}>
      <br />
      <p>
        Hello! My name is Jamie Davis and I'm a Manchester, UK based aspiring
        Software Developer
      </p>
      <p>
        I have a diverse set of skills ranging from HTML + CSS + Javascript +
        React all the way to server side Technologies suck as Node.js + Express{" "}
      </p>
      <br />
      <img src={image} alt="potrait" className={classes.img} />
      <hr className={classes.line} />
    </section>
  );
};

export default Section;
