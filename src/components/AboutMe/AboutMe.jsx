import React from "react";
import image from "../../images/Linked in profile pic (1).jpg";

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
            src={image}
            alt="potrait"
            className="responsive-img materialboxed"
          />
        </div>
        <div className="col s12 l6 offset-l1">
          <h2 className="black-text">About Me</h2>
          <p>
            I recently graduated from Manchester Codes a coding course that
            covers full-stack software development (both front-end and
            back-end). The course sparked a passion for coding and since
            graduating I have continued to develop my coding skills in my
            current role and in my spare time. I would now like to build on
            these foundations through a career in software development
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
