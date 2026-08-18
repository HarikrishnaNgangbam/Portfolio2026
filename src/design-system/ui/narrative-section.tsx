import { cn } from '@/lib/utils';

export interface NarrativeSectionProps {
  heading: React.ReactNode;
  /** Heading level in the surrounding page outline. Defaults to h2. */
  headingLevel?: 'h1' | 'h2' | 'h3';
  supportingText?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Heading + optional supporting paragraph + content, the shape repeated by
 * every editorial section on Home and About. Keeps heading typography
 * (size, weight, spacing) consistent without each page re-declaring the
 * same className string.
 */
function NarrativeSection({
  heading,
  headingLevel: Heading = 'h2',
  supportingText,
  className,
  children,
}: NarrativeSectionProps) {
  return (
    <div className={cn('space-y-8', className)}>
      <div>
        <Heading className="text-3xl md:text-4xl font-bold text-foreground">
          {heading}
        </Heading>
        {supportingText && (
          <p className="text-muted-foreground mt-3 max-w-2xl leading-relaxed">
            {supportingText}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export { NarrativeSection };
