import {
  MapPin,
  Sparkles,
  Eye,
  Share2,
  Users,
  LayoutGrid,
  Package,
  Building2,
  Puzzle,
  TrendingUp,
  Mail,
  FileText,
} from 'lucide-react';
import { Seo } from '@/components/seo';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { EditorialColumn } from '@/design-system/ui/editorial-column';
import { ExperienceHeaderRow } from '@/design-system/ui/experience-header-row';
import { PillCtaLink } from '@/design-system/ui/pill-cta-link';
import { CtaLinkRow } from '@/design-system/ui/cta-link-row';
import { ArrowLink } from '@/design-system/ui/arrow-link';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { DotPattern } from '@/design-system/ui/dot-pattern';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { ProjectCard } from '@/components/portfolio/project-card';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { cn, type IconComponent } from '@/lib/utils';
import { tint } from '@/lib/color';
import { useEffectiveProjects } from '@/lib/project-settings-store';
import { EXPERIENCE, EARLIER_COMPANIES } from '@/data/experience';
import { HOME_PROJECT_ORDER, type ProjectSummary } from '@/data/projects';
import { EMAIL_HREF, LINKEDIN_URL } from '@/data/contact';

const MICROSOFT = EXPERIENCE.find((e) => e.company === 'Microsoft - Windows')!;
const GOJEK = EXPERIENCE.find((e) => e.company === 'Gojek Tech')!;

/**
 * Every color/typography token this page relies on is scoped to this one
 * wrapper via CSS custom-property overrides, so the warm editorial palette
 * only ever paints Home's own subtree — no other page's --background,
 * --foreground or --primary changes, because they never render inside it.
 */
const HOME_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

const LEAD_PRINCIPLES: { icon: IconComponent; color: string; title: string; description: string }[] = [
  {
    icon: Eye,
    color: 'var(--icon-purple)',
    title: 'Make complexity visible',
    description:
      'I turn messy systems, workflows and dependencies into something teams can reason about and act on.',
  },
  {
    icon: Share2,
    color: 'var(--icon-blue)',
    title: 'Design for the system',
    description:
      "I don't optimise one screen. I look at the whole ecosystem and design for the interactions that matter.",
  },
  {
    icon: Users,
    color: 'var(--icon-cyan)',
    title: 'Give design a seat at the decision table',
    description:
      'I believe design should influence product direction, not just express decisions made elsewhere.',
  },
  {
    icon: LayoutGrid,
    color: 'var(--icon-orange)',
    title: 'Build capability, not dependency',
    description:
      'I help teams grow, share knowledge and build a culture where great design can sustain itself.',
  },
];

const PROBLEMS_I_LIKE: { icon: IconComponent; color: string; title: string; description: string }[] = [
  {
    icon: Puzzle,
    color: 'var(--icon-purple)',
    title: "The obvious solution isn't obvious.",
    description: 'I enjoy digging deeper to find the real problem before jumping to solutions.',
  },
  {
    icon: Users,
    color: 'var(--icon-blue)',
    title: "The user isn't the only stakeholder.",
    description: 'I design with empathy for users and clarity for teams, partners and the business.',
  },
  {
    icon: TrendingUp,
    color: 'var(--icon-teal)',
    title: 'The product needs to evolve.',
    description: 'I help shape directions that grow with users, technology and market realities.',
  },
  {
    icon: Sparkles,
    color: 'var(--icon-pink)',
    title: "Technology changes what's possible.",
    description: 'I explore how new capabilities, especially AI, can create more meaningful experiences.',
  },
];

const CAREER_TIMELINE = [
  {
    company: 'Microsoft',
    logo: MICROSOFT.companyLogo,
    logoAlt: MICROSOFT.companyLogoAlt,
    // Authoritative display dates for this timeline, provided directly by
    // the site owner — intentionally not EXPERIENCE[].dates (which is more
    // granular, e.g. exact start month).
    dates: '2024 – Present',
    description: MICROSOFT.narrativeSummary,
  },
  {
    company: 'Gojek',
    logo: GOJEK.companyLogo,
    logoAlt: GOJEK.companyLogoAlt,
    dates: '2017 – 2022',
    description: GOJEK.narrativeSummary,
  },
  {
    company: 'Earlier career',
    role: EARLIER_COMPANIES.join(' · '),
    dates: '2014 – 2017',
    description:
      'Engineering, industrial design and product design experiences that shaped how I think about making, systems and pragmatic execution.',
  },
];

