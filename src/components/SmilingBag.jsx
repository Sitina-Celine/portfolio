// The smiling shopping bag in the contact card. Decorative only.
// It bobs, its happy eyes squeeze now and then, and small notes float up from it.

const NOTES = [
  { text: "New order", cls: "note-ink" },
  { text: "+ $45", cls: "note-white" },
  { text: "Happy customer", cls: "note-mint" },
];

export default function SmilingBag() {
  return (
    <div className="bag-scene" aria-hidden="true">
      {NOTES.map((n, i) => (
        <span key={n.text} className={`note ${n.cls}`} style={{ animationDelay: `${i * 1.5}s` }}>
          {n.text}
        </span>
      ))}
      <span className="spark spark-a" />
      <span className="spark spark-b" />
      <span className="spark spark-c" />
      <div className="bag">
        <svg width="150" height="160" viewBox="0 0 150 160">
          <path d="M48 52 C48 22 102 22 102 52" fill="none" stroke="#16161A" strokeWidth="7" strokeLinecap="round" />
          <rect x="14" y="46" width="122" height="108" rx="24" className="bag-body" />
          <g className="bag-eyes">
            <path d="M45 95 Q54 83 63 95" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
            <path d="M87 95 Q96 83 105 95" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          </g>
          <path d="M54 114 Q75 134 96 114" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
          <circle cx="40" cy="112" r="6" fill="#FFFFFF" opacity="0.25" />
          <circle cx="110" cy="112" r="6" fill="#FFFFFF" opacity="0.25" />
        </svg>
      </div>
      <div className="bag-shadow" />
    </div>
  );
}
