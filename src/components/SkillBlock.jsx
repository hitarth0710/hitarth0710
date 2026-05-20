function SkillBlock({ title, skills }) {
  return (
    <article className="skill-block reveal">
      <h3>{title}</h3>
      <div className="chip-wrap">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}

export default SkillBlock;
