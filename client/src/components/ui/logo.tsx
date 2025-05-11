import aigenticLogo from '../../assets/aigenticbros-logo.png';

interface LogoProps {
  className?: string;
}

export function AIGenticBrosLogo({ className = "h-6 w-6" }: LogoProps) {
  return (
    <img 
      src={aigenticLogo} 
      alt="AIGentic Bros Logo" 
      className={className} 
    />
  );
}
