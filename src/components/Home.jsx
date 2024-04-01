import React from "react";
import "./Home.css";
import 'react-slideshow-image/dist/styles.css'
import Navbar from "./Navbar";
import Services from "./Services";
import Intro from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";


export default function Home() {
  return (
    <div>
      <div className="scroll-w"></div>
      <Navbar/>
      

      <div className="heading">
        <h2 className="h-dark">I'm Sarvesh</h2>
        <h2 className="h-light">Developer x Designer</h2>
      </div>

      <div className="home">
        <Intro></Intro>
        </div>

        <Services></Services>

      <Projects></Projects>

      <Contact></Contact>
    </div>
  );
}
