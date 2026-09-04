import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  ArrowLeftRight,
  Layers,
  Target,
  Clock,
  Zap,
  Bell,
  PanelsTopLeft,
  Shield,
  TrendingUp,
  Users,
  HelpCircle,
  LogOut,
  PhoneCall,
  LayoutGrid,
  Video,
  Search,
  Music,
  Briefcase,
  AppWindow,
  Radio,
  Radar,
  Cpu,
  MonitorSmartphone,
  Play,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { Section } from '@/components/casestudy/section';
import { NarrativeStatement } from '@/components/casestudy/narrative-statement';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { ImageBlock, VideoBlock } from '@/components/casestudy/image-block';
import { Takeaway } from '@/components/casestudy/takeaway';
import { DecisionStrip } from '@/components/casestudy/decision-strip';
import { Ownership } from '@/components/casestudy/ownership';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';
import { cn, type IconComponent } from '@/lib/utils';

/**
 * Same warm-editorial token override Home, About, Work, Contact, Kopdar,
 * Family Safety and Phone → PC use, scoped to this page's own root wrapper
 * only. This was the one case study page still on the unstyled default
 * tokens; bringing it into the same visual family here.
 */
const CASESTUDY_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

/**
 * The Phone <-> PC continuity-loop mark: phone, arrow to PC (the shipped
 * direction), bidirectional arrow back to phone (the direction this project
 * closes). Reused at the "Closing the loop" section and the page's final
 * close so the two moments bookend each other visually.
 */
function ContinuityLoop() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2" aria-hidden="true">
        <Smartphone className="w-5 h-5" style={{ color: 'var(--icon-teal)' }} />
        <ArrowRight className="w-4 h-4 text-muted-foreground" />
        <Monitor className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
        <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
        <Smartphone className="w-5 h-5" style={{ color: 'var(--icon-teal)' }} />
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Phone → PC ↔ Phone
      </p>
    </div>
  );
}

/**
 * Larger, serif heading reserved for the page's narrative-anchor sections
 * (Problem, Reframe, Product Question, Flagship, Scale) so those thesis
 * statements read as bigger ideas than the page's other section headings —
 * a size-based distinction rather than a new heading pattern per section.
 * Local to this page, matching the EditorialHeading precedent already
 * established locally in phone-to-pc-resume.tsx.
 */
function MajorHeading({
  eyebrow,
  eyebrowColor = 'var(--primary)',
  children,
  supporting,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  children: React.ReactNode;
  supporting?: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: eyebrowColor }}>
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.08]">{children}</h2>
      {supporting && <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{supporting}</p>}
    </div>
  );
}

interface PlainIconRowItem {
  icon: IconComponent;
  color: string;
  title: string;
  description: string;
}

/**
 * Icon + title + description with no border or background, used in place of
 * IconCardList for secondary explanatory content that doesn't represent a
 * comparison, categorization, or system model worth boxing — so the page
 * isn't an unbroken stack of bordered UI cards.
 */
