import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
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
   * used on /work and the /design-system showcase. `narrative` = Home's
   * "Selected Work" framing (project.narrative), numbered and editorial.
   * Falls back to `work` fields if `project.narrative` is absent.
   */
  variant?: 'work' | 'narrative';
  /** 1-based position, shown as a numeral badge in `narrative` variant. */
  number?: number;
}

function ProjectCard({
  project,
  headingLevel: Heading = 'h3',
  variant = 'work',
  number,
}: ProjectCardProps) {
  const narrative = variant === 'narrative' ? project.narrative : undefined;
  /** The project's design-classification signal — capabilities on /work's case-study framing, falling back to tags when a project has no narrative metadata. */
  const signal = variant === 'work' ? (project.narrative?.capabilities ?? project.tags) : undefined;

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
