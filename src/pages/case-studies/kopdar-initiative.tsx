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
  RefreshCw,
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
  Zap,
  Mic,
  Clipboard,
  TriangleAlert,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { ImageBlock } from '@/components/casestudy/image-block';
import { Quote } from '@/components/casestudy/quote';
import { AppScenarioCard } from '@/components/casestudy/app-scenario-card';
import { DotList } from '@/design-system/ui/dot-list';
import { PrincipleBlock } from '@/design-system/ui/principle-block';
import { WhatsAppIcon, GoogleSheetsIcon, GoogleFormsIcon, GoogleSlidesIcon } from '@/design-system/ui/icons/brands';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';

// Kopdar's brand palette, distinct from the site's --icon-* tokens, sampled from the reference.
const KD_GREEN = 'rgb(0, 170, 19)';
const KD_ORANGE = 'rgb(255, 107, 0)';
const KD_TEAL = 'rgb(0, 129, 160)';
const KD_PURPLE = 'rgb(147, 50, 142)';
const KD_RED = 'rgb(238, 39, 55)';

/** Adapts a lucide icon to AppScenarioCard's brand-icon signature for non-brand tool cards (Screenshots, Manual reports). */
function lucideAsBrandIcon(Icon: typeof UsersIcon) {
  return function BrandIconAdapter({ className }: { className?: string }) {
    return <Icon className={className} />;
  };
}

function FlowNode({ icon: Icon, label, sublabel, color }: { icon: typeof UsersIcon; label: string; sublabel: string; color: string }) {
  return (
    <div className="rounded-xl border bg-card p-5 text-center" style={{ borderColor: color }}>
      <Icon className="w-6 h-6 mx-auto mb-2" style={{ color }} />
      <p className="font-bold text-foreground">{label}</p>
      <p className="text-muted-foreground text-sm mt-1">{sublabel}</p>
    </div>
  );
}

function LifecycleStep({
  number,
  icon: Icon,
  title,
  words,
  color,
}: {
  number: number;
  icon: typeof UsersIcon;
  title: string;
  words: string[];
  color: string;
}) {
  return (
    <div className="rounded-xl border p-4 text-center" style={{ borderColor: color, backgroundColor: tint(color, 6) }}>
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold mb-2"
        style={{ backgroundColor: color }}
      >
        {number}
      </span>
      <Icon className="w-6 h-6 mx-auto mb-2" style={{ color }} />
      <p className="font-bold text-foreground text-sm">{title}</p>
      <p className="text-muted-foreground text-xs mt-1">{words.join(' · ')}</p>
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
}: {
  number: string;
  icon: typeof UsersIcon;
  title: string;
  copy: string;
  evidence?: string;
  color: string;
  image: string;
  alt: string;
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
        <div>
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
      <ImageBlock src={image} alt={alt} />
    </div>
  );
}

function BeforeAfter({
  icon: Icon,
  before,
  after,
  color,
}: {
  icon: typeof UsersIcon;
  before: string;
  after: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border border-border p-5">
      <Icon className="w-5 h-5 mb-3" style={{ color }} />
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Before</p>
      <p className="font-medium text-foreground">{before}</p>
      <p className="text-xs font-semibold uppercase tracking-wide mt-3" style={{ color }}>After</p>
      <p className="font-medium text-foreground">{after}</p>
    </div>
  );
}

