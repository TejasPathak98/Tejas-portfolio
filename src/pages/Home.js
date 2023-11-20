import React from "react";
import "./Home.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../data/particles-config.json";
import { Link } from "react-router-dom";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="home-container">
      <h1>👋 Hello!</h1>
      <p>
        Welcome to my personal portfolio website. Feel free to click around!
      </p>
      <div>
        <Link to="/about">Learn more about me</Link>
        <Link to="/portfolio">Check out some of my recent projects</Link>
        <Link to="/contact">Get in touch</Link>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
      />
    </div>
  );
}

export default Home;
