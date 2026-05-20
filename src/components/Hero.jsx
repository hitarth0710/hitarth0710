import { contact, heroMetrics } from "../data/portfolio";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow">Full-stack Developer • Applied AI Builder</p>
        <h1>
          Building digital products that feel <span>practical, polished,</span>{" "}
          and worth using.
        </h1>
        <p className="hero-text">
          I am Hitarth Soni, a developer focused on full-stack systems, backend
          architecture, and AI-powered applications. I enjoy turning ambitious
          ideas into software that works in the real world.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href={`mailto:${contact.email}`}>
            Contact Me
          </a>
        </div>
        <ul className="quick-points">
          <li>Based in Surat, Gujarat, India</li>
          <li>B.Tech in Computer Science and Design</li>
          <li>Focused on full-stack and AI roles</li>
        </ul>
      </div>

      <aside className="hero-panel reveal">
        <div className="panel-card">
          <p className="panel-label">Current Direction</p>
          <h2>Product-minded engineering with strong backend depth.</h2>
          <p>
            I am especially interested in roles where I can contribute to APIs,
            architecture, user-facing experiences, and machine learning driven
            features in the same product.
          </p>
        </div>

        <div className="metrics-grid">
          {heroMetrics.map((metric) => (
            <article className="metric-card" key={metric.label}>
              <span>{metric.value}</span>
              <p>{metric.label}</p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}

export default Hero;
