import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { ProjectCard } from '@/components/portfolio/project-card';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { useEffectiveProjects } from '@/lib/project-settings-store';

function WorkPage() {
  const projects = useEffectiveProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <Seo
        title="Work"
        description="Products, systems and ecosystems shaped across Microsoft and Gojek: cross-device continuity, operational platforms, customer experience and design leadership."
      />
      <Reveal>
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">Work</p>
        <H1 size="hero" className="mt-2">
          Products, systems and ecosystems I've had the privilege to shape.
        </H1>
        <LeadParagraph className="mt-6 max-w-2xl">
          Across Microsoft and Gojek, I've worked on problems that span devices, platforms,
          operations and design teams. These projects are different on the surface, but they
          share a common thread: understanding the system around the problem and finding
          where design can create leverage.
        </LeadParagraph>
        <div className="mt-6">
          <span className="px-3 py-1.5 text-sm rounded-full bg-accent text-primary font-medium">
            {projects.length} Projects
          </span>
        </div>
      </Reveal>
      <div className="space-y-6 mt-10">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} headingLevel="h2" />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 pt-10 border-t border-border">
          <CtaBand
            variant="plain"
            heading="Want the details?"
            links={
              <>
                {projects[0] && (
                  <Link
                    to={`/work/${projects[0].slug}`}
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Explore the case studies
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Looking for my career history? View Resume
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </>
            }
          >
            The case studies go deeper into the problems, decisions, trade-offs and outcomes
            behind the work.
          </CtaBand>
        </div>
      </Reveal>
    </div>
  );
}

export { WorkPage };
