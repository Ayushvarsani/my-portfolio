import { education, jobs } from "../data/experience";
import ExperienceRoadmap from "./ExperienceRoadmap";
import SectionHeading from "./SectionHeading";

const experienceItems = jobs.map((job) => ({
  period: job.period,
  title: job.role,
  subtitle: `${job.company} · ${job.place}`,
  text: job.points.join(" "),
  tags: job.tags,
  current: job.period.includes("Present"),
}));

const educationItems = education.map((item) => ({
  period: item.period,
  title: item.title,
  subtitle: `${item.school} · ${item.place}`,
  text: item.summary,
  tags: item.tags,
  current: false,
}));

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="wrap">
        <SectionHeading
          title="Resume"
          subtitle="A full-stack path from trainee work in Ahmedabad to hybrid product delivery with a team in Brisbane."
        />
        <ExperienceRoadmap label="Professional Experience" items={experienceItems} />
        <ExperienceRoadmap label="Education" mark="study" items={educationItems} />
        <div className="center">
          <a className="btn btn-primary" href="/Ayush-Varsani-Resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
