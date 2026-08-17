import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { IconList } from '@/design-system/ui/icon-list';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';

export interface ExperienceCardProps {
  role: string;
  company: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  dates: string;
  location?: string;
  bullets: React.ReactNode[];
}

function ExperienceCard({
  role,
  company,
  companyLogo,
  companyLogoAlt,
  dates,
  location,
  bullets,
}: ExperienceCardProps) {
  return (
    <AcrylicCard variant="surface" interactive={false}>
      <h3 className="font-bold text-2xl md:text-3xl text-foreground">{role}</h3>
      <p className="text-muted-foreground mt-1 flex items-center gap-2 text-lg md:text-xl">
        {companyLogo && (
          <ImageWithFallback
            src={companyLogo}
            alt={companyLogoAlt ?? ''}
            className="h-[1em] w-auto object-contain flex-shrink-0"
          />
        )}
        {company}
      </p>
      <div className="text-sm text-muted-foreground mt-1">
        {dates}
        {location && (
          <>
            <span aria-hidden="true"> • </span>
            {location}
          </>
        )}
      </div>
      <div className="mt-4">
        <IconList items={bullets} />
      </div>
    </AcrylicCard>
  );
}

export { ExperienceCard };
