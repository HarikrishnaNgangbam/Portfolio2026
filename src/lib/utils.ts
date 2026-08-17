import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Accepts both lucide-react icons and locally-authored icon components (e.g. Linkedin). */
export type IconComponent = React.ComponentType<{
  className?: string;
  style?: React.CSSProperties;
}>;
