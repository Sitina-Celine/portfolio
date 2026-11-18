import { useState } from "react";
import BrowserFrame from "./BrowserFrame.jsx";
import FunnelSteps from "./FunnelSteps.jsx";
import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project, size = "big", delay = 0 }) {
  const [hover, setHover] = useState(false);
  const small = size === "small";

  return (
    <Reveal
      as="article"
      className={`card card-${size}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <div className="card-media">
        <BrowserFrame src={project.img} alt={project.name} url={project.url} position={project.position} ratio={small ? "4 / 3" : "16 / 10"} small={small} />
      </div>
      <div className="card-body">
        <p className="label">{project.label}</p>
        <h3 className="card-title">{project.name}</h3>
        <p className="card-text">{project.text}</p>
        <FunnelSteps steps={project.steps} playing={hover} />
        <div className="card-actions">
          <a className={small ? "btn btn-outline btn-sm" : "btn btn-ink btn-sm"} href={project.url} target="_blank" rel="noreferrer">
            View live site
          </a>
          {project.tech && <span className="card-tech">{project.tech}</span>}
        </div>
      </div>
    </Reveal>
  );
}
