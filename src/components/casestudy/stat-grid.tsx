import { cn, type IconComponent } from '@/lib/utils';
import { tint } from '@/lib/color';

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  icon?: IconComponent;
  color?: string;
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
          className={cn(
            'rounded-2xl border p-6',
            stat.icon ? 'text-left' : 'text-center border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl',
          )}
          style={
            stat.icon
              ? { borderColor: stat.color, backgroundColor: tint(stat.color ?? 'var(--icon-blue)', 8) }
              : undefined
          }
        >
          {stat.icon && <stat.icon className="w-6 h-6 mb-3" style={{ color: stat.color }} />}
          <p
            className={cn('text-4xl font-bold', !stat.icon && 'text-primary')}
            style={stat.icon ? { color: stat.color } : undefined}
          >
            {stat.value}
          </p>
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
