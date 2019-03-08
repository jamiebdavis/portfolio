import React from "react";

//this section will be able me or projects

const Section = () => {
  return (
    <section
      className="container section scrollspy"
      id="about-me"
      style={{ paddingBottom: "4vw", paddingTop: "4vw" }}
    >
      <div className="row">
        <div className="col s12 l4">
          <img
            src="http://lorempixel.com/400/200/"
            alt="potrait"
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="black-text">About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Laoreet suspendisse interdum consectetur libero id. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
