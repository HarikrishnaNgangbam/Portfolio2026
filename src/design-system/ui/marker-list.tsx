import { cn } from '@/lib/utils';

export interface MarkerListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
  /** 'dot' = plain bullet (skills/capabilities columns). */
  marker?: 'dot';
}

/**
 * Vertical list with a leading dot marker per item — used for skills/capabilities
 * columns. The marker is a fixed-size shape (not a text glyph), so its
 * position is controlled entirely by our own margin rather than a font's
 * glyph metrics — the same technique Resume's Experience bullets already use,
 * and the reason this stays correctly centered on the first line even when
 * an item wraps onto multiple lines.
 */
function MarkerList({ items, marker: _marker, className, ...props }: MarkerListProps) {
  return (
    <ul className={cn('space-y-2', className)} {...props}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export { MarkerList };
