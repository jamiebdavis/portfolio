import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={classes.Contact} id="contact">
      <div className="row">
        <div>
          <h2>GET IN TOUCH WITH ME</h2>
          <ul>
            <li>
              <a href="mailto:jamied1985@gmail.com?subject=Hi Jamie!">E-mail</a>
            </li>
            <li>
              <a href="https://github.com/jamiebdavis">GitHub</a>
            </li>
            <li>
              <a href="https://twitter.com/jd_codes/">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/jamied_nyc/">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
