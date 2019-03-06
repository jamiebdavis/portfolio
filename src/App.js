import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/section/Section";
import Parallax from "./components/UI/Parallax/Parallax";

/* <!-- navbar -->

<!-- photo / grid -->

<!-- parallax -->

<!-- services / tabs -->

<!-- parallax -->

<!-- contact form -->

<!-- footer -->
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Parallax />
        test
      </div>
    );
  }
}

export default App;
