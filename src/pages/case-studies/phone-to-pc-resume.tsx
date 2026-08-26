import {
  Smartphone,
  Monitor,
  Target,
  Zap,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Eye,
  Bell,
  User,
  Calendar,
  CheckCircle2,
  MapPin,
  AppWindow,
  Radar,
  Cpu,
  MonitorSmartphone,
  Lock,
  X,
  Layers,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { VideoBlock, ImageBlock } from '@/components/casestudy/image-block';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { AppScenarioCard } from '@/components/casestudy/app-scenario-card';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Takeaway } from '@/components/casestudy/takeaway';
import { Ownership } from '@/components/casestudy/ownership';
import {
  SpotifyIcon,
  BrowserIcon,
  Microsoft365Icon,
  WhatsAppIcon,
  ChromeIcon,
  EdgeIcon,
  SamsungNotesIcon,
  SamsungBrowserIcon,
} from '@/design-system/ui/icons/brands';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';
import type { IconComponent } from '@/lib/utils';

/**
 * Same warm-editorial token override Home, About, Work and Contact use,
 * scoped to this page's own root wrapper only. The shared case-study
 * components (CaseStudyHero, Section, StatGrid, ...) read foreground/
 * background/border/primary via CSS custom properties, so wrapping this
 * page's own subtree in these vars brings it into the same visual language
 * as the rest of the site without touching those components or any other
 * case study, which keep rendering on the original tokens.
 */
const CASESTUDY_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

/** Small uppercase eyebrow + serif heading + optional supporting line, matching Home/About/Work's section heading pattern. Built locally rather than added to the shared Section component, which is used by other case studies that keep their existing plain-heading treatment. */
function EditorialHeading({
  eyebrow,
  eyebrowColor = 'var(--icon-purple)',
  heading,
  supporting,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  heading: React.ReactNode;
  supporting?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: eyebrowColor }}>
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">{heading}</h2>
      {supporting && <p className="text-muted-foreground leading-relaxed mt-3 max-w-2xl">{supporting}</p>}
    </div>
  );
}

const IMPACT_STATS = [
  { value: '3.1M', label: 'Monthly Resume alerts surfaced to users' },
  { value: '290K+', label: 'Monthly engaged users' },
  { value: '8.5%', label: 'Conversion on Resume toasts' },
  { value: '~28%', label: 'Engagement rate on Toolbar Resume' },
];

interface DiagramItem {
  icon: IconComponent;
  label: string;
  sublabel?: string;
}

const INPUT_ITEMS: DiagramItem[] = [
  { icon: AppWindow, label: 'First-party apps', sublabel: 'Spotify, Mail, etc.' },
  { icon: WhatsAppIcon as unknown as IconComponent, label: 'Third-party apps', sublabel: 'WhatsApp, Chrome, etc.' },
  { icon: Smartphone, label: 'Different phone makers', sublabel: 'Samsung, OnePlus, etc.' },
  { icon: Layers, label: 'Apps without PC counterparts' },
  { icon: Calendar, label: 'Varying time gaps', sublabel: 'Seconds to days' },
];

const SYSTEM_ITEMS: DiagramItem[] = [
  { icon: Radar, label: 'Signal collection', sublabel: 'Events, activity and context' },
  { icon: Eye, label: 'Understanding & confidence', sublabel: 'Intent, recency, relevance' },
  { icon: Cpu, label: 'Decision engine', sublabel: 'When and what to surface' },
  { icon: MonitorSmartphone, label: 'Presentation service', sublabel: 'Taskbar · Hovercard · Resume' },
];

const OUTPUT_ITEMS: DiagramItem[] = [
  { icon: Monitor, label: 'Taskbar Resume' },
  { icon: AppWindow, label: 'Hovercard' },
  { icon: SpotifyIcon as unknown as IconComponent, label: 'Resume from your phone', sublabel: 'Spotify · Forever Faves' },
];

/**
 * Inputs -> Windows Continuity System -> Outputs architecture diagram. Built
 * as a page-local component (not a new shared one) since this exact 3-stage
 * signal/decision/presentation shape is specific to this case study's
 * platform story.
 */
