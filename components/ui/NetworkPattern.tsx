export function NetworkPattern({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="320" cy="60" r="4" fill="#1e88e5" fillOpacity="0.6" />
      <circle cx="280" cy="120" r="3" fill="#1e88e5" fillOpacity="0.45" />
      <circle cx="340" cy="160" r="5" fill="#1e88e5" fillOpacity="0.7" />
      <circle cx="240" cy="180" r="3" fill="#1a233a" fillOpacity="0.25" />
      <circle cx="300" cy="220" r="4" fill="#1e88e5" fillOpacity="0.55" />
      <circle cx="200" cy="240" r="6" fill="#1e88e5" fillOpacity="0.8" />
      <circle cx="260" cy="280" r="3" fill="#1a233a" fillOpacity="0.2" />
      <circle cx="180" cy="300" r="4" fill="#1e88e5" fillOpacity="0.5" />
      <circle cx="120" cy="200" r="3" fill="#1a233a" fillOpacity="0.15" />
      <circle cx="80" cy="140" r="4" fill="#1e88e5" fillOpacity="0.4" />
      <path
        d="M320 60 L280 120 L340 160 L300 220 L200 240 L260 280 L180 300"
        stroke="#1e88e5"
        strokeOpacity="0.2"
        strokeWidth="1"
      />
      <path
        d="M80 140 L120 200 L200 240"
        stroke="#1a233a"
        strokeOpacity="0.12"
        strokeWidth="1"
      />
      <path
        d="M280 120 L240 180 L200 240"
        stroke="#1e88e5"
        strokeOpacity="0.15"
        strokeWidth="1"
        strokeDasharray="4 4"
      />
    </svg>
  )
}
