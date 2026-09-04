import {
  Users as UsersIcon,
  Workflow,
  Lightbulb,
  FileText,
  ArrowRight,
  ArrowDown,
  ExternalLink,
  Sparkles,
  Eye,
  RefreshCw,
  Boxes,
  ShieldCheck,
  Target,
  User,
  Calendar,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Section } from '@/components/casestudy/section';
import { Beat } from '@/components/casestudy/beat';
import { NarrativeStatement } from '@/components/casestudy/narrative-statement';
import { Prose } from '@/components/casestudy/prose';
import { ImageBlock } from '@/components/casestudy/image-block';
import { Takeaway } from '@/components/casestudy/takeaway';
import { buttonVariants } from '@/design-system/ui/button';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { tint } from '@/lib/color';
import { cn, type IconComponent } from '@/lib/utils';

const MASTER_PROTOTYPE_URL = 'https://familysafetyproto.figma.site/';

/**
 * Same warm-editorial token override the locked Phone → PC case study uses,
 * scoped to this page's own root wrapper only, with Family Safety's own
 * signature accent (blue, its structure/governance color throughout this
 * page) in place of Phone → PC's purple.
 */
const CASESTUDY_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-blue)',
  '--ring': 'var(--icon-blue)',
} as React.CSSProperties;

/**
 * A mid-weight editorial conclusion — warmer and more centered than an
 * ordinary paragraph, but deliberately smaller than NarrativeStatement,
 * which stays reserved for the page's one signature moment. Used for the
 * handful of other insight lines that deserve to read as intentional
 * conclusions rather than another bordered callout.
 */
function InsightStatement({ children, color = 'var(--icon-blue)' }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: tint(color, 5) }}>
      <p className="font-serif text-xl md:text-2xl font-bold text-foreground leading-snug max-w-xl mx-auto">
        {children}
      </p>
    </div>
  );
}

/** A single node used inside FlowChain / branch diagrams: icon, label, optional sublabel. */
function FlowNode({
  icon: Icon,
  label,
  sublabel,
  color = 'var(--icon-blue)',
  strong = false,
}: {
  icon: IconComponent;
  label: string;
  sublabel?: string;
  color?: string;
  strong?: boolean;
}) {
  return (
    <div
      className={cn('rounded-xl text-center w-full max-w-[13rem]', strong ? 'border-2 p-4' : 'border p-3 min-w-[7rem]')}
      style={{ borderColor: color, backgroundColor: `color-mix(in srgb, ${color} ${strong ? 12 : 6}%, transparent)` }}
    >
      <Icon className={cn('mx-auto', strong ? 'w-6 h-6 mb-1.5' : 'w-5 h-5 mb-1.5')} style={{ color }} />
      <p className={cn('text-foreground leading-tight', strong ? 'text-sm font-bold' : 'text-xs font-semibold')}>{label}</p>
      {sublabel && <p className="text-muted-foreground text-[11px] mt-0.5 leading-tight">{sublabel}</p>}
    </div>
  );
}

/**
 * A sequence of nodes connected by arrows. Wraps onto new lines whenever the
 * container is too narrow for one row rather than overflowing it.
 */
function FlowChain({ steps }: { steps: { icon: IconComponent; label: string; sublabel?: string; color?: string }[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={step.label} className="contents">
          {i > 0 && <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />}
          <FlowNode {...step} />
        </div>
      ))}
    </div>
  );
}

/**
 * The leadership-move diagram: old model (design as a bottleneck) versus new
 * model (design as a governed quality gate). Built from the portfolio's own
 * bordered-node visual language rather than reproducing any external
 * reference's styling — the quality gate gets a visibly heavier treatment
 * than an ordinary step, and the old model's bottleneck is tagged the same
 * way the rest of the page tags a bottleneck.
 */
