import { cn } from '@/lib/utils';

export type EvidenceKind =
  | 'shipped'
  | 'exploration'
  | 'system-model'
  | 'design-exploration'
  | 'directional-outcome'
  | 'concept';

const EVIDENCE_META: Record<EvidenceKind, { label: string; color: string }> = {
  shipped: { label: 'Shipped experience', color: 'var(--color-outcome)' },
  exploration: { label: 'Product exploration', color: 'var(--color-evidence)' },
  'system-model': { label: 'System model', color: 'var(--color-insight)' },
  'design-exploration': { label: 'Design exploration', color: 'var(--color-evidence)' },
  'directional-outcome': { label: 'Directional outcome', color: 'var(--color-outcome)' },
  concept: { label: 'Concept', color: 'var(--color-decision)' },
};

/**
 * Small, quiet marker distinguishing what kind of evidence an image or
 * video represents — the portfolio mixes real shipped-product screenshots
 * with conceptual/system artifacts, and this keeps that distinction
 * legible without a loud badge competing with the visual itself.
 */
function EvidenceLabel({ kind, className }: { kind: EvidenceKind; className?: string }) {
  const meta = EVIDENCE_META[kind];
  return (
    <span
      className={cn('inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide', className)}
      style={{ color: meta.color }}
    >
      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: meta.color }} aria-hidden="true" />
      {meta.label}
    </span>
  );
}

export { EvidenceLabel };
