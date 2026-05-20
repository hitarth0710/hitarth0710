import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import SkillBlock from "./components/SkillBlock";
import TimelineColumn from "./components/TimelineColumn";
import {
  aboutCards,
  contact,
  education,
  experience,
  projects,
  skillGroups,
  strengths,
} from "./data/portfolio";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient ambient-1" />
      <div className="ambient ambient-2" />
      <div className="ambient ambient-3" />

      <div className="site-shell">
        <Header />

        <main>
          <Hero />

          <section className="section" id="about">
            <SectionHeading
              eyebrow="About"
              title="A developer who likes useful systems more than flashy demos."
            />
            <div className="about-grid">
              {aboutCards.map((card) => (
                <article className="info-card reveal" key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="strengths">
            <SectionHeading
              eyebrow="Strengths"
              title="The kind of work I naturally gravitate toward."
            />
            <div className="about-grid">
              {strengths.map((item) => (
                <article className="info-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <SectionHeading
              eyebrow="Featured Projects"
              title="Selected work that reflects both technical depth and product sense."
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section className="section split-section" id="experience">
            <SectionHeading
              eyebrow="Experience & Education"
              title="Built through hands-on internships and strong academic performance."
            />
            <div className="timeline-grid">
              <TimelineColumn title="Experience" items={experience} />
              <TimelineColumn title="Education" items={education} />
            </div>
          </section>

          <section className="section" id="skills">
            <SectionHeading
              eyebrow="Skills"
              title="A toolkit shaped by web engineering, data systems, and machine learning."
            />
            <div className="skills-layout">
              {skillGroups.map((group) => (
                <SkillBlock key={group.title} title={group.title} skills={group.skills} />
              ))}
            </div>
          </section>

          <section className="section contact-section" id="contact">
            <div className="contact-card reveal">
              <p className="eyebrow">Contact</p>
              <h2>Let’s build something meaningful.</h2>
              <p>
                If you are hiring, collaborating, or building something interesting, I
                would love to connect.
              </p>
              <div className="contact-links">
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
                <a href={contact.github}>GitHub</a>
                <a href={contact.linkedin}>LinkedIn</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
