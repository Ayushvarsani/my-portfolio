import { aboutFacts, profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap about-grid">
        <div className="about-photo">
          <img
            src={profile.portrait}
            alt="Portrait placeholder. Replace this file with your photo."
          />
        </div>
        <div>
          <header className="section-heading left">
            <h2>
              <span className="ghost" aria-hidden="true">
                About
              </span>
              About Me
            </h2>
          </header>
          <p className="lede">{profile.summary}</p>
          <div className="tags">
            {profile.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <ul className="facts">
            {aboutFacts.map((fact) => (
              <li key={fact.label}>
                <span>{fact.label}:</span>
                {fact.href ? (
                  <a
                    href={fact.href}
                    {...(fact.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                  >
                    {fact.value}
                  </a>
                ) : (
                  <strong>{fact.value}</strong>
                )}
              </li>
            ))}
          </ul>
          <p className="project-count">
            <strong>{profile.projectsCompleted}</strong> Projects completed
          </p>
          <a className="btn btn-primary" href={profile.resume} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
