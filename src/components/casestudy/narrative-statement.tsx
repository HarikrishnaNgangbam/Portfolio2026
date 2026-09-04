import { tint } from '@/lib/color';

export interface NarrativeStatementProps {
  color: string;
  supporting?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * A major narrative-pause moment — a big centered, tinted statement, distinct
 * from ordinary body content. Reserved for a case study's genuine conceptual
 * turns, not routine section headings.
 */
function NarrativeStatement({ color, supporting, children }: NarrativeStatementProps) {
  return (
    <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: tint(color, 6) }}>
      <p className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-snug max-w-2xl mx-auto">
        {children}
      </p>
      {supporting && (
        <div className="text-muted-foreground mt-4 max-w-xl mx-auto space-y-3">{supporting}</div>
      )}
    </div>
  );
}

export { NarrativeStatement };
