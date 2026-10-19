import { useEffect, useState } from "react";
import { achievements } from "../data/achievements";
import { useInView } from "../hooks/useInView";
import SectionHeading from "./SectionHeading";

export default function Achievements() {
  const { ref, shown } = useInView(0.2);
  const [active, setActive] = useState(null);

  return (
    <section id="achievements" className="section">
      <div className="wrap">
        <SectionHeading
          title="Achievements"
          subtitle="Outcomes from study, production work, and training the people beside me."
        />
        <ul ref={ref} className={shown ? "achieve-grid on" : "achieve-grid"}>
          {achievements.map((item, index) => (
            <li key={item.title} style={{ "--i": index }}>
              <button type="button" className="achieve-card" onClick={() => setActive(item)}>
                <figure className="achieve-proof">
                  <img src={item.image} alt="" />
                </figure>
                <div className="achieve-copy">
                  <span className="achieve-label">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.caption ? <p className="achieve-note">{item.caption}</p> : null}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {active ? <AchievementModal item={active} onClose={() => setActive(null)} /> : null}
    </section>
  );
}

function AchievementModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="achieve-modal" onClick={onClose}>
      <div
        className="achieve-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="achieve-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="achieve-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <img src={item.image} alt={item.alt} />
        <span className="achieve-label">{item.label}</span>
        <h3 id="achieve-dialog-title">{item.title}</h3>
        <p>{item.text}</p>
        {item.caption ? <p className="achieve-caption">{item.caption}</p> : null}
      </div>
    </div>
  );
}
