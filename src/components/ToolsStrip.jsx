import { TOOLS } from "../data/projects.js";

export default function ToolsStrip() {
  return (
    <section className="tools" aria-label="Tools">
      <div className="container tools-row">
        <span className="tools-label">Built with</span>
        {TOOLS.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </section>
  );
}
