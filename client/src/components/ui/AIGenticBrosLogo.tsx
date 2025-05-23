import React from 'react';

interface LogoProps {
  className?: string;
}

export function AIGenticBrosLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 1024 1024" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue background */}
      <rect width="1024" height="1024" fill="#4A7AC7" />
      
      {/* Robot Icons */}
      <g fill="white" stroke="white" strokeWidth="8">
        {/* First Robot */}
        <g transform="translate(250, 180)">
          {/* Head */}
          <rect x="20" y="20" width="80" height="60" rx="15" fill="none" stroke="white" strokeWidth="10" />
          <circle cx="40" cy="50" r="10" fill="white" />
          <circle cx="80" cy="50" r="10" fill="white" />
          
          {/* Antenna */}
          <line x1="60" y1="20" x2="60" y2="0" strokeWidth="8" />
          <circle cx="60" cy="-5" r="12" fill="white" />
          
          {/* Body */}
          <rect x="10" y="80" width="100" height="100" rx="8" fill="none" stroke="white" strokeWidth="10" />
          
          {/* Arms */}
          <line x1="10" y1="120" x2="-20" y2="120" strokeWidth="8" />
          <line x1="110" y1="120" x2="140" y2="120" strokeWidth="8" />
          
          {/* Legs */}
          <line x1="35" y1="180" x2="35" y2="220" strokeWidth="8" />
          <line x1="85" y1="180" x2="85" y2="220" strokeWidth="8" />
          
          {/* Feet */}
          <path d="M35 220 Q25 230 15 230" fill="none" strokeWidth="8" />
          <path d="M85 220 Q95 230 105 230" fill="none" strokeWidth="8" />
        </g>
        
        {/* Second Robot */}
        <g transform="translate(520, 180)">
          {/* Head */}
          <rect x="20" y="20" width="80" height="60" rx="15" fill="none" stroke="white" strokeWidth="10" />
          <circle cx="40" cy="50" r="10" fill="white" />
          <circle cx="80" cy="50" r="10" fill="white" />
          
          {/* Antenna */}
          <line x1="60" y1="20" x2="60" y2="0" strokeWidth="8" />
          <circle cx="60" cy="-5" r="12" fill="white" />
          
          {/* Body */}
          <rect x="10" y="80" width="100" height="100" rx="8" fill="none" stroke="white" strokeWidth="10" />
          
          {/* Arms */}
          <line x1="10" y1="120" x2="-20" y2="120" strokeWidth="8" />
          <line x1="110" y1="120" x2="140" y2="120" strokeWidth="8" />
          
          {/* Legs */}
          <line x1="35" y1="180" x2="35" y2="220" strokeWidth="8" />
          <line x1="85" y1="180" x2="85" y2="220" strokeWidth="8" />
          
          {/* Feet */}
          <path d="M35 220 Q25 230 15 230" fill="none" strokeWidth="8" />
          <path d="M85 220 Q95 230 105 230" fill="none" strokeWidth="8" />
        </g>
      </g>
      
      {/* Text */}
      <text x="512" y="600" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="90" textAnchor="middle">AIGENTIC BROS</text>
      <text x="512" y="670" fill="white" fontFamily="Arial, sans-serif" fontSize="36" textAnchor="middle">TEACHING AI-DRIVEN BUSINESS GROWTH</text>
    </svg>
  );
}