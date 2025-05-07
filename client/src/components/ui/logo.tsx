interface LogoProps {
  className?: string;
}

export function AIGenticBrosLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0,10)">
        {/* Robot head 1 */}
        <rect x="40" y="50" width="40" height="30" rx="10" stroke="currentColor" strokeWidth="8" fill="none" />
        <circle cx="55" cy="65" r="5" fill="currentColor" />
        <circle cx="65" cy="65" r="5" fill="currentColor" />
        <line x1="40" y1="90" x2="40" y2="120" stroke="currentColor" strokeWidth="8" />
        <line x1="80" y1="90" x2="80" y2="120" stroke="currentColor" strokeWidth="8" />
        {/* Robot antenna 1 */}
        <line x1="60" y1="50" x2="60" y2="35" stroke="currentColor" strokeWidth="8" />
        <circle cx="60" cy="30" r="5" fill="currentColor" />
        
        {/* Robot body 1 */}
        <rect x="35" y="90" width="50" height="50" rx="5" stroke="currentColor" strokeWidth="8" fill="none" />
        
        {/* Robot legs 1 */}
        <path d="M45 140 L45 165 Q45 175 35 175" stroke="currentColor" strokeWidth="8" fill="none" />
        <path d="M75 140 L75 165 Q75 175 85 175" stroke="currentColor" strokeWidth="8" fill="none" />
        
        {/* Robot head 2 */}
        <rect x="120" y="50" width="40" height="30" rx="10" stroke="currentColor" strokeWidth="8" fill="none" />
        <circle cx="135" cy="65" r="5" fill="currentColor" />
        <circle cx="145" cy="65" r="5" fill="currentColor" />
        <line x1="120" y1="90" x2="120" y2="120" stroke="currentColor" strokeWidth="8" />
        <line x1="160" y1="90" x2="160" y2="120" stroke="currentColor" strokeWidth="8" />
        {/* Robot antenna 2 */}
        <line x1="140" y1="50" x2="140" y2="35" stroke="currentColor" strokeWidth="8" />
        <circle cx="140" cy="30" r="5" fill="currentColor" />
        
        {/* Robot body 2 */}
        <rect x="115" y="90" width="50" height="50" rx="5" stroke="currentColor" strokeWidth="8" fill="none" />
        
        {/* Robot legs 2 */}
        <path d="M125 140 L125 165 Q125 175 115 175" stroke="currentColor" strokeWidth="8" fill="none" />
        <path d="M155 140 L155 165 Q155 175 165 175" stroke="currentColor" strokeWidth="8" fill="none" />
      </g>
    </svg>
  );
}
