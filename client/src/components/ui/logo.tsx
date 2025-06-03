
import { AIGenticBrosLogo as LogoSVG } from './AIGenticBrosLogo';

interface LogoProps {
  className?: string;
}

export function AIGenticBrosLogo({ className = "h-6 w-6" }: LogoProps) {
  return <LogoSVG className={className} />;
}