function SystemDiagram() {
  const Column = ({
    title,
    color,
    items,
  }: {
    title: string;
    color: string;
    items: DiagramItem[];
  }) => (
    <div className="rounded-2xl border border-border p-5">
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color }}>
        {title}
      </p>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: tint(color, 15) }}
            >
              <item.icon className="w-4 h-4" style={{ color }} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground leading-snug">{item.label}</p>
              {item.sublabel && <p className="text-xs text-muted-foreground mt-0.5">{item.sublabel}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-center">
      <Column title="Inputs: Phone activity" color="var(--icon-teal)" items={INPUT_ITEMS} />
      <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto rotate-90 lg:rotate-0" aria-hidden="true" />
      <Column title="Windows Continuity System" color="var(--icon-purple)" items={SYSTEM_ITEMS} />
      <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto rotate-90 lg:rotate-0" aria-hidden="true" />
      <Column title="Outputs on PC" color="var(--icon-blue)" items={OUTPUT_ITEMS} />
    </div>
  );
}

const CONFIDENCE_PRINCIPLES: { icon: IconComponent; color: string; title: string; description: string }[] = [
  {
    icon: Eye,
    color: 'var(--icon-blue)',
    title: 'Stay discoverable',
    description: 'Surface subtly. Let the user decide.',
  },
  {
    icon: Bell,
    color: 'var(--icon-orange)',
    title: 'Nudge',
    description: 'Timely, relevant hints in the right places.',
  },
  {
    icon: Zap,
    color: 'var(--icon-purple)',
    title: 'Act',
    description: 'Surface at the point of flow to help the user.',
  },
];

