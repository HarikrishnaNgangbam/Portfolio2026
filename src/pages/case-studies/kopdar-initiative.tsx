import {
  Users as UsersIcon,
  Clock,
  TrendingUp,
  MapPin,
  Compass,
  Workflow,
  MousePointerClick,
  Wrench,
  Eye,
  CloudOff,
  Calendar,
  MessageCircle,
  MessageSquare,
  Cog,
  CalendarPlus,
  Send,
  CircleCheck,
  UserCheck,
  BarChart3,
  SlidersHorizontal,
  Network,
  Image as ImageIcon,
  FileText,
  QrCode,
  Activity,
  GitCompare,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Zap,
  Mic,
  Clipboard,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { ImageBlock } from '@/components/casestudy/image-block';
import { Quote } from '@/components/casestudy/quote';
import { DotList } from '@/design-system/ui/dot-list';
import { PrincipleBlock } from '@/design-system/ui/principle-block';
import { WhatsAppIcon, GoogleSheetsIcon, GoogleFormsIcon, GoogleSlidesIcon } from '@/design-system/ui/icons/brands';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';
import type { IconComponent } from '@/lib/utils';

// Kopdar's brand palette, used semantically rather than as decoration:
// green = people/community, orange = engagement, teal = system, purple = insight/supervision, red = friction.
const KD_GREEN = 'rgb(0, 170, 19)';
const KD_ORANGE = 'rgb(255, 107, 0)';
const KD_TEAL = 'rgb(0, 129, 160)';
const KD_PURPLE = 'rgb(147, 50, 142)';
const KD_RED = 'rgb(238, 39, 55)';

/** Adapts a lucide icon to the brand-icon signature used by tool nodes (Screenshots, Manual reports have no brand mark). */
function lucideAsBrandIcon(Icon: IconComponent) {
  return function BrandIconAdapter({ className }: { className?: string }) {
    return <Icon className={className} />;
  };
}

/* ---------------------------------------------------------------------- */
/* Eyebrow + takeaway headline, the two-tier heading used before every    */
/* major beat of the story.                                               */
/* ---------------------------------------------------------------------- */
function Beat({
  eyebrow,
  color,
  children,
}: {
  eyebrow: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
        {children}
      </h2>
    </div>
  );
}

/** A single node in a relationship chain: icon + label, connected to its neighbors by the parent. */
function ChainNode({ icon: Icon, label, sublabel, color }: { icon: IconComponent; label: string; sublabel?: string; color: string }) {
  return (
    <div className="rounded-xl border-2 bg-card px-5 py-4 text-center min-w-[9rem]" style={{ borderColor: color }}>
      <Icon className="w-6 h-6 mx-auto mb-1.5" style={{ color }} />
      <p className="font-bold text-foreground text-sm">{label}</p>
      {sublabel && <p className="text-muted-foreground text-xs mt-0.5">{sublabel}</p>}
    </div>
  );
}

/** Vertical (mobile) / horizontal (desktop) chain of relationship nodes, connected by arrows of a given kind. */
function RelationshipChain({
  nodes,
  connector = 'single',
}: {
  nodes: { icon: IconComponent; label: string; sublabel?: string; color: string }[];
  connector?: 'single' | 'bidirectional';
}) {
  const Connector = () => (
    <div className="flex sm:flex-col items-center justify-center shrink-0 text-muted-foreground">
      {connector === 'bidirectional' ? (
        <span className="text-lg leading-none rotate-90 sm:rotate-0">↕</span>
      ) : (
        <ArrowDown className="w-4 h-4 rotate-[-90deg] sm:rotate-0" />
      )}
    </div>
  );
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      {nodes.map((node, i) => (
        <div key={node.label} className="contents">
          {i > 0 && <Connector />}
          <ChainNode {...node} />
        </div>
      ))}
    </div>
  );
}

