import { STANDOUTS } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Standouts() {
  return (
    <section className="band">
      <div className="section container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Standouts</p>
            <h2 className="h2">A quiz funnel and a Shopify store.</h2>
          </div>
          <p className="section-aside">Two different ways to sell: one guides shoppers to the right product, the other tells the story behind it.</p>
        </div>
        <div className="grid grid-big">
          {STANDOUTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
