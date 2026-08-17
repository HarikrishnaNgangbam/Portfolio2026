import { cn } from '@/lib/utils';

export interface AcrylicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `base` = interactive project-card style (lifts on hover). `surface` = static content card. */
  variant?: 'base' | 'surface';
  interactive?: boolean;
}

/** The translucent "glass" card used throughout the site for project, experience, and contact cards. */
function AcrylicCard({
  className,
  variant = 'base',
  interactive = variant === 'base',
  ...props
}: AcrylicCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-[var(--acrylic-border)] backdrop-blur-xl shadow-[var(--shadow-md)] p-6 md:p-8 transition-all duration-300',
        variant === 'base' ? 'bg-[var(--acrylic-base)]' : 'bg-[var(--acrylic-surface)]',
        'hover:shadow-[var(--shadow-lg)]',
        interactive &&
          'group cursor-pointer hover:border-[var(--acrylic-border-hover)] hover:-translate-y-1',
        className,
      )}
      {...props}
    />
  );
}

export { AcrylicCard };
