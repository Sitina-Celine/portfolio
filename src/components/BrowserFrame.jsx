// A screenshot inside a simple browser window, with the site's address in the bar.
// The frame tells visitors "this is a website", and clicking it opens the live site.

export default function BrowserFrame({ src, alt, url, position = "left top", ratio = "16 / 10", small = false, link = true }) {
  const host = url.replace(/^https?:\/\//, "");
  const frame = (
    <div className={`frame${small ? " frame-small" : ""}`}>
      <div className="frame-bar">
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="frame-url">{host}</span>
      </div>
      <img src={src} alt={alt} loading="lazy" style={{ aspectRatio: ratio, objectPosition: position }} />
    </div>
  );
  if (!link) return frame;
  return (
    <a className="frame-link" href={url} target="_blank" rel="noreferrer" aria-label={`Open ${alt}, live site`}>
      {frame}
    </a>
  );
}
