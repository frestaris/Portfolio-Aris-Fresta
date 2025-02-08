import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ToggleButton from "./components/ToggleButton";
import "./App.css";
import ParticleBackground from "./components/ParticleBackground";

function App() {
  return (
    <div className="container">
      <ParticleBackground />
      <ToggleButton />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
