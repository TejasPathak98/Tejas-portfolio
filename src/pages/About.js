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
        <>
          <p>
            Hey there! I'm <strong>Tejas</strong> — a passionate Computer Science Master's student at{" "}
            <a
              href="https://www.scu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Santa Clara University
            </a>
            , currently building cutting-edge networking software at{" "}
            <a
              href="https://mimosanetworks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mimosa Networks
            </a>
            . My work bridges the gap between software engineering and deep network testing — from automating traffic with Spirent/Ixia to optimizing WiFi radios with C, Python, and Docker in high-performance, low-latency environments.
          </p>

          <p>
            Before this, I was a Software Engineer at{" "}
            <a
              href="https://www.ubs.com/global/en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              UBS
            </a>{" "}
            for 3 years, where I built global-scale data pipelines, designed RESTful APIs, and scaled microservices using Azure, Kubernetes, and Spring. I also led efforts in performance tuning and risk analytics dashboards, making data faster and smarter.
          </p>

          <p>
            My academic foundation was laid at{" "}
            <a
              href="https://www.bits-pilani.ac.in/goa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BITS Pilani
            </a>
            , where I studied Electronics & Instrumentation, which sparked my love for systems thinking and problem-solving.
          </p>

          <p>
            I thrive at the intersection of software, networks, and systems — especially when it comes to performance optimization, infrastructure testing, and clean, scalable code. My core strengths? Deep debugging skills, speed of execution, and strong ownership from ideation to delivery.
          </p>

          <p>
            Outside work, you’ll find me running long distances, diving into football matches, reading thought-provoking books, or adventuring outdoors. I love simplifying complex ideas and building things that matter.
          </p>

          <p>
            Let’s connect on{" "}
            <a
              href="https://www.linkedin.com/in/tejas-pathak-803944121/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            , explore my work on{" "}
            <a
              href="https://github.com/TejasPathak98"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            , or take a look at my{" "}
            <a
              href="https://drive.google.com/file/d/13aBiZuKupwpD89U1OfZPxrCheY7djEkj/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            .
          </p>
        </>

        <p>
          I built this website with{" "}
          <a
            href="https://openai.com/blog/chatgpt"
            target="_blank"
            rel="noopener noreferrer"
          >
            ChatGPT
          </a>
          , powered by{" "}
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
          . Banner images were generated using{" "}
          <a
            href="https://openai.com/dall-e/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DALL·E
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
