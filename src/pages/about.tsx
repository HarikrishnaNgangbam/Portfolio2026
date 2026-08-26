import {
  Sparkles,
  Box,
  Bot,
  Ruler,
  Heart,
  Wrench,
  Users,
  Layers,
  TrendingUp,
  Target,
  RefreshCw,
  Hammer,
  Sofa,
  CircuitBoard,
  Smartphone,
  Users2,
  Unlock,
  ClipboardCheck,
  ShieldCheck,
  Check,
  ArrowUpRight,
  Eye,
  Flag,
} from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { DotPattern } from '@/design-system/ui/dot-pattern';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';
import type { IconComponent } from '@/lib/utils';

/**
 * Same warm-editorial token override Home uses, scoped to this page's own
 * root wrapper only. Duplicated rather than imported from a shared
 * constant so this change never touches home.tsx.
 */
const ABOUT_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

const CAPABILITY_PILLS: { icon: IconComponent; color: string; label: string }[] = [
  { icon: Sparkles, color: 'var(--icon-purple)', label: 'Systems thinking' },
  { icon: Box, color: 'var(--icon-blue)', label: 'Product strategy' },
  { icon: Bot, color: 'var(--icon-green)', label: 'AI exploration' },
  { icon: Ruler, color: 'var(--icon-orange)', label: 'Design leadership' },
  { icon: Heart, color: 'var(--icon-pink)', label: 'Craft & curiosity' },
];

interface JourneyStage {
  icon: IconComponent;
  color: string;
  stage: string;
  dates?: string;
  description: string;
  logo?: string;
  logoAlt?: string;
}

const JOURNEY: JourneyStage[] = [
  {
    icon: Wrench,
    color: 'var(--icon-purple)',
    stage: 'Engineering',
    dates: '2014 – 2017',
    description: 'Learned to understand how things are built, where constraints come from and how parts work together.',
  },
  {
    icon: Ruler,
    color: 'var(--icon-blue)',
    stage: 'Industrial Design',
    dates: '2014 – 2017',
    description: 'Learned to solve real problems with empathy, function and form across physical and digital experiences.',
  },
  {
    icon: Users,
    color: 'var(--icon-green)',
    stage: 'Gojek',
    dates: '2017 – 2022',
    description: 'Designed for real users at scale across operations, mobility, care and communication.',
  },
  {
    icon: Smartphone,
    color: 'var(--icon-cyan)',
    stage: 'Microsoft',
    dates: '2024 – Present',
    logo: '/images/logos/microsoft-windows.webp',
    logoAlt: 'Microsoft',
    description: 'Designing platforms and ecosystems that help people move across devices, contexts and tasks.',
  },
  {
    icon: Sparkles,
    color: 'var(--icon-pink)',
    stage: 'Design Leadership & AI',
    description: "Helping teams grow, raising the bar and exploring how AI can expand what's possible.",
  },
];

interface LessonCard {
  icon: IconComponent;
  color: string;
  logo?: string;
  logoAlt?: string;
  title: string;
  paragraphs: string[];
}

const LESSONS: LessonCard[] = [
  {
    icon: Users,
    color: 'var(--icon-blue)',
    title: 'Gojek taught me to design for reality.',
    paragraphs: [
      'Over 10 years designing products across operating systems, mobility, fintech, healthcare and emergency services. Five years were at Gojek, during its high-growth phase.',
      'I worked closely with Operations and designed for drivers, agents and merchants whose livelihood depended on the product. Some of the most important users are the least visible.',
    ],
  },
  {
    icon: Heart,
    color: 'var(--icon-cyan)',
    title: 'The real test of customer experience is when things go wrong.',
    paragraphs: [
      'Speed of resolution, clarity of communication and accountability matter most in those moments.',
      'At Gojek, I designed the Care ecosystem: Help Center, help-article CMS, HelpBot, an Automation Designer and a Bot Builder.',
    ],
  },
  {
    icon: Layers,
    color: 'var(--icon-green)',
    title: 'From task tool to operating platform.',
    paragraphs: [
      'GoAgent began as a simple task tool for field agents and grew into a foundation for six or more operational capabilities across lead capture, onboarding, engagement, growth and loyalty.',
      'We also built initiatives like Driver Health Checks and COVID Kit distribution on top of it.',
    ],
  },
  {
    icon: Smartphone,
    color: 'var(--icon-blue)',
    logo: '/images/logos/microsoft-windows.webp',
    logoAlt: 'Microsoft',
    title: 'Microsoft taught me to think beyond the product.',
    paragraphs: [
      'Cross-device continuity, Windows Connected Experience & Ecosystem, platform behavior, ecosystem thinking and AI-driven contextual experiences.',
      'Impact here comes from designing systems that scale, not a single application.',
    ],
  },
];

