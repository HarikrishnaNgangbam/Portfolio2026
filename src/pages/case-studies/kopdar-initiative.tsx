import {
  Users as UsersIcon,
  MapPin,
  Compass,
  Workflow,
  Target,
  MousePointerClick,
  CloudOff,
  QrCode,
  BarChart3,
  ArrowRight,
  WifiOff,
  Sparkles,
  RefreshCw,
  AlertTriangle,
  Heart,
  ClipboardList,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Section } from '@/components/casestudy/section';
import { Beat } from '@/components/casestudy/beat';
import { Prose } from '@/components/casestudy/prose';
import { ImageBlock } from '@/components/casestudy/image-block';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { Takeaway } from '@/components/casestudy/takeaway';
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

/**
 * Same warm-editorial token override the locked Phone → PC case study uses
 * (itself the same mechanism Home/About/Work/Contact and the shared Header
 * already run on), scoped to this page's own root wrapper only. Only
 * --primary/--ring are adapted to Kopdar's own established accent (green,
 * the "people" color running through the whole case study) instead of
 * Phone → PC's purple — everything else is the identical token set, so this
 * page shares the same background/foreground/border grammar as the rest of
 * the portfolio rather than the site's default (cooler) tokens.
 */
const CASESTUDY_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': KD_GREEN,
  '--ring': KD_GREEN,
} as React.CSSProperties;

/**
 * A major narrative-pause moment — a big centered, tinted statement, distinct
 * from ordinary body content. Mirrors the locked Phone → PC case study's
 * NarrativeStatement component verbatim, so Kopdar's own narrative-pause
 * moments sit inside the same dedicated-container treatment rather than
 * floating as bare centered text.
 */
function NarrativeStatement({ children, supporting, color }: { children: React.ReactNode; supporting?: React.ReactNode; color: string }) {
  return (
    <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: tint(color, 6) }}>
      <p className="font-serif text-2xl md:text-4xl font-bold text-foreground leading-snug max-w-2xl mx-auto">
        {children}
      </p>
      {supporting && <div className="text-muted-foreground mt-4 max-w-xl mx-auto space-y-3">{supporting}</div>}
    </div>
  );
}

/**
 * A fixed-height, object-contain frame for the Design Decisions' paired UI
 * screenshots. The source crops have genuinely different native aspect
 * ratios (one is notably shorter/wider than the rest), so a plain w-full
 * ImageBlock renders visibly inconsistent heights across the four decision
 * blocks. This frame gives every screenshot the same presentation height
 * without cropping or distorting the source image.
 */
function DecisionScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card flex items-center justify-center p-4 overflow-hidden sm:h-[420px]">
      <ImageWithFallback src={src} alt={alt} className="w-full h-auto sm:h-full object-contain" />
    </div>
  );
}

interface DecisionEvidence {
  hero: { src: string; alt: string }[];
  fullFlow: { src: string; alt: string };
}

interface FieldEvidence {
  requirements: { icon: IconComponent; title: string; description: string }[];
  diagram: { src: string; alt: string };
}

interface Decision {
  icon: IconComponent;
  category: string;
  title: string;
  copy: string;
  principle: string;
  evidence?: DecisionEvidence;
  fieldEvidence?: FieldEvidence;
}

