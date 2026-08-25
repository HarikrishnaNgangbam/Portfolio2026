import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Badge } from '@/design-system/ui/badge';
import { ProjectSignal } from '@/components/portfolio/project-signal';
import type { ProjectSummary } from '@/data/projects';

export interface ProjectCardProps {
  project: ProjectSummary;
  /**
   * Heading level for the project title, matching wherever the card sits in
   * the page's outline: h3 on Home (nested under the "Selected Work" h2),
   * h2 on Work (the primary heading directly under the page's h1).
   */
  headingLevel?: 'h2' | 'h3';
  /**
   * `work` (default) = case-study framing (title/subtitle/description/tags),
   * used on /work and the /design-system showcase. `narrative` = a numbered,
   * editorial single-column framing (project.narrative). `compact` = a
   * grid-friendly vertical card (image on top, metadata below) for a
   * multi-column layout, used by Home's project grid. `narrative` and
   * `compact` fall back to `work` fields if `project.narrative` is absent.
   */
  variant?: 'work' | 'narrative' | 'compact';
  /** 1-based position, shown as a numeral badge in `narrative`/`compact` variants. */
  number?: number;
}

function ProjectCard({
  project,
  headingLevel: Heading = 'h3',
  variant = 'work',
  number,
}: ProjectCardProps) {
  const narrative = variant !== 'work' ? project.narrative : undefined;
  /** The project's design-classification signal — capabilities on /work's case-study framing, falling back to tags when a project has no narrative metadata. */
  const signal = variant === 'work' ? (project.narrative?.capabilities ?? project.tags) : undefined;

  if (variant === 'compact') {
    const tags = narrative?.capabilities ?? project.tags;
    /** Evidence is one verified string like "3.1M monthly alerts · 290K+ engaged users · 8.5% conversion" — split into stat/label pairs for display, never fabricated for projects that don't have one. */
    const stats = narrative?.evidence
      ?.split('·')
      .map((chunk) => chunk.trim())
      .filter(Boolean)
      .map((chunk) => {
        const [value, ...labelWords] = chunk.split(' ');
        return { value, label: labelWords.join(' ') };
      });

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

  return (
    <Link to={`/work/${project.slug}`} className="block">
      <AcrylicCard className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/5 flex-shrink-0 aspect-video rounded-2xl overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            <ImageWithFallback
              src={project.coverImage}
              alt={project.coverAlt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          {narrative ? (
            <>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                {number != null && (
                  <span className="text-sm font-mono text-muted-foreground">
                    {String(number).padStart(2, '0')}
                  </span>
                )}
                <ProjectSignal items={narrative.capabilities} />
              </div>
              <p className="text-sm font-medium text-primary italic">{narrative.label}</p>
              <Heading className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                {narrative.title}
              </Heading>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {narrative.description}
              </p>
              {narrative.evidence && (
                <p className="text-sm text-muted-foreground mt-3">{narrative.evidence}</p>
              )}
            </>
          ) : (
            <>
              {signal && <ProjectSignal items={signal} className="mb-2" />}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{project.period}</span>
                <span aria-hidden="true">•</span>
                <span>{project.role}</span>
              </div>
              <Heading className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mt-1">
                {project.title}
              </Heading>
              <p className="text-lg text-muted-foreground font-medium mt-1">
                {project.subtitle}
              </p>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {project.description}
              </p>
              {project.narrative?.evidence && (
                <p className="text-sm text-muted-foreground mt-3">{project.narrative.evidence}</p>
              )}
            </>
          )}
          <div className="flex items-center gap-2 text-primary font-medium mt-6 group-hover:gap-3 transition-all">
            View Case Study
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </AcrylicCard>
    </Link>
  );
}

export { ProjectCard };
