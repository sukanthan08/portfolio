import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Interests from "./components/Interests";
import Internships from "./components/Internships"
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements/>
      <Internships />
      <Interests />
      <Footer />
    </div>
  );
}
