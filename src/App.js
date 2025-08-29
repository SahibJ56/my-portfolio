// src/App.js
import React from "react";
import "./App.css";


const projects = [
  {
    title: "Cough Detection AI",
    description: "A machine learning model that classifies cough sounds using a Kaggle dataset.",
    link: "https://cough-ai.vercel.app/",
  },
  {
    title: "Fruit and Vegetables Classifier",
    description: "A Python-based classifier built based on CNN and Preprocessing.",
    link: "https://github.com/SahibJ56/Fruit-and-Vegetables-Classifier",
  },
  {
    title: "Fruit and Vegetables Classifier",
    description: "A Python-based classifier built based on CNN and Preprocessing.",
    link: "https://github.com/SahibJ56/Fruit-and-Vegetables-Classifier",
  },
];

const skills = [
  "Python", "Java", "C#", "pandas", "NumPy", "scikit-learn",
  "Matplotlib", "SQL", "MATLAB", "Flask"
];

export default function App() {
  return (
    <div className="container">
      {/* Intro Section */}
      <header className="header">
        <h1>Hi, I’m Sahib Johar 👋</h1>
        <p>
          Computer Engineering Student at TMU | Passionate about Machine Learning, 
          Software Development & Motorsport 🚀🏎️
        </p>
      </header>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </section>

      {/* Contact Section */}
      <footer className="footer">
        <h2>Contact Me</h2>
        <p>📧 sahib.johar@email.com</p>
        <p>
          <a href="www.linkedin.com/in/sahib-johar" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/SahibJ56" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
