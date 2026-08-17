import {
  Users as UsersIcon,
  Package,
  Globe,
  Layers,
  Clock,
  TrendingDown,
  TrendingUp,
  Search,
  Zap,
  Lock,
  ChartColumn,
  Smartphone,
  RefreshCw,
  Calendar,
  Mic,
  Clipboard,
  Radio,
  FileText,
  Award,
  Target,
  Lightbulb,
  TriangleAlert,
  CircleCheck,
  FlaskConical,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { ImageBlock } from '@/components/casestudy/image-block';
import { Quote } from '@/components/casestudy/quote';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';

// Kopdar's brand palette — distinct from the site's --icon-* tokens, sampled from the reference.
const KD_GREEN = 'rgb(0, 170, 19)';
const KD_ORANGE = 'rgb(255, 107, 0)';
const KD_TEAL = 'rgb(0, 129, 160)';
const KD_PURPLE = 'rgb(147, 50, 142)';
const KD_RED = 'rgb(238, 39, 55)';

function Eyebrow({ icon: Icon, text, color }: { icon: LucideIcon; text: string; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border mb-4"
      style={{ color, borderColor: color, backgroundColor: tint(color, 10) }}
    >
      <Icon className="w-3.5 h-3.5" />
      {text}
    </span>
  );
}

function EyebrowHeading({
  icon,
  eyebrow,
  color,
  title,
  highlight,
  subtitle,
}: {
  icon: LucideIcon;
  eyebrow: string;
  color: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  const parts = highlight ? title.split(highlight) : null;
  return (
    <div>
      <Eyebrow icon={icon} text={eyebrow} color={color} />
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {parts ? (
          <>
            {parts[0]}
            <span style={{ color }}>{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="text-muted-foreground mt-2">{subtitle}</p>}
    </div>
  );
}

function KopdarInitiativePage() {
  return (
    <div className="pb-20">
      <Seo
        title="Kopdar Initiative"
        description="Improving efficiency, consistency, and community connection across Indonesia."
      />
      <CaseStudyHero
        breadcrumbLabel="Kopdar"
        badges={['● Case Study']}
        title="Kopdar Initiative: Scaling Driver Engagement for Gojek"
        titleHighlight="Driver Engagement"
        subtitle="Improving efficiency, consistency, and community connection across Indonesia"
        meta={[
          { label: 'Role', value: 'Product Designer', icon: UsersIcon, color: KD_GREEN, bg: tint(KD_GREEN, 8) },
          { label: 'Duration', value: 'Oct 2019 – Apr 2020', icon: Clock, color: KD_ORANGE, bg: tint(KD_ORANGE, 8) },
          { label: 'Team', value: 'Cross-functional', icon: UsersIcon, color: KD_TEAL, bg: tint(KD_TEAL, 8) },
        ]}
        metaVariant="cards"
        coverImage="/images/shared/project-kopdar-cover.png"
        coverAlt="Gojek motorcycle driver in green jacket representing driver community"
        imageBadge="Live from Jakarta"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-14">
        <Reveal>
          <Section title="Context">
            <h3 className="text-xl font-bold text-foreground">What is Kopdar?</h3>
            <Prose>
              <p>
                Kopdar is Gojek's on-ground gathering with drivers, designed to build
                trust, share clarity, and gather unfiltered insights.
              </p>
            </Prose>
            <IconCardList
              columns={3}
              items={[
                { icon: UsersIcon, iconColor: KD_GREEN, title: 'Community', description: 'Strengthening bonds' },
                { icon: Package, iconColor: KD_TEAL, title: 'Products', description: 'Continuous improvement' },
                { icon: Globe, iconColor: KD_PURPLE, title: 'Ecosystem', description: 'Platform stability' },
              ]}
            />
            <Prose callout>
              Kopdar keeps Gojek connected to the realities of the people who power
              the platform—ensuring every decision is grounded in real driver
              experiences.
            </Prose>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <Prose>
                <p>
                  Kopdar (Kopi Darat, meaning "face-to-face meeting") is Gojek's
                  flagship community engagement program. Led by Performance Katalysts
                  (PKs) and supervised by Performance Katalyst Managers (PKMs), these
                  regular sessions connect thousands of drivers across Indonesia,
                  providing training, support, and building community bonds that
                  strengthen the platform ecosystem.
                </p>
              </Prose>
              <div className="relative rounded-2xl overflow-hidden min-h-[180px]">
                <ImageWithFallback
                  src="/images/casestudy-3/indonesia-map.png"
                  alt="Map of Indonesia archipelago"
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="relative z-10 h-full flex flex-col items-center justify-end text-center p-6 bg-gradient-to-t from-black/50 via-black/10 to-transparent">
                  <MapPin className="w-6 h-6 text-white mb-1" />
                  <p className="font-bold text-white">Indonesia-wide Program</p>
                  <p className="text-white/90 text-sm">
                    Spanning Jakarta, Surabaya, Makassar, and beyond
                  </p>
                </div>
              </div>
            </div>
            <StatGrid
              columns={3}
              stats={[
                { value: '170', label: 'PKs' },
                { value: '75', label: 'PKMs' },
                { value: '2.7K', label: 'Drivers' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="The Problem">
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <TriangleAlert className="w-5 h-5 text-destructive" />
              The Challenge
            </h3>
            <Prose>
              <p>Three critical pain points blocking scale</p>
            </Prose>
            <IconCardList
              items={[
                { icon: Layers, iconColor: KD_GREEN, title: '01 — Too many tools', description: 'PKs juggled between WhatsApp, Google Sheets, Forms, and Slides—fragmented workflows led to confusion and errors.' },
                { icon: Clock, iconColor: KD_ORANGE, title: '02 — Too much manual work', description: 'Everything from attendance tracking to report generation was done manually, consuming hours of valuable time.' },
                { icon: TrendingDown, iconColor: KD_RED, title: '03 — No consistent measurement', description: "Without standardized metrics, PKM supervisors couldn't evaluate performance or identify areas for improvement across regions." },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Discovery Phase">
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Search className="w-5 h-5 text-muted-foreground" />
              Research
            </h3>
            <Prose>
              <p>Deep dive into user needs across multiple regions — Jakarta • Oct 2019, Makassar • Jan 2020</p>
            </Prose>
            <StatGrid
              columns={3}
              stats={[
                { value: '170', label: 'Performance Katalysts interviewed' },
                { value: '75', label: 'PKM Supervisors consulted' },
                { value: '2,700', label: 'Drivers surveyed' },
              ]}
            />
            <IconCardList
              columns={2}
              items={[
                { icon: Zap, iconColor: KD_GREEN, title: 'Context switching kills productivity', description: 'PKs spend 40% of session time managing tools instead of engaging drivers' },
                { icon: Lock, iconColor: KD_ORANGE, title: 'Trust requires transparency', description: 'Drivers want to see their attendance tracked in real-time' },
                { icon: ChartColumn, iconColor: KD_TEAL, title: 'PKMs need data, not documents', description: 'Supervisors struggle to extract insights from hundreds of spreadsheets' },
                { icon: Smartphone, iconColor: KD_PURPLE, title: 'Mobile-first is non-negotiable', description: '89% of PKs run sessions from their phones while on the road' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="">
            <EyebrowHeading
              icon={RefreshCw}
              eyebrow="User Journey Analysis"
              color={KD_ORANGE}
              title="Workflow Pain Points"
              subtitle="Mapping the entire Kopdar lifecycle to identify friction"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { n: 1, icon: Calendar, color: KD_GREEN, title: 'Pre-Kopdar', items: ['No Content Database', 'Manual coordinate event', 'No RSVP tracking'] },
                { n: 2, icon: Mic, color: KD_ORANGE, title: 'During Kopdar', items: ['Most unplanned Kopdar are not reported', 'Switching apps', 'Separate form links'] },
                { n: 3, icon: ChartColumn, color: KD_PURPLE, title: 'Post Kopdar', items: ['No attendance accountability', 'Manual reconciliation of finance and reports', 'Manual accountability of performance'] },
                { n: 4, icon: Clipboard, color: KD_RED, title: 'Between Sessions', items: ['Hours of copy-pasting', 'Screenshots only', 'No data insights'] },
              ].map((stage) => (
                <div
                  key={stage.n}
                  className="rounded-xl border p-5"
                  style={{ borderColor: stage.color, backgroundColor: tint(stage.color, 6) }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-bold"
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.n}
                    </span>
                    <stage.icon className="w-4 h-4" style={{ color: stage.color }} />
                  </div>
                  <p className="font-bold mb-2" style={{ color: stage.color }}>
                    {stage.title}
                  </p>
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
              src="/images/casestudy-3/workflow-pain-points.png"
              alt="Kopdar workflow diagram showing pain points across the lifecycle"
            />
            <div className="rounded-xl border p-5 flex items-start gap-3" style={{ borderColor: KD_RED, backgroundColor: tint(KD_RED, 6) }}>
              <TriangleAlert className="w-5 h-5 shrink-0 mt-0.5" style={{ color: KD_RED }} />
              <p className="text-foreground">
                Each Kopdar cycle generated <strong>15+ hours of manual work</strong>{' '}
                across fragmented tools, with zero visibility for supervisors until
                reports were manually compiled days later.
              </p>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="">
            <EyebrowHeading
              icon={Zap}
              eyebrow="The Solution"
              color={KD_GREEN}
              title="Unified Platform"
              highlight="Unified"
              subtitle="Consolidating the entire Kopdar workflow—from planning to insights"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: UsersIcon, color: KD_GREEN, title: 'Community', description: 'Driver profiles & groups' },
                { icon: Calendar, color: KD_ORANGE, title: 'Event Setup', description: 'Session scheduling' },
                { icon: Radio, color: KD_TEAL, title: 'Live Session', description: 'Real-time attendance' },
                { icon: ChartColumn, color: KD_PURPLE, title: 'Evaluation', description: 'Feedback collection' },
                { icon: FileText, color: KD_RED, title: 'Reporting', description: 'Automated analytics' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border p-5"
                  style={{ borderColor: item.color, backgroundColor: tint(item.color, 6) }}
                >
                  <item.icon className="w-6 h-6 mb-3" style={{ color: item.color }} />
                  <p className="font-bold" style={{ color: item.color }}>
                    {item.title}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <ImageBlock
              src="/images/casestudy-3/proposed-solution.png"
              alt="Kopdar proposed solution diagram"
            />

            <h3 className="text-xl font-bold text-foreground mt-8">
              Data Flow Architecture
            </h3>
            <StepFlow
              variant="numbered"
              steps={[
                { icon: UsersIcon, iconColor: KD_GREEN, title: 'PK creates session', description: 'Selects drivers, sets schedule' },
                { icon: Smartphone, iconColor: KD_ORANGE, title: 'Drivers receive invite', description: 'RSVP & view materials' },
                { icon: Radio, iconColor: KD_TEAL, title: 'Live session runs', description: 'Attendance, Q&A, feedback' },
                { icon: RefreshCw, iconColor: KD_PURPLE, title: 'Auto-sync to PKM', description: 'Real-time dashboards' },
              ]}
            />
            <ImageBlock
              src="/images/casestudy-3/new-workflow.png"
              alt="Kopdar new workflow diagram"
            />
            <Prose>
              <p>
                All session data flows automatically through the platform, eliminating
                manual entry and providing instant visibility to supervisors.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="">
            <EyebrowHeading
              icon={Smartphone}
              eyebrow="Product Walkthrough"
              color={KD_PURPLE}
              title="Key Screens"
            />
            <div className="space-y-8 mt-6">
              {[
                {
                  n: '01',
                  color: KD_GREEN,
                  title: 'Kopdar Dashboard',
                  description:
                    'PKs get an at-a-glance overview of their community: upcoming sessions, attendance trends, and pending action items—all surfaced without digging through menus.',
                  img: '/images/casestudy-3/dashboard-screen.png',
                  alt: 'Kopdar Dashboard screen showing session overview and community',
                },
                {
                  n: '02',
                  color: KD_ORANGE,
                  title: 'Creating New Kopdar Session',
                  description:
                    'PKs can now create sessions in under 2 minutes—selecting drivers from their community, choosing templates, and scheduling both K1 and K2 in one unified flow.',
                  img: '/images/casestudy-3/create-event-screens.png',
                  alt: 'New Kopdar session creation flow showing driver selection',
                },
                {
                  n: '03',
                  color: KD_TEAL,
                  title: 'Conducting Kopdar Session',
                  description:
                    'During the session, PKs manage attendance, capture notes, and field driver questions in real time—everything recorded in one place so nothing is lost after the meeting.',
                  img: '/images/casestudy-3/conduct-event-screen.png',
                  alt: 'Active Kopdar session screen showing attendance, notes',
                },
              ].map((screen) => (
                <div key={screen.n}>
                  <div
                    className="rounded-2xl border-2 p-6"
                    style={{ borderColor: screen.color, backgroundColor: tint(screen.color, 6) }}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className="text-4xl font-bold"
                        style={{ color: tint(screen.color, 35) }}
                      >
                        {screen.n}
                      </span>
                      <p className="text-xl font-bold text-foreground">{screen.title}</p>
                    </div>
                    <p className="text-muted-foreground mt-2">{screen.description}</p>
                  </div>
                  <div className="mt-4">
                    <ImageBlock src={screen.img} alt={screen.alt} />
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="">
            <EyebrowHeading
              icon={FlaskConical}
              eyebrow="Validation"
              color={KD_TEAL}
              title="Testing & Validation"
              subtitle="Usability testing in Jakarta and Makassar with 24 PKs and 8 PKMs"
            />
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { img: '/images/casestudy-3/field-workshop-1.png', alt: 'Field research workshop', tag: 'UT, Jakarta, Oct 2019' },
                { img: '/images/casestudy-3/field-workshop-2.png', alt: 'Team workshop in Jakarta', tag: 'UT, Jakarta, Jan 2020' },
                { img: '/images/casestudy-3/research-session-1.jpg', alt: 'User research session', tag: 'UT, Makassar, Jan 2020' },
              ].map((item) => (
                <div key={item.img} className="rounded-xl overflow-hidden border border-border">
                  <ImageBlock src={item.img} alt={item.alt} />
                  <p className="text-center text-sm text-muted-foreground py-2">{item.tag}</p>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <ImageBlock src="/images/casestudy-3/research-session-2.jpg" alt="User testing session" />
              <ImageBlock src="/images/casestudy-3/community-meeting.png" alt="Driver community meeting" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border p-6" style={{ borderColor: KD_GREEN, backgroundColor: tint(KD_GREEN, 6) }}>
                <p className="font-bold mb-3" style={{ color: KD_GREEN }}>Key Findings</p>
                <ul className="space-y-3">
                  {[
                    '92% of PKs completed session creation without assistance',
                    'Average attendance recording time reduced from 8 min to 45 sec',
                    'PKMs praised real-time visibility: "I can finally see what\'s happening"',
                    'QR code check-in was the most-loved feature among drivers',
                  ].map((finding) => (
                    <li key={finding} className="flex items-start gap-2 text-sm text-foreground">
                      <CircleCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: KD_GREEN }} />
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6">
                <p className="font-bold text-primary mb-3">Iterations</p>
                <div className="space-y-3">
                  {[
                    { before: 'Initial design had separate flows for K1 and K2', after: 'Combined into one flow with session type selection' },
                    { before: 'Q&A required internet connection to submit', after: 'Added offline mode with sync when connection returns' },
                    { before: 'Dashboard showed too many metrics at once', after: 'Progressive disclosure with customizable views' },
                  ].map((it) => (
                    <div key={it.before} className="text-sm">
                      <p className="text-muted-foreground">
                        <strong>Before:</strong> {it.before}
                      </p>
                      <p className="text-foreground">
                        <strong>After:</strong> {it.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="">
            <EyebrowHeading
              icon={ChartColumn}
              eyebrow="Results"
              color={KD_GREEN}
              title="The Impact"
              highlight="Impact"
              subtitle="Measurable improvements across all key metrics"
            />
            <div className="mt-6">
              <StatGrid
                columns={4}
                stats={[
                  { value: '85%', label: 'Reduction in manual tasks', sublabel: 'PKs save 12+ hours per month', icon: TrendingDown, color: KD_GREEN },
                  { value: '3.2×', label: 'Increase in consistency', sublabel: 'Standardized metrics nationwide', icon: TrendingUp, color: KD_ORANGE },
                  { value: '94%', label: 'PK confidence score', sublabel: '"I feel more professional"', icon: Award, color: KD_TEAL },
                  { value: '500+', label: 'Scaling readiness', sublabel: 'Platform ready for expansion', icon: Globe, color: KD_PURPLE },
                ]}
              />
            </div>

            <div className="rounded-2xl border p-6" style={{ borderColor: KD_GREEN, backgroundColor: tint(KD_GREEN, 6) }}>
              <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                <Target className="w-5 h-5" style={{ color: KD_GREEN }} />
                Business Impact
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-card p-4 text-center">
                  <p className="text-3xl font-bold" style={{ color: KD_GREEN }}>2,400+</p>
                  <p className="text-muted-foreground text-sm mt-1">Sessions processed in 3 months</p>
                </div>
                <div className="rounded-lg bg-card p-4 text-center">
                  <p className="text-3xl font-bold" style={{ color: KD_GREEN }}>18,000+</p>
                  <p className="text-muted-foreground text-sm mt-1">Drivers engaged</p>
                </div>
              </div>
              <p className="text-foreground mt-4">
                PKM supervisors reported that real-time insights helped them identify
                and support struggling PKs 5× faster than before.
              </p>
              <div className="mt-4">
                <Quote attribution="PKM, Jakarta Region">
                  "This changed how we work. We're not just managing sessions
                  anymore—we're building a smarter, more connected community."
                </Quote>
              </div>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Personal Takeaways">
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
              <Lightbulb className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
              Reflection
            </h3>
            <Prose>
              <p>
                This project pushed me to think beyond individual user flows and
                consider the entire ecosystem. Designing for PKs meant designing for
                PKMs, and designing for both meant ensuring drivers felt the impact too.
                Balancing these stakeholder needs required constant negotiation and
                prioritization.
              </p>
            </Prose>
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mt-6">
              <Lightbulb className="w-5 h-5" style={{ color: 'rgb(0, 200, 83)' }} />
              Designing for Real-World Constraints
            </h3>
            <Prose>
              <p>
                Early prototypes assumed reliable internet and modern smartphones—
                assumptions that shattered during field testing. Watching PKs struggle
                with connectivity in rural areas taught me to build resilience into the
                design from day one, not retrofit it later.
              </p>
              <p>
                I also learned the power of incremental adoption. Rather than launching
                a full replacement overnight, we designed the platform to work
                alongside existing tools initially. This reduced change management
                friction and built trust gradually. PKs chose to fully migrate because
                the value was undeniable—not because they were forced to.
              </p>
            </Prose>
            <h3 className="flex items-center gap-2 text-xl font-bold text-foreground mt-6">
              <Target className="w-5 h-5" style={{ color: 'rgb(0, 200, 255)' }} />
              Impact Beyond Interfaces
            </h3>
            <Prose>
              <p>
                The real win wasn't the UI; it was giving PKs back their time, giving
                PKMs visibility they never had, and strengthening the bonds within
                Gojek's driver community. Beautiful design is meaningless without
                solving systemic problems.
              </p>
            </Prose>
            <p className="text-center text-muted-foreground italic mt-8">
              Thanks for reading this case study.
            </p>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

export { KopdarInitiativePage };
