import { cn } from '@/lib/utils';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { tint } from '@/lib/color';

export interface CtaBandProps {
  heading: React.ReactNode;
  children?: React.ReactNode;
  links: React.ReactNode;
  /** Primary CTA button, only used by the `panel` variant (rendered under the heading, on the left). */
  button?: React.ReactNode;
  /**
   * `surface` (default) wraps the band in an AcrylicCard, for a page's
   * single closing CTA. `plain` sits directly on the page background, for a
   * lighter-weight prompt above other closing content. `panel` is a
   * three-column editorial layout (heading + button / supporting copy /
   * links) on a tinted surface, used by Home's closing CTA.
   */
  variant?: 'surface' | 'plain' | 'panel';
  className?: string;
}

/** The closing "here's what to do next" prompt shared by Home and Work — a heading, optional supporting copy, and one or more links. */
function CtaBand({ heading, children, links, button, variant = 'surface', className }: CtaBandProps) {
  if (variant === 'panel') {
    return (
      <div
        className={cn('rounded-2xl border p-8 md:p-10 grid md:grid-cols-3 gap-8 md:gap-10 items-start', className)}
        style={{ borderColor: tint('var(--icon-purple)', 25), backgroundColor: tint('var(--icon-purple)', 6) }}
      >
        <div>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-snug">{heading}</h2>
          {button && <div className="mt-5">{button}</div>}
        </div>
        {children && <div className="text-muted-foreground leading-relaxed">{children}</div>}
        <div>{links}</div>
      </div>
    );
  }

  const content = (
    <>
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">{heading}</h2>
      {children && (
        <p className="text-muted-foreground leading-relaxed mt-3 md:mt-4 max-w-xl mx-auto">{children}</p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6">{links}</div>
    </>
  );

  if (variant === 'plain') {
    return <div className={cn('text-center', className)}>{content}</div>;
  }

  return (
    <AcrylicCard variant="surface" interactive={false} className={cn('text-center', className)}>
      {content}
    </AcrylicCard>
  );
}

export { CtaBand };
