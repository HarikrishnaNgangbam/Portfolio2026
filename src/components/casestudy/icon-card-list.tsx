import { cn, type IconComponent } from '@/lib/utils';

export interface IconCardItem {
  icon: IconComponent;
  iconColor?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  bullets?: React.ReactNode[];
}

export interface IconCardListProps {
  items: IconCardItem[];
  columns?: 1 | 2 | 3;
}

/** Bordered icon+title(+description|bullets) cards — used for Problem, Why Now, Design Strategy, etc. */
function IconCardList({ items, columns = 1 }: IconCardListProps) {
  return (
    <div
      className={cn(
        'grid gap-4',
        columns === 2 && 'md:grid-cols-2',
        columns === 3 && 'md:grid-cols-3',
      )}
    >
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-muted/30 p-5"
        >
          <div className="flex items-start gap-3">
            <item.icon
              className="w-5 h-5 shrink-0 mt-0.5"
              style={{ color: item.iconColor ?? 'var(--icon-blue)' }}
            />
            <div className="flex-1">
              <p className="font-semibold text-foreground">{item.title}</p>
              {item.description && (
                <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
              )}
              {item.bullets && (
                <ul className="mt-2 space-y-1.5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="text-muted-foreground text-sm flex gap-2">
                      <span aria-hidden="true">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { IconCardList };
