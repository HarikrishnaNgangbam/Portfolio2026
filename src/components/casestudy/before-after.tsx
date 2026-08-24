import { ArrowRight, ArrowDown } from 'lucide-react';
import { cn, type IconComponent } from '@/lib/utils';

export interface BeforeAfterProps {
  before: React.ReactNode;
  after: React.ReactNode;
  /** Accent color for the "after" side and the transformation arrow. */
  color?: string;
  className?: string;
}

/**
 * Two-column transformation panel (manual → automated, fragmented → unified,
 * restart → resume). `before`/`after` accept any content, from a single line
 * of text to a full diagram, so the same shape works for a compact
 * one-line contrast or a richer side-by-side comparison.
 */
function BeforeAfter({ before, after, color = 'var(--icon-teal)', className }: BeforeAfterProps) {
  return (
    <div className={cn('grid sm:grid-cols-2 gap-4 items-stretch', className)}>
      <div className="rounded-xl border border-border p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Before</p>
        {before}
      </div>
      <div
        className="rounded-xl border-2 p-5"
        style={{ borderColor: color, backgroundColor: `color-mix(in srgb, ${color} 6%, transparent)` }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color }}>After</p>
        {after}
      </div>
    </div>
  );
}

export interface BeforeAfterCompactProps {
  icon: IconComponent;
  before: React.ReactNode;
  after: React.ReactNode;
  color?: string;
  className?: string;
}

/** A single-card, single-line variant of BeforeAfter for dense grids of many small transformations. */
function BeforeAfterCompact({ icon: Icon, before, after, color = 'var(--icon-teal)', className }: BeforeAfterCompactProps) {
  return (
    <div className={cn('rounded-xl border border-border p-5', className)}>
      <Icon className="w-5 h-5 mb-3" style={{ color }} />
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Before</p>
      <p className="font-medium text-foreground">{before}</p>
      <div className="flex items-center gap-2 my-2">
        <ArrowDown className="w-4 h-4" style={{ color }} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>After</p>
      <p className="font-medium text-foreground">{after}</p>
    </div>
  );
}

export interface BeforeAfterInlineItem {
  label: string;
  sublabel?: string;
}

/** A compact single-row before → after pair for a short textual contrast (e.g. "Connected devices" → "A system that moves with the user"), with no icon or card padding around either side. */
function BeforeAfterInline({
  before,
  after,
  color = 'var(--icon-teal)',
}: {
  before: BeforeAfterInlineItem;
  after: BeforeAfterInlineItem;
  color?: string;
}) {
  return (
    <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-center">
      <div className="rounded-xl border border-border p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Before</p>
        <p className="font-semibold text-foreground">{before.label}</p>
        {before.sublabel && <p className="text-muted-foreground text-sm mt-1">{before.sublabel}</p>}
      </div>
      <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto rotate-90 sm:rotate-0" aria-hidden="true" />
      <div
        className="rounded-xl border-2 p-5"
        style={{ borderColor: color, backgroundColor: `color-mix(in srgb, ${color} 6%, transparent)` }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color }}>After</p>
        <p className="font-semibold text-foreground">{after.label}</p>
        {after.sublabel && <p className="text-muted-foreground text-sm mt-1">{after.sublabel}</p>}
      </div>
    </div>
  );
}

export { BeforeAfter, BeforeAfterCompact, BeforeAfterInline };
