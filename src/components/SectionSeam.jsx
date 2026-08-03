// Decorative section-transition seam: a gentle plowed-furrow S-curve that
// blends one section's background into the next, so color changes read as
// a continuous flow rather than a hard stacked-box cut.
//
// The outer div is painted the *outgoing* section's color; the SVG path
// inside is filled with the *incoming* section's color, so the curve looks
// like the next section's field rising up through the current one.
export default function SectionSeam({ variant }) {
  if (variant === "ink-to-oat") {
    return (
      <div
        aria-hidden="true"
        role="presentation"
        className="h-10 w-full bg-ink sm:h-14"
      >
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="h-full w-full"
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            className="fill-oat"
          />
        </svg>
      </div>
    );
  }

  // variant === "oat-to-ink"
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className="h-10 w-full bg-oat sm:h-14"
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
          className="fill-ink"
        />
      </svg>
    </div>
  );
}
