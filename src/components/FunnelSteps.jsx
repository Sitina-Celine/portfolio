// The funnel steps as small pills. While the card is hovered (or focused),
// the highlight walks through the steps one by one, so the flow is visible.
import { useEffect, useState } from "react";
import useReducedMotion from "../hooks/useReducedMotion.js";

export default function FunnelSteps({ steps, playing, dark = false }) {
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    if (!playing || reduced) {
      setCurrent(-1);
      return;
    }
    setCurrent(0);
    const t = setInterval(() => setCurrent((c) => (c + 1) % steps.length), 650);
    return () => clearInterval(t);
  }, [playing, reduced, steps.length]);

  return (
    <ol className={`steps${dark ? " steps-dark" : ""}`} aria-label="Funnel steps">
      {steps.map((step, i) => (
        <li key={step} className={`step${i === current ? " is-on" : ""}${current > i ? " is-done" : ""}`}>
          {step}
        </li>
      ))}
    </ol>
  );
}
