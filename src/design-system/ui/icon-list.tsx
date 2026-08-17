import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface IconListProps extends React.HTMLAttributes<HTMLUListElement> {
  items: React.ReactNode[];
}

/** Bulleted list with a check-circle icon, used for role highlights and experience bullets. */
function IconList({ items, className, ...props }: IconListProps) {
  return (
    <ul className={cn('space-y-3', className)} {...props}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-[var(--icon-green)] shrink-0 mt-0.5" />
          <span className="text-foreground">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export { IconList };
