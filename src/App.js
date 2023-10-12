import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
//import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-gray-300 bg-gray-400 body-font">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}