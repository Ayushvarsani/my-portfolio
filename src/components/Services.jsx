import { services } from "../data/services";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

const icons = {
  web: WebIcon,
  custom: CustomIcon,
  ai: AiIcon,
  devops: DevopsIcon,
  team: TeamIcon,
  project: ProjectIcon,
};

export default function Services() {
  const { ref, shown } = useInView(0.12);

  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHeading
          title="Services"
          subtitle="Web products, custom software, AI, DevOps, and the delivery leadership that keeps a release on schedule."
        />
        <div ref={ref} className={shown ? "card-grid three service-grid on" : "card-grid three service-grid"}>
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <article key={service.title} className="service" style={{ "--i": index }}>
                <span className="service-icon">
                  <Icon />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WebIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 8 4 12l4 4M16 8l4 4-4 4M13 6l-2 12" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function CustomIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 4 7.5 12 12l8-4.5L12 3zM4 12l8 4.5L20 12M4 16.5 12 21l8-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v3M12 18v3M4.9 6.5l2.1 2.1M17 15.4l2.1 2.1M3 12h3M18 12h3M4.9 17.5 7 15.4M17 8.6l2.1-2.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function DevopsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 8a4 4 0 0 1 7.5-1.5A3.5 3.5 0 0 1 17 13h-1" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 16h8M14 13l3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="9" r="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 18c.6-2.4 2.4-3.6 4.5-3.6s3.9 1.2 4.5 3.6M14 14.6c1.4-.3 2.6.2 3.6 1.5.6.8 1 1.4 1.2 1.9" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ProjectIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 9h8M8 12h8M8 15h5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
