export default function SectionHeading({ title, subtitle }) {
  return (
    <header className="section-heading">
      <h2>
        <span className="ghost" aria-hidden="true">
          {title}
        </span>
        {title}
      </h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </header>
  );
}
