import { PROCESS } from "../data/projects.js";
import Reveal from "./Reveal.jsx";

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="section container">
        <p className="eyebrow eyebrow-accent">How I work</p>
        <h2 className="h2 h2-gap process-title">From idea to a funnel you can measure.</h2>
        <ol className="process-grid">
          {PROCESS.map((step, i) => (
            <Reveal as="li" key={step.title} className="process-step" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
