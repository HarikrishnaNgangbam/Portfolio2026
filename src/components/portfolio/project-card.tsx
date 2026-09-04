import { Link } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Badge } from '@/design-system/ui/badge';
import { parseEvidenceStats } from '@/lib/parse-evidence-stats';
import { useCaseStudyLocked } from '@/lib/project-settings-store';
import type { ProjectSummary } from '@/data/projects';

export interface ProjectCardProps {
  project: ProjectSummary;
  /**
   * Heading level for the project title, matching wherever the card sits in
   * the page's outline: h3 on Home (nested under the "Selected Work" h2).
   */
  headingLevel?: 'h2' | 'h3';
  /** 1-based position, shown as a numeral badge. */
  number?: number;
}

/** Grid-friendly vertical project card (image on top, metadata below) used by Home's Selected Work section. */
function ProjectCard({ project, headingLevel: Heading = 'h3', number }: ProjectCardProps) {
  const narrative = project.narrative;
  const tags = narrative?.capabilities ?? project.tags;
  const stats = parseEvidenceStats(narrative?.evidence);
  const locked = useCaseStudyLocked(project.slug);

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group block rounded-xl border border-border bg-card overflow-hidden transition-colors duration-200 hover:border-[var(--icon-purple)]/50"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        {number != null && (
          <span className="absolute top-2.5 left-2.5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-background/90 text-[11px] font-bold text-foreground">
            {String(number).padStart(2, '0')}
          </span>
        )}
        {locked && (
          <span
            className="absolute top-2.5 right-2.5 z-10 flex items-center justify-center w-6 h-6 rounded-full bg-background/90 text-foreground"
            aria-label="Password protected"
            title="Password protected"
          >
            <Lock className="w-3 h-3" />
          </span>
        )}
        <ImageWithFallback
          src={project.coverImage}
          alt={project.coverAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        {project.companyLogo && (
          <ImageWithFallback
            src={project.companyLogo}
            alt={project.companyLogoAlt ?? ''}
            className="h-3.5 w-auto object-contain mb-2"
          />
        )}
        <Heading className="text-[15px] font-semibold text-foreground leading-snug group-hover:text-[var(--icon-purple)] transition-colors">
          {narrative?.title ?? project.title}
        </Heading>
        {narrative?.label && (
          <p className="text-xs text-muted-foreground italic mt-1">{narrative.label}</p>
        )}
        <div className="flex flex-wrap gap-1 mt-2.5">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} className="text-[10px] px-1.5 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-bold text-sm text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export { ProjectCard };
