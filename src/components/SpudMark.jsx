// Plain geometric line-art potato glyph — brand mark, not a cartoon icon.
export default function SpudMark({ className = "", stroke = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M15 20c-3.5 3.7-4.6 9.3-1.3 13.3 3.3 4 9.7 4.9 15 2.6 5.3-2.3 9-7.4 8.2-12.6-.8-5.2-5.5-9.3-11.1-9.9-3.6-.4-6.8.4-9.4 2.4-1.6 1.2-.4 3.1-1.4 4.2z"
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="19" cy="21" r="1.1" fill={stroke} />
      <circle cx="27" cy="18.5" r="1.1" fill={stroke} />
      <circle cx="30" cy="27" r="1.1" fill={stroke} />
      <circle cx="21" cy="30" r="1.1" fill={stroke} />
      <circle cx="24" cy="24" r="1.1" fill={stroke} />
    </svg>
  );
}
