function TimelineColumn({ title, items }) {
  return (
    <div className="timeline-column reveal">
      <h3>{title}</h3>
      {items.map((item) => (
        <article className="timeline-item" key={`${item.date}-${item.title}`}>
          <span className="timeline-date">{item.date}</span>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default TimelineColumn;
