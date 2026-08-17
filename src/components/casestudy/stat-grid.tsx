import { cn } from '@/lib/utils';

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
}

const COLUMN_CLASSES: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/** Big-number metric cards used in "Metrics & Impact" / "Results" sections. */
function StatGrid({ stats, columns = 3 }: { stats: StatItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={cn('grid grid-cols-1 gap-4', COLUMN_CLASSES[columns])}>
      {stats.map((stat, i) => (
        <div
          key={i}
          className="rounded-2xl border border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl p-6 text-center"
        >
          <p className="text-4xl font-bold text-primary">{stat.value}</p>
          <p className="text-foreground font-medium mt-2">{stat.label}</p>
          {stat.sublabel && (
            <p className="text-muted-foreground text-sm mt-1">{stat.sublabel}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export { StatGrid };
