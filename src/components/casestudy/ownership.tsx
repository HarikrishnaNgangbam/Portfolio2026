import { Target, Layers, Sparkles, Users, ArrowRight, TrendingUp } from 'lucide-react';
import { IconCardList } from '@/components/casestudy/icon-card-list';

export type OwnershipDimension = 'vision' | 'system' | 'experience' | 'collaboration' | 'execution' | 'impact';

export interface OwnershipItem {
  dimension: OwnershipDimension;
  description: React.ReactNode;
}

const DIMENSION_META: Record<OwnershipDimension, { label: string; icon: typeof Target; color: string }> = {
  vision: { label: 'Vision', icon: Target, color: 'var(--icon-blue)' },
  system: { label: 'System', icon: Layers, color: 'var(--icon-purple)' },
  experience: { label: 'Experience', icon: Sparkles, color: 'var(--icon-teal)' },
  collaboration: { label: 'Collaboration', icon: Users, color: 'var(--icon-orange)' },
  execution: { label: 'Execution', icon: ArrowRight, color: 'var(--icon-green)' },
  impact: { label: 'Impact', icon: TrendingUp, color: 'var(--icon-green)' },
};

/**
 * "What I owned" — the shared ownership pattern used in place of a generic
 * role bullet list. Every case study maps its real responsibilities onto
 * the same five dimensions (Vision / System / Experience / Collaboration /
 * Execution), styled identically everywhere, so seniority reads the same
 * way across every project instead of each page inventing its own grid.
 */
const COLUMNS_BY_COUNT: Record<number, 1 | 2 | 3> = { 1: 1, 2: 2, 3: 3, 4: 2, 5: 3 };

function Ownership({ items }: { items: OwnershipItem[] }) {
  return (
    <IconCardList
      columns={COLUMNS_BY_COUNT[items.length] ?? 3}
      items={items.map(({ dimension, description }) => {
        const meta = DIMENSION_META[dimension];
        return {
          icon: meta.icon,
          iconColor: meta.color,
          title: meta.label,
          description,
        };
      })}
    />
  );
}

export { Ownership };
