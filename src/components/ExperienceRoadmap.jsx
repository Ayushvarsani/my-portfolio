import { useInView } from "../hooks/useInView";

export default function ExperienceRoadmap({ label, mark = "work", items }) {
  const { ref, shown } = useInView(0.12);

  return (
    <div className={shown ? "road road-on" : "road"} ref={ref}>
      <p className="road-badge">
        {mark === "study" ? <CapIcon /> : <BriefcaseIcon />}
        {label}
      </p>
      <ol className="road-list">
        {items.map((item, index) => (
          <li
            key={item.period + item.title}
            className={index % 2 === 0 ? "road-right" : "road-left"}
            style={{ "--i": index }}
          >
            <article className="road-card">
              <span className={item.current ? "road-date now" : "road-date"}>{item.period}</span>
              <h4>{item.title}</h4>
              <p className="road-company">{item.subtitle}</p>
              <p>{item.text}</p>
              <div className="road-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 7V6a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1M4 9h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m2 9 10-5 10 5-10 5L2 9z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
