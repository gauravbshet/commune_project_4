export default function TreeMark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <path d="M50 30 C 40 20, 25 22, 22 12" />
        <path d="M50 30 C 58 20, 73 22, 76 12" />
        <path d="M50 30 C 42 24, 34 14, 36 4" />
        <path d="M50 30 C 58 24, 66 14, 64 4" />
        <path d="M50 30 L 50 8" />
        <path d="M50 30 C 44 34, 30 34, 20 26" />
        <path d="M50 30 C 56 34, 70 34, 80 26" />
        <path d="M50 30 L 50 66" />
        <path d="M50 66 C 40 66, 26 74, 18 70" />
        <path d="M50 66 C 60 66, 74 74, 82 70" />
        <path d="M18 72 C 30 78, 40 90, 32 100" />
        <path d="M82 72 C 70 78, 60 90, 68 100" />
        <path d="M50 66 C 46 78, 48 92, 50 104" />
      </g>
    </svg>
  );
}
