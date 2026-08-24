import { cn } from '@/lib/utils';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';

export interface CtaBandProps {
  heading: React.ReactNode;
  children?: React.ReactNode;
  links: React.ReactNode;
  /** `surface` (default) wraps the band in an AcrylicCard, for a page's single closing CTA. `plain` sits directly on the page background, for a lighter-weight prompt above other closing content. */
  variant?: 'surface' | 'plain';
  className?: string;
}

/** The closing "here's what to do next" prompt shared by Home and Work — a heading, optional supporting copy, and one or more links. */
function CtaBand({ heading, children, links, variant = 'surface', className }: CtaBandProps) {
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
