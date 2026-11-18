import useActiveSection from "../hooks/useActiveSection.js";

const SECTIONS = ["work", "process", "contact"];

export default function Header() {
  const active = useActiveSection(SECTIONS);
  const cls = (id) => `nav-link${active === id ? " is-active" : ""}`;

  return (
    <header className="header">
      <div className="container header-row">
        <a className="brand" href="#top">Celine Sitina</a>
        <nav className="nav" aria-label="Main">
          <a className={cls("work")} href="#work">Work</a>
          <a className={cls("process")} href="#process">Process</a>
          <a className="btn btn-ink btn-sm nav-cta" href="#contact">Get in touch</a>
        </nav>
      </div>
    </header>
  );
}
