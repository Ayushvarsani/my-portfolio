import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeading
          title="Skills"
          subtitle="The stack I use to take a product from interface to database and deployment."
        />
        <ul className="skill-board">
          {skillGroups.map((group) => (
            <li key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <span key={item.name} className="skill-pill">
                    {item.icon ? <img src={item.icon} alt="" /> : <b>{item.name.slice(0, 2)}</b>}
                    {item.name}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
