import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home";
import Projects from "./components/projects/project";
import Skills from "./components/skills/Skills";
import About from "./components/about/about";
import Contact from "./components/contact/Contact";
import LandingPage from "./components/landingpage";

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleExploreClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const landingSection = document.getElementById("landing");
    if (landingSection) {
      const rect = landingSection.getBoundingClientRect();
      setShowNavbar(rect.bottom <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
   
      <section id="landing">
        <LandingPage onExploreClick={handleExploreClick} />
      </section>

      {showNavbar && <Navbar />}

      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;