import React from "react";
import LandingPage from "./components/landingpage";
import Home from "./components/Home";
import Projects from "./components/projects/project";
import Skills from "./components/skills/Skills"
import About from "./components/about/about";

const App: React.FC = () => {
  return (
    <div>
      <LandingPage />
      <Home />
      <Projects />
      <Skills />
      <About />
    </div>
  );
};

export default App;
