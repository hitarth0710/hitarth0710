function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeading;
