import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Section from "./components/section/Section";
import Parallax from "./components/UI/Parallax/Parallax";
import Projects from "./components/Projects/Projects";
import Tabs from "../src/components/UI/Tabs/Tabs";
import Form from "./components/Form/Form";

/* <!-- navbar -->

<!-- photo / grid -->

<!-- parallax -->

<!-- services / tabs -->

<!-- parallax -->

<!-- contact form -->
npm start
<!-- footer -->
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Section />
        <Parallax />
        <Tabs />
        <Form />
        <Projects />
      </div>
    );
  }
}

export default App;
