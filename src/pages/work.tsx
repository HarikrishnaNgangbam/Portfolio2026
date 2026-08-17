import { H1 } from '@/design-system/ui/h1';
import { ProjectCard } from '@/components/portfolio/project-card';
import { Reveal } from '@/components/reveal';
import { PROJECTS } from '@/data/projects';

function WorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <Reveal>
        <H1 size="hero">Work</H1>
        <p className="text-lg text-muted-foreground leading-relaxed mt-4">
          Featured projects showcasing my design process and impact
        </p>
        <div className="mt-6">
          <span className="px-3 py-1.5 text-sm rounded-full bg-accent text-primary font-medium">
            {PROJECTS.length} Projects
          </span>
        </div>
      </Reveal>
      <div className="space-y-6 mt-10">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export { WorkPage };
