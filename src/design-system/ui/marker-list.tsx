import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface MarkerListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
  /** 'check' = check-circle icon (role/experience highlights). 'dot' = plain bullet (skills/capabilities columns). */
  marker?: 'check' | 'dot';
}

/** Vertical list with a leading marker per item — canonical primitive behind IconList's check-circle and DotList's dot treatments. */
function MarkerList({ items, marker = 'dot', className, ...props }: MarkerListProps) {
  if (marker === 'check') {
    return (
      <ul className={cn('space-y-3', className)} {...props}>
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[var(--icon-green)] shrink-0 mt-0.5" />
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={cn('space-y-2', className)} {...props}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-foreground">
          <span className="text-primary mt-2.5 text-xs" aria-hidden="true">
            ●
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export { MarkerList };
