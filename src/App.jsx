import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
