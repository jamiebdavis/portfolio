import React, { Component } from "react";
import "./App.css";
import Container from "./container/container";
import Spinner from "./components/UI/Spinner/Spinner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Jamie Davis - Portfolio
          <em>
            <Spinner />
          </em>
        </header>

        <Container />
      </div>
    );
  }
}

export default App;
