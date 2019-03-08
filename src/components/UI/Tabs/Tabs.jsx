import React from "react";

const Tabs = () => {
  return (
    <section className="container section scrollspy" id="services">
      <div className="row">
        <div className="col s12 l4">
          <h2 className="indigo"> what i do</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            suspendisse interdum consectetur libero id.
          </p>
        </div>
        <div className="col s12 l6 offset-l2">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#service1">Service 1</a>
            </li>
            <li className="tab col s6">
              <a href="#service2">Service 2</a>
            </li>
          </ul>
          <div className="col s12" id="service1">
            <p className="flow-text">Service 1</p>
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
            <p className="flow-text">Service 2</p>
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