function PlainIconRow({ items }: { items: PlainIconRowItem[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-x-6 gap-y-8">
      {items.map((item) => (
        <div key={item.title}>
          <item.icon className="w-5 h-5 mb-2.5" style={{ color: item.color }} aria-hidden="true" />
          <p className="font-semibold text-foreground">{item.title}</p>
          <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

/** Shared origin/destination node for Context Transfer Model — icon chip + label + short sublabel, row on mobile, column on desktop. */
function DiagramNode({
  icon: Icon,
  color,
  label,
  sublabel,
}: {
  icon: IconComponent;
  color: string;
  label: string;
  sublabel: string;
}) {
  return (
    <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2 md:text-center md:w-24 shrink-0">
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: tint(color, 15) }}
      >
        <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{sublabel}</p>
      </div>
    </div>
  );
}

const CONTEXT_ATTRIBUTES: { icon: IconComponent; color: string; label: string }[] = [
  { icon: Target, color: 'var(--icon-blue)', label: 'Intent' },
  { icon: Clock, color: 'var(--icon-teal)', label: 'State' },
  { icon: Layers, color: 'var(--icon-purple)', label: 'Context' },
];

/**
 * WHAT travels with the task: PC and Phone as plain icon nodes, connected
 * through the one thing that matters — the Intent/State/Context bundle,
 * reusing the exact icons/colors already established for those three in the
 * cards just above this diagram. One grouping box (the bundle itself), no
 * per-attribute cards, so the diagram reads as a model rather than a stack
 * of UI cards.
 */
function ContextTransferModel() {
  return (
    <div className="rounded-2xl border border-border bg-muted/10 p-6 md:p-10">
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-4">
        <DiagramNode icon={Monitor} color="var(--icon-blue)" label="PC" sublabel="Active task" />
        <ArrowRight
          className="w-5 h-5 text-muted-foreground mx-auto rotate-90 md:rotate-0 shrink-0"
          aria-hidden="true"
        />
        <div className="flex-1 rounded-xl border border-border p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-4 text-center">
            Travels with the task
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8">
            {CONTEXT_ATTRIBUTES.map((a) => (
              <div key={a.label} className="flex items-center sm:flex-col sm:text-center gap-3 sm:gap-2">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: tint(a.color, 15) }}
                >
                  <a.icon className="w-4 h-4" style={{ color: a.color }} aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold text-foreground">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
        <ArrowRight
          className="w-5 h-5 text-muted-foreground mx-auto rotate-90 md:rotate-0 shrink-0"
          aria-hidden="true"
        />
        <DiagramNode icon={Smartphone} color="var(--icon-teal)" label="Phone" sublabel="Resumed task" />
      </div>
    </div>
  );
}

const LIFECYCLE_STAGES: { icon: IconComponent; color: string; label: string }[] = [
  { icon: Monitor, color: 'var(--icon-blue)', label: 'Active Task' },
  { icon: LogOut, color: 'var(--icon-blue)', label: 'User Transition' },
  { icon: Radar, color: 'var(--icon-purple)', label: 'Context Capture' },
  { icon: Cpu, color: 'var(--icon-purple)', label: 'Decision' },
  { icon: MonitorSmartphone, color: 'var(--icon-purple)', label: 'Resume Surface' },
  { icon: Play, color: 'var(--icon-blue)', label: 'Resume' },
  { icon: Smartphone, color: 'var(--icon-blue)', label: 'Continue' },
];

/**
 * HOW the task moves through the system: one continuous path of 7 stages,
 * color-coded blue (user action) vs. purple (system response) rather than
 * seven equal-weight cards. Same frame/radius/tint language as
 * ContextTransferModel above so the two read as one diagram system.
 */
function ContinuityLifecycleDiagram() {
  return (
    <div className="rounded-2xl border border-border bg-muted/10 p-6 md:p-10">
      <div className="flex items-center justify-center gap-6 mb-8 text-xs font-bold uppercase tracking-widest">
        <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--icon-blue)' }}>
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--icon-blue)' }} aria-hidden="true" />
          User
        </span>
        <span className="inline-flex items-center gap-1.5" style={{ color: 'var(--icon-purple)' }}>
          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: 'var(--icon-purple)' }} aria-hidden="true" />
          System
        </span>
      </div>

      {/* Desktop: one continuous horizontal path */}
      <div className="hidden md:flex items-start">
        {LIFECYCLE_STAGES.map((stage, i) => (
          <Fragment key={stage.label}>
            <div className="flex flex-col items-center text-center gap-2 w-20 shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: tint(stage.color, 15) }}
              >
                <stage.icon className="w-4 h-4" style={{ color: stage.color }} aria-hidden="true" />
              </div>
              <p className="text-xs font-semibold text-foreground leading-tight">{stage.label}</p>
            </div>
            {i < LIFECYCLE_STAGES.length - 1 && (
              <div className="h-px flex-1 mt-5" style={{ backgroundColor: 'var(--border)' }} aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical sequence, no horizontal scroll */}
      <div className="md:hidden">
        {LIFECYCLE_STAGES.map((stage, i) => (
          <div key={stage.label} className="flex gap-3">
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: tint(stage.color, 15) }}
              >
                <stage.icon className="w-4 h-4" style={{ color: stage.color }} aria-hidden="true" />
              </div>
              {i < LIFECYCLE_STAGES.length - 1 && (
                <div className="w-px flex-1 my-1" style={{ backgroundColor: 'var(--border)' }} aria-hidden="true" />
              )}
            </div>
            <p className="text-sm font-semibold text-foreground pb-6">{stage.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface SpectrumPoint {
  icon: IconComponent;
  color: string;
  label: string;
  description: string;
}

const CONFIDENCE_SPECTRUM_POINTS: SpectrumPoint[] = [
  { icon: Zap, color: 'var(--icon-blue)', label: 'Implicit', description: 'System anticipates' },
  { icon: Target, color: 'var(--icon-purple)', label: 'Hybrid', description: 'System suggests' },
  { icon: Users, color: 'var(--icon-teal)', label: 'Explicit', description: 'User initiates' },
];

/**
 * HOW MUCH the system should intervene: a true gradient continuum rather
 * than three equal cards, reusing the exact icons/colors already assigned
 * to Implicit/Hybrid/Explicit in the cards above, and the "system
 * confidence" / "user control" wording already used in the surrounding
 * copy. Hybrid's chip is drawn slightly larger so it reads as the
 * experience's sweet spot through composition alone — no "best" label.
 */
function ContinuitySpectrumDiagram() {
  return (
    <div className="rounded-2xl border border-border bg-muted/10 p-6 md:p-10">
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        <span>System confidence</span>
        <span>User control</span>
      </div>
      <div
        className="h-1.5 rounded-full mt-3"
        style={{ background: 'linear-gradient(to right, var(--icon-blue), var(--icon-purple), var(--icon-teal))' }}
        aria-hidden="true"
      />
      <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-5">
        {CONFIDENCE_SPECTRUM_POINTS.map((p, i) => (
          <div
            key={p.label}
            className={cn(
              'flex flex-col gap-2',
              i === 0 && 'items-start text-left',
              i === 1 && 'items-center text-center',
              i === 2 && 'items-end text-right',
            )}
          >
            <div className="w-px h-3" style={{ backgroundColor: 'var(--border)' }} aria-hidden="true" />
            <div
              className={cn('rounded-full flex items-center justify-center shrink-0', i === 1 ? 'w-12 h-12' : 'w-9 h-9')}
              style={{ backgroundColor: tint(p.color, 15) }}
            >
              <p.icon className={i === 1 ? 'w-5 h-5' : 'w-4 h-4'} style={{ color: p.color }} aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{p.label}</p>
              <p className="text-muted-foreground text-xs mt-0.5">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ScenarioData {
  icon: IconComponent;
  color: string;
  title: string;
  description: string;
}

const SUPPORTING_SCENARIOS: ScenarioData[] = [
  {
    icon: Briefcase,
    color: 'var(--icon-blue)',
    title: 'Work in progress',
    description: 'Task state and context — where you were, and what surrounded it.',
  },
  {
    icon: Search,
    color: 'var(--icon-teal)',
    title: 'Research',
    description: 'Intent and accumulated context — why you started, and what you gathered.',
  },
  {
    icon: Music,
    color: 'var(--icon-orange)',
    title: 'Media',
    description: 'Progress and momentum — exactly where playback left off.',
  },
];

interface EntryPointData {
  level: string;
  icon: IconComponent;
  color: string;
  name: string;
  description: string;
}

const ENTRY_POINTS: EntryPointData[] = [
  { level: 'Ambient', icon: PanelsTopLeft, color: 'var(--icon-blue)', name: 'Now Bar', description: 'Always present, never demanding attention.' },
  { level: 'Timely', icon: Bell, color: 'var(--icon-orange)', name: 'Notification', description: 'Appears exactly when a resume moment becomes relevant.' },
  { level: 'Standing', icon: Radio, color: 'var(--icon-purple)', name: 'Status Chip', description: 'A quiet, persistent signal for tasks the system isn’t confident enough to actively surface.' },
  { level: 'Active', icon: AppWindow, color: 'var(--icon-teal)', name: 'App Switcher', description: 'Surfaces resume while the user is already mid-task.' },
  { level: 'Persistent', icon: LayoutGrid, color: 'var(--icon-green)', name: 'Widget', description: 'A standing entry point the user chooses to keep visible.' },
];

/**
 * Diagram-only ordering along the attention spectrum, derived from each
 * entry point's own existing description rather than the list order above:
 * Now Bar and App Switcher anchor the two ends the intro copy already names
 * ("ambient and always-present" / "active and mid-task"); Status Chip sits
 * next to Ambient because it's explicitly the one the system isn't
 * "confident enough to actively surface"; Widget sits just after it as a
 * user-opted, similarly passive presence; Notification sits closest to the
 * Active end because it's the one that "appears exactly when... relevant" —
 * the most time-sensitive, attention-seeking surface of the five.
 */
const ENTRY_ATTENTION_SPECTRUM: EntryPointData[] = [
  ENTRY_POINTS[0],
  ENTRY_POINTS[2],
  ENTRY_POINTS[4],
  ENTRY_POINTS[1],
  ENTRY_POINTS[3],
];

/**
 * WHERE continuity meets the user's attention: the same five entry points
 * already listed above, positioned along one continuum instead of five
 * equal cards. Same connector/icon-chip recipe as Continuity Lifecycle for
 * shared visual grammar, but with no directional arrows — this is a
 * positioning, not a sequence.
 */
function EntryPointSpectrumDiagram() {
  return (
    <div className="rounded-2xl border border-border bg-muted/10 p-6 md:p-10">
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
        <span>Ambient</span>
        <span>Active</span>
      </div>

      {/* Desktop: five points along one continuum */}
      <div className="hidden md:flex items-start mt-5">
        {ENTRY_ATTENTION_SPECTRUM.map((item, i) => (
          <Fragment key={item.name}>
            <div className="flex flex-col items-center text-center gap-2 w-20 shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: tint(item.color, 15) }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-foreground leading-tight">{item.name}</p>
            </div>
            {i < ENTRY_ATTENTION_SPECTRUM.length - 1 && (
              <div className="h-px flex-1 mt-[1.125rem]" style={{ backgroundColor: 'var(--border)' }} aria-hidden="true" />
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical sequence, no horizontal scroll */}
      <div className="md:hidden mt-5">
        {ENTRY_ATTENTION_SPECTRUM.map((item, i) => (
          <div key={item.name} className="flex gap-3">
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: tint(item.color, 15) }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} aria-hidden="true" />
              </div>
              {i < ENTRY_ATTENTION_SPECTRUM.length - 1 && (
                <div className="w-px flex-1 my-1" style={{ backgroundColor: 'var(--border)' }} aria-hidden="true" />
              )}
            </div>
            <p className="text-sm font-semibold text-foreground pb-6">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PcToPhoneResumePage() {
  return (
    <div style={CASESTUDY_THEME_VARS} className="bg-background text-foreground pb-20">
      <Seo
        title="PC to Phone Resume"
        description="Designing a system-level continuity experience that lets people move from Windows PC to phone without losing their task, context, or momentum."
      />

      {/* 1. Hero */}
      <CaseStudyHero
        eyebrow="Microsoft · Windows Connected Experience & Ecosystem"
        breadcrumbLabel="PC to Phone Resume"
        badges={['PC to Phone Continuity', 'Work in Progress']}
        title="PC → Phone Resume"
        subtitle="What if leaving your PC didn't mean leaving your task?"
        description="Designing a system-level continuity experience that lets people move from Windows PC to phone without losing their task, context, or momentum."
        meta={[
          { label: 'Role', value: 'Lead Product Designer' },
          { label: 'Timeline', value: 'Oct 2025 to Present' },
          { label: 'Platform', value: 'Windows 11, Android, iOS' },
          { label: 'Status', value: 'Work in Progress' },
        ]}
        coverImage="/images/shared/project-pc-to-phone-cover.webp"
        coverAlt="PC to Phone continuity: moving a task's context from desktop to mobile"
        workInProgress
        iconFlow={[
          { icon: Monitor, color: 'var(--icon-blue)' },
          { icon: ArrowRight, color: 'var(--icon-orange)' },
          { icon: Layers, color: 'var(--icon-purple)' },
          { icon: ArrowRight, color: 'var(--icon-orange)' },
          { icon: Smartphone, color: 'var(--icon-teal)' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <MetaGrid
          items={[
            { label: 'Platform', value: 'Windows', pillColor: 'blue' },
            { label: 'Domain', value: 'Connected Experience & Ecosystem', pillColor: 'purple' },
            { label: 'Experience Pillar', value: 'Continuity', pillColor: 'blue' },
            { label: 'Capability', value: 'Cross-Device Resume (PC to Phone)', pillColor: 'green' },
          ]}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {/* 2. The problem */}
        <Reveal>
          <Section className="space-y-8">
            <MajorHeading eyebrow="The problem">Leaving the PC shouldn't mean leaving the task.</MajorHeading>
            <Prose>
              <p>
                Modern work rarely stays on one device. It starts on the PC, a
                document, a call, a browsing session, and it keeps going after the
                PC is closed. Meetings end. Commutes begin. The task doesn't stop,
                but historically, continuing it did.
              </p>
              <p>
                Before PC to Phone Resume, continuing that task on a phone meant
                doing all the reconstruction yourself.
              </p>
            </Prose>
            <CalloutList
              title="Users had to:"
              tone="negative"
              items={[
                'Copy links or share content manually',
                'Reopen the right app from scratch',
                'Find the right conversation or window again',
                'Reconstruct exactly where they left off',
              ]}
            />
            <Prose callout>
              Friction showed up at the exact moment users were switching devices,
              which is also the moment they were most time-constrained.
            </Prose>
            <Prose>
              <p className="text-sm">
                I'm leading this end-to-end — from defining the continuity vision
                to the system-level design that makes it work across PC and phone.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 3. Closing the loop */}
        <Reveal className="mt-12">
          <Section eyebrow="Closing the loop" title="Continuity has to work both ways.">
            <Prose>
              <p>
                Phone → PC Continuity already shipped: Windows learned to
                anticipate when a task on the phone should continue on the PC.
                That solved one direction.
              </p>
              <p>
                PC to Phone Resume is the other half — carrying a task back to the
                phone when the PC isn't where it can be finished anymore.
              </p>
            </Prose>
            <div className="flex justify-center py-2">
              <ContinuityLoop />
            </div>
            <Prose callout kind="insight">
              Phone → PC established one direction. PC → Phone closes the loop.
            </Prose>
            <div className="flex justify-center">
              <Link
                to="/work/phone-to-pc-resume"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
              >
                See how Phone → PC established the pattern
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Section>
        </Reveal>

        {/* 4. The reframe */}
        <Reveal className="mt-16">
          <Section className="space-y-8">
            <MajorHeading eyebrow="The reframe">A task shouldn't belong to a device.</MajorHeading>
            <PlainIconRow
              items={[
                {
                  icon: Clock,
                  color: 'var(--icon-blue)',
                  title: 'Context increasingly moves between PC and phone',
                  description: "Work doesn't stay on one device anymore, and users expect it to follow them.",
                },
                {
                  icon: Target,
                  color: 'var(--icon-teal)',
                  title: 'Other ecosystems raised the bar',
                  description: 'Handoff-style experiences elsewhere had already made continuity feel automatic.',
                },
                {
                  icon: Zap,
                  color: 'var(--icon-orange)',
                  title: 'Windows needed to feel like a journey, not a destination',
                  description: 'Without PC to phone continuity, Windows was a one-way ecosystem.',
                },
              ]}
            />
            <NarrativeStatement color="var(--icon-purple)">The unit of continuity is the task, not the device.</NarrativeStatement>
            <Prose>
              <p>Three things need to travel with the task for it to feel resumed instead of restarted:</p>
            </Prose>
            <IconCardList
              columns={3}
              items={[
                {
                  icon: Target,
                  iconColor: 'var(--icon-blue)',
                  title: 'Intent',
                  description: 'Why am I doing this? The reason the task exists in the first place.',
                },
                {
                  icon: Clock,
                  iconColor: 'var(--icon-teal)',
                  title: 'State',
                  description: 'Where was I? The exact position and progress within the task.',
                },
                {
                  icon: Layers,
                  iconColor: 'var(--icon-purple)',
                  title: 'Context',
                  description: 'What surrounded the task? The people, content, and situation around it.',
                },
              ]}
            />
            <ContextTransferModel />
          </Section>
        </Reveal>

        {/* 5. The hypothesis */}
        <Reveal className="mt-16">
          <Section eyebrow="The hypothesis" title="What if confidence in continuity changes where a task begins?">
            <Prose>
              <p>
                Most continuity work gets judged by how well it finishes a task
                that already started somewhere else. There's a second question I
                haven't validated yet: does knowing continuity exists change where
                someone is willing to start in the first place?
              </p>
            </Prose>
            <Prose callout kind="note">
              <p className="italic">
                I hypothesize that when people are confident they can seamlessly
                continue a task on another device, they may be more willing to
                start that task wherever they are.
              </p>
            </Prose>
            <Prose>
              <p className="text-sm">
                This is a hypothesis I'm exploring through the design of PC to
                Phone Resume, not a validated finding.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 6. High-value scenarios */}
        <Reveal className="mt-12">
          <Section eyebrow="High-value scenarios" title="Not every task needs to move. Some moments matter more.">
            <Prose>
              <p>
                Continuity is most valuable where the cost of restarting is
                highest. Four kinds of tasks carry that cost differently:
              </p>
            </Prose>
            <div
              className="rounded-2xl border-2 p-6 flex items-start gap-4"
              style={{ borderColor: 'var(--icon-purple)', backgroundColor: tint('var(--icon-purple)', 6) }}
            >
              <Video className="w-6 h-6 shrink-0 mt-0.5" style={{ color: 'var(--icon-purple)' }} aria-hidden="true" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
                  Highest cost to reconstruct
                </p>
                <p className="font-bold text-lg text-foreground mt-1">Video call</p>
                <p className="text-muted-foreground mt-1">
                  Active interaction and an active session — the one scenario where
                  losing continuity means losing the moment itself.
                </p>
              </div>
            </div>
            <IconCardList
              columns={3}
              items={SUPPORTING_SCENARIOS.map((s) => ({
                icon: s.icon,
                iconColor: s.color,
                title: s.title,
                description: s.description,
              }))}
            />
          </Section>
        </Reveal>

        {/* 7. Product question */}
        <Reveal className="mt-20">
          <Section className="space-y-8">
            <MajorHeading eyebrow="Product question">How much should the system decide for me?</MajorHeading>
            <IconCardList
              columns={2}
              items={[
                {
                  icon: HelpCircle,
                  iconColor: 'var(--icon-red)',
                  title: 'Too little intelligence',
                  description: 'The user has to notice the transition, find the task, and rebuild context by hand.',
                },
                {
                  icon: Bell,
                  iconColor: 'var(--icon-orange)',
                  title: 'Too much intervention',
                  description: 'The system interrupts constantly, surfacing things the user never asked for.',
                },
              ]}
            />
            <DecisionStrip
              decision="Aim for helpful without being interruptive, rather than maximizing either automation or user control on its own."
              why="Too little intelligence forces the user to do everything by hand. Too much intervention makes the system noisy and untrustworthy."
            />
            <Prose>
              <p>
                Continuity isn't binary. It's a spectrum of system confidence and
                user control — seamless resume with no new gestures to learn,
                context awareness that understands intent rather than just
                activity, and ambient surfaces favored over interruptions.
              </p>
            </Prose>
            <IconCardList
              columns={3}
              items={[
                {
                  icon: Zap,
                  iconColor: 'var(--icon-blue)',
                  title: 'Implicit: system anticipates',
                  description: 'The system recognizes intent and makes the task available automatically, with minimal user effort.',
                },
                {
                  icon: Target,
                  iconColor: 'var(--icon-purple)',
                  title: 'Hybrid: system suggests',
                  description: 'The system surfaces a resume opportunity without assuming the user wants to act on it.',
                },
                {
                  icon: Users,
                  iconColor: 'var(--icon-teal)',
                  title: 'Explicit: user initiates',
                  description: 'The user decides what continues and when, and the system stays out of the way until asked.',
                },
              ]}
            />
            <ContinuitySpectrumDiagram />
            <PlainIconRow
              items={[
                { icon: Shield, color: 'var(--icon-blue)', title: 'Platform', description: 'Android and iOS have different affordances.' },
                { icon: Target, color: 'var(--icon-teal)', title: 'Ecosystem', description: 'System, app, and partner expectations need alignment.' },
                { icon: Shield, color: 'var(--icon-purple)', title: 'Intelligence', description: 'The system needs to feel useful without feeling intrusive.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* 8. The system */}
        <Reveal className="mt-14">
          <Section eyebrow="The system" title="Continuity needs a system, not a single feature.">
            <Prose>
              <p>
                Intent, state and context don't assemble themselves. A task moves
                from active to resumed through a defined sequence, not a single
                handoff moment.
              </p>
            </Prose>
            <ContinuityLifecycleDiagram />
            <Prose>
              <p>
                Resume is a path, not a single step: the task stays active, the
                transition is detected, and the system decides how and where to
                bring it back.
              </p>
            </Prose>
            <ImageBlock
              heading="PC to Phone Resume Map"
              src="/images/casestudy-1/resume-map-flow.webp"
              alt="PC to Phone Resume map showing the active task, transition, and continuation flow"
              evidence="system-model"
            />
          </Section>
        </Reveal>

        {/* 9. Entry points */}
        <Reveal className="mt-14">
          <Section eyebrow="Entry points" title="The right moment matters as much as the right experience.">
            <Prose>
              <p>
                Where continuity should appear depends on how much of the user's
                attention is already available, from ambient and always-present to
                active and mid-task.
              </p>
            </Prose>
            <ul className="divide-y divide-border border-t border-b border-border">
              {ENTRY_POINTS.map((item) => (
                <li key={item.name} className="flex items-center gap-4 py-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: tint(item.color, 15) }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: item.color }}>
                        {item.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-2 gap-4">
              <ImageBlock
                heading="Now Bar: single app ready to resume"
                src="/images/casestudy-1/nowbar-single-app.webp"
                alt="Now Bar showing a single active app ready to resume"
                evidence="design-exploration"
              />
              <ImageBlock
                heading="Now Bar: multiple apps available"
                src="/images/casestudy-1/nowbar-multiple-app.webp"
                alt="Now Bar showing multiple apps available to resume"
                evidence="design-exploration"
              />
              <ImageBlock
                heading="Notification: a contextual resume prompt"
                src="/images/casestudy-1/teams-notification.webp"
                alt="Notification prompting the user to resume a task"
                evidence="design-exploration"
              />
              <ImageBlock
                heading="Status chip: a persistent multi-app indicator"
                src="/images/casestudy-1/status-chip-multiple-app.webp"
                alt="Status chip indicating multiple apps available to resume"
                evidence="design-exploration"
              />
            </div>
            <EntryPointSpectrumDiagram />
          </Section>
        </Reveal>

        {/* 10. Flagship experience — the page's strongest concrete evidence, given
            the biggest pause before it and a bigger heading so it reads as the
            payoff rather than another exploratory section. */}
        <Reveal className="mt-28 md:mt-36">
          <Section className="space-y-10">
            <MajorHeading eyebrow="Flagship experience" eyebrowColor="var(--color-outcome)">
              A Teams call, resumed without reconstruction.
            </MajorHeading>
            <div className="space-y-6">
              <VideoBlock
                heading="A Teams call, resumed exactly where it left off"
                src="/videos/pc-to-phone-teams-call.mp4"
                evidence="design-exploration"
              />
              <StepFlow
                variant="numbered"
                steps={[
                  { icon: Monitor, iconColor: 'var(--icon-blue)', title: 'On the PC', description: 'Teams call is active on PC.' },
                  { icon: LogOut, iconColor: 'var(--icon-orange)', title: 'Leaving', description: 'The user leaves the PC.' },
                  { icon: Smartphone, iconColor: 'var(--icon-purple)', title: 'On the phone', description: 'The phone surfaces a contextual resume opportunity.' },
                  { icon: PhoneCall, iconColor: 'var(--icon-green)', title: 'Resumed', description: 'The user continues the call.' },
                ]}
              />
            </div>
            <Prose callout kind="outcome">
              <p className="text-center text-xl md:text-2xl font-semibold">
                Same call. Same context. No reconstruction.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 11. Scale */}
        <Reveal className="mt-20">
          <Section className="space-y-8">
            <MajorHeading eyebrow="Scale">One model, many experiences.</MajorHeading>
            <Prose>
              <p>
                PC to Phone Resume is one expression of a broader capability, not
                a single app integration. The same continuity model is designed
                to scale across browser, productivity, media, and other Windows
                and phone experiences, as part of the wider Connected Experience
                Continuity strategy.
              </p>
            </Prose>
            <ImageBlock
              heading="Cross-Device Resume: one platform capability, many surfaces"
              src="/images/casestudy-1/xdr-platform-diagram.webp"
              alt="Cross Device Resume platform diagram showing continuity as a shared capability across app surfaces"
              evidence="system-model"
            />
          </Section>
        </Reveal>

        {/* 12. My role */}
        <Reveal className="mt-16">
          <Section eyebrow="My role" title="I shaped the idea from principle to experience.">
            <Ownership
              items={[
                { dimension: 'vision', description: 'Defined the continuity vision as part of the broader Connected Experience strategy.' },
                { dimension: 'system', description: 'Designed system-level patterns for cross-device resume across PC and phone.' },
                { dimension: 'experience', description: 'Balanced implicit intelligence with explicit user control across sensitive and non-sensitive scenarios.' },
                { dimension: 'collaboration', description: 'Partnered closely with Product Management and Engineering to align feasibility, platform constraints, and long-term scalability.' },
                { dimension: 'execution', description: 'Led end-to-end design for PC to Phone Resume, from concept through active development.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* 13. Reflection */}
        <Reveal className="mt-16">
          <Section eyebrow="Reflection" title="Continuity isn't just about where a task ends.">
            <Prose>
              <p>
                Directional signals from design validation so far — the work is
                still in progress, so these are early signs, not measured usage
                outcomes:
              </p>
            </Prose>
            <div className="space-y-3">
              {[
                { icon: TrendingUp, color: 'var(--icon-blue)', text: 'Design validation suggests continuity is starting to feel like part of the Windows ecosystem, not an afterthought.' },
                { icon: Zap, color: 'var(--icon-green)', text: 'In design walkthroughs, the flow removes several of the moments that would otherwise force restarting a task from scratch.' },
                { icon: Target, color: 'var(--icon-orange)', text: 'Design validation points toward stronger interest in connected, cross-device experiences once this ships.' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="rounded-xl border border-border bg-muted/30 p-5 flex items-center gap-4"
                >
                  <item.icon className="w-6 h-6 shrink-0" style={{ color: item.color }} />
                  <p className="text-foreground font-semibold text-lg">{item.text}</p>
                </div>
              ))}
            </div>
            <Prose>
              <p className="text-sm italic">
                (These are early directional signals from design validation, not
                measured usage data — the metrics that matter will come once this
                ships.)
              </p>
            </Prose>
            <NarrativeStatement color="var(--icon-purple)" supporting="Returning to the hypothesis from earlier">
              It may also influence where it begins.
            </NarrativeStatement>
            <Prose>
              <p>
                The bigger opportunity sits beyond PC to Phone Resume itself:
                making Windows feel less like a collection of devices and more
                like a continuous environment that follows the user's task,
                context, and intent — and, if the hypothesis holds, one that
                gives people the confidence to start a task anywhere, not just
                finish one anywhere.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 14. Closing — given the largest pause and a top rule of its own so it
            reads as the definitive close rather than another section. */}
        <Reveal className="mt-24 md:mt-28 pt-12 border-t border-border">
          <Takeaway className="py-10">
            <span className="text-3xl md:text-5xl">Changing devices should feel irrelevant.</span>
          </Takeaway>
          <div className="flex justify-center mt-6">
            <ContinuityLoop />
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <CaseStudyNav slug="pc-to-phone-resume" />
        </Reveal>
      </div>
    </div>
  );
}

export { PcToPhoneResumePage };
