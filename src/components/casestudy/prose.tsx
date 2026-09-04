import { cn } from '@/lib/utils';

export type CalloutKind = 'insight' | 'outcome' | 'note';

const CALLOUT_KIND_META: Record<CalloutKind, { label: string; color: string }> = {
  insight: { label: 'Insight', color: 'var(--color-insight)' },
  outcome: { label: 'Outcome', color: 'var(--color-outcome)' },
  note: { label: 'Note', color: 'var(--color-warning)' },
};

export interface ProseProps {
  children: React.ReactNode;
  /** Highlighted callout style — used for key definition paragraphs. */
  callout?: boolean;
  /** Labels the callout's semantic role with a small kicker and a matching accent border. Omit for the plain neutral callout used everywhere else. */
  kind?: CalloutKind;
  className?: string;
}

/** Body paragraph(s). Supports inline rich text (bold/italic) passed as children. */
function Prose({ children, callout, kind, className }: ProseProps) {
  if (callout) {
    const meta = kind ? CALLOUT_KIND_META[kind] : undefined;
    return (
      <div
        className={cn(
          'rounded-2xl border p-6 text-foreground leading-relaxed',
          meta ? 'border-l-4' : 'border-primary/20 bg-accent/10',
          className,
        )}
        style={meta ? { borderColor: 'color-mix(in srgb, var(--border) 100%, transparent)', borderLeftColor: meta.color, backgroundColor: `color-mix(in srgb, ${meta.color} 5%, transparent)` } : undefined}
      >
        {meta && (
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: meta.color }}>
            {meta.label}
          </p>
        )}
        {children}
      </div>
    );
  }
  return <div className={cn('space-y-4 text-muted-foreground leading-relaxed', className)}>{children}</div>;
}

export { Prose };
