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
  Layers,
  TrendingUp,
  ExternalLink,
  Sparkles,
  Users,
  Clock,
  Compass,
  HelpCircle,
  Search,
  MessageCircle,
  Music,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { EvidenceLabel } from '@/components/casestudy/evidence-label';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { AppScenarioCard } from '@/components/casestudy/app-scenario-card';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Takeaway } from '@/components/casestudy/takeaway';
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
import { assetUrl } from '@/lib/asset-url';
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

/**
 * A major narrative-pause moment — a big centered lavender-washed statement,
 * distinct from ordinary body content. Used sparingly for the handful of
 * conceptual turns in the case study (never for routine section headings),
 * so that when it appears it reads as a deliberate beat, not a repeated
 * card pattern.
 */
function NarrativeStatement({ children, supporting }: { children: React.ReactNode; supporting?: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl p-8 md:p-12 text-center"
      style={{ backgroundColor: tint('var(--icon-purple)', 6) }}
    >
      <p className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-snug max-w-2xl mx-auto">
        {children}
      </p>
      {supporting && <p className="text-muted-foreground mt-4 max-w-xl mx-auto">{supporting}</p>}
    </div>
  );
}

const IMPACT_STATS = [
  { value: '3.1M', label: 'Monthly Resume alerts surfaced to users' },
  { value: '290K+', label: 'Monthly engaged users' },
  { value: '8.5%', label: 'Conversion on Resume toasts' },
  { value: '~28%', label: 'Engagement rate on Toolbar Resume' },
];

/**
 * The five-part contribution row. Rendered as a plain local grid (not the
 * shared Ownership component, which caps at 3 columns and would wrap these
 * 5 items into 3+2 rows) so the reference's single horizontal row is
 * preserved on desktop.
 */
const ROLE_CONTRIBUTIONS: { icon: IconComponent; color: string; title: string; description: string }[] = [
  { icon: Target, color: 'var(--icon-blue)', title: 'Vision & Strategy', description: 'Defined the Windows continuity vision.' },
  { icon: Layers, color: 'var(--icon-purple)', title: 'System Design', description: 'Established the system behavior.' },
  { icon: Sparkles, color: 'var(--icon-teal)', title: 'Experience Design', description: 'Designed the Taskbar experience.' },
  { icon: Users, color: 'var(--icon-orange)', title: 'Collaboration', description: 'Partnered with Product, Engineering, Platform teams and external partners.' },
  { icon: TrendingUp, color: 'var(--icon-green)', title: 'Impact', description: 'Shipped a capability now used by hundreds of thousands of people monthly.' },
];

interface DiagramItem {
  icon: IconComponent;
  label: string;
  sublabel?: string;
}

const INPUT_ITEMS: DiagramItem[] = [
  { icon: AppWindow, label: 'First-party apps', sublabel: 'Edge, Microsoft 365, Copilot, etc.' },
  { icon: MessageCircle, label: 'Third-party apps', sublabel: 'WhatsApp, Chrome, etc.' },
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
  { icon: Music, label: 'Resume from your phone', sublabel: 'Spotify · Forever Faves' },
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

interface DecisionRowData {
  number: string;
  title: string;
  description: string;
  video: string;
  alt: string;
}

const DECISIONS: DecisionRowData[] = [
  {
    number: '01',
    title: 'Taskbar became the primary surface.',
    description: 'Always available, contextual and near the point of action.',
    video: '/videos/phone-to-pc-taskbar-alert.mp4',
    alt: 'Phone to PC Resume alert appearing on the Taskbar',
  },
  {
    number: '02',
    title: 'Progressive disclosure instead of immediate interruption.',
    description: 'Signal → Context → Action.',
    video: '/videos/phone-to-pc-hovercard-disclosure.mp4',
    alt: 'Phone to PC Resume hovercard revealing context progressively',
  },
  {
    number: '03',
    title: 'Make the destination predictable.',
    description: 'Answer what, where and what to expect.',
    video: '/videos/phone-to-pc-alert-details.mp4',
    alt: 'Phone to PC Resume alert showing destination details',
  },
];

/** Silent, autoplaying, controls-free loop — a GIF-equivalent behavior built with a plain <video> tag rather than an actual .gif file, since no GIF-encoding tool is available in this environment and the resulting quality/size would be worse than the source video anyway. Local to this page: the shared VideoBlock is deliberately "user-initiated" (has visible controls) for its own use cases elsewhere. */
function GifVideo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-border">
      <video
        src={assetUrl(src)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label={alt}
        className="w-full h-auto block"
      />
    </div>
  );
}

