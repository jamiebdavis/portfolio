import React, { Component } from "react";
import "./App.css";
import Container from "./container/container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Jamie Davis - Portfolio
          <em>
            <p>(work in progress)</p>
          </em>
        </header>

        <Container />
      </div>
    );
  }
}

export default App;
