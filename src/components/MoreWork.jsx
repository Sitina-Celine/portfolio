import { MORE, TEST_CARD } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function MoreWork() {
  return (
    <section className="section container">
      <p className="eyebrow">More funnels</p>
      <h2 className="h2 h2-gap">Different products, different ways to sell.</h2>
      <div className="grid grid-small">
        {MORE.map((p, i) => (
          <ProjectCard key={p.id} project={p} size="small" delay={i * 70} />
        ))}
      </div>
      <p className="test-note">
        Try any checkout with the test card {TEST_CARD}, any future date and any CVC. No real money is taken.
      </p>
    </section>
  );
}
