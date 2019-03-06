import React from "react";

//this section will be able me or projects

const Section = () => {
  return (
    <section
      className="container section"
      id="photos"
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
          <h2 className="indigo-text">Project 1 or About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="col s12 l4 push-l7 offset-l1">
          <img
            src="http://lorempixel.com/400/200/"
            alt="potrait"
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 pull-l5">
          <h2 className="indigo-text">Project 2 or About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className="col s12 l4">
          <img
            src="http://lorempixel.com/400/200/"
            alt="potrait"
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="indigo-text">Project 3 or About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
