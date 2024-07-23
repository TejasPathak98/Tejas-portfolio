import React from "react";
import profilePic from "../assets/images/profile-pic.jpg";
import blogs from "../data/blogs.json";
import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <img src={profilePic} alt="Profile" className="about-profile" />
        <p>
          Hi, I'm Tejas! I'm a Computer Science Master's student at
          {" "}
          <a
            href="https://www.scu.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Santa Clara University
          </a>
          . Previously, I worked at{" "}
          <a
            href="https://www.ubs.com/global/en.html"
            target="_blank"
            rel="noopener noreferrer"
          >
          UBS{" "}
          </a>
          as a Software Engineer for 3 years.I graduated from{" "}
          <a
            href="https://www.bits-pilani.ac.in/goa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Birla Institute of Technology & Science,Pilani
          </a>{" "}
          with a degree in Engineering with a concentration in Electronics & Instrumentation.
        </p>
        <p>
          In my free time I like to run, backpack,read & watch football!
        </p>

        <p>
          You can connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/tejas-pathak-803944121/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , check out my projects on{" "}
          <a
            href="https://github.com/TejasPathak98"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          , or view my{" "}
          <a
            href="https://drive.google.com/file/d/1c1z1hTsAcPSOmuYPsKnYR76NhF17dL24/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
          .
        </p>
              
        <p>
          I wrote this website almost entirely using{" "}
          <a
            href="https://openai.com/blog/chatgpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChatGPT
          </a>
          , with some help of{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://particles.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-tsparticles
          </a>
          , and{" "}
          <a
            href="https://reactrouter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-router-dom
          </a>
          . I generated the portfolio banner images using{" "}
          <a
            href="https://openai.com/dall-e/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DALL-E
          </a>
          .
        </p>

        <h2 className="about-subtitle">Blog Posts</h2>
        <ul className="about-posts">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <a href={blog.url} target="_blank" rel="noopener noreferrer">
                {blog.title}
              </a>
              <span className="about-date">{blog.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;
