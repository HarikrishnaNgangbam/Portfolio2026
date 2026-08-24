import { Link } from 'react-router-dom';
import { MapPin, ArrowDown, ArrowRight } from 'lucide-react';
import { Seo } from '@/components/seo';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { EditorialColumn } from '@/design-system/ui/editorial-column';
import { PrincipleBlock } from '@/design-system/ui/principle-block';
import { CareerNarrative } from '@/design-system/ui/career-narrative';
import { buttonVariants } from '@/design-system/ui/button';
import { ProjectCard } from '@/components/portfolio/project-card';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { useEffectiveProjects } from '@/lib/project-settings-store';
import { EXPERIENCE, EARLIER_COMPANIES } from '@/data/experience';
import { HOME_PROJECT_ORDER, type ProjectSummary } from '@/data/projects';
import { LOCATION } from '@/data/contact';

const MICROSOFT = EXPERIENCE.find((e) => e.company === 'Microsoft - Windows')!;
const GOJEK = EXPERIENCE.find((e) => e.company === 'Gojek Tech')!;

const LEAD_PRINCIPLES = [
  {
    title: 'Make complexity visible',
    iconColor: 'var(--icon-blue)',
    description:
      'I use systems maps, prototypes, frameworks and clear narratives to turn ambiguity into something teams can reason about together.',
  },
  {
    title: 'Design for the system',
    iconColor: 'var(--icon-purple)',
    description:
      'I look beyond the primary user to understand the operators, partners, workflows and organizational constraints that make the experience possible.',
  },
  {
    title: 'Give design a seat at the decision table',
    iconColor: 'var(--icon-teal)',
    description:
      'I work alongside Product and Engineering to frame problems, shape direction, define priorities and take ownership of outcomes, not just downstream experiences.',
  },
  {
    title: 'Build capability, not dependency',
    iconColor: 'var(--icon-orange)',
    description:
      'Through mentoring, design systems, governance and AI-assisted exploration, I look for ways to help teams do better work without always needing more design capacity.',
  },
];

const PROBLEMS_I_LIKE = [
  {
    heading: "The obvious solution isn't obvious",
    description: 'Ambiguous problems are often where design can create the most leverage.',
  },
  {
    heading: "The user isn't the only stakeholder",
    description: 'I enjoy understanding the systems, teams and incentives around an experience.',
  },
  {
    heading: 'The product needs to evolve',
    description: 'I like designing foundations that can accommodate what comes next.',
  },
  {
    heading: "Technology changes what's possible",
    description:
      "I'm especially interested in how AI can make products more adaptive, and how it can change the way teams discover and create them.",
  },
];

