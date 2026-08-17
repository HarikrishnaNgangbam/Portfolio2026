import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  children: React.ReactNode;
}

/** Consistent H2 + spacing wrapper used between case-study modules. */
function Section({ title, children, className, ...props }: SectionProps) {
  return (
    <section className={cn('space-y-6', className)} {...props}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      )}
      {children}
    </section>
  );
}

export { Section };