function HomePage() {
  const effectiveProjects = useEffectiveProjects();
  const projects = HOME_PROJECT_ORDER.map((slug) =>
    effectiveProjects.find((p) => p.slug === slug),
  ).filter((p): p is ProjectSummary => p != null);

  return (
    <div style={HOME_THEME_VARS} className="bg-background text-foreground">
      <Seo
        raw
        title="Harikrishna Ngangbam | Design Leader | Product Designer"
        description="Senior Product Designer at Microsoft with 10+ years designing products, systems and ecosystems, from cross-device experiences at Microsoft to operational platforms at Gojek. Exploring 0 to 1 product creation and AI-assisted design practice."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
              Design Leader · Microsoft
            </p>
            <H1 size="page" className="font-serif mt-3 leading-[1.02]">
              I'm Harikrishna.
              <br />
              I design through
              <br />
              complexity
              <span style={{ color: 'var(--icon-purple)' }}>.</span>
            </H1>
            <LeadParagraph className="mt-5 max-w-md">
              10+ years designing products, platforms and ecosystems across Microsoft and Gojek.
            </LeadParagraph>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-4">
              Systems Thinking · Product Strategy · AI · 0→1 · Design Leadership
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-5">
              <PillCtaLink href="#selected-work" label="Explore my work" />
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" style={{ color: 'var(--icon-orange)' }} />
                Manipur, India
              </div>
            </div>
            <div className="flex items-start gap-3 mt-6 rounded-2xl border p-4 max-w-md">
              <Sparkles className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--icon-purple)' }} />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Engineer by degree, Designer by practice &amp; Curious by default. DIY tinkerer and
                unapologetic gadget nerd.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative max-w-sm lg:max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <DotPattern
                className="hidden lg:block absolute -left-10 -top-6 w-24 h-24 -z-10"
                spacing={14}
                size={1.25}
                color="var(--icon-purple)"
              />
              <div className="aspect-square rounded-2xl overflow-hidden border shadow-sm">
                <ImageWithFallback
                  src="/images/shared/harikrishna-portrait.webp"
                  alt="Harikrishna - Senior Product Designer"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Complexity comes in different forms */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <NarrativeSection heading="Complexity comes in different forms." />
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            <EditorialColumn icon={Users} color="var(--icon-blue)" variant="tinted" heading="People">
              Different needs, mental models, constraints and emotions all interact. Designing for
              real people is never simple.
            </EditorialColumn>
            <EditorialColumn icon={Package} color="var(--icon-purple)" variant="tinted" heading="Products">
              Features, flows, states, platforms and dependencies. The more powerful the product,
              the more complex it becomes.
            </EditorialColumn>
            <EditorialColumn icon={Building2} color="var(--icon-orange)" variant="tinted" heading="Organizations">
              Teams, priorities, politics, processes and scale. Design has to navigate all of it.
            </EditorialColumn>
          </div>
        </Reveal>
      </section>

      {/* How I lead */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <NarrativeSection heading="How I lead" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {LEAD_PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className={cn('rounded-xl p-4', i > 0 && 'lg:border-l')}
                style={{ backgroundColor: tint(p.color, 5) }}
              >
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="text-xs font-semibold" style={{ color: p.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p.icon className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground leading-snug text-[15px]">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-1.5">{p.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Selected Work */}
      <section id="selected-work" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t scroll-mt-24">
        <Reveal>
          <NarrativeSection heading="A few problems I've had the privilege to work on" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard project={project} number={i + 1} headingLevel="h3" />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <ArrowLink to="/work" label="View all projects" />
          </div>
        </Reveal>
      </section>

      {/* Problems I like */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <NarrativeSection heading="I'm drawn to problems where..." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {PROBLEMS_I_LIKE.map((item) => (
              <EditorialColumn key={item.title} icon={item.icon} color={item.color} variant="tinted" heading={item.title}>
                {item.description}
              </EditorialColumn>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Career across scale and systems */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <NarrativeSection heading="A career that taught me to think in systems" />
          <div className="mt-10">
            {CAREER_TIMELINE.map((entry, i) => (
              <div key={entry.company} className="grid grid-cols-[1.5rem_1fr] gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className="w-2.5 h-2.5 rounded-full border-2 bg-background mt-1.5 shrink-0"
                    style={{ borderColor: 'var(--icon-purple)' }}
                  />
                  {i < CAREER_TIMELINE.length - 1 && <span className="w-px flex-1 mt-1 bg-border" />}
                </div>
                <div className={i < CAREER_TIMELINE.length - 1 ? 'pb-10' : ''}>
                  <ExperienceHeaderRow
                    logo={entry.logo}
                    logoAlt={entry.logoAlt}
                    label={entry.company}
                    dates={entry.dates}
                    labelClassName="text-lg"
                  />
                  {'role' in entry && entry.role && (
                    <p className="text-sm text-muted-foreground mt-1">{entry.role}</p>
                  )}
                  <p className="text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ArrowLink to="/resume" label="View full career" className="mt-2" />
        </Reveal>
      </section>

      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <CtaBand
            variant="panel"
            heading="Have a complex problem worth exploring?"
            button={<PillCtaLink to="/contact" label="Let's talk" />}
            links={
              <div className="space-y-3">
                <CtaLinkRow
                  href={LINKEDIN_URL}
                  external
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <CtaLinkRow href={EMAIL_HREF} icon={<Mail className="w-4 h-4" />} label="Email" />
                <CtaLinkRow to="/resume" icon={<FileText className="w-4 h-4" />} label="Resume" />
              </div>
            }
          >
            I'm interested in Design Leadership opportunities where I can help shape products,
            platforms, ecosystems and 0→1 challenges.
          </CtaBand>
        </Reveal>
      </section>
    </div>
  );
}

export { HomePage };