function GateModelDiagram() {
  return (
    <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
      <div className="rounded-2xl border border-border p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-center text-muted-foreground mb-6">Old model</p>
        <div className="flex flex-col items-center gap-1.5">
          <FlowNode icon={Lightbulb} label="PM idea" color="var(--icon-orange)" />
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <div
            className="rounded-xl border-2 p-4 text-center w-full max-w-[13rem]"
            style={{ borderColor: 'var(--icon-red)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 10%, transparent)' }}
          >
            <UsersIcon className="w-6 h-6 mx-auto mb-1.5" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
            <p className="text-foreground text-sm font-bold">Design</p>
            <p className="text-[11px] font-bold uppercase tracking-wide mt-0.5" style={{ color: 'var(--icon-red)' }}>
              Bottleneck
            </p>
          </div>
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <FlowNode icon={Workflow} label="Prototype" color="var(--icon-blue)" />
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <FlowNode icon={Workflow} label="Engineering" color="var(--icon-teal)" />
        </div>
      </div>

      <div className="flex sm:flex-col items-center justify-center py-2" aria-hidden="true">
        <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 sm:rotate-0" />
      </div>

      <div
        className="rounded-2xl border-2 p-6"
        style={{ borderColor: 'var(--icon-blue)', backgroundColor: 'color-mix(in srgb, var(--icon-blue) 4%, transparent)' }}
      >
        <p className="text-xs font-bold uppercase tracking-widest text-center mb-6" style={{ color: 'var(--icon-blue)' }}>
          New model
        </p>
        <div className="flex flex-col items-center gap-1.5">
          <FlowNode icon={Lightbulb} label="PM idea" color="var(--icon-orange)" />
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <FlowNode icon={Sparkles} label="AI / vibe code" color="var(--icon-purple)" />
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <FlowNode icon={Eye} label="Explore freely" color="var(--icon-purple)" />
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <FlowNode icon={ShieldCheck} label="Design Office Hours" sublabel="Quality gate" color="var(--icon-blue)" strong />
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span
              className="px-2 py-1 rounded-full text-[11px] font-semibold"
              style={{ color: 'var(--icon-green)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 14%, transparent)' }}
            >
              Proceed
            </span>
            <span
              className="px-2 py-1 rounded-full text-[11px] font-semibold"
              style={{ color: 'var(--icon-orange)', backgroundColor: 'color-mix(in srgb, var(--icon-orange) 14%, transparent)' }}
            >
              Iterate
            </span>
            <span
              className="px-2 py-1 rounded-full text-[11px] font-semibold"
              style={{ color: 'var(--icon-red)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 14%, transparent)' }}
            >
              Escalate
            </span>
          </div>
          <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
          <FlowNode icon={Workflow} label="Engineering" color="var(--icon-teal)" />
        </div>
      </div>
    </div>
  );
}

interface ChangeRow {
  label: string;
  before: string;
  after: string;
}

const CHANGE_ROWS: ChangeRow[] = [
  { label: 'Design capacity', before: '1 designer', after: '3 PMs exploring independently' },
  { label: 'Exploration', before: 'Wait for Design', after: 'AI-assisted exploration' },
  { label: 'Quality', before: 'Design review at the end', after: 'Governed through the operating model' },
  { label: 'Prototype', before: 'Designer-created', after: 'PM-created, within the system' },
  { label: 'Design role', before: 'Maker / gatekeeper', after: 'Steward / enabler' },
];

/**
 * The "what changed" evidence matrix: five dimensions of the operating
 * model, before and after. Rendered as a real table-like grid at sm+ and as
 * stacked before/after cards on mobile, since a 3-column matrix with this
 * much text per cell reads poorly if simply shrunk.
 */
