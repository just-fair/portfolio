function ProjectsSection({ projects }) {
  return (
    <section className="projects">
      <h2>
        <span className="prompt">$</span> ls projects/
      </h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <img src={project.image} alt={project.title} className="project-image" />
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
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Open Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  Source
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
