function ExperienceSection({ experiences }) {
  return (
    <section className="experience">
      <h2>
        <span className="prompt">$</span> tree experience/
      </h2>
      <div className="experience-tree" role="list">
        <p className="tree-root">experience/</p>
        {experiences.map((item, index) => (
          <div
            key={item.id}
            className="tree-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tree-rail" aria-hidden="true">
              <span className="tree-branch">
                {index === experiences.length - 1 ? "└──" : "├──"}
              </span>
              {index !== experiences.length - 1 && <span className="tree-line" />}
            </div>
            <article className="tree-card">
              <div className="tree-node">
                <p className="tree-title">{item.role}</p>
                <p className="tree-company">
                  {item.company} <span>{item.period}</span>
                </p>
              </div>
              <p className="tree-summary">{item.summary}</p>
              <ul className="tree-children">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>
                    <span>•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