/** Icon + short label chip, used for the leadership responsibility grid and the "making" section below. */
function LabelChip({ icon: Icon, color, label }: { icon: IconComponent; color: string; label: string }) {
  return (
    <div className="rounded-xl p-3" style={{ backgroundColor: tint(color, 6) }}>
      <Icon className="w-4 h-4 mb-1.5" style={{ color }} />
      <p className="text-xs font-medium text-foreground leading-tight">{label}</p>
    </div>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--icon-purple)' }} />
      <span>{children}</span>
    </li>
  );
}

/**
 * Same heading + paragraph shape as the shared EditorialColumn, with a
 * small line icon above — built locally rather than adding an icon slot to
 * EditorialColumn itself, since that component is also used by Home and
 * Resume.
 */
function GuidingPrinciple({
  icon: Icon,
  color,
  heading,
  children,
}: {
  icon: IconComponent;
  color: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Icon className="w-6 h-6 mb-3" style={{ color }} />
      <h3 className="text-xl font-bold text-foreground">{heading}</h3>
      <p className="text-muted-foreground leading-relaxed mt-2">{children}</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={ABOUT_THEME_VARS} className="bg-background text-foreground">
      <Seo
        title="About"
        description="Why Harikrishna became the kind of designer he is: an engineer and industrial designer by training who learned to design for reality at Gojek, think beyond the product at Microsoft, and lead teams through complexity."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
              About Me
            </p>
            <H1 size="page" className="font-serif mt-3 leading-[1.05]">
              I've always liked figuring out how things work.
            </H1>
            <div className="space-y-4 mt-5">
              <LeadParagraph>
                I'm an engineer and industrial designer by training, and a product designer by
                experience. That foundation still influences how I work today.
              </LeadParagraph>
              <LeadParagraph>
                I naturally want to understand how things are constructed, where constraints come
                from and how individual parts interact to create a whole.
              </LeadParagraph>
            </div>
            <div className="flex flex-wrap gap-2.5 mt-6">
              {CAPABILITY_PILLS.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm text-foreground"
                >
                  <p.icon className="w-3.5 h-3.5" style={{ color: p.color }} />
                  {p.label}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <DotPattern
                className="hidden lg:block absolute -left-10 -top-6 w-24 h-24 -z-10"
                spacing={14}
                size={1.25}
                color="var(--icon-purple)"
              />
              <div
                className="hidden lg:block absolute -right-5 -top-5 w-28 h-36 rounded-2xl -z-10 rotate-6"
                style={{ backgroundColor: tint('var(--icon-orange)', 16) }}
              />
              <div className="aspect-square rounded-2xl overflow-hidden border shadow-sm relative">
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

      {/* Journey */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            From the edge of the system to the platform.
          </h2>

          {/* Desktop: connected row */}
          <div className="hidden md:block relative mt-10">
            <div className="absolute top-5 left-0 right-0 h-px bg-border" aria-hidden="true" />
            <div className="relative grid grid-cols-5 gap-4">
              {JOURNEY.map((item) => (
                <div key={item.stage} className="flex flex-col items-center text-center">
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center bg-background border-2 overflow-hidden"
                    style={{ borderColor: item.color }}
                  >
                    {item.logo ? (
                      <ImageWithFallback src={item.logo} alt={item.logoAlt ?? ''} className="w-5 h-5 object-contain" />
                    ) : (
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    )}
                  </div>
                  <h3 className="font-bold text-foreground leading-tight mt-3">{item.stage}</h3>
                  {item.dates && <p className="text-xs text-muted-foreground mt-0.5">{item.dates}</p>}
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="md:hidden space-y-5 mt-8">
            {JOURNEY.map((item) => (
              <div key={item.stage} className="flex gap-3">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-background border-2 overflow-hidden"
                  style={{ borderColor: item.color }}
                >
                  {item.logo ? (
                    <ImageWithFallback src={item.logo} alt={item.logoAlt ?? ''} className="w-5 h-5 object-contain" />
                  ) : (
                    <item.icon className="w-5 h-5" style={{ color: item.color }} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-foreground leading-tight">{item.stage}</h3>
                  {item.dates && <p className="text-xs text-muted-foreground mt-0.5">{item.dates}</p>}
                  <p className="text-muted-foreground text-sm leading-relaxed mt-1.5">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* What I've learned along the way */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            What I've learned along the way.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8 items-start">
            {LESSONS.map((item) => (
              <div key={item.title} className="relative rounded-2xl p-5" style={{ backgroundColor: tint(item.color, 5) }}>
                <ArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-muted-foreground/50" aria-hidden="true" />
                <div className="flex items-start gap-3 pr-6">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 overflow-hidden bg-background"
                    style={{ border: `1px solid ${tint(item.color, 30)}` }}
                  >
                    {item.logo ? (
                      <ImageWithFallback src={item.logo} alt={item.logoAlt ?? ''} className="w-6 h-6 object-contain" />
                    ) : (
                      <item.icon className="w-6 h-6" style={{ color: item.color }} />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground leading-snug">{item.title}</h3>
                    <div className="space-y-2 text-muted-foreground text-sm leading-relaxed mt-2">
                      {item.paragraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* What leadership has taught me */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            What leadership has taught me.
          </h2>
          <div className="grid lg:grid-cols-3 gap-4 mt-8 items-start">
            {/* Leadership changed the question */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: tint('var(--icon-pink)', 5) }}>
              <Users2 className="w-5 h-5 mb-2" style={{ color: 'var(--icon-pink)' }} />
              <h3 className="font-bold text-foreground leading-snug">Leadership changed the question.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                Designing the right experience wasn't always the hardest problem. Creating the
                conditions for a team to make good decisions consistently often was.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <LabelChip icon={Users2} color="var(--icon-pink)" label="1:1s & mentoring" />
                <LabelChip icon={Unlock} color="var(--icon-pink)" label="Unblocking" />
                <LabelChip icon={TrendingUp} color="var(--icon-pink)" label="Career development" />
                <LabelChip icon={ClipboardCheck} color="var(--icon-pink)" label="Design reviews" />
              </div>
              <div className="rounded-xl p-3 mt-3 flex items-center gap-2.5" style={{ backgroundColor: tint('var(--icon-pink)', 12) }}>
                <TrendingUp className="w-4 h-4 shrink-0" style={{ color: 'var(--icon-pink)' }} />
                <p className="text-sm font-semibold text-foreground">3 designers promoted to senior designer</p>
              </div>
            </div>

            {/* Clarity is a leadership tool */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: tint('var(--icon-cyan)', 5) }}>
              <Target className="w-5 h-5 mb-2" style={{ color: 'var(--icon-cyan)' }} />
              <h3 className="font-bold text-foreground leading-snug">Clarity is a leadership tool.</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                I supported seven products with finite capacity, a stretch that taught me lessons
                I still carry today.
              </p>
              <ul className="space-y-1.5 mt-4">
                <CheckItem>Make capacity and priorities visible</CheckItem>
                <CheckItem>Don't over-promise</CheckItem>
                <CheckItem>Prioritize with Product, not in isolation</CheckItem>
                <CheckItem>Build transparent workflows</CheckItem>
              </ul>
            </div>

            {/* Design should have a seat at the decision table */}
            <div className="rounded-2xl p-5" style={{ backgroundColor: tint('var(--icon-purple)', 5) }}>
              <ShieldCheck className="w-5 h-5 mb-2" style={{ color: 'var(--icon-purple)' }} />
              <h3 className="font-bold text-foreground leading-snug">
                Design should have a seat at the decision table.
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mt-2 mb-5">
                Product, Design and Engineering partnering around mission, vision, goals and OKRs.
              </p>
              <div className="relative w-full max-w-[11rem] mx-auto aspect-square" style={{ mixBlendMode: 'multiply' as const }}>
                <div
                  className="absolute w-24 h-24 rounded-full top-0 left-2 flex items-start justify-center pt-2 text-[11px] font-semibold"
                  style={{ backgroundColor: tint('var(--icon-blue)', 35), color: 'var(--icon-blue)' }}
                >
                  Product
                </div>
                <div
                  className="absolute w-24 h-24 rounded-full top-0 right-2 flex items-start justify-center pt-2 text-[11px] font-semibold"
                  style={{ backgroundColor: tint('var(--icon-purple)', 35), color: 'var(--icon-purple)' }}
                >
                  Design
                </div>
                <div
                  className="absolute w-24 h-24 rounded-full bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center pb-2 text-[11px] font-semibold"
                  style={{ backgroundColor: tint('var(--icon-green)', 35), color: 'var(--icon-green)' }}
                >
                  Engineering
                </div>
              </div>
              <p className="text-center text-[11px] font-semibold text-muted-foreground mt-1">
                Users &amp; impact
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* AI */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            AI is changing the equation again.
          </h2>
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 mt-8 items-center">
            <div className="hidden md:block relative w-32 h-32 shrink-0">
              <div className="absolute inset-4 rounded-2xl border-2 rotate-6" style={{ borderColor: tint('var(--icon-purple)', 25) }} />
              <div className="absolute inset-6 rounded-2xl border-2 -rotate-3" style={{ borderColor: tint('var(--icon-purple)', 40) }} />
              <div className="absolute inset-8 rounded-2xl border-2" style={{ borderColor: 'var(--icon-purple)' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--icon-purple)', boxShadow: '0 0 24px 8px var(--icon-purple)' }}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 items-start">
              <div className="rounded-2xl border border-border p-5">
                <ClipboardCheck className="w-5 h-5 mb-2" style={{ color: 'var(--icon-blue)' }} />
                <ul className="space-y-2.5">
                  <CheckItem>AI-assisted prototyping &amp; exploration</CheckItem>
                  <CheckItem>Partnering with PMs to explore ideas independently</CheckItem>
                  <CheckItem>Running design office hours</CheckItem>
                  <CheckItem>Building governance and shared understanding</CheckItem>
                </ul>
              </div>
              <div className="rounded-2xl p-5" style={{ backgroundColor: tint('var(--icon-purple)', 8) }}>
                <Sparkles className="w-5 h-5 mb-2" style={{ color: 'var(--icon-purple)' }} />
                <p className="font-bold text-foreground leading-snug">
                  AI should expand design capacity, not dilute it.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed mt-2">
                  Empathy, judgement, systems thinking and craft are still at the core of great
                  design.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Outside the screen */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Outside the screen, I like making things.
          </h2>
          <div className="space-y-4 mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            <p>
              Sometimes that's a product prototype. Sometimes it's a piece of furniture, a shelf,
              or whatever DIY rabbit hole I've fallen into recently. I'm the kind of person who
              watches gadget reviews for fun and can't resist taking something apart just to see
              how it works.
            </p>
            <p>
              Maybe that's why I've always been drawn to problems where you can take something
              complicated, pull it apart, understand the pieces and put it back together in a way
              that feels simpler.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6 items-start">
            <LabelChip icon={Hammer} color="var(--icon-orange)" label="DIY projects" />
            <LabelChip icon={Sofa} color="var(--icon-blue)" label="Furniture & shelves" />
            <LabelChip icon={CircuitBoard} color="var(--icon-green)" label="Prototypes & experiments" />
            <LabelChip icon={Smartphone} color="var(--icon-purple)" label="Curious about gadgets" />
            <LabelChip icon={RefreshCw} color="var(--icon-pink)" label="Take things apart to understand how they work" />
          </div>
        </Reveal>
      </section>

      {/* Principles / closing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t">
        <Reveal>
          <NarrativeSection heading="What guides me every day">
            <div className="grid sm:grid-cols-3 gap-8">
              <GuidingPrinciple icon={Eye} color="var(--icon-purple)" heading="Clarity">
                Make complexity visible so teams can make better decisions.
              </GuidingPrinciple>
              <GuidingPrinciple icon={Heart} color="var(--icon-pink)" heading="Empathy">
                Understand the people affected by the system, especially those whose voices are
                easiest to miss.
              </GuidingPrinciple>
              <GuidingPrinciple icon={Flag} color="var(--icon-orange)" heading="Ownership">
                Designers should participate in product decisions and own outcomes, not just
                deliverables.
              </GuidingPrinciple>
            </div>
            <div className="text-center pt-10">
              <p
                className="font-serif text-3xl md:text-4xl font-semibold italic leading-snug max-w-2xl mx-auto"
                style={{ color: 'var(--icon-purple)' }}
              >
                That's the kind of designer
                <br />
                I'm trying to become better at being.
              </p>
            </div>
          </NarrativeSection>
        </Reveal>
      </section>
    </div>
  );
}

export { AboutPage };
