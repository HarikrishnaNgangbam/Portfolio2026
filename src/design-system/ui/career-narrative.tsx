import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';

export interface CareerNarrativeProps {
  company: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  role: string;
  dates: string;
  children: React.ReactNode;
}

/** Condensed career-chapter card: logo/company, role, dates, one narrative paragraph — lighter than the bullet-heavy ExperienceCard used on Resume. */
function CareerNarrative({ company, companyLogo, companyLogoAlt, role, dates, children }: CareerNarrativeProps) {
  return (
    <AcrylicCard variant="surface" interactive={false}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-bold text-xl md:text-2xl text-foreground flex items-center gap-2">
          {companyLogo && (
            <ImageWithFallback
              src={companyLogo}
              alt={companyLogoAlt ?? ''}
              className="h-[0.9em] w-auto object-contain"
            />
          )}
          {company}
        </h3>
        <span className="text-sm text-muted-foreground">{dates}</span>
      </div>
      <p className="text-muted-foreground mt-1">{role}</p>
      <p className="text-muted-foreground leading-relaxed mt-4">{children}</p>
    </AcrylicCard>
  );
}

export { CareerNarrative };
