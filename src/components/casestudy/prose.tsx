import { cn } from '@/lib/utils';

export interface ProseProps {
  children: React.ReactNode;
  /** Highlighted callout style — used for key definition paragraphs. */
  callout?: boolean;
  className?: string;
}

/** Body paragraph(s). Supports inline rich text (bold/italic) passed as children. */
function Prose({ children, callout, className }: ProseProps) {
  if (callout) {
    return (
      <div
        className={cn(
          'rounded-2xl border border-primary/20 bg-accent/10 p-6 text-foreground leading-relaxed',
          className,
        )}
      >
        {children}
      </div>
    );
  }
  return <div className={cn('space-y-4 text-muted-foreground leading-relaxed', className)}>{children}</div>;
}

export { Prose };