function HomePage() {
  const effectiveProjects = useEffectiveProjects();
  const projects = HOME_PROJECT_ORDER.map((slug) =>
    effectiveProjects.find((p) => p.slug === slug),
  ).filter((p): p is ProjectSummary => p != null);

  return (
    <div>
      <Seo
        raw
        title="Harikrishna Ngangbam | Design Leader | Product Designer"
        description="Senior Product Designer at Microsoft with 10+ years designing products, systems and ecosystems, from cross-device experiences at Microsoft to operational platforms at Gojek. Exploring 0 to 1 product creation and AI-assisted design practice."
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="inline-block px-4 py-2 rounded-full bg-purple-700/70 backdrop-blur-xl border border-purple-500/50 text-sm font-medium text-white">
              Design Leader · Microsoft
            </span>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mt-4">
              I'm Harikrishna.
            </p>
            <H1 size="hero" className="mt-1">
              I design through complexity.
            </H1>
            <LeadParagraph className="mt-6">
              From cross-device experiences at Microsoft to operational ecosystems at Gojek,
              I've spent 10+ years turning complex product and human problems into systems
              that work, and helping teams navigate the complexity behind them.
            </LeadParagraph>
            <LeadParagraph className="mt-4">
              Engineer and industrial designer by training. Product designer by experience.
              Tech enthusiast, DIY tinkerer and unapologetic gadget nerd.
            </LeadParagraph>
            <div className="flex items-center gap-3 pt-4 text-muted-foreground">
              <MapPin className="w-4 h-4" style={{ color: 'var(--icon-orange)' }} />
              {LOCATION}
            </div>
            <a href="#selected-work" className={buttonVariants({ variant: 'outline', className: 'mt-6' })}>
              Explore my work
              <ArrowDown className="w-4 h-4" />
            </a>
          </Reveal>
          <Reveal delay={150}>
            <div className="aspect-square rounded-2xl overflow-hidden border border-[var(--acrylic-border)] shadow-[var(--shadow-lg)]">
              <ImageWithFallback
                src="/images/shared/harikrishna-portrait.webp"
                alt="Harikrishna - Senior Product Designer"
                className="w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Complexity comes in different forms */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <NarrativeSection
            heading="Complexity comes in different forms."
            supportingText="I've spent my career learning to design not just for the person using a product, but for the systems, teams and organizations that make the experience possible."
          >
            <div className="grid md:grid-cols-3 gap-8">
              <EditorialColumn heading="People" hook="Some users are easy to overlook.">
                At Gojek, I spent years designing for drivers, agents and merchants, people
                whose relationship with a product isn't optional. Their livelihood depends
                on it.
              </EditorialColumn>
              <EditorialColumn heading="Products" hook="Some problems aren't contained within a screen.">
                At Microsoft, I work across PCs, phones, apps and platforms to help people
                move between devices, contexts and tasks.
              </EditorialColumn>
              <EditorialColumn heading="Organizations" hook="Some design problems are actually team problems.">
                I've led designers, influenced product direction, created design systems and
                explored new ways for teams to move faster without compromising design
                quality.
              </EditorialColumn>
            </div>
            <p className="text-lg font-medium text-foreground italic">
              I enjoy finding the thread that connects all three.
            </p>
          </NarrativeSection>
        </Reveal>
      </section>

      {/* How I lead */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <NarrativeSection
            heading="How I lead"
            supportingText="The highest-leverage design work isn't always designing the solution. Sometimes it's creating the clarity and conditions that allow teams to find a better one."
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {LEAD_PRINCIPLES.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <PrincipleBlock number={i + 1} title={p.title} iconColor={p.iconColor}>
                    {p.description}
                  </PrincipleBlock>
                </Reveal>
              ))}
            </div>
          </NarrativeSection>
        </Reveal>
      </section>

      {/* Selected Work */}
      <section id="selected-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <Reveal>
          <NarrativeSection
            heading="A few problems I've had the privilege to work on"
            supportingText="Different problems. The same instinct: understand the system, find the leverage point, and make it easier for people and teams to move forward."
          >
            <div className="space-y-6">
              {projects.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80}>
                  <ProjectCard project={project} variant="narrative" number={i + 1} />
                </Reveal>
              ))}
            </div>
          </NarrativeSection>
        </Reveal>
      </section>

      {/* Problems I like */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <NarrativeSection heading="I'm drawn to problems where...">
            <div className="grid sm:grid-cols-2 gap-8">
              {PROBLEMS_I_LIKE.map((item) => (
                <EditorialColumn key={item.heading} heading={item.heading}>
                  {item.description}
                </EditorialColumn>
              ))}
            </div>
          </NarrativeSection>
        </Reveal>
      </section>

      {/* Career across scale and systems */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <NarrativeSection
            heading="A career that taught me to think in systems"
            supportingText="From industrial design to product ecosystems operating at scale."
          >
            <div className="space-y-6">
              <CareerNarrative
                company="Microsoft"
                companyLogo={MICROSOFT.companyLogo}
                companyLogoAlt={MICROSOFT.companyLogoAlt}
                role="Senior Product Designer, Microsoft"
                dates={MICROSOFT.dates}
              >
                {MICROSOFT.narrativeSummary}
              </CareerNarrative>
              <CareerNarrative
                company="Gojek"
                companyLogo={GOJEK.companyLogo}
                companyLogoAlt={GOJEK.companyLogoAlt}
                role="Design Manager, Gojek"
                dates={GOJEK.dates}
              >
                {GOJEK.narrativeSummary}
              </CareerNarrative>
              <CareerNarrative company="Earlier" role={EARLIER_COMPANIES.join(' · ')} dates="2014 - 2024">
                Engineering, industrial design and product design experiences that shaped how
                I think about making, systems and pragmatic execution.
              </CareerNarrative>
            </div>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View full career
              <ArrowRight className="w-4 h-4" />
            </Link>
          </NarrativeSection>
        </Reveal>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <CtaBand
            heading="Have a complex product problem?"
            links={
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Let's talk
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          >
            I'm interested in Senior Product Designer and Lead Product Design opportunities
            where the problem is bigger than a screen: products, platforms, ecosystems and
            0→1 challenges.
          </CtaBand>
        </Reveal>
      </section>
    </div>
  );
}

export { HomePage };
