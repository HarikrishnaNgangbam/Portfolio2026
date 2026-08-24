import { cn } from '@/lib/utils';

export interface DecisionStripProps {
  /** The choice that was made, stated plainly. */
  decision: React.ReactNode;
  /** The reasoning behind it — why this and not the alternative. */
  why: React.ReactNode;
  className?: string;
}

/**
 * Names a single product/design decision and the reasoning behind it,
 * separate from ordinary narrative prose. Used sparingly, at the moments in
 * a case study that were genuinely a deliberate choice between
 * alternatives, not for every paragraph that happens to explain something.
 */
function DecisionStrip({ decision, why, className }: DecisionStripProps) {
  return (
    <div className={cn('rounded-2xl border p-6', className)} style={{ borderColor: 'color-mix(in srgb, var(--color-decision) 30%, var(--border))' }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-decision)' }}>
        Design Decision
      </p>
      <div className="grid sm:grid-cols-[6rem_1fr] gap-x-6 gap-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:pt-0.5">Decision</p>
        <p className="text-foreground font-medium leading-relaxed">{decision}</p>
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:pt-0.5">Why</p>
        <p className="text-muted-foreground leading-relaxed">{why}</p>
      </div>
    </div>
  );
}

export { DecisionStrip };
