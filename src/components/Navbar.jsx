import { useState } from "react";
import { navLinks, profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap nav-bar">
        <a className="logo" href="#home" onClick={close}>
          {profile.logo}
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "open" : ""}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
