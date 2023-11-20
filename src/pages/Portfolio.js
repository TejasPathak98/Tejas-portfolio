import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import projectsData from "../data/projects.json";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

function Portfolio() {
  const projects = projectsData.map((project) => (
    <Tilt options={defaultOptions}>
      <Link
        to={`/project/${project.id}`}
        key={project.id}
        className="portfolio-card"
      >
        <div
          className="portfolio-card-image"
          style={{
            backgroundImage: `url(${require(`../assets/images/${project.bannerImage}`)})`,
          }}
        ></div>
        <div className="portfolio-card-content">
          <h2 className="portfolio-card-title">{project.title}</h2>
        </div>
      </Link>
    </Tilt>
  ));

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Selected Projects</h1>
      <div className="portfolio-grid">{projects}</div>
    </div>
  );
}

export default Portfolio;
