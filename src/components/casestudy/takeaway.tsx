import { cn } from '@/lib/utils';

export interface TakeawayProps {
  /** The one memorable line the section should be remembered for. */
  children: React.ReactNode;
  /** Optional second line grounding the takeaway in what it means going forward. */
  supporting?: React.ReactNode;
  className?: string;
}

/**
 * Closes a section with one memorable idea, set apart from ordinary body
 * copy by a small "Takeaway" kicker. This is the recurring pattern behind
 * every case study's closing statement — kept as one shared component
 * instead of a hand-styled centered paragraph re-implemented per page.
 */
function Takeaway({ children, supporting, className }: TakeawayProps) {
  return (
    <div className={cn('text-center py-6', className)}>
      <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Takeaway</p>
      <p className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto leading-snug">
        {children}
      </p>
      {supporting && (
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto leading-relaxed">{supporting}</p>
      )}
    </div>
  );
}

export { Takeaway };
