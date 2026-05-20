function ProjectCard({ project }) {
  return (
    <article
      className={`project-card reveal ${project.featured ? "project-card-large" : ""}`}
    >
      <div className="project-topline">
        <span className="project-tag">{project.category}</span>
        <a href={project.href}>GitHub</a>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {project.highlights ? (
        <ul>
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
      <div className="stack-list">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
