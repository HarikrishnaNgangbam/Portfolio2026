import { Check } from 'lucide-react';

export interface ChecklistSectionProps {
  intro?: React.ReactNode;
  items: React.ReactNode[];
  /** Bold, centered, blue-tinted closing statement — e.g. "This work repositioned Windows...". */
  closingStatement?: React.ReactNode;
}

/** Individually-boxed checkmark rows used for "Outcome" sections. */
function ChecklistSection({ intro, items, closingStatement }: ChecklistSectionProps) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 space-y-4">
      {intro && <p className="text-foreground">{intro}</p>}
      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-4 flex items-start gap-3"
          >
            <Check className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
            <span className="text-foreground">{item}</span>
          </div>
        ))}
      </div>
      {closingStatement && (
        <div className="rounded-xl border border-primary/30 p-5 text-center">
          <p className="font-semibold text-lg text-foreground">{closingStatement}</p>
        </div>
      )}
    </div>
  );
}

export { ChecklistSection };
