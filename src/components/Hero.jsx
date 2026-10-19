import { heroSlides, profile } from "../data/profile";
import { useCarousel } from "../hooks/useCarousel";

export default function Hero() {
  const { index, setIndex, setPaused } = useCarousel(heroSlides.length);
  const slide = heroSlides[index];

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="wrap hero-inner">
        <div className="hero-copy" key={slide.subtitle}>
          <p className="eyebrow">{slide.greeting}</p>
          <h1>
            {slide.lead}
            {slide.highlight ? (
              <>
                {" "}
                <span className="accent">{slide.highlight}</span>
              </>
            ) : null}
          </h1>
          <p className="hero-role">{slide.subtitle}</p>
          <p className="hero-text">{profile.heroIntro}</p>
          <ul className="hero-points">
            {profile.heroPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Hire me <BriefcaseIcon />
            </a>
            <a className="btn btn-ghost" href="#projects">
              My works <FolderIcon />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          {heroSlides.map((item, itemIndex) => (
            <img
              key={item.image}
              src={item.image}
              alt={profile.name}
              className={itemIndex === index ? "show" : ""}
            />
          ))}
        </div>
      </div>
      <div className="hero-dots">
        {heroSlides.map((item, itemIndex) => (
          <button
            key={item.subtitle}
            type="button"
            className={itemIndex === index ? "on" : ""}
            aria-label={`Show slide ${itemIndex + 1}`}
            onClick={() => setIndex(itemIndex)}
          />
        ))}
      </div>
    </section>
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

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}
