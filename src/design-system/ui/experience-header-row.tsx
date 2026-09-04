import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { cn } from '@/lib/utils';

export interface ExperienceHeaderRowProps {
  logo?: string;
  logoAlt?: string;
  label: string;
  dates: string;
  labelClassName?: string;
  datesClassName?: string;
  className?: string;
}

/**
 * Presentational logo + primary label + right-aligned dates row shared by
 * Resume's experience list and Home's career timeline. No card, bullet,
 * timeline, or narrative logic — those stay page-specific.
 */
function ExperienceHeaderRow({
  logo,
  logoAlt,
  label,
  dates,
  labelClassName,
  datesClassName,
  className,
}: ExperienceHeaderRowProps) {
  return (
    <div className={cn('flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1', className)}>
      <h3 className={cn('font-bold text-foreground', logo && 'flex items-center gap-2', labelClassName)}>
        {logo && <ImageWithFallback src={logo} alt={logoAlt ?? ''} className="h-[0.9em] w-auto object-contain" />}
        {label}
      </h3>
      <span className={cn('text-sm text-muted-foreground', datesClassName)}>{dates}</span>
    </div>
  );
}

export { ExperienceHeaderRow };
