import { useState } from "react";
import { FEATURED as F } from "../data/projects.js";
import BrowserFrame from "./BrowserFrame.jsx";
import FunnelSteps from "./FunnelSteps.jsx";
import Reveal from "./Reveal.jsx";

export default function Featured() {
  const [hover, setHover] = useState(false);

  return (
    <section id="work" className="section container">
      <p className="eyebrow">Featured project</p>
      <Reveal className="featured" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className="featured-media">
          {F.images.map((img) => (
            <BrowserFrame key={img.src} src={img.src} alt={img.alt} url={img.url} position={img.position} />
          ))}
        </div>
        <div className="featured-body">
          <div className="featured-copy">
            <p className="label">{F.label}</p>
            <h2 className="h2">{F.title}</h2>
            <p className="lead">{F.text}</p>
            <FunnelSteps steps={F.steps} playing={hover} />
          </div>
          <div className="featured-actions">
            <a className="btn btn-accent" href={F.url} target="_blank" rel="noreferrer">View the funnel</a>
            <a className="btn btn-outline" href={F.dashboardUrl} target="_blank" rel="noreferrer">View the dashboard</a>
            <p className="featured-tech">{F.tech}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
