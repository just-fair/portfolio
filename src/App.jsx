import "./App.css";
import { projects } from "./data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Jaspher Serquiña</h1>
        <p>Full Stack Developer</p>
        <div className="contact">
          <a href="mailto:jsphr.serquina@gmail.com">
            <MdEmail size="1.5rem" /> jsphr.serquina@gmail.com
          </a>
          <a href="https://github.com/just-fair" target="_blank">
            <FaGithub size="1.5rem" /> GitHub
          </a>
          <a href="https://linkedin.com/in/just-fair" target="_blank">
            <FaLinkedin size="1.5rem" /> LinkedIn
          </a>
        </div>
      </header>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="links">
                {project.demo && (
                  <a href={project.demo} target="_blank">
                    Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank">
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
