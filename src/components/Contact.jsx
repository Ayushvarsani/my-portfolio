import { useState } from "react";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const update = (event) => {
    setSent(false);
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Add your name, a subject, and a short message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email so I can reply.");
      return;
    }
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setError("");
    setSent(true);
  };

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHeading
          title="Contact"
          subtitle="Open for product work, team support, and new roles."
        />
        <div className="contact-panel">
          <aside className="contact-aside">
            <h3>Let's work together</h3>
            <p>Share the product, the timeline, and the kind of help you need. I reply by email.</p>
            <ul className="contact-cards">
              <li>
                <span className="contact-icon">
                  <PinIcon />
                </span>
                <div>
                  <span>Location</span>
                  <strong>{profile.location}</strong>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <PhoneIcon />
                </span>
                <div>
                  <span>Phone</span>
                  <a href={profile.phoneHref}>{profile.phone}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <MailIcon />
                </span>
                <div>
                  <span>Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="contact-icon">
                  <LinkedInIcon />
                </span>
                <div>
                  <span>LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">
                    linkedin.com/in/ayushvarsani
                  </a>
                </div>
              </li>
            </ul>
          </aside>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="form-intro">
            <h3>Send a message</h3>
            <p>Your email app opens with the brief ready to send.</p>
          </div>
          <div className="form-row">
            <label>
              Name
              <span className="field">
                <PersonIcon />
                <input name="name" value={form.name} onChange={update} placeholder="Your name" />
              </span>
            </label>
            <label>
              Email
              <span className="field">
                <MailIcon />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="name@company.com"
                />
              </span>
            </label>
          </div>
          <label>
            Subject
            <span className="field">
              <NoteIcon />
              <input
                name="subject"
                value={form.subject}
                onChange={update}
                placeholder="Web product, team support, or a role"
              />
            </span>
          </label>
          <label>
            Message
            <span className="field field-area">
              <ChatIcon />
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="What you want to build, and when you need it"
              />
            </span>
          </label>
          {error ? (
            <p className="form-note error" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="form-note">Your email app should open with this message ready to send.</p>
          ) : null}
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="11" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M8 4h3l1.5 3.5-2 1.2a12 12 0 0 0 5 5l1.2-2L20 13v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4h2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 19c1.4-3 3.8-4.5 7-4.5S17.6 16 19 19" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M8 11v6M8 8.2h.01M12 17v-3.5a2 2 0 0 1 4 0V17"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NoteIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h8l5 5v13H7z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M15 3v5h5M9 13h7M9 17h5" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 16.5 3 20l4.2-1.2A8.5 8.5 0 1 0 5 16.5z" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
