import { projects } from "../data/projects";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref, shown } = useInView(0.08);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHeading
          title="Projects"
          subtitle="Websites and product work, including YODO Digital and NGO management software."
        />
        <div ref={ref} className={shown ? "project-grid on" : "project-grid"}>
          {projects.map((project, index) => (
            <article key={project.name} className="project" style={{ "--i": index }}>
              <div className="project-shot">
                <img src={project.image} alt={`${project.name} preview`} />
              </div>
              <div className="project-body">
                <h3>{project.name}</h3>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <p>{project.summary}</p>
                {project.href ? (
                  <a className="project-link" href={project.href} target="_blank" rel="noreferrer">
                    Visit website
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