const KEY_DECISIONS: Decision[] = [
  {
    icon: Compass,
    category: 'Create',
    title: 'Make the next Kopdar easier than the last.',
    copy: "Planning shouldn't restart from zero every time. I designed reusable groups, session history and repeatable setup so knowledge could carry forward between sessions.",
    principle: "Don't make people remember what the system already knows.",
    evidence: {
      hero: [
        { src: '/images/casestudy-3/create-event-01.png', alt: 'Kopdar type selection screen showing Instant, Offline and Online kopdar options' },
        { src: '/images/casestudy-3/create-event-02.png', alt: 'Kopdar details screen showing event info, location, topic details and driver group invitations' },
      ],
      fullFlow: {
        src: '/images/casestudy-3/create-event-screens.webp',
        alt: 'New Kopdar session creation flow, from event type and details through invitee and topic selection to location and invitation confirmation',
      },
    },
  },
  {
    icon: QrCode,
    category: 'Conduct',
    title: 'Make attendance part of the experience.',
    copy: 'Attendance shouldn\'t be another administrative task happening around the session. I moved capture into the natural interaction with drivers, reducing manual work while creating more reliable records.',
    principle: 'Capture information at the moment it naturally happens.',
    evidence: {
      hero: [
        { src: '/images/casestudy-3/attendance-01.png', alt: 'QR-code attendance capture screen during an active Kopdar session' },
        { src: '/images/casestudy-3/attendance-02.png', alt: 'Group photo capture screen during an active Kopdar session' },
      ],
      fullFlow: {
        src: '/images/casestudy-3/conduct-event-screen.webp',
        alt: 'Active Kopdar session flow showing QR-code attendance capture and group photo capture',
      },
    },
  },
  {
    icon: BarChart3,
    category: 'Understand',
    title: 'Give supervisors signals, not more data.',
    copy: 'The system could collect more information than supervisors actually needed. I focused the experience around the signals that helped them understand performance, identify attention areas and decide what to do next.',
    principle: 'A dashboard should reduce decisions, not increase them.',
    evidence: {
      hero: [
        { src: '/images/casestudy-3/dashboard-01.png', alt: 'Kopdar dashboard screen showing an ongoing event and pending or submitted reports' },
        { src: '/images/casestudy-3/dashboard-02.png', alt: 'Post-event driver feedback rating screen, from very bad to excellent' },
      ],
      fullFlow: {
        src: '/images/casestudy-3/dashboard-screen.webp',
        alt: 'Kopdar dashboard showing upcoming and ongoing events, pending and submitted reports, and a post-event driver feedback rating',
      },
    },
  },
  {
    icon: CloudOff,
    category: 'Design for the field',
    title: 'Design for the conditions, not the ideal environment.',
    copy: "Connectivity and field conditions weren't edge cases. They shaped the experience.",
    principle: 'Real-world constraints are product requirements.',
    fieldEvidence: {
      // Consolidated from the original 5: "Intermittent connectivity" and
      // "Offline-first experience" both described the same fact (unreliable
      // signal in the field, so the product can't depend on one) and are
      // merged into a single card, matching what the diagram itself shows
      // as one "Works Offline" capability rather than two.
      requirements: [
        { icon: CloudOff, title: 'Offline-first capture', description: "PKs worked in areas with unreliable signal, not office wifi. Data was captured locally first, regardless of connection, so the product never depended on a live signal to function." },
        { icon: RefreshCw, title: 'Sync when connected', description: 'PKMs needed visibility without PKs having to chase a connection. Captured data synced automatically once one returned.' },
        { icon: QrCode, title: 'Fast attendance capture', description: 'Attendance had to happen in seconds, inside a live session. A QR scan replaced paper lists and manual entry.' },
        { icon: Sparkles, title: 'Minimal cognitive load', description: 'PKs were running a room full of drivers, not operating software. Every screen had to stay out of the way.' },
      ],
      diagram: {
        src: '/images/casestudy-3/designed-for-the-field.png',
        alt: "Diagram of Kopdar's field requirements: mobile first, low data friendly, works offline, battery efficient, multi language ready, easy to use, secure and private, and built for real support",
      },
    },
  },
];

interface IterationStory {
  category: string;
  color: string;
  thought: string;
  observed: string;
  changed: string;
  consequence: string;
}

const ITERATION_STORIES: IterationStory[] = [
  {
    category: 'Connectivity',
    color: KD_ORANGE,
    thought: 'Live connectivity could be assumed.',
    observed: 'Field conditions made that unreliable.',
    changed: 'Offline capture + sync.',
    consequence: "Offline wasn't an exception path. It became part of the core experience.",
  },
  {
    category: 'Evaluation',
    color: KD_PURPLE,
    thought: 'Learning could happen after the session.',
    observed: 'Insights were getting disconnected from subsequent planning.',
    changed: 'Evaluation became part of the continuous loop.',
    consequence: 'Kopdar became a learning loop, not a series of isolated events.',
  },
  {
    category: 'Reporting',
    color: KD_TEAL,
    thought: 'More information would improve visibility.',
    observed: 'Supervisors needed actionable signals.',
    changed: 'Reporting became focused around decisions.',
    consequence: 'The dashboard became a decision-making tool rather than a reporting repository.',
  },
];