/** Horizontal editorial row (copy left, evidence video right on desktop; stacked copy-then-video on mobile) — a different composition from the shared DecisionStrip's decision/why pairing, so built locally for this reference's specific layout. */
function DecisionRow({ data }: { data: DecisionRowData }) {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <span className="text-xs font-bold" style={{ color: 'var(--icon-purple)' }}>
          {data.number}
        </span>
        <h3 className="font-bold text-xl text-foreground leading-snug mt-2">{data.title}</h3>
        <p className="text-muted-foreground leading-relaxed mt-2">{data.description}</p>
      </div>
      <GifVideo src={data.video} alt={data.alt} />
    </div>
  );
}

interface PressItemData {
  publication: string;
  logo: string;
  headline: string;
  /** Only set where a verified matching URL for this exact article exists — see report notes for which publications don't have one. */
  href?: string;
  image: string;
}

/**
 * Real existing press-clipping screenshots for this case study (already in
 * the repository), each showing the publication's own real headline about
 * this exact feature. Only The Verge has a verified matching URL in the
 * page's prior data, so the other three are presented as real evidence
 * without a fabricated link. Publication marks are real favicons fetched
 * once and stored locally at public/images/logos/.
 */
const PRESS_ITEMS: PressItemData[] = [
  {
    publication: 'The Verge',
    logo: '/images/logos/theverge.png',
    headline: "Windows 11's ability to resume Android apps like Apple Handoff.",
    href: 'https://www.theverge.com/news/869161/microsoft-windows-11-android-app-resume-feature-release-preview',
    image: '/images/casestudy-0/press-theverge.webp',
  },
  {
    publication: 'TechRadar',
    logo: '/images/logos/techradar.png',
    headline: 'Windows 11 feature to resume Android apps on your PC is finally incoming.',
    image: '/images/casestudy-0/press-techradar.webp',
  },
  {
    publication: 'Windows Central',
    logo: '/images/logos/windowscentral.png',
    headline: "Cross Device Resume is Microsoft's answer to Apple's Handoff.",
    image: '/images/casestudy-0/press-windowscentral.webp',
  },
  {
    publication: 'Android Police',
    logo: '/images/logos/androidpolice.png',
    headline: 'Microsoft is bringing an Apple Handoff-like feature to Windows 11 and Android devices.',
    image: '/images/casestudy-0/press-androidpolice.webp',
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
                <EditorialHeading eyebrow="Overview" heading="Pick up where you left off" />
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
              heading="From Phone to PC, without missing a beat"
              supporting="A real end-to-end experience continuing a task from phone to Windows PC."
            />
            <div className="mt-8">
              <div className="flex items-center justify-between gap-3 mb-3">
                <p className="font-semibold text-foreground">Signal to Resume, demonstrated with Spotify</p>
                <EvidenceLabel kind="shipped" />
              </div>
              <GifVideo
                src="/videos/phone-to-pc-spotify-demo.mp4"
                alt="Signal to Resume, demonstrated with Spotify"
              />
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                { icon: MapPin, color: 'var(--icon-purple)', title: 'Pick up anywhere', description: 'Continue tasks exactly where you left off.' },
                { icon: AppWindow, color: 'var(--icon-blue)', title: 'In the right app', description: 'Deep link you into the right experience.' },
                { icon: Target, color: 'var(--icon-teal)', title: 'Context that matters', description: 'Bring the right context so you can continue seamlessly.' },
                { icon: Lock, color: 'var(--icon-orange)', title: 'Privacy by design', description: "You're in control of what's shared and when." },
              ].map((item) => (
                <li key={item.title}>
                  <item.icon className="w-5 h-5 mb-2" style={{ color: item.color }} aria-hidden="true" />
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{item.description}</p>
                </li>
              ))}
            </ul>
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
            <div className="mt-8 space-y-10">
              <NarrativeStatement supporting="People could sometimes continue their work between phone and PC, but continuity was trapped inside the individual apps or websites that supported it.">
                Continuity existed. But it was trapped inside apps.
              </NarrativeStatement>

              <StepFlow
                steps={[
                  { icon: Smartphone, iconColor: 'var(--icon-teal)', title: 'Phone activity', description: 'The task begins on the phone.' },
                  { icon: HelpCircle, iconColor: 'var(--icon-red)', title: 'Remember the app / website', description: 'Recall which app or site had the context.' },
                  { icon: Search, iconColor: 'var(--icon-orange)', title: 'Find & launch it on PC', description: 'Locate and reopen it on the PC.' },
                  { icon: Radar, iconColor: 'var(--icon-purple)', title: 'Find the right context', description: 'Get back to the exact state left behind.' },
                  { icon: CheckCircle2, iconColor: 'var(--icon-green)', title: 'Continue', description: 'Finally pick the task back up.' },
                ]}
              />

              <NarrativeStatement supporting="Continuity moves from an app capability to a platform capability.">
                Cross-device continuity moves that responsibility to the OS.
              </NarrativeStatement>

              <div className="grid grid-cols-3 items-center gap-3 text-center">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    App-level continuity
                  </span>
                  <div className="rounded-xl border border-border bg-muted/30 p-4 mt-3">
                    <Smartphone className="w-6 h-6 mx-auto" style={{ color: 'var(--icon-teal)' }} aria-hidden="true" />
                    <p className="text-sm font-semibold text-foreground mt-2">Phone activity</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground mx-auto mt-6" aria-hidden="true" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
                    OS-level continuity
                  </span>
                  <div
                    className="rounded-xl border p-4 mt-3"
                    style={{ borderColor: tint('var(--icon-purple)', 30), backgroundColor: tint('var(--icon-purple)', 8) }}
                  >
                    <Shield className="w-6 h-6 mx-auto" style={{ color: 'var(--icon-purple)' }} aria-hidden="true" />
                    <p className="text-sm font-semibold text-foreground mt-2">Windows understands the activity</p>
                  </div>
                </div>
              </div>

              <Prose>
                <p>
                  Where continuity did exist, Windows could only surface it through
                  notification-like interventions, another symptom of continuity being
                  fragmented across apps rather than owned by the platform.
                </p>
              </Prose>

              <div
                className="rounded-xl p-5 md:p-6"
                style={{ backgroundColor: tint('var(--icon-purple)', 5) }}
              >
                <p className="font-serif text-lg md:text-xl font-bold text-foreground leading-snug">
                  The old model treated continuity as a notification problem.
                </p>
                <p className="text-muted-foreground text-sm mt-1.5">
                  It pushed information to users and expected them to do the hard work.
                </p>
              </div>

              <IconCardList
                columns={3}
                items={[
                  {
                    icon: Bell,
                    iconColor: 'var(--icon-red)',
                    title: 'Notifications, not outcomes',
                    description: 'The system surfaced information but left the user to connect the dots.',
                  },
                  {
                    icon: Clock,
                    iconColor: 'var(--icon-orange)',
                    title: 'Too many steps',
                    description: 'Reopening the right app and finding the right content created unnecessary work.',
                  },
                  {
                    icon: Compass,
                    iconColor: 'var(--icon-purple)',
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              {ROLE_CONTRIBUTIONS.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-muted/30 p-5">
                  <item.icon className="w-5 h-5 mb-3" style={{ color: item.color }} aria-hidden="true" />
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
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
            <div className="mt-8 space-y-8">
              <ConfidenceSpectrum />
              <NarrativeStatement>
                The more confident Windows is about a user's intent, the more proactive
                it can be.
              </NarrativeStatement>
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
            <div className="mt-8 space-y-12">
              {DECISIONS.map((decision, i) => (
                <div key={decision.number} className={i > 0 ? 'pt-12 border-t border-border' : undefined}>
                  <DecisionRow data={decision} />
                </div>
              ))}
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
            <div className="grid sm:grid-cols-3 gap-4 mt-8 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--icon-green)' }}>
                  Media
                </p>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <SpotifyIcon className="w-9 h-9 rounded-full" />
                  <p className="font-semibold text-foreground mt-3">Spotify</p>
                  <p className="text-muted-foreground text-sm mt-1">Continue music or podcasts where you left off.</p>
                  <div className="rounded-lg overflow-hidden border border-border mt-3">
                    <ImageWithFallback
                      src="/images/casestudy-0/media-continuity.png"
                      alt="Resume from your phone toast for a Spotify track"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--icon-blue)' }}>
                  Web
                </p>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <BrowserIcon className="w-9 h-9 rounded-full" />
                  <p className="font-semibold text-foreground mt-3">Browser</p>
                  <p className="text-muted-foreground text-sm mt-1">Get back to the exact page you were reading.</p>
                  <div className="rounded-lg overflow-hidden border border-border mt-3">
                    <ImageWithFallback
                      src="/images/casestudy-0/web-continuity.png"
                      alt="Resume from your phone toast for a Verge article in the browser"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--icon-orange)' }}>
                  Productivity
                </p>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <Microsoft365Icon className="w-9 h-9 rounded-full" />
                  <p className="font-semibold text-foreground mt-3">Microsoft 365</p>
                  <p className="text-muted-foreground text-sm mt-1">Resume documents, decks and spreadsheets.</p>
                  <div className="rounded-lg overflow-hidden border border-border mt-3">
                    <ImageWithFallback
                      src="/images/casestudy-0/productivity-continuity.png"
                      alt="Resume from your phone toast for a Word document"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
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
            <div className="mt-8">
              <StatGrid
                columns={4}
                stats={IMPACT_STATS.map((s) => ({ ...s, label: s.label.replace('surfaced to users', 'to users') }))}
              />
              <p className="text-xs text-muted-foreground mt-3">*WIP metrics. Subject to change.</p>
            </div>
            <div className="rounded-2xl border border-border p-6 mt-6">
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--icon-purple)' }}>
                What this enabled
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
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
            <Takeaway className="mt-8 rounded-2xl py-10 px-6 bg-[color-mix(in_srgb,var(--icon-purple)_6%,transparent)]">
              Windows doesn't need to ask where you want to work next. It can help you
              pick up where you left off.
            </Takeaway>
          </Section>
        </Reveal>

        {/* 11 — In the news */}
        <Reveal>
          <Section>
            <EditorialHeading eyebrow="In the news" heading="The experience beyond the product." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {PRESS_ITEMS.map((item) => {
                const content = (
                  <>
                    <ImageWithFallback src={item.image} alt={`${item.publication} coverage`} className="w-full h-auto" />
                    <div className="p-4">
                      <div className="flex items-center gap-2">
                        <ImageWithFallback src={item.logo} alt="" className="w-4 h-4 object-contain shrink-0" />
                        <p className="text-xs font-bold uppercase tracking-widest text-foreground">{item.publication}</p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-2">{item.headline}</p>
                      {item.href && (
                        <span
                          className="inline-flex items-center gap-1.5 text-sm font-medium mt-3"
                          style={{ color: 'var(--icon-purple)' }}
                        >
                          Read article
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </>
                );
                const className = 'rounded-2xl border border-border overflow-hidden block';
                return item.href ? (
                  <a
                    key={item.publication}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${className} hover:border-primary/40 transition-colors`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.publication} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </Section>
        </Reveal>

        {/* 12 — Deep links */}
        <Reveal>
          <Section>
            <EditorialHeading eyebrow="Related links" heading="Explore the experience yourself." />
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
                    <div className="flex items-center gap-3">
                      <ImageWithFallback
                        src="/images/logos/microsoft-windows.webp"
                        alt=""
                        className="w-5 h-5 object-contain shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-foreground">{link.label}</p>
                        <p className="text-muted-foreground text-sm mt-0.5">{link.description}</p>
                      </div>
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
          <Section className="text-center">
            <div className="w-10 h-px mx-auto mb-6" style={{ backgroundColor: 'var(--icon-purple)' }} aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--icon-purple)' }}>
              The bigger idea
            </p>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground leading-[1.1] max-w-3xl mx-auto">
              From connected devices to a system that moves with the user.
            </h2>
            <Prose className="mt-8 max-w-xl mx-auto text-base md:text-lg text-center">
              <p>Phone to PC Continuity started as a question about how to resume a task.</p>
              <p>
                It became a broader design problem: how can Windows understand what
                someone was doing, infer where they want to continue, and help without
                getting in the way?
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* Final takeaway — distinct from The Bigger Idea above: no background wash, a top accent rule instead, shorter and more conclusive. */}
        <Reveal>
          <div
            className="max-w-xl mx-auto text-center pt-8 border-t-2"
            style={{ borderColor: 'var(--icon-purple)' }}
          >
            <p className="font-serif text-xl md:text-2xl font-bold text-foreground leading-snug">
              The best continuity experience is one users don't have to think about.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="phone-to-pc-resume" />
        </Reveal>
      </div>
    </div>
  );
}

export { PhoneToPcResumePage };
