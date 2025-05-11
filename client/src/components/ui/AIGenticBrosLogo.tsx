import React from 'react';

interface LogoProps {
  className?: string;
}

export function AIGenticBrosLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 800 800" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue background */}
      <rect width="800" height="800" fill="#2C5697" />
      
      {/* Robot Icons */}
      <g fill="white">
        {/* First Robot Head */}
        <rect x="320" y="220" width="65" height="50" rx="10" />
        <circle cx="340" cy="245" r="8" />
        <circle cx="365" cy="245" r="8" />
        <rect x="310" y="220" width="10" height="30" rx="5" />
        <rect x="385" y="220" width="10" height="30" rx="5" />
        <rect x="345" y="190" width="15" height="30" rx="7.5" />
        <circle cx="352.5" cy="180" r="10" />
        
        {/* First Robot Body */}
        <rect x="320" y="270" width="65" height="80" rx="5" />
        <rect x="320" y="350" width="15" height="80" rx="5" />
        <rect x="370" y="350" width="15" height="80" rx="5" />
        <path d="M320 400 Q310 430 290 430" stroke="white" strokeWidth="15" fill="none" />
        <path d="M385 400 Q395 430 415 430" stroke="white" strokeWidth="15" fill="none" />
        
        {/* Second Robot Head */}
        <rect x="420" y="220" width="65" height="50" rx="10" />
        <circle cx="440" cy="245" r="8" />
        <circle cx="465" cy="245" r="8" />
        <rect x="410" y="220" width="10" height="30" rx="5" />
        <rect x="485" y="220" width="10" height="30" rx="5" />
        <rect x="445" y="190" width="15" height="30" rx="7.5" />
        <circle cx="452.5" cy="180" r="10" />
        
        {/* Second Robot Body */}
        <rect x="420" y="270" width="65" height="80" rx="5" />
        <rect x="420" y="350" width="15" height="80" rx="5" />
        <rect x="470" y="350" width="15" height="80" rx="5" />
        <path d="M420 400 Q410 430 390 430" stroke="white" strokeWidth="15" fill="none" />
        <path d="M485 400 Q495 430 515 430" stroke="white" strokeWidth="15" fill="none" />
      </g>
      
      {/* Text */}
      <text x="400" y="570" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="75" textAnchor="middle">AIGENTIC BROS</text>
      <text x="400" y="620" fill="white" fontFamily="Arial, sans-serif" fontSize="28" textAnchor="middle">TEACHING AI-DRIVEN BUSINESS GROWTH</text>
    </svg>
  );
}