function KopdarInitiativePage() {
  return (
    <div style={CASESTUDY_THEME_VARS} className="bg-background text-foreground pb-20">
      <Seo
        title="Kopdar Initiative"
        description="A human relationship had to scale: designing the system around Gojek's face-to-face driver community program without making it feel transactional."
      />
      <CaseStudyHero
        eyebrow="Kopdar Initiative"
        breadcrumbLabel="Kopdar"
        badges={['● Case Study']}
        title="Kopdar: Designing the system behind driver engagement."
        subtitle="A community-led program at Gojek was growing faster than the operational system supporting it. I redesigned the experience around the entire Kopdar lifecycle, from planning and attendance to reporting and follow-up, so teams could spend less time managing the process and more time engaging drivers."
        meta={[
          { label: 'Role', value: 'Lead Product Designer', icon: UsersIcon, color: KD_GREEN },
          { label: 'Focus', value: 'Product strategy · Service design · Experience design · Cross-functional leadership', icon: Compass, color: KD_TEAL },
        ]}
        metaVariant="pills"
        coverImage="/images/shared/project-kopdar-cover.webp"
        coverAlt="Gojek motorcycle driver in green jacket representing driver community"
        imageBadge="Live from Jakarta"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        {/* Overview */}
        <Reveal>
          <Section>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
              <div>
                <Beat eyebrow="Overview" color={KD_GREEN}>A human program was becoming an operational problem.</Beat>
                <Prose className="mt-5">
                  <p>
                    Kopdar, Kopi Darat, was one of Gojek's ways of bringing drivers
                    together for direct conversations, feedback and community building.
                  </p>
                  <p>
                    As the network grew, however, the work surrounding each session
                    became increasingly fragmented.
                  </p>
                  <p>
                    Planning happened in one place. Attendance somewhere else. Reporting
                    somewhere else again.
                  </p>
                  <p>
                    The relationship was human. The operating model wasn't built to
                    scale with it.
                  </p>
                </Prose>
              </div>
              <div>
                <StatGrid
                  columns={2}
                  stats={[
                    { value: '200k+', label: 'Drivers in the network.' },
                    { value: '200', label: 'PK members on the ground.' },
                    { value: '20%', label: 'Effort saved per Kopdar.' },
                    { value: '2×', label: 'Drivers reached with the same team strength.' },
                  ]}
                />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* The human side — short interlude, not a competing hero moment */}
        <Reveal>
          <Section>
            <Beat eyebrow="The human side" color={KD_GREEN}>Kopdar was about people.</Beat>
            <p className="text-foreground font-medium mt-6 max-w-xl">
              The product wasn't replacing the relationship between PKs and drivers. It
              needed to protect the time and attention that made that relationship
              valuable.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mt-8 items-center">
              <ImageBlock src="/images/casestudy-3/community-meeting.webp" alt="Gojek drivers and the design team gathered face to face at a Kopdar session" />
              <ImageBlock
                src="/images/casestudy-3/kopdar-relationship-diagram.png"
                alt="Diagram showing Kopdar strengthening the relationship between Gojek and the driver community through face-to-face connection, built on trust, support and growth"
              />
            </div>
          </Section>
        </Reveal>

        {/* The friction */}
        <Reveal>
          <Section>
            <Beat eyebrow="The friction" color={KD_RED}>One job. Six places to do it.</Beat>
            <div className="mt-8">
              <Prose>
                <p>
                  Before the redesign, a single Kopdar could involve multiple tools,
                  manual handoffs and disconnected records.
                </p>
              </Prose>
              <div className="mt-6">
                <ImageBlock
                  src="/images/casestudy-3/fragmented-tool-map.png"
                  alt="Diagram of the fragmented Kopdar tool map, showing different disconnected tools used across planning, invites, event day, capture, reporting and follow-up"
                />
              </div>
              <div className="mt-6">
                <ImageBlock
                  src="/images/casestudy-3/workflow-pain-points.webp"
                  alt="Diagram titled 'Conducting Kopdar Requires Extensive Manual Effort', showing manual steps across Pre-Kopdar, During-Kopdar, Post-Kopdar and In-Between-Kopdar activities"
                  heading="Mapping the manual effort"
                  caption="Kopdar required manual coordination across preparation, delivery and follow-up."
                />
              </div>
              <div className="mt-10">
                <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  The friction repeated every cycle.
                </p>
                <Prose className="mt-4">
                  <p>
                    Planning created work. Execution created work. Reporting created
                    more work. And the next Kopdar started without reliably carrying
                    the previous one's learning forward.
                  </p>
                </Prose>
              </div>
            </div>
          </Section>
        </Reveal>

        {/* The reframe */}
        <Reveal>
          <Section>
            <Beat eyebrow="The reframe" color={KD_TEAL}>
              I wasn't designing an event tool. I was redesigning the operating system around the event.
            </Beat>
            <div className="mt-6">
              <Prose>
                <p>
                  The problem wasn't that teams lacked tools. They lacked a connected
                  system that understood how a Kopdar moved from planning to action,
                  learning and follow-up.
                </p>
                <p>
                  I reframed the product around that lifecycle and used it as the
                  foundation for the experience architecture.
                </p>
              </Prose>
            </div>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-3/kopdar-ecosystem-diagram.png"
                alt="Diagram of the Kopdar ecosystem showing Driver, PK, PKM and Operations connected in a continuous loop of participation, coordination and feedback"
              />
            </div>
          </Section>
        </Reveal>

        {/* My role */}
        <Reveal>
          <Section>
            <Beat eyebrow="My role" color={KD_TEAL}>I designed the system, not just the screens.</Beat>
            <div className="mt-8">
              <IconCardList
                columns={2}
                items={[
                  { icon: Compass, iconColor: KD_GREEN, title: 'Problem framing', description: 'Reframed Kopdar from an event-management problem into a system and service-design problem.' },
                  { icon: Workflow, iconColor: KD_ORANGE, title: 'Service design', description: 'Mapped the end-to-end operational journey across drivers, PKs, PKMs and operations.' },
                  { icon: Target, iconColor: KD_TEAL, title: 'Product strategy', description: 'Defined the product architecture around the Kopdar lifecycle rather than isolated features.' },
                  { icon: MousePointerClick, iconColor: KD_PURPLE, title: 'Experience design', description: 'Designed the critical workflows and interactions across planning, attendance, reporting and follow-up.' },
                ]}
              />
              <p className="text-foreground font-medium mt-6 max-w-2xl">
                I owned the problem from field research through product direction and
                interaction design, working across teams to align the experience
                around one operating model.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* Discovery */}
        <Reveal>
          <Section>
            <Beat eyebrow="Discovery" color={KD_PURPLE}>The system had to start with the field.</Beat>
            <div className="mt-8">
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <ImageWithFallback
                    src="/images/casestudy-3/research-session-1.webp"
                    alt="Field research session with PKs and drivers in green Gojek jackets"
                    className="w-full h-48 object-cover rounded-2xl border border-border"
                  />
                  <div className="flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5" style={{ color: KD_ORANGE }} />
                    <span className="text-xs font-semibold text-foreground">Makassar</span>
                    <span className="text-xs text-muted-foreground">· Jan 2020</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Kopdar task force team</p>
                </div>
                <div>
                  <ImageWithFallback
                    src="/images/casestudy-3/field-workshop-1.webp"
                    alt="The Kopdar design and research team gathered in the field"
                    className="w-full h-48 object-cover rounded-2xl border border-border"
                  />
                  <div className="flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5" style={{ color: KD_GREEN }} />
                    <span className="text-xs font-semibold text-foreground">Jakarta</span>
                    <span className="text-xs text-muted-foreground">· Oct 2019</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Field research with PKs and drivers</p>
                </div>
                <div>
                  <ImageWithFallback
                    src="/images/casestudy-3/research-session-2.webp"
                    alt="Team testing the redesigned Kopdar workflow with drivers and PKs"
                    className="w-full h-48 object-cover rounded-2xl border border-border"
                  />
                  <div className="flex items-center gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5" style={{ color: KD_PURPLE }} />
                    <span className="text-xs font-semibold text-foreground">Surabaya</span>
                    <span className="text-xs text-muted-foreground">· Jan 2020</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Testing the new workflow on the ground</p>
                </div>
              </div>

              <div className="mt-10">
                <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  The three things became clear.
                </p>
                <div className="mt-6">
                  <IconCardList
                    columns={3}
                    items={[
                      { icon: Workflow, iconColor: KD_PURPLE, title: 'The work was distributed.', description: 'PKs were stitching together multiple tools to run one session.' },
                      { icon: AlertTriangle, iconColor: KD_PURPLE, title: 'The constraints were real.', description: 'Connectivity, time and device limitations shaped what was possible in the field.' },
                      { icon: Heart, iconColor: KD_PURPLE, title: 'The relationship mattered more than the workflow.', description: 'Any solution that added operational burden during the session risked taking attention away from drivers.' },
                    ]}
                  />
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        {/* Field notes */}
        <Reveal>
          <Section>
            <Beat eyebrow="Field notes" color={KD_PURPLE}>The field changed what we thought the product needed to be.</Beat>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { icon: WifiOff, observation: 'Unreliable connectivity', implication: "Offline capture couldn't be an edge case." },
                { icon: ClipboardList, observation: 'Manual attendance', implication: 'Capture needed to happen inside the natural session flow.' },
                { icon: RefreshCw, observation: 'Repeated planning work', implication: 'The system needed to remember previous sessions.' },
                { icon: BarChart3, observation: 'Too much operational information', implication: 'Supervisors needed signals, not more data.' },
              ].map((item) => (
                <div key={item.observation} className="rounded-xl border border-border bg-muted/30 p-5">
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: KD_PURPLE }} />
                    <div className="flex-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Observation</p>
                      <p className="text-foreground font-semibold mt-0.5">{item.observation}</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-2">Implication</p>
                      <p className="text-muted-foreground mt-0.5">{item.implication}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="mt-8 rounded-2xl py-10 px-6"
              style={{ backgroundColor: tint(KD_PURPLE, 6) }}
            >
              <Takeaway className="py-0">
                The field wasn't a constraint around the product. It was part of the
                product definition.
              </Takeaway>
            </div>
          </Section>
        </Reveal>

        {/* Design principle — intentionally short, no diagram */}
        <Reveal>
          <Section>
            <Beat
              eyebrow="Design principle"
              color={KD_TEAL}
              supporting="Every design decision was evaluated against one question: does this remove operational burden without taking humanity out of the interaction?"
            >
              Automate the work. Protect the relationship.
            </Beat>
          </Section>
        </Reveal>

        {/* The system */}
        <Reveal>
          <Section>
            <Beat
              eyebrow="The system"
              color={KD_TEAL}
              supporting="Instead of treating planning, attendance, reporting and follow-up as separate products, the system connected them into one continuous operating loop."
            >
              One system. One continuous loop.
            </Beat>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-3/solution-one-system-loop.png"
                alt="Diagram of one connected Kopdar system running as a continuous loop: Plan, Invite, Run, Capture, Report, Follow Up and Plan Again"
              />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="text-sm text-muted-foreground line-through decoration-2">Fragmented tools</p>
                  <p className="font-bold text-foreground mt-1">→ Connected workflow</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="text-sm text-muted-foreground line-through decoration-2">Manual handoffs</p>
                  <p className="font-bold text-foreground mt-1">→ Captured once, reused</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="text-sm text-muted-foreground line-through decoration-2">Isolated sessions</p>
                  <p className="font-bold text-foreground mt-1">→ Continuous learning loop</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="text-sm text-muted-foreground line-through decoration-2">Operational burden</p>
                  <p className="font-bold text-foreground mt-1">→ More capacity for engagement</p>
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        {/* Four design decisions */}
        <Reveal>
          <Section>
            <Beat eyebrow="Design decisions" color={KD_TEAL}>Four decisions made the system work.</Beat>
            <div className="mt-8">
              <div className="space-y-12">
                {KEY_DECISIONS.map((decision, i) => (
                  <div key={decision.title} className={i > 0 ? 'pt-12 border-t border-border' : undefined}>
                    <div className="flex items-center gap-2 mb-2">
                      <decision.icon className="w-4 h-4" style={{ color: KD_TEAL }} />
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: KD_TEAL }}>
                        {decision.category}
                      </p>
                    </div>
                    <h3 className="font-bold text-xl text-foreground leading-snug">{decision.title}</h3>
                    <p className="text-muted-foreground mt-2">{decision.copy}</p>
                    <p className="text-sm font-semibold mt-3" style={{ color: KD_TEAL }}>
                      Design principle: "{decision.principle}"
                    </p>

                    {decision.evidence && (
                      <>
                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                          {decision.evidence.hero.map((img) => (
                            <DecisionScreenshot key={img.src} src={img.src} alt={img.alt} />
                          ))}
                        </div>
                        <details className="mt-4 group">
                          <summary className="text-xs font-bold uppercase tracking-widest text-muted-foreground cursor-pointer select-none list-none inline-flex items-center gap-1.5">
                            <ArrowRight className="w-3 h-3 transition-transform group-open:rotate-90" />
                            Complete flow
                          </summary>
                          <div className="mt-4">
                            <ImageBlock src={decision.evidence.fullFlow.src} alt={decision.evidence.fullFlow.alt} />
                          </div>
                        </details>
                      </>
                    )}

                    {decision.fieldEvidence && (
                      <div className="mt-4">
                        <IconCardList
                          columns={2}
                          items={decision.fieldEvidence.requirements.map((r) => ({ icon: r.icon, iconColor: KD_TEAL, title: r.title, description: r.description }))}
                        />
                        <div className="mt-6">
                          <ImageBlock src={decision.fieldEvidence.diagram.src} alt={decision.fieldEvidence.diagram.alt} />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Section>
        </Reveal>

        {/* Research / iteration */}
        <Reveal>
          <Section>
            <Beat eyebrow="Iteration" color={KD_TEAL}>Research didn't validate the design. It changed it.</Beat>
            <div className="mt-8 space-y-10">
              {ITERATION_STORIES.map((story, i) => (
                <div key={story.category} className={i > 0 ? 'pt-10 border-t border-border' : undefined}>
                  <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: story.color }}>
                    {story.category}
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">We thought</p>
                      <p className="text-foreground mt-1">{story.thought}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">We observed</p>
                      <p className="text-foreground mt-1">{story.observed}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: story.color }}>We changed</p>
                      <p className="text-foreground font-bold mt-1">{story.changed}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-4">{story.consequence}</p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Impact */}
        <Reveal>
          <Section>
            <Beat eyebrow="Impact" color={KD_GREEN}>Less operational work. More capacity for engagement.</Beat>
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: KD_GREEN }}>
                Directly observed
              </p>
              <StatGrid
                columns={2}
                stats={[
                  { value: '20%', label: 'Effort saved per Kopdar.' },
                  { value: '2×', label: 'Drivers reached with the same team strength.' },
                ]}
              />

              <p className="text-xs font-bold uppercase tracking-widest mt-8 mb-3" style={{ color: KD_GREEN }}>
                Modelled at scale
              </p>
              <StatGrid
                columns={2}
                stats={[
                  { value: '70,000+', label: 'Estimated annual man-hours saved.' },
                  { value: '~20%', label: 'Estimated operating-cost reduction.' },
                ]}
              />
              <p className="text-xs text-muted-foreground mt-4 max-w-2xl">
                The scale figures are modelled from observed per-Kopdar effort savings
                and should be read as estimates, not directly logged outcomes.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* The insight — narrative climax */}
        <Reveal>
          <NarrativeStatement
            color={KD_TEAL}
            supporting={
              <>
                <p>Kopdar worked because people showed up, listened and built trust.</p>
                <p>Technology couldn't replace that.</p>
                <p>
                  It could, however, remove the coordination, reporting and
                  administrative work surrounding it — giving PKs and PKMs more room
                  to focus on the relationship itself.
                </p>
              </>
            }
          >
            We didn't digitise the relationship.
            <br />
            We digitised the work that made the relationship harder to sustain.
          </NarrativeStatement>
        </Reveal>

        {/* Leadership learnings */}
        <Reveal>
          <Section>
            <Beat eyebrow="Learnings" color={KD_TEAL}>What Kopdar taught me about designing at scale.</Beat>
            <div className="space-y-3 mt-8">
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-bold text-foreground">Design the system around the human moment.</p>
                <p className="text-muted-foreground leading-relaxed mt-1.5">
                  The interface was only one part of the experience. The real design
                  challenge was understanding everything surrounding the interaction.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-bold text-foreground">Constraints become product requirements.</p>
                <p className="text-muted-foreground leading-relaxed mt-1.5">
                  What looked like infrastructure problems — connectivity, devices,
                  field conditions — became experience-defining requirements.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-bold text-foreground">Scale should increase leverage, not distance.</p>
                <p className="text-muted-foreground leading-relaxed mt-1.5">
                  The goal of automation wasn't to make driver engagement more
                  impersonal. It was to give teams more capacity to do the human work.
                </p>
              </div>
            </div>
          </Section>
        </Reveal>

        {/* Closing */}
        <Reveal>
          <Takeaway
            supporting={
              <>
                The best operational products don't simply make work faster. They
                remove the work that gets in the way of the work that matters.
              </>
            }
          >
            Good systems make more room for people.
          </Takeaway>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="kopdar-initiative" />
        </Reveal>
      </div>
    </div>
  );
}

export { KopdarInitiativePage };
