import React, { Component } from "react";
import "./App.css";
import Parallax from "./components/UI/Parallax/Parallax";
import Projects from "./components/Projects/Projects";
import Tabs from "../src/components/UI/Tabs/Tabs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contact />
        <Parallax />
        <Tabs />
        <Parallax />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
