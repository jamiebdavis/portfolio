import React, { Component } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Parallax from "./components/UI/Parallax/Parallax";
//import Projects from "./components/Projects/Projects";
import Tabs from "../src/components/UI/Tabs/Tabs";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <Parallax />
        <Tabs />
        <Form />
        {/* <Projects /> Removed this section - Might use at a later date*/}
        <Footer />
      </div>
    );
  }
}

export default App;
