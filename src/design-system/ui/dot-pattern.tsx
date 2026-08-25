import { cn } from '@/lib/utils';

export interface DotPatternProps {
  className?: string;
  /** Spacing between dot centers, in pixels. */
  spacing?: number;
  /** Dot radius, in pixels. */
  size?: number;
  color?: string;
}

/**
 * Restrained decorative dot grid — a repeating radial-gradient rather than
 * an SVG, so it scales to fill any container with no markup per dot. Purely
 * decorative: rendered aria-hidden, never used to convey information.
 */
function DotPattern({ className, spacing = 16, size = 1.5, color = 'var(--border)' }: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} ${size}px, transparent ${size}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  );
}

export { DotPattern };
