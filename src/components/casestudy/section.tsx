import { cn } from '@/lib/utils';

export interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  title?: React.ReactNode;
  /**
   * Small uppercase category label above the title, e.g. "The insight" or
   * "The leadership move" — the two-tier eyebrow + narrative-headline
   * pattern used by the more editorial case studies (Kopdar, Family Safety).
   * Omit for the plain single-line heading used elsewhere.
   */
  eyebrow?: string;
  eyebrowColor?: string;
  /** Short supporting line under the title, for headings that need one more beat before the section body. */
  supporting?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Consistent H2 + spacing wrapper used between case-study modules. Doubles
 * as the shared "section heading" component: passing `eyebrow` renders the
 * eyebrow + large narrative-headline treatment in place of a plain title,
 * so case studies don't need a separate heading component for that pattern.
 */
function Section({ title, eyebrow, eyebrowColor = 'var(--primary)', supporting, children, className, ...props }: SectionProps) {
  const hasHeading = title || eyebrow;
  return (
    <section className={cn('space-y-6', className)} {...props}>
      {hasHeading && (
        <div>
          {eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: eyebrowColor }}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {title}
            </h2>
          )}
          {supporting && (
            <p className="text-muted-foreground leading-relaxed mt-3">{supporting}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

export { Section };
