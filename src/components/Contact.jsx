import { useState } from "react";
import { CONTACT } from "../data/projects.js";
import SmilingBag from "./SmilingBag.jsx";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: fall back to opening the mail app
      location.href = `mailto:${CONTACT.email}`;
    }
  }

  return (
    <section id="contact" className="section container">
      <Reveal className="contact">
        <div className="contact-copy">
          <h2 className="contact-title">Have a product that needs to sell?</h2>
          <p className="lead">Based in Nairobi. Remote, hybrid or on-site, and comfortable working across US time zones.</p>
          <p className="contact-email">
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <button type="button" className="copy" onClick={copyEmail}>
              {copied ? "Copied" : "Copy email"}
            </button>
            <span className="sr-only" aria-live="polite">{copied ? "Email copied" : ""}</span>
          </p>
          <div className="contact-actions">
            <a className="btn btn-accent" href={`mailto:${CONTACT.email}`}>Email me</a>
            <a className="btn btn-outline" href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn btn-outline" href={`tel:${CONTACT.phone}`}>{CONTACT.phoneLabel}</a>
          </div>
        </div>
        <SmilingBag />
      </Reveal>
    </section>
  );
}