/** Low -> medium -> high confidence gradient bar + the three response principles beneath it. */
function ConfidenceSpectrum() {
  return (
    <div className="space-y-8">
      <div>
        <div
          className="h-2 rounded-full"
          style={{
            background:
              'linear-gradient(to right, var(--icon-blue), var(--icon-orange), var(--icon-purple))',
          }}
          aria-hidden="true"
        />
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mt-3">
          <span style={{ color: 'var(--icon-blue)' }}>Low confidence</span>
          <span className="text-muted-foreground">In the middle</span>
          <span style={{ color: 'var(--icon-purple)' }}>High confidence</span>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        {CONFIDENCE_PRINCIPLES.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border p-5">
            <p.icon className="w-5 h-5 mb-3" style={{ color: p.color }} aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">{p.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed mt-1.5">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface DecisionCardData {
  number: string;
  title: string;
  description: string;
  visual?: React.ReactNode;
}

const DECISIONS: DecisionCardData[] = [
  {
    number: '01',
    title: 'Taskbar became the primary surface.',
    description: 'Always available, contextual and near the point of action.',
  },
  {
    number: '02',
    title: 'Progressive disclosure instead of immediate interruption.',
    description: 'Signal → Context → Action.',
  },
  {
    number: '03',
    title: 'Make the destination predictable.',
    description: 'Answer what, where and what to expect.',
  },
];

/** Compact 3-card decision grid — a different geometry from the shared DecisionStrip (which pairs a single decision/why in a vertical strip), so built locally for this reference's side-by-side card layout. */
function DecisionCard({ data, children }: { data: DecisionCardData; children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border p-6 flex flex-col">
      <span className="text-xs font-bold" style={{ color: 'var(--icon-purple)' }}>
        {data.number}
      </span>
      <h3 className="font-bold text-foreground leading-snug mt-2">{data.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mt-2">{data.description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}

interface PressItemData {
  publication: string;
  headline: string;
  href: string;
}

/** Real existing press coverage already documented for this case study, restructured into the reference's editorial text-card treatment rather than the shared PressGrid's screenshot-thumbnail style. No publication or headline here is invented — see LinkList entries this page previously rendered. */
const PRESS_ITEMS: PressItemData[] = [
  {
    publication: 'The Verge',
    headline: "Windows 11's ability to resume Android apps like Apple Handoff.",
    href: 'https://www.theverge.com/news/869161/microsoft-windows-11-android-app-resume-feature-release-preview',
  },
  {
    publication: 'Windows Insider Blog',
    headline: 'Announcing the Release Preview update bringing cross-device Resume to more users.',
    href: 'https://blogs.windows.com/windows-insider/2026/01/27/releasing-windows-11-builds-26100-7701-and-26200-7701-to-the-release-preview-channel/',
  },
  {
    publication: 'Android Authority',
    headline: 'Windows 11 expands Cross-Device Resume beyond its initial preview.',
    href: 'https://www.androidauthority.com/windows-11-cross-device-resume-preview-channel-3636114/',
  },
];

function PhoneToPcResumePage() {
  return (
    <div style={CASESTUDY_THEME_VARS} className="bg-background text-foreground pb-20">
      <Seo
        title="Phone to PC Continuity"
        description="How Windows learned to anticipate where work should continue: a confidence-driven approach to cross-device resume across phone and PC."
      />

      {/* 01 — Hero */}
      <CaseStudyHero
        eyebrow="Microsoft · Windows 11 · Shipped"
        breadcrumbLabel="Phone → PC Continuity"
        badges={[]}
        title="Phone → PC Continuity."
        subtitle="When Windows learned to anticipate where work should continue."
        description="Seamlessly continue the things you're doing on your phone right on your PC — in the right app, with the right context, right when you need it."
        metaVariant="pills"
        meta={[
          { label: 'Role', value: 'Lead UX Designer', icon: User, color: 'var(--icon-purple)' },
          { label: 'Timeline', value: 'Sep 2025 – Jan 2026', icon: Calendar, color: 'var(--icon-blue)' },
          { label: 'Platform', value: 'Windows 11', icon: Monitor, color: 'var(--icon-teal)' },
          { label: 'Status', value: 'Shipped · GA Jan 2026', icon: CheckCircle2, color: 'var(--icon-green)' },
        ]}
        coverImage="/images/shared/project-phone-to-pc-cover.webp"
        coverAlt="Phone to PC Resume - Taskbar and system-level continuity"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        {/* 02 — Overview */}
        <Reveal>
          <Section>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
              <div>
                <EditorialHeading eyebrow="Overview" heading="The moment is simple. The system isn't." />
                <Prose className="mt-5">
                  <p>
                    You start something on your phone. You get to your PC. You expect to
                    continue. The system should make that effortless.
                  </p>
                  <p>
                    Phone to PC Continuity brings your recent activity from phone to the PC
                    so you can pick up exactly where you left off.
                  </p>
                  <p>
                    Whether it's a song, a webpage, a document or an app task — Windows
                    understands your intent and helps you continue without friction.
                  </p>
                </Prose>
              </div>
              <div>
                <StatGrid columns={2} stats={IMPACT_STATS} />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 03 — Working experience */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="Working experience"
              heading="See Phone to PC Continuity in action."
              supporting="A real end-to-end experience continuing a task from phone to Windows PC."
            />
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start mt-8">
              <VideoBlock src="/videos/phone-to-pc-spotify.mp4" heading="Signal to Resume, demonstrated with Spotify" evidence="shipped" />
              <ul className="space-y-5">
                {[
                  { icon: MapPin, color: 'var(--icon-purple)', title: 'Pick up anywhere', description: 'Continue tasks exactly where you left off.' },
                  { icon: AppWindow, color: 'var(--icon-blue)', title: 'In the right app', description: 'Deep link you into the right experience.' },
                  { icon: Target, color: 'var(--icon-teal)', title: 'Context that matters', description: 'Bring the right context so you can continue seamlessly.' },
                  { icon: Lock, color: 'var(--icon-orange)', title: 'Privacy by design', description: "You're in control of what's shared and when." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: item.color }} aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </Reveal>

        {/* 04 — The challenge */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="The challenge"
              heading="Making Windows understand transitions without interrupting."
              supporting="Users switched between devices dozens of times a day. But Windows had no model for understanding intent across devices and apps."
            />
            <div className="mt-8 space-y-8">
              <div className="rounded-2xl border border-border p-5">
                <p className="font-semibold text-foreground">
                  The old model treated continuity as a notification problem.
                </p>
                <p className="text-muted-foreground text-sm mt-1.5">
                  It pushed information to users and expected them to do the hard work.
                </p>
              </div>
              <StepFlow
                steps={[
                  { icon: Smartphone, iconColor: 'var(--icon-teal)', title: 'Start on phone', description: 'Begin a task in an app with specific context.' },
                  { icon: ArrowRight, iconColor: 'var(--icon-orange)', title: 'Switch devices', description: 'Reach your PC and expect to continue.' },
                  { icon: Target, iconColor: 'var(--icon-red)', title: '"Where was I?"', description: 'Try to remember what you were doing.' },
                  { icon: Radar, iconColor: 'var(--icon-purple)', title: 'Search / reopen', description: 'Find the app, content and correct context.' },
                  { icon: CheckCircle2, iconColor: 'var(--icon-green)', title: 'Continue', description: 'Finally get back to where you left off.' },
                ]}
              />
              <IconCardList
                columns={3}
                items={[
                  {
                    icon: X,
                    iconColor: 'var(--icon-red)',
                    title: 'Notifications, not outcomes',
                    description: 'The system surfaced information but left the user to connect the dots.',
                  },
                  {
                    icon: X,
                    iconColor: 'var(--icon-red)',
                    title: 'Too many steps',
                    description: 'Reopening the right app and finding the right content created unnecessary work.',
                  },
                  {
                    icon: X,
                    iconColor: 'var(--icon-red)',
                    title: 'No system-level intelligence',
                    description: 'Windows lacked a unified system to sense and act on intent across devices.',
                  },
                ]}
              />
              <Prose callout>
                The problem wasn't getting a notification from phone to PC. The problem
                was knowing what the user was trying to continue.
              </Prose>
            </div>
          </Section>
        </Reveal>

        {/* 05 — Our solution */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="Our solution"
              heading="A system that senses intent and helps you continue."
              supporting="We built the Windows Continuity System — a platform capability that unifies signals from phone activity, understands intent, and delivers the right experience on PC."
            />
            <div className="mt-8 space-y-6">
              <SystemDiagram />
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                {[
                  { icon: Shield, label: 'Privacy by design' },
                  { icon: Smartphone, label: 'On-device signals' },
                  { icon: User, label: 'User in control' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4" style={{ color: 'var(--icon-purple)' }} aria-hidden="true" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 06 — My role & approach */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="My role & approach"
              heading="I designed the rule, not just the screens."
              supporting="I led the end-to-end design across strategy, system design, experience definition and cross-team collaboration."
            />
            <div className="mt-8">
              <Ownership
                items={[
                  { dimension: 'vision', description: 'Defined the Windows continuity vision.' },
                  { dimension: 'system', description: 'Established the system behavior.' },
                  { dimension: 'experience', description: 'Designed the Taskbar experience.' },
                  { dimension: 'collaboration', description: 'Partnered with Product, Engineering, Platform teams and external partners.' },
                  { dimension: 'impact', description: 'Shipped a capability now used by hundreds of thousands of people monthly.' },
                ]}
              />
            </div>
          </Section>
        </Reveal>

        {/* 07 — Design principle */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="Design principle"
              heading="How proactive should Windows be?"
              supporting="Proactivity is powerful only when it's earned."
            />
            <div className="mt-8 space-y-6">
              <ConfidenceSpectrum />
              <Prose callout kind="insight">
                The more confident Windows is about a user's intent, the more proactive
                it can be.
              </Prose>
            </div>
          </Section>
        </Reveal>

        {/* 08 — Design decisions */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="Design decisions"
              heading="Turning the principle into an experience."
              supporting="Three key design decisions shaped the Phone to PC Continuity experience."
            />
            <div className="grid sm:grid-cols-3 gap-4 mt-8 items-start">
              <DecisionCard data={DECISIONS[0]}>
                <ImageBlock src="/images/casestudy-0/taskbar-framework.webp" alt="Taskbar Resume design framework" />
              </DecisionCard>
              <DecisionCard data={DECISIONS[1]}>
                <div className="flex items-center justify-center gap-2 rounded-xl bg-muted/30 py-4">
                  {[
                    { color: 'var(--icon-teal)', label: 'Signal' },
                    { color: 'var(--icon-purple)', label: 'Context' },
                    { color: 'var(--icon-orange)', label: 'Action' },
                  ].map((step, i, arr) => (
                    <div key={step.label} className="flex items-center gap-2">
                      <span className="text-xs font-bold" style={{ color: step.color }}>
                        {step.label}
                      </span>
                      {i < arr.length - 1 && <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" aria-hidden="true" />}
                    </div>
                  ))}
                </div>
              </DecisionCard>
              <DecisionCard data={DECISIONS[2]}>
                <ImageBlock src="/images/casestudy-0/spotify-continuity-1.webp" alt="Spotify continuity hovercard state" />
              </DecisionCard>
            </div>
          </Section>
        </Reveal>

        {/* 09 — Scalability */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="Scalability"
              heading="One continuity model. Different kinds of work."
              supporting="The same system can support different kinds of activities across apps and experiences."
            />
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--icon-green)' }}>
                  Media
                </p>
                <AppScenarioCard icon={SpotifyIcon} title="Spotify" description="Continue music or podcasts where you left off." />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--icon-blue)' }}>
                  Web
                </p>
                <AppScenarioCard icon={BrowserIcon} title="Browser" description="Get back to the exact page you were reading." />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--icon-orange)' }}>
                  Productivity
                </p>
                <AppScenarioCard icon={Microsoft365Icon} title="Microsoft 365" description="Resume documents, decks and spreadsheets." />
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-foreground mb-4">More scenarios we're enabling</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <AppScenarioCard icon={WhatsAppIcon} title="WhatsApp" />
                <AppScenarioCard icon={ChromeIcon} title="Google Chrome" />
                <AppScenarioCard icon={EdgeIcon} title="Microsoft Edge" />
                <AppScenarioCard icon={SamsungNotesIcon} title="Samsung Notes" />
                <AppScenarioCard icon={SamsungBrowserIcon} title="Samsung Internet" />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 10 — Impact & outcomes */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="Impact & outcomes"
              heading="Did the model work?"
              supporting="Early results after GA show strong engagement and meaningful impact."
            />
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start mt-8">
              <div>
                <StatGrid
                  columns={3}
                  stats={[
                    ...IMPACT_STATS.map((s) => ({ ...s, label: s.label.replace('surfaced to users', 'to users') })),
                    { value: '3.3×', label: 'Improvement over toasts', sublabel: 'Taskbar Resume vs. standard toasts' },
                  ]}
                />
                <p className="text-xs text-muted-foreground mt-3">*WIP metrics. Subject to change.</p>
              </div>
              <div className="rounded-2xl border border-border p-6" style={{ backgroundColor: tint('var(--icon-purple)', 4) }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--icon-purple)' }}>
                  What this enabled
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-blue)' }} aria-hidden="true" />
                    <p className="text-sm text-foreground">
                      Systems design is often about behaviour. Design the rules that shape
                      how the system behaves.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
                    <p className="text-sm text-foreground">
                      Good platform experiences create rules that scale. When the model
                      is right, many experiences can flourish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Takeaway>
              Windows doesn't need to ask where you want to work next. It can help you
              pick up where you left off.
            </Takeaway>
          </Section>
        </Reveal>

        {/* 11 — In the news */}
        <Reveal>
          <Section>
            <EditorialHeading eyebrow="In the news" heading="The experience beyond the product." />
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {PRESS_ITEMS.map((item) => (
                <a
                  key={item.publication}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-border p-5 block hover:border-primary/40 transition-colors"
                >
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
                    {item.publication}
                  </p>
                  <p className="text-foreground text-sm leading-relaxed mt-2">{item.headline}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium mt-3" style={{ color: 'var(--icon-purple)' }}>
                    Read article
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* 12 — Deep links */}
        <Reveal>
          <Section>
            <EditorialHeading eyebrow="Deeplinks" heading="Explore the experience yourself." />
            <ul className="mt-8 divide-y divide-border border-t border-b border-border">
              {[
                {
                  label: 'Windows Blog',
                  description: 'Open the official announcement',
                  href: 'https://blogs.windows.com/windows-insider/2026/01/27/releasing-windows-11-builds-26100-7701-and-26200-7701-to-the-release-preview-channel/',
                },
                {
                  label: 'Product experience',
                  description: 'Learn more about cross-device Resume',
                  href: 'https://support.microsoft.com/en-us/windows/cross-device-resume-feature-9ada0c0b-f70f-4806-abac-b7126fa6a053',
                },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-4 group"
                  >
                    <div>
                      <p className="font-semibold text-foreground">{link.label}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{link.description}</p>
                    </div>
                    <ExternalLink
                      className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-primary transition-colors"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>

        {/* 13 — The bigger idea */}
        <Reveal>
          <Section>
            <EditorialHeading
              eyebrow="The bigger idea"
              heading="From connected devices to a system that moves with the user."
            />
            <Prose className="mt-5">
              <p>Phone to PC Continuity started as a question about how to resume a task.</p>
              <p>
                It became a broader design problem: how can Windows understand what
                someone was doing, infer where they want to continue, and help without
                getting in the way?
              </p>
            </Prose>
            <Takeaway>
              The best continuity experience is one users don't have to think about.
            </Takeaway>
          </Section>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="phone-to-pc-resume" />
        </Reveal>
      </div>
    </div>
  );
}

export { PhoneToPcResumePage };
