import React from "react";

const Tabs = () => {
  return (
    <section className="container section scrollspy" id="services">
      <div className="row">
        <div className="col s12 l4">
          <h3>Skills and Experience</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>
              Experienced in writing Vanilla JavaScript with knowledge of ES6
            </li>
            <li>Front End Frame Work - React</li>
            <li>Server side Technologies - Node.js, Express</li>
            <li>Test driven development with Jest and Enzyme.</li>
            <li>
              Familiarity with relational &amp; non-relational databases,
              including MongoDB &amp; Postgres SQL.
            </li>
            <li>GIT Version Control</li>
            <li>Versatile in the DRY coding Patterns</li>
            <li>Excellent problem solving skills.</li>
            <li>Understanding of Agile Methodologies and the benefits</li>
            <li>At ease in fast-paced working environment.</li>
            <li>Self-motivated, passionate and keen to grow</li>
          </ul>
        </div>
        <div className="col s12 l6 offset-l2">
          <h2>Projects</h2>
          <ul className="tabs">
            <li className="tab col s4">
              <a href="#service1">To do List</a>
            </li>
            <li className="tab col s4">
              <a href="#service2">Multi-Step User Form </a>
            </li>
            <li className="tab col s4">
              <a href="#service3">Image Finder</a>
            </li>
          </ul>
          <div className="col s12" id="service1">
            <p className="flow-text">To do List</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet suspendisse interdum consectetur libero id.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet suspendisse interdum consectetur libero id.
            </p>
          </div>
          <div className="col s12" id="service2">
            <p className="flow-text">Multi-Step User Form</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet suspendisse interdum consectetur libero id.
            </p>
          </div>
          <div className="col s12" id="service3">
            <p className="flow-text">Image Finder</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Laoreet suspendisse interdum consectetur libero id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
