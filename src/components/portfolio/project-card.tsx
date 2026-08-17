import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { Badge } from '@/design-system/ui/badge';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import type { ProjectSummary } from '@/data/projects';

export interface ProjectCardProps {
  project: ProjectSummary;
  /**
   * Heading level for the project title, matching wherever the card sits in
   * the page's outline: h3 on Home (nested under the "Featured Projects"
   * h2), h2 on Work (the primary heading directly under the page's h1).
   */
  headingLevel?: 'h2' | 'h3';
}

function ProjectCard({ project, headingLevel: Heading = 'h3' }: ProjectCardProps) {
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>{project.period}</span>
            <span aria-hidden="true">•</span>
            <span>{project.role}</span>
          </div>
          <Heading className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </Heading>
          <p className="text-lg text-muted-foreground font-medium mt-1">
            {project.subtitle}
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
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