function ChangeMatrix() {
  return (
    <>
      <div className="hidden sm:block rounded-2xl border border-border overflow-hidden">
        <div className="grid grid-cols-[9rem_1fr_1fr] text-sm">
          <div className="p-4 border-b border-border" />
          <div className="p-4 border-b border-l border-border font-semibold text-muted-foreground">Before</div>
          <div className="p-4 border-b border-l border-border font-semibold" style={{ color: 'var(--icon-green)' }}>
            After
          </div>
          {CHANGE_ROWS.map((row, i) => {
            const last = i === CHANGE_ROWS.length - 1;
            return (
              <div key={row.label} className="contents">
                <div className={cn('p-4 font-semibold text-foreground', !last && 'border-b border-border')}>{row.label}</div>
                <div className={cn('p-4 border-l border-border text-muted-foreground', !last && 'border-b')}>{row.before}</div>
                <div className={cn('p-4 border-l border-border text-foreground', !last && 'border-b')}>{row.after}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="sm:hidden space-y-3">
        {CHANGE_ROWS.map((row) => (
          <div key={row.label} className="rounded-xl border border-border p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-2">{row.label}</p>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">Before</p>
                <p className="text-muted-foreground text-sm mt-0.5">{row.before}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground mt-4 shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: 'var(--icon-green)' }}>
                  After
                </p>
                <p className="text-foreground text-sm mt-0.5 font-medium">{row.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function FamilySafetyPage() {
  return (
    <div style={CASESTUDY_THEME_VARS} className="bg-background text-foreground pb-20">
      <Seo
        title="Family Safety"
        description="A design leadership case study: turning a design bottleneck into a governance model, so PMs could explore independently with AI while design retained quality ownership."
      />

      {/* 01 — Hero, matching the locked Phone → PC hierarchy */}
      <CaseStudyHero
        eyebrow="Microsoft · Family Safety · Design Leadership"
        breadcrumbLabel="Family Safety Design System"
        badges={[]}
        title="Family Safety: Scaling Design Exploration Through Vibe Coding"
        subtitle="Design shouldn't be the bottleneck. Quality shouldn't be optional."
        description="A design-led governance model that let PMs prototype independently with AI, while Design kept ownership of system quality."
        metaVariant="pills"
        meta={[
          { label: 'Role', value: 'Design Lead', icon: User, color: 'var(--icon-blue)' },
          { label: 'Timeline', value: 'Dec 2025', icon: Calendar, color: 'var(--icon-teal)' },
          { label: 'Team', value: '3 PMs · 1 designer', icon: UsersIcon, color: 'var(--icon-purple)' },
          { label: 'Scope', value: 'Family Safety Portal', icon: Target, color: 'var(--icon-orange)' },
        ]}
        coverImage="/images/shared/project-family-safety-cover.webp"
        coverAlt="Family Safety app interface with collaborative team environment"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-16">
        {/* 02 — Overview / context */}
        <Reveal>
          <Section>
            <Beat eyebrow="Overview" color="var(--icon-blue)">A small team, a growing surface area.</Beat>
            <Prose className="mt-5">
              <p className="max-w-2xl">
                Family Safety's design work was owned by three PMs and one
                designer — me. Before any of this, a small-to-medium design
                request took about two weeks to reach the front of the queue,
                simply because there was one designer and a growing list of
                ideas to evaluate.
              </p>
              <p className="max-w-2xl">
                That pace was fine when the surface area was small. It stopped
                being fine once AI made it easy for PMs to imagine far more
                than one designer could evaluate in the same two weeks.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 03 — What changed: the evidence matrix, with the impact number as its capstone */}
        <Reveal>
          <Section>
            <Beat eyebrow="What changed" color="var(--icon-green)">The workflow changed more than throughput.</Beat>
            <div className="mt-8">
              <ChangeMatrix />
            </div>
            <div className="mt-10 text-center">
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <span className="font-serif text-6xl md:text-7xl font-bold text-muted-foreground/40">1</span>
                <ArrowRight className="w-7 h-7 md:w-9 md:h-9 text-primary shrink-0" aria-hidden="true" />
                <span className="font-serif text-6xl md:text-7xl font-bold text-foreground">3</span>
              </div>
              <p className="text-lg font-semibold text-foreground mt-4">design requests / 2 weeks</p>
              <p className="text-muted-foreground text-sm mt-1">3 PMs · 1 designer</p>
              <span
                className="inline-block mt-5 px-3 py-1.5 rounded-full text-sm font-semibold"
                style={{ color: 'var(--icon-green)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 10%, transparent)' }}
              >
                ~3× design-request throughput
              </span>
              <p className="text-muted-foreground text-xs mt-3 max-w-sm mx-auto">
                This reflects average design-request throughput, not a general productivity multiplier.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* 04 — The challenge */}
        <Reveal>
          <Section>
            <Beat eyebrow="The challenge" color="var(--icon-blue)">Family Safety was becoming a scale problem.</Beat>
            <Prose className="mt-5">
              <p className="max-w-2xl">
                Family Safety spans multiple platforms and surfaces, and needs
                frequent incremental changes. As the team grew, PMs waited on
                designer availability to explore ideas, and the PM-created
                prototypes that did get built often diverged from system
                components, creating downstream rework.
              </p>
            </Prose>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-2/family-safety-scale-problem.webp"
                alt="Diagram: multiple platforms, surfaces and frequent incremental changes increased exploration demand, creating tension between PMs needing to explore independently and Design needing to protect system quality, resulting in exploration wait and quality drift"
              />
            </div>
          </Section>
        </Reveal>

        {/* 05 — My role: editorial, not a card grid */}
        <Reveal>
          <Section>
            <Beat eyebrow="My role" color="var(--icon-teal)">
              I wasn't just designing the work. I was redesigning how the team designed.
            </Beat>
            <Prose className="mt-5">
              <p className="max-w-2xl">
                As Design Lead, I was accountable for the quality of everything
                that reached engineering, but I didn't own the volume of ideas
                that needed exploring, and I couldn't be the one exploring all
                of them. Rather than gatekeeping exploration, I led the{' '}
                <strong className="text-foreground">Ideation to Prototype initiative</strong>,
                a design-led governance model that let PMs prototype
                independently while Design kept quality ownership.
              </p>
            </Prose>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
              {[
                { icon: Target, color: 'var(--icon-blue)', label: 'Problem framing' },
                { icon: Workflow, color: 'var(--icon-orange)', label: 'Process design' },
                { icon: UsersIcon, color: 'var(--icon-purple)', label: 'Cross-functional alignment' },
                { icon: ShieldCheck, color: 'var(--icon-green)', label: 'Quality ownership' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 shrink-0" style={{ color: item.color }} aria-hidden="true" />
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* 06 — The design problem: argument before evidence */}
        <Reveal>
          <Section>
            <Beat eyebrow="The design problem" color="var(--icon-purple)">AI made prototyping faster. It also made inconsistency easier.</Beat>
            <Prose className="mt-5">
              <p className="max-w-xl">
                AI removed one bottleneck. It introduced another. The problem
                was never AI itself. It was the absence of a scalable quality
                model around AI-assisted exploration.
              </p>
            </Prose>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-2/two-bottlenecks-dual-challenge.webp"
                alt="Diagram comparing the before state (PM idea, design queue, prototype, engineering, bottleneck: exploration wait) with AI-assisted exploration (PM idea, AI or vibe code, working prototype, system divergence, bottleneck: quality drift)"
              />
            </div>
            <div className="mt-8">
              <InsightStatement color="var(--icon-purple)">
                The problem wasn't speed. The problem was how to scale quality with speed.
              </InsightStatement>
            </div>
          </Section>
        </Reveal>

        {/* 07 — The leadership move: the signature moment */}
        <Reveal>
          <Section>
            <Beat eyebrow="The leadership move" color="var(--icon-blue)">Instead of gatekeeping exploration, I redesigned the gate.</Beat>
            <div className="mt-8">
              <NarrativeStatement
                color="var(--icon-blue)"
                supporting="The old model made Design the bottleneck between every idea and engineering. The new one made Design the steward of a system PMs could explore inside safely."
              >
                I redesigned the gate, not the people.
              </NarrativeStatement>
            </div>
            <div className="mt-10">
              <GateModelDiagram />
            </div>
          </Section>
        </Reveal>

        {/* 08 — Creating structure */}
        <Reveal>
          <Section>
            <Beat eyebrow="Creating structure" color="var(--icon-teal)">The solution was an operating model, not another design process.</Beat>
            <Prose className="mt-5">
              <p className="max-w-2xl">
                Three things had to work together: a capability for fast
                exploration, a system worth exploring inside, and an operating
                model that kept the two honest.
              </p>
            </Prose>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-2/three-layer-design-model.webp"
                alt="Diagram of three layers working together: capability (AI-assisted exploration, vibe coding), system (system-correct Family Safety master prototype), and operating model (Design Office Hours plus governance), together enabling scalable design exploration"
              />
            </div>
            <Prose className="mt-8">
              <p className="text-center max-w-lg mx-auto">
                Underneath that model, ownership had to be explicit: who
                explores, who curates, who builds.
              </p>
            </Prose>
            <div className="mt-6">
              <ImageBlock
                src="/images/casestudy-2/governance-ownership-transformation.webp"
                alt="Diagram: the master prototype, PM checklist, Design Office Hours and engineering checklist feed into one design operating system, which distributes ownership so PMs explore, Design curates system quality and readiness, and Engineering builds and scales"
              />
            </div>
          </Section>
        </Reveal>

        {/* 09 — The governance loop: one coherent system model */}
        <Reveal>
          <Section>
            <Beat
              eyebrow="The governance loop"
              color="var(--icon-blue)"
              supporting="The gate itself was made of checklists, not opinions."
            >
              One system, four checkpoints.
            </Beat>
            <div className="mt-8">
              <FlowChain
                steps={[
                  { icon: Boxes, label: 'Master prototype', sublabel: 'Governed starting point', color: 'var(--icon-blue)' },
                  { icon: FileText, label: 'PM checklist', sublabel: 'Exploration readiness', color: 'var(--icon-orange)' },
                  { icon: UsersIcon, label: 'Design Office Hours', sublabel: 'Quality checkpoint', color: 'var(--icon-blue)' },
                  { icon: FileText, label: 'Engineering readiness', sublabel: 'Implementation readiness', color: 'var(--icon-teal)' },
                ]}
              />
            </div>
            <Prose callout className="mt-8">
              Guardrails didn't slow the team down. They made speed safe.
            </Prose>
          </Section>
        </Reveal>

        {/* 10 — Design Office Hours */}
        <Reveal>
          <Section>
            <Beat eyebrow="Design Office Hours" color="var(--icon-blue)">Design Office Hours became the review PMs actually wanted.</Beat>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-2/design-office-hours-quality-backbone.webp"
                alt="Diagram: a PM prototype, built with AI and explored freely, goes through system review, behaviour review and edge case review, leading to a decision to proceed to engineering, iterate, or escalate for deeper design involvement"
              />
            </div>
            <div className="mt-8">
              <InsightStatement color="var(--icon-blue)">
                We weren't reviewing pixels. We were reviewing readiness.
              </InsightStatement>
            </div>
            <Prose className="mt-6">
              <p className="text-center max-w-xl mx-auto">
                Office Hours were a lightweight readiness mechanism, not a
                design review ceremony. Each session reviewed an interactive
                prototype duplicated from the master, not a static spec, and
                asked the same four questions: does the idea fit the system,
                does the behaviour make sense, are the important edge cases
                considered, and is it ready for the next stage.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 11 — AI as leverage: heading → narrative → flow diagram → screenshot → takeaway */}
        <Reveal>
          <Section>
            <Beat eyebrow="AI as leverage" color="var(--icon-purple)">AI became the exploration engine, not the decision-maker.</Beat>
            <Prose className="mt-5">
              <p className="max-w-2xl">
                Vibe coding let PMs turn an idea into something clickable in
                minutes instead of waiting for a design slot. But a fast
                prototype and a good decision are different things.
              </p>
            </Prose>
            <div className="rounded-2xl border border-border p-6 md:p-8 mt-8">
              <div className="grid sm:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-center mb-4" style={{ color: 'var(--icon-purple)' }}>
                    AI-powered exploration
                  </p>
                  <div className="flex flex-col items-center gap-1.5">
                    <FlowNode icon={Lightbulb} label="Prompt" color="var(--icon-orange)" />
                    <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    <FlowNode icon={Sparkles} label="Vibe code" color="var(--icon-purple)" />
                    <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    <FlowNode icon={Eye} label="Explore" color="var(--icon-purple)" />
                  </div>
                </div>
                <div className="flex sm:flex-col items-center justify-center py-2" aria-hidden="true">
                  <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 sm:rotate-0" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-center mb-4" style={{ color: 'var(--icon-blue)' }}>
                    Governed by the system
                  </p>
                  <div className="flex flex-col items-center gap-1.5">
                    <FlowNode icon={UsersIcon} label="Design review" color="var(--icon-blue)" />
                    <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    <FlowNode icon={RefreshCw} label="Refine" color="var(--icon-blue)" />
                    <ArrowDown className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                    <FlowNode icon={ShieldCheck} label="System-correct direction" color="var(--icon-green)" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-2/mobile-controls.webp"
                alt="Figma Make AI chat panel describing a CAPTCHA feature build, next to the resulting working CAPTCHA modal prototype in the Family Safety portal"
                caption="A real working session inside the master prototype: an AI chat panel specifying a CAPTCHA step, iterated over multiple versions, next to the modal it produced."
              />
            </div>
            <div className="mt-8">
              <InsightStatement color="var(--icon-purple)">
                Vibe coding wasn't the deliverable. It was the exploration engine.
              </InsightStatement>
            </div>
            <Prose className="mt-4">
              <p className="text-center max-w-xl mx-auto">
                AI accelerated making. Design leadership determined direction,
                quality, governance and what moved forward.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 12 — From one prototype to many explorations */}
        <Reveal>
          <Section>
            <Beat eyebrow="Ideation to prototype" color="var(--icon-blue)">I didn't just create a prototype. I created the runway.</Beat>
            <Prose className="mt-5">
              <p className="max-w-2xl">
                The master prototype used approved components and tokens
                only, Fluent-aligned interaction patterns, realistic edge
                cases and states (error, blocked, pending), and complete
                end-to-end portal flows, so any copy PMs made started from
                something already correct.
              </p>
            </Prose>
            <div className="mt-8">
              <ImageBlock
                src="/images/casestudy-2/master-prototype-many-explorations.webp"
                alt="Diagram: the master prototype, a system foundation built and maintained by Design with components, tokens, patterns, behaviour, edge states and complete flows, gets duplicated via make a copy into many independent PM explorations, each free to explore within the system"
              />
            </div>
            <div className="mt-6">
              <ImageBlock
                src="/images/casestudy-2/portal-overview.webp"
                alt="Family Safety Portal overview interface, the master prototype PMs copied from"
                caption="The master prototype PMs copied from to start each exploration."
              />
            </div>
            <p className="text-center text-xl font-bold text-foreground mt-8">
              One master. Many explorations — without depending on one designer for every one of them.
            </p>
          </Section>
        </Reveal>

        {/* 13 — What changed for the team, plus outcome */}
        <Reveal>
          <Section>
            <Beat eyebrow="What changed for the team" color="var(--icon-orange)">Design's role shifted. Its importance didn't.</Beat>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {[
                { from: 'Pixel maker', to: 'System steward', icon: ShieldCheck, color: 'var(--icon-blue)' },
                { from: 'Gatekeeper', to: 'Enabler', icon: Sparkles, color: 'var(--icon-orange)' },
                { from: 'Reviewer', to: 'Quality architect', icon: Target, color: 'var(--icon-purple)' },
              ].map((t) => (
                <div
                  key={t.from}
                  className="rounded-xl border bg-muted/30 p-5 text-center"
                  style={{ borderColor: `color-mix(in srgb, ${t.color} 25%, var(--border))` }}
                >
                  <t.icon className="w-5 h-5 mx-auto mb-2" style={{ color: t.color }} aria-hidden="true" />
                  <p className="text-muted-foreground text-sm">{t.from}</p>
                  <ArrowDown className="w-4 h-4 mx-auto my-2 text-muted-foreground" aria-hidden="true" />
                  <p className="font-bold text-foreground">{t.to}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--icon-green)' }}>
                Outcome
              </p>
              <Prose>
                <p className="max-w-2xl">
                  The workflow redistributed exploration capacity rather than
                  making the designer work faster. Design-request throughput
                  moved from roughly one to roughly three every two weeks,
                  other teams adopted the same workflow for their own concept
                  exploration and prototyping, and the PM prototypes reaching
                  Design Office Hours kept arriving more refined and closer to
                  the expected standard.
                </p>
              </Prose>
            </div>
          </Section>
        </Reveal>

        {/* 14 — Artifacts, quiet and editorial */}
        <Reveal>
          <Section>
            <Beat eyebrow="Reference" color="var(--icon-blue)">Artifacts</Beat>
            <div className="rounded-2xl border border-border p-2 space-y-1 mt-8">
              {[
                { title: 'Ideation to Prototype workflow (Master)', file: 'Master workflow documentation for the Ideation to Prototype process', color: 'var(--icon-blue)', href: '/work/family-safety/ideation-to-prototype-workflow' },
                { title: 'PM checklist', file: 'Step-by-step checklist guiding PM-led exploration', color: 'var(--icon-orange)', href: '/work/family-safety/pm-checklist' },
                { title: 'Design Office Hours documentation', file: 'Quality gate governance and review process', color: 'var(--icon-blue)', href: '/work/family-safety/design-office-hours' },
                { title: 'Engineering-readiness framework', file: 'Specification completeness and handoff planning', color: 'var(--icon-teal)', href: '/work/family-safety/engineering-readiness-framework' },
                { title: 'Family Safety master prototype', file: 'Interactive Figma Make prototype', color: 'var(--icon-purple)', href: MASTER_PROTOTYPE_URL },
              ].map((artifact) => (
                <a
                  key={artifact.title}
                  href={artifact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-3 flex items-start gap-3 hover:bg-accent/50 transition-colors"
                >
                  <FileText className="w-4 h-4 shrink-0 mt-0.5" style={{ color: artifact.color }} />
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{artifact.title}</p>
                    <p className="text-sm text-muted-foreground">{artifact.file}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href={MASTER_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ className: 'w-full sm:w-auto justify-center' })}
              >
                Try the master prototype
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Section>
        </Reveal>

        {/* 15 — Closing */}
        <Reveal>
          <Takeaway
            supporting={
              <>
                The future of Design is not doing all the design. It is creating the
                conditions for more people to design well.
              </>
            }
          >
            Design shouldn't be the bottleneck. Quality shouldn't be optional.
          </Takeaway>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="family-safety" />
        </Reveal>
      </div>
    </div>
  );
}

export { FamilySafetyPage };
