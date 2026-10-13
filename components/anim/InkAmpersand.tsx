/** The firm's ampersand, written in ink on page load: the outline draws, then the fill seeps in. */
export function InkAmpersand({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 480" className={className} aria-hidden="true">
      <text x="200" y="400" textAnchor="middle" className="ink-amp">
        &amp;
      </text>
    </svg>
  );
}