/** PK at the centre, tools pulling outward in different directions, PKM compiling manually beneath. Desktop-only; mobile gets a simpler stacked variant. */
function FragmentedToolMap() {
  const tools: { icon: IconComponent; label: string; x: number; y: number }[] = [
    { icon: WhatsAppIcon, label: 'WhatsApp', x: 28, y: 8 },
    { icon: GoogleSheetsIcon, label: 'Google Sheets', x: 4, y: 46 },
    { icon: GoogleFormsIcon, label: 'Google Forms', x: 94, y: 40 },
    { icon: GoogleSlidesIcon, label: 'Google Slides', x: 72, y: 6 },
    { icon: lucideAsBrandIcon(ImageIcon), label: 'Screenshots', x: 14, y: 88 },
    { icon: lucideAsBrandIcon(FileText), label: 'Manual reports', x: 84, y: 90 },
  ];
  return (
    <div>
      {/* Desktop: radial composition */}
      <div className="hidden md:block relative w-full aspect-square max-w-xl mx-auto">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
          {tools.map((t) => (
            <line
              key={t.label}
              x1={50}
              y1={50}
              x2={t.x}
              y2={t.y}
              stroke={KD_RED}
              strokeWidth="0.5"
              strokeDasharray="2 2"
              opacity="0.45"
            />
          ))}
        </svg>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 bg-card px-6 py-5 text-center shadow-[var(--shadow-md)] z-10"
          style={{ borderColor: KD_GREEN }}
        >
          <UsersIcon className="w-7 h-7 mx-auto mb-1.5" style={{ color: KD_GREEN }} />
          <p className="font-bold text-foreground">PK</p>
          <p className="text-muted-foreground text-xs">Field agent</p>
        </div>
        {tools.map((t) => (
          <div
            key={t.label}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-card px-3 py-2.5 text-center shadow-[var(--shadow-sm)]"
            style={{ left: `${t.x}%`, top: `${t.y}%` }}
          >
            <t.icon className="w-6 h-6 mx-auto mb-1" />
            <p className="text-foreground text-xs font-medium whitespace-nowrap">{t.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile: PK, connected tool cluster, PKM */}
      <div className="md:hidden space-y-3">
        <div className="max-w-[10rem] mx-auto">
          <ChainNode icon={UsersIcon} label="PK" sublabel="Field agent" color={KD_GREEN} />
        </div>
        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-sm mx-auto">
          {tools.map((t) => (
            <div key={t.label} className="rounded-lg border border-border bg-card p-2.5 text-center">
              <t.icon className="w-6 h-6 mx-auto mb-1" />
              <p className="text-foreground text-[11px] font-medium leading-tight">{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <ArrowDown className="w-5 h-5 text-muted-foreground" />
      </div>
      <div className="max-w-[10rem] mx-auto">
        <ChainNode icon={UsersIcon} label="PKM" sublabel="Compiled manually" color={KD_ORANGE} />
      </div>
    </div>
  );
}

export interface LoopStageProps {
  icon: IconComponent;
  title: string;
  words: string[];
  color: string;
}

function LoopStage({ stage, index, showArrow, color }: { stage: LoopStageProps; index: number; showArrow: boolean; color: string }) {
  return (
    <div className="relative rounded-xl border p-4 text-center" style={{ borderColor: stage.color, backgroundColor: tint(stage.color, 6) }}>
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold mb-2"
        style={{ backgroundColor: stage.color }}
      >
        {index + 1}
      </span>
      <stage.icon className="w-6 h-6 mx-auto mb-2" style={{ color: stage.color }} />
      <p className="font-bold text-foreground text-sm">{stage.title}</p>
      <p className="text-muted-foreground text-xs mt-1">{stage.words.join(' · ')}</p>
      {showArrow && (
        <ArrowRight
          className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 z-10"
          style={{ color }}
        />
      )}
    </div>
  );
}

/**
 * A sequence of stages that loops back to the first, communicating a recurring
 * system rather than a one-off flow. `tone="debt"` frames it as an
 * administrative loop (old lifecycle); `tone="system"` frames it as a
 * healthy operating loop (new system flow).
 *
 * Short sequences (up to 4 stages) get a single row with a precise
 * return-to-start bracket beneath it, since that fits comfortably within the
 * page's max-w-5xl content column. Longer sequences would force columns
 * narrower than their content at any viewport, so they wrap into a plain
 * responsive grid instead, with the loop stated as text rather than a
 * bracket that can't be positioned reliably across wrapped rows.
 */
function LoopFlow({ stages, tone }: { stages: LoopStageProps[]; tone: 'debt' | 'system' }) {
  const loopColor = tone === 'debt' ? KD_RED : KD_TEAL;
  const fitsOneRow = stages.length <= 4;

  if (fitsOneRow) {
    return (
      <div className="relative pb-10">
        <div className="grid grid-cols-2 md:gap-3" style={{ gridTemplateColumns: undefined }}>
          <div className="contents md:grid md:gap-3" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0, 1fr))` }}>
            {stages.map((stage, i) => (
              <LoopStage key={stage.title} stage={stage} index={i} showArrow={i < stages.length - 1} color={loopColor} />
            ))}
          </div>
        </div>
        <div
          className="hidden md:block absolute bottom-0 border-l-2 border-r-2 border-b-2 rounded-b-lg"
          style={{
            left: `calc(50% / ${stages.length})`,
            right: `calc(50% / ${stages.length})`,
            height: '1.75rem',
            borderColor: loopColor,
          }}
        />
        <ArrowUp
          className="hidden md:block absolute bottom-7 w-4 h-4"
          style={{ left: `calc(50% / ${stages.length} - 0.5rem)`, color: loopColor }}
        />
        <div className="md:hidden flex items-center justify-center gap-2 mt-4 font-semibold text-sm" style={{ color: loopColor }}>
          <ArrowUp className="w-4 h-4 rotate-[-135deg]" />
          Loops back to {stages[0].title}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {stages.map((stage, i) => (
          <LoopStage key={stage.title} stage={stage} index={i} showArrow={false} color={loopColor} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-4 font-semibold text-sm" style={{ color: loopColor }}>
        <ArrowUp className="w-4 h-4 rotate-[-135deg]" />
        Loops back to {stages[0].title}
      </div>
    </div>
  );
}

/** A value transforming into a better value: "8 min" becoming "45 sec". More memorable than a bar chart. */
function MetricTransition({ from, to, label, color }: { from: string; to: string; label: string; color: string }) {
  return (
    <div className="rounded-xl border border-border p-5 text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="text-2xl font-bold text-muted-foreground line-through decoration-2">{from}</span>
        <ArrowRight className="w-5 h-5 shrink-0" style={{ color }} />
        <span className="text-3xl font-bold" style={{ color }}>{to}</span>
      </div>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </div>
  );
}

function DecisionBlock({
  number,
  icon: Icon,
  title,
  copy,
  evidence,
  color,
  image,
  alt,
  children,
}: {
  number: string;
  icon: IconComponent;
  title: string;
  copy: string;
  evidence?: string;
  color: string;
  image: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shrink-0"
          style={{ backgroundColor: color }}
        >
          {number}
        </span>
        <div className="flex-1">
          <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <Icon className="w-5 h-5" style={{ color }} />
            {title}
          </h3>
          <p className="text-muted-foreground mt-1">{copy}</p>
          {evidence && (
            <span
              className="inline-block mt-2 px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{ color, backgroundColor: tint(color, 10) }}
            >
              {evidence}
            </span>
          )}
        </div>
      </div>
      {children}
      <ImageBlock src={image} alt={alt} />
    </div>
  );
}

function BeforeAfterCompact({ icon: Icon, before, after, color }: { icon: IconComponent; before: string; after: string; color: string }) {
  return (
    <div className="rounded-xl border border-border p-5">
      <Icon className="w-5 h-5 mb-3" style={{ color }} />
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Before</p>
      <p className="font-medium text-foreground">{before}</p>
      <div className="flex items-center gap-2 my-2">
        <ArrowDown className="w-4 h-4" style={{ color }} />
      </div>
      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>After</p>
      <p className="font-medium text-foreground">{after}</p>
    </div>
  );
}

const LIFECYCLE_LOOP_STAGES: LoopStageProps[] = [
  { icon: Calendar, title: 'Prepare', words: ['Manual coordination', 'No RSVP tracking'], color: KD_RED },
  { icon: Mic, title: 'Conduct', words: ['App switching', 'Separate forms'], color: KD_RED },
  { icon: Clipboard, title: 'Report', words: ['Manual reconciliation', 'Copy-pasting'], color: KD_RED },
  { icon: BarChart3, title: 'Insights', words: ['Delayed days later', 'Screenshots only'], color: KD_RED },
];

const NEW_SYSTEM_LOOP_STAGES: LoopStageProps[] = [
  { icon: CalendarPlus, title: 'Create', words: ['PK sets up session'], color: KD_TEAL },
  { icon: Send, title: 'Invite', words: ['Drivers notified'], color: KD_TEAL },
  { icon: CircleCheck, title: 'RSVP', words: ['Drivers confirm'], color: KD_TEAL },
  { icon: MessageCircle, title: 'Kopdar', words: ['Session happens'], color: KD_TEAL },
  { icon: UserCheck, title: 'Capture', words: ['Attendance, feedback'], color: KD_TEAL },
  { icon: Eye, title: 'See', words: ['PKM visibility'], color: KD_TEAL },
  { icon: TrendingUp, title: 'Learn', words: ['Insights inform next'], color: KD_TEAL },
];

function KopdarInitiativePage() {
  return (
    <div className="pb-20">
      <Seo
        title="Kopdar Initiative"
        description="A human relationship had to scale: designing the system around Gojek's face-to-face driver community program without making it feel transactional."
      />
      <CaseStudyHero
        eyebrow="Kopdar Initiative"
        breadcrumbLabel="Kopdar"
        badges={['● Case Study']}
        title="From community ritual to scalable system."
        subtitle="Kopdar was one of Gojek's most important ways of staying connected with drivers. I helped redesign the system around those conversations so it could scale without losing sight of the people at its centre."
        meta={[
          { label: 'Role', value: 'Product Designer', icon: UsersIcon, color: KD_GREEN, bg: tint(KD_GREEN, 8) },
          { label: 'Duration', value: 'Oct 2019 to Apr 2020', icon: Clock, color: KD_ORANGE, bg: tint(KD_ORANGE, 8) },
          { label: 'Team', value: 'Cross-functional', icon: UsersIcon, color: KD_TEAL, bg: tint(KD_TEAL, 8) },
        ]}
        metaVariant="cards"
        coverImage="/images/shared/project-kopdar-cover.webp"
        coverAlt="Gojek motorcycle driver in green jacket representing driver community"
        imageBadge="Live from Jakarta"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-20">
        {/* 01 PEOPLE */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The human side" color={KD_GREEN}>Kopdar was about people.</Beat>
            <div className="rounded-2xl overflow-hidden border border-border mt-6">
              <ImageBlock src="/images/casestudy-3/community-meeting.webp" alt="Gojek drivers and the design team gathered face to face at a Kopdar session" />
            </div>
            <div className="mt-6">
              <RelationshipChain
                connector="bidirectional"
                nodes={[
                  { icon: UsersIcon, label: 'Gojek', sublabel: 'Platform', color: KD_GREEN },
                  { icon: UsersIcon, label: 'Driver', sublabel: 'Community', color: KD_ORANGE },
                ]}
              />
            </div>
            <p className="text-center text-sm font-semibold text-muted-foreground mt-4">
              Trust · Feedback · Community
            </p>
            <Prose>
              <p className="text-center max-w-xl mx-auto">
                Kopdar, or "Kopi Darat" ("face-to-face meeting"), was Gojek's face-to-face
                driver community program, run by Performance Katalysts (PKs) and
                supervised by Performance Katalyst Managers (PKMs).
              </p>
            </Prose>
            <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 mt-6 text-center">
              <p className="text-xl font-semibold text-foreground max-w-xl mx-auto">
                The challenge was scaling the system around the conversation without
                losing the conversation itself.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* 02 SCALE */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The scale" color={KD_GREEN}>A human conversation happening at operational scale.</Beat>
            <div className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[340px] mt-6">
              <ImageWithFallback
                src="/images/casestudy-3/indonesia-map.webp"
                alt="Map of the Indonesian archipelago, spanning Jakarta, Surabaya and Makassar"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                <p className="text-white/90 text-sm font-medium mb-3">
                  Spanning Jakarta, Surabaya, Makassar and beyond
                </p>
                <div className="grid grid-cols-3 gap-3 max-w-lg">
                  {[
                    { value: '170', label: 'PKs' },
                    { value: '75', label: 'PKMs' },
                    { value: '2,700', label: 'Drivers' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/15 backdrop-blur-md border border-white/20 px-3 py-3 text-center">
                      <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-white/80 text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-foreground font-medium mt-6 max-w-xl">
              What works through personal relationships becomes much harder to
              coordinate at this scale.
            </p>
          </Section>
        </Reveal>

        {/* 03 THE PROBLEM: fragmentation */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The friction" color={KD_RED}>The conversation was simple. Everything around it wasn't.</Beat>
            <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mt-6">
              One Kopdar session
            </p>
            <div className="mt-6">
              <FragmentedToolMap />
            </div>
            <p className="text-center text-2xl md:text-3xl font-bold text-foreground mt-8">
              One job. Six places to do it.
            </p>
            <Prose>
              <p className="text-center max-w-xl mx-auto">
                Every session required PKs to stitch together multiple tools before the
                actual conversation could begin.
              </p>
            </Prose>
            <div className="rounded-xl border p-6 flex items-center justify-center gap-4 mt-6" style={{ borderColor: KD_RED, backgroundColor: tint(KD_RED, 6) }}>
              <p className="text-4xl font-bold" style={{ color: KD_RED }}>15+ hrs</p>
              <p className="text-foreground">manual work per Kopdar cycle</p>
            </div>
          </Section>
        </Reveal>

        {/* 04 FRICTION EVERYWHERE: old lifecycle loop */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The old workflow" color={KD_RED}>The fragmentation followed PKs through the entire cycle.</Beat>
            <div className="mt-8">
              <LoopFlow tone="debt" stages={LIFECYCLE_LOOP_STAGES} />
            </div>
            <ImageBlock
              src="/images/casestudy-3/workflow-pain-points.webp"
              alt="Kopdar workflow diagram showing pain points across the lifecycle"
            />
            <p className="text-center text-2xl md:text-3xl font-bold text-foreground mt-6 max-w-2xl mx-auto leading-snug">
              The people were connected. The system wasn't.
            </p>
          </Section>
        </Reveal>

        {/* 05 MY ROLE */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="My role" color={KD_TEAL}>I designed the system around the session, not just the screens inside it.</Beat>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              {[
                { icon: Compass, title: 'Field research', description: 'Understand how Kopdar actually happened on the ground.', color: KD_GREEN },
                { icon: Workflow, title: 'Service design', description: 'Map the full lifecycle, not just the session.', color: KD_ORANGE },
                { icon: MousePointerClick, title: 'Product design', description: 'Turn fragmented workflows into a coherent system.', color: KD_TEAL },
                { icon: UsersIcon, title: 'Cross-functional alignment', description: 'Balance driver needs, operational realities and delivery constraints.', color: KD_PURPLE },
              ].map((role) => (
                <div key={role.title} className="rounded-xl border border-border p-5">
                  <role.icon className="w-6 h-6 mb-3" style={{ color: role.color }} />
                  <p className="font-bold text-foreground">{role.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{role.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* 06 FIELD RESEARCH */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Discovery" color={KD_PURPLE}>The field changed the problem.</Beat>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: KD_GREEN }} />
                <span className="font-semibold text-foreground">Jakarta</span>
                <span className="text-muted-foreground text-sm">Oct 2019</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: KD_ORANGE }} />
                <span className="font-semibold text-foreground">Makassar</span>
                <span className="text-muted-foreground text-sm">Jan 2020</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                170 PKs · 75 PKMs interviewed
              </div>
            </div>
            {/* Editorial collage: one large image, two smaller stacked beside it */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="flex flex-col">
                <div className="relative flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-border">
                  <ImageWithFallback
                    src="/images/casestudy-3/field-workshop-1.webp"
                    alt="Field research workshop observing PKs run a Kopdar session"
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">Observed a live session</p>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div>
                  <ImageBlock src="/images/casestudy-3/field-workshop-2.webp" alt="Team testing the redesigned Kopdar workflow with PKs in Jakarta" />
                  <p className="text-sm text-muted-foreground mt-2">Tested the new workflow</p>
                </div>
                <div>
                  <ImageBlock src="/images/casestudy-3/research-session-1.webp" alt="User research session validating the attendance flow" />
                  <p className="text-sm text-muted-foreground mt-2">Validated attendance</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Beat eyebrow="Field notes" color={KD_PURPLE}>What we found wasn't what we expected.</Beat>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Wrench, headline: 'PKs were managing tools instead of people.', stat: '40%', statLabel: 'of session time spent managing tools', color: KD_RED },
                  { icon: Eye, headline: 'Drivers needed transparency.', stat: null, statLabel: 'Attendance visibility mattered beyond administration', color: KD_ORANGE },
                  { icon: BarChart3, headline: 'PKMs needed signals, not spreadsheets.', stat: null, statLabel: 'They needed to know where to act', color: KD_TEAL },
                  { icon: CloudOff, headline: 'The product had to survive the field.', stat: '89%', statLabel: 'of PKs ran sessions from phones, on the road', color: KD_PURPLE },
                ].map((insight) => (
                  <div key={insight.headline} className="rounded-xl border border-border p-5">
                    <insight.icon className="w-5 h-5 mb-3" style={{ color: insight.color }} />
                    <p className="font-bold text-foreground">{insight.headline}</p>
                    {insight.stat && (
                      <p className="text-3xl font-bold mt-2" style={{ color: insight.color }}>{insight.stat}</p>
                    )}
                    <p className="text-muted-foreground text-sm mt-1">{insight.statLabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 07 REFRAME */}
        <Reveal>
          <Section title="">
            <div className="text-center space-y-1">
              <p className="text-2xl md:text-3xl font-bold text-muted-foreground">
                We weren't designing an event tool.
              </p>
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                We were designing the system around the event.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto">
              <div className="min-w-[560px] sm:min-w-0">
                <RelationshipChain
                  nodes={[
                    { icon: UsersIcon, label: 'Driver', color: KD_ORANGE },
                    { icon: MessageCircle, label: 'Kopdar', color: KD_GREEN },
                    { icon: Compass, label: 'PK', color: KD_TEAL },
                    { icon: Eye, label: 'PKM', color: KD_PURPLE },
                    { icon: Network, label: 'Operations', color: KD_RED },
                  ]}
                />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 08 DESIGN QUESTION */}
        <Reveal>
          <div className="py-8 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
              How might we remove the administrative work without removing the human
              interaction?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: KD_RED }}>Administrative work</p>
                <p className="text-lg font-bold text-foreground mt-1">Reduce</p>
              </div>
              <div className="text-muted-foreground">+</div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: KD_GREEN }}>Human connection</p>
                <p className="text-lg font-bold text-foreground mt-1">Protect</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 09 DESIGN PRINCIPLE */}
        <Reveal>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center leading-tight">
              Automate the work.
              <br />
              Protect the relationship.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: KD_TEAL, backgroundColor: tint(KD_TEAL, 6) }}>
                <Cog className="w-8 h-8 mb-3" style={{ color: KD_TEAL }} />
                <p className="font-bold uppercase tracking-wide mb-4" style={{ color: KD_TEAL }}>Automate</p>
                <DotList items={['Coordination', 'Attendance', 'Reporting', 'Data entry', 'Reconciliation']} />
              </div>
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: KD_GREEN, backgroundColor: tint(KD_GREEN, 6) }}>
                <MessageCircle className="w-8 h-8 mb-3" style={{ color: KD_GREEN }} />
                <p className="font-bold uppercase tracking-wide mb-4" style={{ color: KD_GREEN }}>Protect</p>
                <DotList items={['Conversation', 'Trust', 'Feedback', 'Context', 'Human judgement', 'Community']} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* 10 THE NEW SYSTEM */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The solution" color={KD_TEAL}>One system. One continuous loop.</Beat>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
              {[
                { icon: UsersIcon, title: 'Community', color: KD_GREEN },
                { icon: Calendar, title: 'Event setup', color: KD_ORANGE },
                { icon: MessageCircle, title: 'Live session', color: KD_TEAL },
                { icon: MessageSquare, title: 'Evaluation', color: KD_PURPLE },
                { icon: BarChart3, title: 'Reporting', color: KD_TEAL },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-4 text-center" style={{ borderColor: item.color, backgroundColor: tint(item.color, 6) }}>
                  <item.icon className="w-6 h-6 mx-auto mb-2" style={{ color: item.color }} />
                  <p className="font-bold text-sm" style={{ color: item.color }}>{item.title}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-foreground font-medium mt-4">
              Every part of Kopdar now belonged to the same system.
            </p>
            <ImageBlock src="/images/casestudy-3/proposed-solution.webp" alt="Kopdar proposed solution diagram" />

            <div className="mt-10">
              <h3 className="text-xl font-bold text-foreground mb-6 text-center">The new system flow</h3>
              <LoopFlow tone="system" stages={NEW_SYSTEM_LOOP_STAGES} />
            </div>
            <ImageBlock src="/images/casestudy-3/new-workflow.webp" alt="Kopdar new workflow diagram showing automated sync to PKM" />
          </Section>
        </Reveal>

        {/* 11 DESIGN DECISIONS */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Design decisions" color={KD_TEAL}>Four decisions made the system work.</Beat>
            <div className="space-y-12 mt-8">
              <DecisionBlock
                number="01"
                icon={Zap}
                title="Make the next Kopdar easier than the last."
                copy="Reusable groups, templates and session history reduced repetitive setup work."
                evidence="Under 2 minutes to create a session"
                color={KD_GREEN}
                image="/images/casestudy-3/create-event-screens.webp"
                alt="New Kopdar session creation flow showing driver selection"
              />
              <DecisionBlock
                number="02"
                icon={QrCode}
                title="Make attendance part of the experience."
                copy="Real-time attendance reduced manual tracking while giving drivers more transparency."
                evidence="QR check-in: most-loved feature in testing"
                color={KD_ORANGE}
                image="/images/casestudy-3/conduct-event-screen.webp"
                alt="Active Kopdar session screen showing real-time attendance"
              >
                <MetricTransition from="8 min" to="45 sec" label="Average attendance recording time" color={KD_ORANGE} />
              </DecisionBlock>
              <DecisionBlock
                number="03"
                icon={Activity}
                title="Give supervisors signals, not more data."
                copy="The dashboard focused attention on where PKMs could act."
                color={KD_TEAL}
                image="/images/casestudy-3/dashboard-screen.webp"
                alt="Kopdar dashboard screen showing session overview and community signals"
              >
                <div className="grid sm:grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg border border-border p-3 text-center">
                    <p className="text-muted-foreground">Session struggling</p>
                    <ArrowDown className="w-4 h-4 mx-auto my-1" style={{ color: KD_TEAL }} />
                    <p className="font-semibold text-foreground">Needs attention</p>
                  </div>
                  <div className="rounded-lg border border-border p-3 text-center">
                    <p className="text-muted-foreground">PK needs support</p>
                    <ArrowDown className="w-4 h-4 mx-auto my-1" style={{ color: KD_TEAL }} />
                    <p className="font-semibold text-foreground">Intervene</p>
                  </div>
                  <div className="rounded-lg border border-border p-3 text-center">
                    <p className="text-muted-foreground">Driver feedback</p>
                    <ArrowDown className="w-4 h-4 mx-auto my-1" style={{ color: KD_TEAL }} />
                    <p className="font-semibold text-foreground">Understand</p>
                  </div>
                </div>
              </DecisionBlock>
              <DecisionBlock
                number="04"
                icon={CloudOff}
                title="Design for the conditions, not the ideal environment."
                copy="Connectivity wasn't an edge case. It was part of the product."
                color={KD_PURPLE}
                image="/images/casestudy-3/new-workflow.webp"
                alt="Kopdar workflow diagram showing offline capture and sync to PKM"
              />
            </div>
          </Section>
        </Reveal>

        {/* 12 VALIDATION */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Validation" color={KD_GREEN}>The field was part of the product.</Beat>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: KD_GREEN, color: KD_GREEN }}>
                <MapPin className="w-3.5 h-3.5" /> Jakarta
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: KD_ORANGE, color: KD_ORANGE }}>
                <MapPin className="w-3.5 h-3.5" /> Makassar
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <ImageBlock src="/images/casestudy-3/research-session-2.webp" alt="User testing session capturing field constraints in Makassar" />
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border p-4 text-center flex flex-col justify-center">
                  <p className="text-3xl font-bold" style={{ color: KD_GREEN }}>92%</p>
                  <p className="text-muted-foreground text-xs mt-1">Completed session creation without assistance</p>
                </div>
                <div className="rounded-xl border border-border p-4 text-center flex flex-col justify-center">
                  <p className="text-2xl font-bold" style={{ color: KD_ORANGE }}>8 min → 45 sec</p>
                  <p className="text-muted-foreground text-xs mt-1">Attendance recording time</p>
                </div>
                <div className="rounded-xl border border-border p-4 text-center flex flex-col justify-center">
                  <p className="font-bold text-foreground">PKMs</p>
                  <p className="text-muted-foreground text-xs mt-1">Praised real-time visibility</p>
                </div>
                <div className="rounded-xl border border-border p-4 text-center flex flex-col justify-center">
                  <p className="font-bold text-foreground">Drivers</p>
                  <p className="text-muted-foreground text-xs mt-1">Preferred QR check-in</p>
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 13 ITERATION */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Iteration" color={KD_TEAL}>Research didn't validate the design. It changed it.</Beat>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <BeforeAfterCompact icon={GitCompare} before="Separate K1/K2 flows" after="One session flow" color={KD_GREEN} />
              <BeforeAfterCompact icon={CloudOff} before="Connectivity required" after="Offline capture + sync" color={KD_ORANGE} />
              <BeforeAfterCompact icon={SlidersHorizontal} before="Too many metrics" after="Focused supervisor signals" color={KD_TEAL} />
            </div>
          </Section>
        </Reveal>

        {/* 14 IMPACT */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Impact" color={KD_GREEN}>Less operational work. More room for the relationship.</Beat>

            <div className="rounded-2xl border p-6 md:p-8 mt-6" style={{ borderColor: KD_TEAL, backgroundColor: tint(KD_TEAL, 6) }}>
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="w-5 h-5" style={{ color: KD_TEAL }} />
                <p className="font-bold" style={{ color: KD_TEAL }}>Operational</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 items-end">
                <div>
                  <p className="text-6xl font-bold" style={{ color: KD_TEAL }}>85%</p>
                  <p className="text-muted-foreground text-sm mt-1">Reduction in manual tasks</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: KD_TEAL }}>3.2×</p>
                  <p className="text-muted-foreground text-sm mt-1">Increase in consistency</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: KD_TEAL }}>2,400+</p>
                  <p className="text-muted-foreground text-sm mt-1">Sessions in 3 months</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6 md:p-8 mt-4" style={{ borderColor: KD_GREEN, backgroundColor: tint(KD_GREEN, 6) }}>
              <div className="flex items-center gap-2 mb-4">
                <UsersIcon className="w-5 h-5" style={{ color: KD_GREEN }} />
                <p className="font-bold" style={{ color: KD_GREEN }}>Human</p>
              </div>
              <p className="text-foreground font-medium mb-4">The system made the human work easier.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-4xl font-bold" style={{ color: KD_GREEN }}>94%</p>
                  <p className="text-muted-foreground text-sm mt-1">PK confidence score</p>
                </div>
                <div>
                  <p className="text-4xl font-bold" style={{ color: KD_GREEN }}>18,000+</p>
                  <p className="text-muted-foreground text-sm mt-1">Drivers engaged</p>
                </div>
              </div>
              <div className="mt-4">
                <Quote attribution="PKM, Jakarta Region">
                  "This changed how we work. We're building a smarter, more connected
                  community."
                </Quote>
              </div>
            </div>

            <div className="rounded-2xl border p-6 md:p-8 mt-4" style={{ borderColor: KD_PURPLE, backgroundColor: tint(KD_PURPLE, 6) }}>
              <div className="flex items-center gap-2 mb-4">
                <Network className="w-5 h-5" style={{ color: KD_PURPLE }} />
                <p className="font-bold" style={{ color: KD_PURPLE }}>Organizational</p>
              </div>
              <p className="text-foreground font-medium mb-4">Visibility became actionable.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold" style={{ color: KD_PURPLE }}>5× faster</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    PKM identification and support of struggling PKs
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: KD_PURPLE }}>500+</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Additional PKs the platform could onboard without redesign
                  </p>
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        {/* 15 TRANSFORMATION */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Transformation" color={KD_TEAL}>From fragmented operations to a scalable operating system.</Beat>
            <div className="grid sm:grid-cols-2 gap-6 items-center mt-8">
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: KD_RED, backgroundColor: tint(KD_RED, 6) }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: KD_RED }}>Before</p>
                <div className="text-center mb-3">
                  <UsersIcon className="w-6 h-6 mx-auto mb-1" style={{ color: KD_RED }} />
                  <p className="font-bold text-foreground text-sm">PK</p>
                </div>
                <DotList items={['WhatsApp', 'Google Sheets', 'Google Forms', 'Google Slides', 'Screenshots', 'Manual reports']} />
              </div>
              <div className="rounded-2xl border-2 p-6" style={{ borderColor: KD_TEAL, backgroundColor: tint(KD_TEAL, 6) }}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: KD_TEAL }}>After</p>
                <p className="font-bold text-foreground text-sm text-center mb-3">One connected Kopdar system</p>
                <DotList items={['Prepare', 'Gather', 'Conduct', 'Learn', 'Repeats']} />
              </div>
            </div>
            <div className="flex justify-center my-6">
              <ArrowRight className="w-8 h-8 rotate-90 sm:rotate-0" style={{ color: KD_TEAL }} />
            </div>
            <div className="text-center py-6">
              <p className="text-2xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-snug">
                We didn't digitise the relationship. We digitised the work that made the
                relationship harder to sustain.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* 16 LEARNINGS */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Learnings" color={KD_TEAL}>What Kopdar taught me about designing at scale.</Beat>
            <div className="space-y-4 mt-6">
              <PrincipleBlock number={1} title="Design the system around the human moment." iconColor={KD_GREEN}>
                The interface was only one part of the problem. The bigger challenge was
                understanding what happened before and after the interaction.
              </PrincipleBlock>
              <PrincipleBlock number={2} title="Real-world constraints are product requirements." iconColor={KD_ORANGE}>
                Connectivity, device limitations and field conditions weren't edge cases.
                They were part of the product.
              </PrincipleBlock>
              <PrincipleBlock number={3} title="Scale should not require losing empathy." iconColor={KD_TEAL}>
                The larger the system became, the more important it was to preserve the
                context of the people inside it.
              </PrincipleBlock>
            </div>
          </Section>
        </Reveal>

        {/* Closing */}
        <Reveal>
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto leading-snug">
              Good systems make more room for people.
            </p>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Kopdar showed me that technology doesn't have to make human interactions
              less important. The right system can remove the work that gets in their
              way.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="kopdar-initiative" />
        </Reveal>
      </div>
    </div>
  );
}

export { KopdarInitiativePage };
