// Bold raspberry hero. The stack of real screenshots tilts gently with the mouse.
import { useRef, useState } from "react";
import { TEST_CARD } from "../data/projects.js";
import useReducedMotion from "../hooks/useReducedMotion.js";

const STACK = [
  { src: "/img/velour.jpg", host: "velour-lipstick.vercel.app", cls: "stack-a", position: "left top" },
  { src: "/img/sola.jpg", host: "sola-drinks.vercel.app", cls: "stack-b", position: "left top" },
  { src: "/img/quell-dash.jpg", host: "quell-nu.vercel.app/dashboard.html", cls: "stack-c", position: "left top" },
];

export default function Hero() {
  const reduced = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const box = useRef(null);

  function onMove(e) {
    if (reduced || !box.current) return;
    const r = box.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: x * 8, y: y * -8 });
  }

  return (
    <section id="top" className="hero">
      <div className="container hero-row">
        <div className="hero-copy">
          <p className="pill">
            <span className="pill-dot" />
            Open for work: remote, hybrid or on-site
          </p>
          <h1 className="hero-title">Landing pages that sell. Funnels that prove it.</h1>
          <p className="hero-sub">
            I'm Celine. I start with your customers: what they need, what makes them hesitate, and what makes them say yes.
            Then I design, build and measure the page around them.
          </p>
          <div className="hero-actions">
            <a className="btn btn-white" href="#work">See the work</a>
            <a className="btn btn-ghost" href="#contact">Contact me</a>
          </div>
          <p className="hero-note">Every checkout below works. Try it with the test card {TEST_CARD}.</p>
        </div>

        <div
          ref={box}
          className="hero-art"
          aria-hidden="true"
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        >
          <div className="stack" style={{ transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}>
            {STACK.map((s) => (
              <div key={s.cls} className={`stack-item ${s.cls}`}>
                <div className="frame">
                  <div className="frame-bar">
                    <span className="frame-dot" />
                    <span className="frame-dot" />
                    <span className="frame-dot" />
                    <span className="frame-url">{s.host}</span>
                  </div>
                  <img src={s.src} alt="" style={{ aspectRatio: "16 / 10", objectPosition: s.position }} />
                </div>
              </div>
            ))}
            <div className="stack-badge">
              <span>Built into Quell</span>
              <strong>A/B test + funnel dashboard</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
