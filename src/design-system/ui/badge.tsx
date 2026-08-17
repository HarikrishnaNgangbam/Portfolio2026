import { cn } from '@/lib/utils';

/**
 * Tag-pill accent palette, sampled directly from the reference site's
 * rendered project-card tags. The original assigns a color per tag value
 * (not by position) — reproduced here with a stable hash so the same tag
 * text always resolves to the same color across the app.
 */
const PALETTE = [
  '93, 173, 226', // teal
  '167, 139, 250', // purple
  '236, 124, 157', // pink
  '34, 211, 238', // cyan
  '230, 126, 34', // orange
  '100, 116, 139', // slate
  '52, 211, 153', // emerald
  '0, 170, 19', // green
  '90, 157, 217', // blue
  '192, 132, 252', // violet
];

function hashColor(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

/** Darkens an "r, g, b" triple for use as accessible text color on a tinted background. */
function darken(rgb: string, amount = 0.35) {
  return rgb
    .split(',')
    .map((c) => Math.round(Number(c.trim()) * (1 - amount)))
    .join(', ');
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

/** Color-cycled tag pill used on project cards and case-study headers. */
function Badge({ className, children, ...props }: BadgeProps) {
  const rgb = hashColor(String(children));
  return (
    <span
      className={cn(
        'px-3 py-1.5 text-sm rounded-full backdrop-blur-xl font-medium',
        className,
      )}
      style={{
        backgroundColor: `rgba(${rgb}, 0.15)`,
        color: `rgb(${darken(rgb)})`,
        border: `1px solid rgba(${rgb}, 0.3)`,
      }}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge, hashColor, PALETTE };
