import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json";
import "./Project.css";

const Project = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, description, bannerImage, links, date, additionalImages } =
    project;

  return (
    <div className="project">
      <div className="project-container">
        <div className="project-image-container">
          <img
            src={require(`../assets/images/${bannerImage}`)}
            alt={title}
            className="project-image"
          />
        </div>
        <h1 className="project-title">{title}</h1>
        <div className="project-details-container">
          <div className="left-column">
            <p className="project-description">{description}</p>
          </div>
          <div className="right-column">
            <p className="project-date">{date}</p>

            <div className="project-links">
              <h3>Relevant Links</h3>
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="project-skills">
              <h3>Skills Used</h3>
              <ul>
                {project?.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {additionalImages && additionalImages.length > 0 && (
          <div>
            <h3 className="project-gallery-header">Additional Images:</h3>
            <div className="project-gallery">
              {additionalImages.map((image) => (
                <div className="project-gallery-item">
                  <a
                    href={require(`../assets/images/${image}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={require(`../assets/images/${image}`)}
                      alt={title}
                      className="project-gallery-image"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
