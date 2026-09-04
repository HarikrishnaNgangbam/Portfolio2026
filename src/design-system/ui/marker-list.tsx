import { cn } from '@/lib/utils';

export interface MarkerListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
  /** 'dot' = plain bullet (skills/capabilities columns). */
  marker?: 'dot';
}

/** Vertical list with a leading dot marker per item — used for skills/capabilities columns. */
function MarkerList({ items, marker: _marker, className, ...props }: MarkerListProps) {
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
