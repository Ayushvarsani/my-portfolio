import { navLinks, profile } from "../data/profile";
import { services } from "../data/services";

const footerLinks = navLinks.filter((link) =>
  ["home", "about", "services", "projects", "contact"].includes(link.id),
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <h2>About</h2>
          <p>
            I design and build full-stack web products, from the interface through APIs, data, and cloud deployment.
          </p>
        </div>
        <div>
          <h2>Links</h2>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Services</h2>
          <ul>
            {services.map((service) => (
              <li key={service.title}>
                <a href="#services">{service.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Have a question?</h2>
          <ul>
            <li>{profile.location}</li>
            <li>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/ayushvarsani
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()} Ayush Varsani. All rights reserved.</p>
    </footer>
  );
}
