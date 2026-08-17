import { Briefcase, MapPin } from 'lucide-react';
import { Seo } from '@/components/seo';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { ExperienceCard } from '@/design-system/ui/experience-card';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { ProjectCard } from '@/components/portfolio/project-card';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Reveal } from '@/components/reveal';
import { useEffectiveProjects } from '@/lib/project-settings-store';
import { HOME_EXPERIENCE } from '@/data/experience';

function HomePage() {
  const projects = useEffectiveProjects();

  return (
    <div>
      <Seo
        title="Home"
        description="Multi-disciplinary designer with 10+ years building high-scale products across operating systems and diverse industries."
      />
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-block px-4 py-2 rounded-full bg-purple-700/70 backdrop-blur-xl border border-purple-500/50 text-sm font-medium text-white">
              Senior Product Designer at Microsoft
            </span>
            <H1 size="hero" className="mt-4">
              Hello, I'm Harikrishna
            </H1>
            <LeadParagraph className="mt-6">
              Multi-disciplinary designer with 10+ years building high-scale products
              across operating systems and diverse industries. I pair blue-sky vision
              with grounded execution, leveraging AI to uncover new opportunities. I
              thrive in zero-to-one product creation and in scaling ecosystems to their
              full potential.
            </LeadParagraph>
            <LeadParagraph className="mt-4">
              A tech enthusiast and DIY tinkerer who binge-watches gadget reviews so you
              don't have to. Your unofficial guide to the next smart buy. Engineer and
              industrial designer by degree, UX designer by lived experience.
            </LeadParagraph>
            <div className="flex items-center gap-3 pt-4 text-muted-foreground">
              <MapPin className="w-4 h-4" style={{ color: 'var(--icon-orange)' }} />
              Hyderabad, India
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--acrylic-border)] shadow-[var(--shadow-lg)]">
              <ImageWithFallback
                src="/images/shared/harikrishna-portrait.png"
                alt="Harikrishna - Senior Product Designer"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Reveal>
          <div className="flex items-start justify-between gap-4 flex-wrap mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-2">
                Case studies showcasing my design process and impact
              </p>
            </div>
            <span className="flex-shrink-0 px-3 py-1.5 text-sm rounded-full bg-accent text-primary font-medium">
              {projects.length} Projects
            </span>
          </div>
        </Reveal>
        <div className="space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <Reveal>
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground mb-8">
            <Briefcase className="w-7 h-7" style={{ color: 'var(--icon-blue)' }} />
            Work Experience
          </h2>
        </Reveal>
        <div className="space-y-6">
          {HOME_EXPERIENCE.map((exp, i) => (
            <Reveal key={exp.company} delay={i * 80}>
              <ExperienceCard {...exp} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Let's Connect */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <ContactSection />
        </Reveal>
      </section>
    </div>
  );
}

export { HomePage };