function KopdarInitiativePage() {
  return (
    <div className="pb-20">
      <Seo
        title="Kopdar Initiative"
        description="Automate the work, protect the relationship: designing a scalable system around Gojek's face-to-face driver community program."
      />
      <CaseStudyHero
        breadcrumbLabel="Kopdar"
        badges={['● Case Study']}
        title="Kopdar Initiative: Scaling Driver Engagement for Gojek"
        titleHighlight="Driver Engagement"
        subtitle="Automate the work. Protect the relationship."
        meta={[
          { label: 'Role', value: 'Product Designer', icon: UsersIcon, color: KD_GREEN, bg: tint(KD_GREEN, 8) },
          { label: 'Duration', value: 'Oct 2019 - Apr 2020', icon: Clock, color: KD_ORANGE, bg: tint(KD_ORANGE, 8) },
          { label: 'Team', value: 'Cross-functional', icon: UsersIcon, color: KD_TEAL, bg: tint(KD_TEAL, 8) },
        ]}
        metaVariant="cards"
        coverImage="/images/shared/project-kopdar-cover.webp"
        coverAlt="Gojek motorcycle driver in green jacket representing driver community"
        imageBadge="Live from Jakarta"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        {/* Kopdar was about people */}
        <Reveal>
          <Section title="Kopdar was about people.">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="rounded-2xl overflow-hidden border border-border">
                <ImageBlock src="/images/casestudy-3/community-meeting.webp" alt="Gojek drivers gathered face to face at a Kopdar session" />
              </div>
              <div className="space-y-3">
                <FlowNode icon={UsersIcon} label="Gojek" sublabel="Platform" color={KD_GREEN} />
                <div className="flex justify-center">
                  <ArrowDown className="w-5 h-5 text-muted-foreground" />
                </div>
                <FlowNode icon={UsersIcon} label="Driver" sublabel="Community" color={KD_ORANGE} />
              </div>
            </div>
            <p className="text-lg font-medium text-foreground">
              A face-to-face conversation between Gojek and drivers.
            </p>
            <p className="text-sm font-semibold text-muted-foreground">
              Trust · Feedback · Community
            </p>
            <Prose>
              <p>
                Kopdar (Kopi Darat, "face-to-face meeting") is Gojek's driver community
                program, run by Performance Katalysts (PKs) and supervised by
                Performance Katalyst Managers (PKMs) across Indonesia.
              </p>
            </Prose>
            <Prose callout>
              The challenge was scaling the system around the conversation without
              losing the conversation itself.
            </Prose>
          </Section>
        </Reveal>

        {/* Scale */}
        <Reveal>
          <Section title="">
            <div className="relative rounded-2xl overflow-hidden min-h-[200px]">
              <ImageWithFallback
                src="/images/casestudy-3/indonesia-map.webp"
                alt="Map of Indonesia archipelago"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="relative z-10 h-full flex flex-col items-center justify-end text-center p-6 bg-gradient-to-t from-black/50 via-black/10 to-transparent">
                <MapPin className="w-6 h-6 text-white mb-1" />
                <p className="font-bold text-white">Indonesia-wide program</p>
                <p className="text-white/90 text-sm">
                  Spanning Jakarta, Surabaya, Makassar, and beyond
                </p>
              </div>
            </div>
            <StatGrid
              columns={3}
              stats={[
                { value: '170', label: 'PKs' },
                { value: '75', label: 'PKMs' },
                { value: '2,700', label: 'Drivers' },
              ]}
            />
            <p className="text-foreground font-medium">
              A human conversation happening at operational scale.
            </p>
            <p className="text-muted-foreground text-sm">
              Across regions, thousands of drivers depended on these recurring
              interactions.
            </p>
          </Section>
        </Reveal>

        {/* Too many tools */}
        <Reveal>
          <Section title="Too many tools. Too much invisible work.">
            <div className="max-w-xs mx-auto">
              <FlowNode icon={UsersIcon} label="PK" sublabel="Field agent" color={KD_GREEN} />
            </div>
            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <AppScenarioCard icon={WhatsAppIcon} title="WhatsApp" />
              <AppScenarioCard icon={GoogleSheetsIcon} title="Google Sheets" />
              <AppScenarioCard icon={GoogleFormsIcon} title="Google Forms" />
              <AppScenarioCard icon={GoogleSlidesIcon} title="Google Slides" />
              <AppScenarioCard icon={lucideAsBrandIcon(ImageIcon)} title="Screenshots" />
              <AppScenarioCard icon={lucideAsBrandIcon(FileText)} title="Manual reports" />
            </div>
            <div className="flex justify-center">
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="max-w-xs mx-auto">
              <FlowNode icon={UsersIcon} label="PKM" sublabel="Supervisor" color={KD_ORANGE} />
            </div>
            <Prose>
              <p>
                Every session required PKs to stitch together multiple tools before the
                actual conversation could begin.
              </p>
            </Prose>
            <div className="rounded-xl border p-5 flex items-center gap-4" style={{ borderColor: KD_RED, backgroundColor: tint(KD_RED, 6) }}>
              <p className="text-3xl font-bold" style={{ color: KD_RED }}>15+ hrs</p>
              <p className="text-foreground">manual work per Kopdar cycle</p>
            </div>
          </Section>
        </Reveal>

        {/* Workflow pain points */}
        <Reveal>
          <Section title="The fragmentation followed PKs through the entire cycle.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: 1, icon: Calendar, color: KD_GREEN, title: 'Pre-Kopdar', items: ['No content database', 'Manual event coordination', 'No RSVP tracking'] },
                { n: 2, icon: Mic, color: KD_ORANGE, title: 'During Kopdar', items: ['Unplanned Kopdar go unreported', 'Constant app switching', 'Separate form links'] },
                { n: 3, icon: BarChart3, color: KD_PURPLE, title: 'Post Kopdar', items: ['No attendance accountability', 'Manual finance reconciliation', 'Manual performance tracking'] },
                { n: 4, icon: Clipboard, color: KD_RED, title: 'Between sessions', items: ['Hours of copy-pasting', 'Screenshots only', 'No data insights'] },
              ].map((stage) => (
                <div key={stage.n} className="rounded-xl border p-5" style={{ borderColor: stage.color, backgroundColor: tint(stage.color, 6) }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-bold" style={{ backgroundColor: stage.color }}>
                      {stage.n}
                    </span>
                    <stage.icon className="w-4 h-4" style={{ color: stage.color }} />
                  </div>
                  <p className="font-bold mb-2" style={{ color: stage.color }}>{stage.title}</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {stage.items.map((it) => (
                      <li key={it} className="flex gap-1.5">
                        <span aria-hidden="true">→</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <ImageBlock
              src="/images/casestudy-3/workflow-pain-points.webp"
              alt="Kopdar workflow diagram showing pain points across the lifecycle"
            />
            <div className="rounded-xl border p-5 flex items-start gap-3" style={{ borderColor: KD_RED, backgroundColor: tint(KD_RED, 6) }}>
              <TriangleAlert className="w-5 h-5 shrink-0 mt-0.5" style={{ color: KD_RED }} />
              <p className="text-foreground">
                Zero visibility for supervisors until reports were manually compiled,
                days later.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* My Role */}
        <Reveal>
          <Section title="My role">
            <IconCardList
              columns={2}
              items={[
                { icon: Compass, iconColor: KD_GREEN, title: 'Field research', description: 'Understand how Kopdar actually happened on the ground.' },
                { icon: Workflow, iconColor: KD_ORANGE, title: 'Service design', description: 'Map the full lifecycle, not just the session.' },
                { icon: MousePointerClick, iconColor: KD_TEAL, title: 'Product design', description: 'Turn fragmented workflows into a coherent system.' },
                { icon: UsersIcon, iconColor: KD_PURPLE, title: 'Cross-functional alignment', description: 'Balance driver needs, operational realities and delivery constraints.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* Discovery */}
        <Reveal>
          <Section title="The field changed the problem.">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border p-5 flex items-center gap-3">
                <MapPin className="w-5 h-5 shrink-0" style={{ color: KD_GREEN }} />
                <div>
                  <p className="font-bold text-foreground">Jakarta</p>
                  <p className="text-muted-foreground text-sm">Oct 2019</p>
                </div>
              </div>
              <div className="rounded-xl border border-border p-5 flex items-center gap-3">
                <MapPin className="w-5 h-5 shrink-0" style={{ color: KD_ORANGE }} />
                <div>
                  <p className="font-bold text-foreground">Makassar</p>
                  <p className="text-muted-foreground text-sm">Jan 2020</p>
                </div>
              </div>
            </div>
            <Prose>
              <p>170 PKs and 75 PKM supervisors, across two regions.</p>
            </Prose>
          </Section>
        </Reveal>

        {/* Research insights */}
        <Reveal>
          <Section title="">
            <IconCardList
              columns={2}
              items={[
                { icon: Wrench, iconColor: KD_GREEN, title: 'PKs were managing tools instead of people.', description: '40% of session time was spent managing tools.' },
                { icon: Eye, iconColor: KD_ORANGE, title: 'Drivers needed transparency.', description: 'Attendance visibility mattered beyond administration.' },
                { icon: BarChart3, iconColor: KD_TEAL, title: 'PKMs needed signals, not spreadsheets.', description: 'Supervisors needed to know where to act.' },
                { icon: CloudOff, iconColor: KD_PURPLE, title: 'The product had to survive the field.', description: '89% of PKs ran sessions from phones while on the road.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* Lifecycle */}
        <Reveal>
          <Section title="The real product was the lifecycle.">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center">
              <LifecycleStep number={1} icon={Calendar} title="Prepare" words={['Plan', 'Invite', 'Organise']} color={KD_GREEN} />
              <LifecycleStep number={2} icon={UsersIcon} title="Gather" words={['Invite', 'RSVP', 'Confirm']} color={KD_ORANGE} />
              <LifecycleStep number={3} icon={MessageCircle} title="Conduct" words={['Attend', 'Discuss', 'Capture']} color={KD_TEAL} />
              <LifecycleStep number={4} icon={MessageSquare} title="Learn" words={['Feedback', 'Insights', 'Follow-up']} color={KD_PURPLE} />
              <LifecycleStep number={5} icon={RefreshCw} title="Prepare again" words={['Improve', 'Repeat', 'Scale']} color={KD_RED} />
            </div>
            <p className="text-center text-muted-foreground text-sm">
              ↺ Every session became part of a continuous feedback loop.
            </p>
          </Section>
        </Reveal>

        {/* Design Principle */}
        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
              Automate the work.
              <br />
              Protect the relationship.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5" style={{ borderColor: KD_TEAL, backgroundColor: tint(KD_TEAL, 6) }}>
                <Cog className="w-6 h-6 mb-2" style={{ color: KD_TEAL }} />
                <p className="font-bold uppercase tracking-wide text-sm mb-3" style={{ color: KD_TEAL }}>Automate</p>
                <DotList items={['Coordination', 'Attendance', 'Reporting', 'Data entry', 'Reconciliation']} />
              </div>
              <div className="rounded-xl border p-5" style={{ borderColor: KD_ORANGE, backgroundColor: tint(KD_ORANGE, 6) }}>
                <MessageCircle className="w-6 h-6 mb-2" style={{ color: KD_ORANGE }} />
                <p className="font-bold uppercase tracking-wide text-sm mb-3" style={{ color: KD_ORANGE }}>Protect</p>
                <DotList items={['Conversation', 'Trust', 'Feedback', 'Context', 'Human judgement']} />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Solution */}
        <Reveal>
          <Section title="One system around the entire Kopdar lifecycle.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: UsersIcon, color: KD_GREEN, title: 'Community', description: 'Profiles · Groups' },
                { icon: Calendar, color: KD_ORANGE, title: 'Event setup', description: 'Planning · Scheduling' },
                { icon: MessageCircle, color: KD_TEAL, title: 'Live session', description: 'Attendance · Participation' },
                { icon: MessageSquare, color: KD_PURPLE, title: 'Evaluation', description: 'Feedback · Follow-up' },
                { icon: BarChart3, color: KD_RED, title: 'Reporting', description: 'Analytics · Visibility' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border p-5" style={{ borderColor: item.color, backgroundColor: tint(item.color, 6) }}>
                  <item.icon className="w-6 h-6 mb-3" style={{ color: item.color }} />
                  <p className="font-bold" style={{ color: item.color }}>{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <ImageBlock src="/images/casestudy-3/proposed-solution.webp" alt="Kopdar proposed solution diagram" />

            <h3 className="text-xl font-bold text-foreground mt-8">New system flow</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: CalendarPlus, title: 'Create', color: KD_GREEN },
                { icon: Send, title: 'Invitation', color: KD_ORANGE },
                { icon: CircleCheck, title: 'RSVP', color: KD_TEAL },
                { icon: MessageCircle, title: 'Kopdar happens', color: KD_PURPLE },
                { icon: UserCheck, title: 'Attendance + feedback', color: KD_RED },
                { icon: BarChart3, title: 'PKM visibility', color: KD_GREEN },
                { icon: TrendingUp, title: 'Insights inform next', color: KD_ORANGE },
              ].map((step, i) => (
                <div key={step.title} className="rounded-xl border border-border bg-muted/30 p-4 text-center relative">
                  <span className="text-xs font-semibold text-muted-foreground">Step {i + 1}</span>
                  <step.icon className="w-5 h-5 mx-auto my-2" style={{ color: step.color }} />
                  <p className="font-semibold text-foreground text-sm">{step.title}</p>
                </div>
              ))}
            </div>
            <ImageBlock src="/images/casestudy-3/new-workflow.webp" alt="Kopdar new workflow diagram" />
          </Section>
        </Reveal>

        {/* Design Decisions */}
        <Reveal>
          <Section title="Design decisions">
            <div className="space-y-10">
              <DecisionBlock
                number="01"
                icon={Zap}
                title="Make the next Kopdar easier than the last one."
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
              />
              <DecisionBlock
                number="03"
                icon={Activity}
                title="Give supervisors signals, not more data."
                copy="The dashboard focused attention on where PKMs could act."
                color={KD_TEAL}
                image="/images/casestudy-3/dashboard-screen.webp"
                alt="Kopdar dashboard screen showing session overview and community signals"
              />
              <DecisionBlock
                number="04"
                icon={CloudOff}
                title="Design for the conditions, not the ideal environment."
                copy="Offline capture allowed the workflow to continue when connectivity couldn't be guaranteed."
                color={KD_PURPLE}
                image="/images/casestudy-3/new-workflow.webp"
                alt="Kopdar workflow diagram showing offline capture and sync to PKM"
              />
            </div>
          </Section>
        </Reveal>

        {/* Validation */}
        <Reveal>
          <Section title="The field was part of the design process.">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: KD_GREEN, color: KD_GREEN }}>
                <MapPin className="w-3.5 h-3.5" /> Jakarta
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border" style={{ borderColor: KD_ORANGE, color: KD_ORANGE }}>
                <MapPin className="w-3.5 h-3.5" /> Makassar
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <ImageBlock src="/images/casestudy-3/field-workshop-1.webp" alt="Field research workshop with PKs" />
                <p className="text-center text-sm text-muted-foreground mt-2">Observed session</p>
              </div>
              <div>
                <ImageBlock src="/images/casestudy-3/field-workshop-2.webp" alt="Team testing the Kopdar workflow in Jakarta" />
                <p className="text-center text-sm text-muted-foreground mt-2">Tested workflow</p>
              </div>
              <div>
                <ImageBlock src="/images/casestudy-3/research-session-1.webp" alt="User research session validating attendance flow" />
                <p className="text-center text-sm text-muted-foreground mt-2">Validated attendance</p>
              </div>
              <div>
                <ImageBlock src="/images/casestudy-3/research-session-2.webp" alt="User testing session capturing field constraints" />
                <p className="text-center text-sm text-muted-foreground mt-2">Captured field constraints</p>
              </div>
            </div>
            <div className="rounded-2xl border p-6" style={{ borderColor: KD_GREEN, backgroundColor: tint(KD_GREEN, 6) }}>
              <p className="font-bold mb-3" style={{ color: KD_GREEN }}>Key findings</p>
              <ul className="space-y-3">
                {[
                  '92% of PKs completed session creation without assistance',
                  'Average attendance recording time reduced from 8 min to 45 sec',
                  'PKMs praised real-time visibility',
                  'QR code check-in was the most-loved feature among drivers',
                ].map((finding) => (
                  <li key={finding} className="flex items-start gap-2 text-sm text-foreground">
                    <CircleCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: KD_GREEN }} />
                    {finding}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </Reveal>

        {/* Iteration */}
        <Reveal>
          <Section title="What changed after we tested it.">
            <div className="grid sm:grid-cols-3 gap-4">
              <BeforeAfter icon={GitCompare} before="Separate flows for K1 and K2" after="One session flow" color={KD_GREEN} />
              <BeforeAfter icon={CloudOff} before="Connectivity required" after="Offline capture + sync" color={KD_ORANGE} />
              <BeforeAfter icon={SlidersHorizontal} before="Too many metrics" after="Focused supervisor signals" color={KD_TEAL} />
            </div>
          </Section>
        </Reveal>

        {/* Impact */}
        <Reveal>
          <Section title="The system reduced work without reducing the human connection.">
            <div className="rounded-2xl border p-6" style={{ borderColor: KD_GREEN, backgroundColor: tint(KD_GREEN, 6) }}>
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="w-5 h-5" style={{ color: KD_GREEN }} />
                <p className="font-bold" style={{ color: KD_GREEN }}>Operational</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 items-end">
                <div className="text-center sm:text-left">
                  <p className="text-5xl font-bold" style={{ color: KD_GREEN }}>85%</p>
                  <p className="text-muted-foreground text-sm mt-1">Reduction in manual tasks</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold" style={{ color: KD_GREEN }}>3.2×</p>
                  <p className="text-muted-foreground text-sm mt-1">Increase in consistency</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-3xl font-bold" style={{ color: KD_GREEN }}>2,400+</p>
                  <p className="text-muted-foreground text-sm mt-1">Sessions in 3 months</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: KD_TEAL, backgroundColor: tint(KD_TEAL, 6) }}>
              <div className="flex items-center gap-2 mb-4">
                <UsersIcon className="w-5 h-5" style={{ color: KD_TEAL }} />
                <p className="font-bold" style={{ color: KD_TEAL }}>Human</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold" style={{ color: KD_TEAL }}>94%</p>
                  <p className="text-muted-foreground text-sm mt-1">PK confidence score</p>
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ color: KD_TEAL }}>18,000+</p>
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

            <div className="rounded-2xl border p-6" style={{ borderColor: KD_PURPLE, backgroundColor: tint(KD_PURPLE, 6) }}>
              <div className="flex items-center gap-2 mb-4">
                <Network className="w-5 h-5" style={{ color: KD_PURPLE }} />
                <p className="font-bold" style={{ color: KD_PURPLE }}>Organizational</p>
              </div>
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

        {/* What Changed */}
        <Reveal>
          <Section title="From fragmented operations to a scalable operating system.">
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div className="rounded-xl border border-border p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  Before: Fragmented tools
                </p>
                <DotList items={['WhatsApp', 'Sheets', 'Forms', 'Slides', 'Screenshots', 'Manual reports']} />
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 sm:rotate-0" />
              </div>
            </div>
            <div className="rounded-xl border border-primary/30 bg-accent/10 p-5 max-w-md">
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">
                After: One connected workflow
              </p>
              <DotList items={['Prepare', 'Gather', 'Conduct', 'Learn', 'Repeat']} />
            </div>
            <p className="text-2xl font-bold text-foreground text-center max-w-2xl mx-auto leading-snug">
              We didn't digitise the relationship. We digitised the work that made the
              relationship harder to sustain.
            </p>
          </Section>
        </Reveal>

        {/* What I Learned */}
        <Reveal>
          <Section title="What I learned">
            <div className="space-y-4">
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
              Automate the work. Protect the relationship.
            </p>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Kopdar showed me that good systems don't make human interactions less
              important. They make more room for them.
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
