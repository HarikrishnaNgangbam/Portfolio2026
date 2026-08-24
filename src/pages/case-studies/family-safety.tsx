import {
  Zap,
  Shield,
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
  Image as ImageIcon,
  Boxes,
  ShieldCheck,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { Beat } from '@/components/casestudy/beat';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { ImageBlock } from '@/components/casestudy/image-block';
import { buttonVariants } from '@/design-system/ui/button';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import type { IconComponent } from '@/lib/utils';

const MASTER_PROTOTYPE_URL = 'https://familysafetyproto.figma.site/';

/** A single node used inside FlowChain / branch diagrams: icon, label, optional sublabel. */
function FlowNode({ icon: Icon, label, sublabel, color = 'var(--icon-blue)', tone = 'default' }: { icon: IconComponent; label: string; sublabel?: string; color?: string; tone?: 'default' | 'muted' }) {
  return (
    <div
      className="rounded-xl border p-3 text-center min-w-[7rem]"
      style={tone === 'default' ? { borderColor: color, backgroundColor: `color-mix(in srgb, ${color} 6%, transparent)` } : undefined}
    >
      <Icon className="w-5 h-5 mx-auto mb-1.5" style={{ color: tone === 'default' ? color : undefined }} />
      <p className="text-foreground text-xs font-semibold leading-tight">{label}</p>
      {sublabel && <p className="text-muted-foreground text-[11px] mt-0.5 leading-tight">{sublabel}</p>}
    </div>
  );
}

/**
 * A sequence of nodes connected by arrows. Wraps onto new lines whenever the
 * container is too narrow for one row (a full-width section, a half-width
 * Before/After column, a phone screen) rather than overflowing its
 * container, which is what actually breaks a layout instead of just looking
 * tight.
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

/** Before/after pair, stacked with a transformation arrow on mobile, side by side on desktop. */
function BeforeAfter({ before, after, color }: { before: React.ReactNode; after: React.ReactNode; color: string }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 items-stretch">
      <div className="rounded-xl border border-border p-5">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Before</p>
        {before}
      </div>
      <div className="rounded-xl border-2 p-5" style={{ borderColor: color, backgroundColor: `color-mix(in srgb, ${color} 6%, transparent)` }}>
        <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color }}>After</p>
        {after}
      </div>
    </div>
  );
}

/** Polished placeholder for a screenshot that doesn't exist yet, naming exactly what belongs there so the layout never needs to change when it's added. */
function ScreenPlaceholder({ label, insert, aspect = 'video' }: { label: string; insert: string; aspect?: 'video' | 'wide' }) {
  return (
    <div className={`rounded-2xl border-2 border-dashed border-border bg-muted/20 flex flex-col items-center justify-center text-center p-8 ${aspect === 'wide' ? 'aspect-[21/9]' : 'aspect-video'}`}>
      <ImageIcon className="w-7 h-7 text-muted-foreground/40 mb-3" aria-hidden="true" />
      <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">{label}</p>
      <p className="text-sm text-muted-foreground max-w-sm">{insert}</p>
    </div>
  );
}

function FamilySafetyPage() {
  return (
    <div className="pb-20">
      <Seo
        title="Family Safety"
        description="A design leadership case study: redesigning the operating model around AI-assisted exploration so PMs could explore independently while design retained quality ownership."
      />
      <CaseStudyHero
        breadcrumbLabel="Family Safety Design System"
        badges={['Design Systems & Operations']}
        title="Family Safety: Scaling Design Exploration Through Vibe Coding"
        subtitle="Design shouldn't be the bottleneck. Quality shouldn't be optional."
        meta={[
          { label: 'Role', value: 'Design Lead' },
          { label: 'Timeline', value: 'Dec 2025' },
          { label: 'Team', value: 'Cross-functional' },
          { label: 'Scope', value: 'Family Safety Portal' },
        ]}
        coverImage="/images/shared/project-family-safety-cover.webp"
        coverAlt="Family Safety app interface with collaborative team environment"
        iconFlow={[
          { icon: Lightbulb, color: 'var(--icon-orange)' },
          { icon: ArrowRight, color: 'var(--icon-pink)' },
          { icon: Workflow, color: 'var(--icon-blue)' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        {/* 01 Overview: the scale problem */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Overview" color="var(--icon-blue)">Family Safety was becoming a scale problem.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/family-safety-scale-problem.webp" alt="Diagram: multiple platforms, surfaces and frequent incremental changes increased exploration demand, creating tension between PMs needing to explore independently and Design needing to protect system quality, resulting in exploration wait and quality drift" />
            </div>
            <Prose>
              <p className="text-center max-w-2xl mx-auto">
                Family Safety spans multiple platforms and surfaces, and needs
                frequent incremental changes. As the team grew, PMs waited on
                designer availability to explore ideas, and the PM-created
                prototypes that did get built often diverged from system
                components, creating downstream rework. Rather than gatekeeping
                exploration, I led the{' '}
                <strong className="text-foreground">Ideation to Prototype initiative</strong>,
                a design-led governance model that let PMs prototype
                independently while Design kept quality ownership.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 02 The AI shift */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The tension" color="var(--icon-purple)">AI made prototyping faster. It also made inconsistency easier.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/two-bottlenecks-dual-challenge.webp" alt="Diagram comparing the before state (PM idea, design queue, prototype, engineering, bottleneck: exploration wait) with AI-assisted exploration (PM idea, AI or vibe code, working prototype, system divergence, bottleneck: quality drift)" />
            </div>
            <Prose>
              <p className="text-center max-w-xl mx-auto">
                AI removed one bottleneck. It introduced another. The problem was never
                AI itself. It was the absence of a scalable quality model around
                AI-assisted exploration.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 03 Two bottlenecks, transition statement */}
        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 text-center">
            <p className="text-xl md:text-2xl font-bold text-foreground max-w-xl mx-auto leading-snug">
              The problem wasn't speed. The problem was how to scale quality with
              speed.
            </p>
          </div>
        </Reveal>

        {/* 04 Leadership move */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The leadership move" color="var(--icon-blue)">Instead of gatekeeping exploration, I redesigned the gate.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/leadership-move-redesign-the-gate.webp" alt="Diagram comparing the old model, where Design was the bottleneck between PM idea and Engineering, with the new model, where PM idea flows through AI or vibe code, free exploration and Design Office Hours as a quality gate before proceed, iterate or escalate, then Engineering" />
            </div>
            <Prose>
              <p className="text-center max-w-2xl mx-auto">
                I defined the Ideation to Prototype workflow and its decision
                checkpoints, led the rebuild of the Family Safety Portal master
                prototype as a system-correct, vibe-coded foundation, and
                established Design Office Hours as the formal quality gate.
                Exploration became distributed. Quality stayed owned.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 06 Three-layer model */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The model" color="var(--icon-purple)">The model had three layers.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/three-layer-design-model.webp" alt="Diagram of three layers working together: capability (AI-assisted exploration, vibe coding), system (system-correct Family Safety master prototype), and operating model (Design Office Hours plus governance), together enabling scalable design exploration" />
            </div>
          </Section>
        </Reveal>

        {/* 07 AI as the exploration engine */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="AI's role" color="var(--icon-purple)">AI became the exploration engine.</Beat>
            <div className="grid md:grid-cols-2 gap-6 items-center mt-6">
              <FlowChain
                steps={[
                  { icon: Lightbulb, label: 'Prompt', color: 'var(--icon-orange)' },
                  { icon: Sparkles, label: 'Vibe code', color: 'var(--icon-purple)' },
                  { icon: Eye, label: 'Explore', color: 'var(--icon-purple)' },
                  { icon: UsersIcon, label: 'Design review', color: 'var(--icon-blue)' },
                  { icon: RefreshCw, label: 'Refine', color: 'var(--icon-blue)' },
                  { icon: ShieldCheck, label: 'System-correct direction', color: 'var(--icon-green)' },
                ]}
              />
              <ImageBlock
                src="/images/casestudy-2/settings-edge-cases.webp"
                alt="Figma Make prompt panel and vibe-coded CAPTCHA modal output, an example of AI-assisted exploration"
              />
            </div>
            <p className="text-center text-lg font-semibold text-foreground mt-6">
              Vibe coding wasn't the deliverable. It was the exploration engine.
            </p>
          </Section>
        </Reveal>

        {/* 08 Master prototype */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The master prototype" color="var(--icon-blue)">I didn't just create a prototype. I created the runway.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/master-prototype-many-explorations.webp" alt="Diagram: the master prototype, a system foundation built and maintained by Design with components, tokens, patterns, behaviour, edge states and complete flows, gets duplicated via make a copy into many independent PM explorations, each free to explore within the system" />
            </div>

            <Prose>
              <p className="text-center max-w-2xl mx-auto">
                The master prototype used approved components and tokens only,
                Fluent-aligned interaction patterns, realistic edge cases and
                states (error, blocked, pending), and complete end-to-end
                portal flows, so any copy PMs made started from something
                already correct.
              </p>
            </Prose>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <ImageBlock src="/images/casestudy-2/portal-overview.webp" alt="Family Safety Portal overview interface, part of the system-correct master prototype" />
              <ImageBlock src="/images/casestudy-2/portal-dashboard.webp" alt="Family Safety Portal dashboard with make a copy and share actions" caption="Make a copy of the prototype and start exploring" />
              <ImageBlock src="/images/casestudy-2/mobile-controls.webp" alt="Family Safety mobile app controls and settings interface, part of the master prototype" />
            </div>

            <p className="text-center text-xl font-bold text-foreground mt-8">
              One master. Many explorations.
            </p>
            <div className="text-center mt-4">
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

        {/* 09 System correctness + guardrails */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="System correctness" color="var(--icon-teal)">System quality isn't just pixels. It's behaviour.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/system-correctness-more-than-pixels.webp" alt="Diagram: components, tokens, patterns, behaviour, edge states and complete flows all feed into a system-correct prototype that looks right, behaves right and holds up in the real world" />
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <FlowChain
                steps={[
                  { icon: Boxes, label: 'Master prototype', color: 'var(--icon-blue)' },
                  { icon: FileText, label: 'PM checklist', color: 'var(--icon-orange)' },
                  { icon: UsersIcon, label: 'Design review', color: 'var(--icon-blue)' },
                  { icon: FileText, label: 'Engineering checklist', color: 'var(--icon-teal)' },
                ]}
              />
              <div className="flex justify-center my-3">
                <ArrowDown className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="max-w-xs mx-auto">
                <FlowNode icon={Shield} label="Quality guardrails" color="var(--icon-green)" />
              </div>
              <p className="text-center text-lg font-semibold text-foreground mt-6">
                Guardrails didn't slow the team down. They made speed safe.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* 10 Design Office Hours */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The quality backbone" color="var(--icon-blue)">Design Office Hours became the quality backbone.</Beat>
            <div className="mt-6">
              <ImageBlock
                heading="Design Office Hours in action"
                src="/images/casestudy-2/design-office-hours.webp"
                alt="Team collaborating during a Design Office Hours review session"
              />
            </div>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/design-office-hours-quality-backbone.webp" alt="Diagram: a PM prototype, built with AI and explored freely, goes through system review, behaviour review and edge case review, leading to a decision to proceed to engineering, iterate, or escalate for deeper design involvement" />
            </div>
            <p className="text-center text-lg font-semibold text-foreground mt-6">
              We weren't reviewing pixels. We were reviewing readiness.
            </p>
            <Prose>
              <p className="text-center max-w-xl mx-auto">
                Office Hours were a lightweight readiness mechanism, not a design
                crit. Each session reviewed an interactive prototype duplicated
                from the master, not a static spec, and asked the same four
                questions: does the idea fit the system, does the behaviour make
                sense, are the important edge cases considered, and is it ready
                for the next stage.
              </p>
            </Prose>
            <div className="mt-6">
              <ScreenPlaceholder
                label="FS_BEFORE_AFTER"
                insert="Insert: before and after showing how a PM exploration was refined through a Design Office Hours review."
                aspect="wide"
              />
            </div>
          </Section>
        </Reveal>

        {/* 11 Governance */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Governance" color="var(--icon-teal)">Governance became a multiplier, not a gate.</Beat>
            <div className="mt-6">
              <ImageBlock src="/images/casestudy-2/governance-ownership-transformation.webp" alt="Diagram: the master prototype, PM checklist, Design Office Hours and engineering checklist feed into one design operating system, which distributes ownership so PMs explore, Design curates system quality and readiness, and Engineering builds and scales" />
            </div>
            <p className="text-center text-muted-foreground mt-4 max-w-lg mx-auto">
              Governance created autonomy. It did not remove it.
            </p>
          </Section>
        </Reveal>

        {/* 12 Team enablement (merged with democratize exploration) */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Team enablement" color="var(--icon-orange)">
              The biggest change wasn't what Design produced. It was what the team
              could now do without Design.
            </Beat>
            <div className="mt-6">
              <BeforeAfter
                color="var(--icon-orange)"
                before={
                  <div className="space-y-3">
                    <div><p className="font-semibold text-foreground text-sm">PM</p><p className="text-muted-foreground text-sm">Wait for Design</p></div>
                    <div><p className="font-semibold text-foreground text-sm">Design</p><p className="text-muted-foreground text-sm">Pixel production</p></div>
                    <div><p className="font-semibold text-foreground text-sm">Engineering</p><p className="text-muted-foreground text-sm">Interpretation</p></div>
                  </div>
                }
                after={
                  <div className="space-y-3">
                    <div><p className="font-semibold text-foreground text-sm">PM</p><p className="text-muted-foreground text-sm">Explore</p></div>
                    <div><p className="font-semibold text-foreground text-sm">Design</p><p className="text-muted-foreground text-sm">System stewardship</p></div>
                    <div><p className="font-semibold text-foreground text-sm">Engineering</p><p className="text-muted-foreground text-sm">Build</p></div>
                  </div>
                }
              />
            </div>
            <p className="text-center text-xl font-bold text-foreground mt-6">
              Design didn't become less important. Design became more leveraged.
            </p>
          </Section>
        </Reveal>

        {/* 13 Impact, directional only */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Impact" color="var(--icon-green)">Directional impact, not invented metrics.</Beat>
            <IconCardList
              columns={3}
              items={[
                { icon: Zap, iconColor: 'var(--icon-orange)', title: 'Velocity', description: 'Exploration moved earlier, unblocked by design availability.' },
                { icon: Shield, iconColor: 'var(--icon-blue)', title: 'Quality', description: 'Quality moved upstream, caught before engineering handoff.' },
                { icon: UsersIcon, iconColor: 'var(--icon-green)', title: 'Team', description: 'Design capability spread beyond the design team.' },
              ]}
            />
            <Prose>
              <p className="text-center max-w-2xl mx-auto">
                More people could explore. Design still owned quality. Engineering
                received clearer signals. The master prototype became a reusable
                design foundation that PMs, engineers and designers referenced in
                planning, reviews and crits well beyond the initiative itself,
                and it turned a one-time cleanup into a governance model that
                could keep scaling as the team grew.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 14 Final transformation diagram */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Transformation" color="var(--icon-blue)">From a production bottleneck to a capability multiplier.</Beat>
            <div className="mt-6">
              <BeforeAfter
                color="var(--icon-blue)"
                before={
                  <FlowChain steps={[
                    { icon: Lightbulb, label: 'Idea', color: 'var(--icon-orange)' },
                    { icon: UsersIcon, label: 'Design queue', color: 'var(--icon-blue)' },
                    { icon: Workflow, label: 'Prototype', color: 'var(--icon-blue)' },
                    { icon: Workflow, label: 'Engineering', color: 'var(--icon-teal)' },
                  ]} />
                }
                after={
                  <FlowChain steps={[
                    { icon: Lightbulb, label: 'Idea', color: 'var(--icon-orange)' },
                    { icon: Sparkles, label: 'AI exploration', color: 'var(--icon-purple)' },
                    { icon: ShieldCheck, label: 'System-correct prototype', color: 'var(--icon-green)' },
                    { icon: UsersIcon, label: 'Design Office Hours', color: 'var(--icon-blue)' },
                    { icon: Workflow, label: 'Engineering', color: 'var(--icon-teal)' },
                  ]} />
                }
              />
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
              <span className="text-muted-foreground text-sm font-medium">Design capacity:</span>
              <span className="px-3 py-1.5 rounded-full text-sm font-semibold" style={{ color: 'var(--icon-red)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 10%, transparent)' }}>
                Bottleneck
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
              <span className="px-3 py-1.5 rounded-full text-sm font-semibold" style={{ color: 'var(--icon-green)', backgroundColor: 'color-mix(in srgb, var(--icon-green) 10%, transparent)' }}>
                Multiplier
              </span>
            </div>
          </Section>
        </Reveal>

        {/* 15 Leadership reflection */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="Leadership" color="var(--icon-purple)">I didn't scale Design by doing more design.</Beat>
            <p className="text-xl font-semibold text-foreground mt-2">
              I scaled Design by increasing the team's ability to design well.
            </p>
            <Prose>
              <p className="max-w-2xl">
                By pairing vibe coding with system discipline, creativity was
                democratized, quality stayed protected, and the team could move
                faster with confidence instead of ambiguity. This was a leadership
                problem, not an execution one, and the solution was a system, not a
                deliverable.
              </p>
            </Prose>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              {[
                { from: 'Pixel maker', to: 'System steward' },
                { from: 'Design gate', to: 'Quality governor' },
                { from: 'Individual output', to: 'Team capability' },
              ].map((t) => (
                <div key={t.from} className="rounded-xl border border-border p-4 text-center">
                  <p className="text-muted-foreground text-sm">{t.from}</p>
                  <ArrowDown className="w-4 h-4 mx-auto my-1.5 text-muted-foreground" />
                  <p className="font-bold text-foreground text-sm">{t.to}</p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        {/* Artifacts, condensed */}
        <Reveal>
          <Section title="Artifacts">
            <div className="rounded-2xl border border-border p-2 space-y-1">
              {[
                { title: 'Ideation to Prototype workflow (Master)', file: 'Family Safety: Ideation to Prototype Workflow (Master).page', color: 'var(--icon-blue)' },
                { title: 'PM checklist', file: 'PM Checklist: Ideation to Prototype.loop', color: 'var(--icon-orange)' },
                { title: 'Design Office Hours documentation', file: 'Quality gate governance and review process', color: 'var(--icon-blue)' },
                { title: 'Engineering checklist', file: 'Quality gate checklist for engineering handoff', color: 'var(--icon-teal)' },
                { title: 'Family Safety master prototype', file: 'Interactive Figma Make prototype', color: 'var(--icon-purple)', href: MASTER_PROTOTYPE_URL },
              ].map((artifact) =>
                artifact.href ? (
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
                ) : (
                  <div key={artifact.title} className="rounded-lg p-3 flex items-start gap-3">
                    <FileText className="w-4 h-4 shrink-0 mt-0.5" style={{ color: artifact.color }} />
                    <div>
                      <p className="font-medium text-foreground text-sm">{artifact.title}</p>
                      <p className="text-sm text-muted-foreground">{artifact.file}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Section>
        </Reveal>

        {/* Closing */}
        <Reveal>
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto leading-snug">
              Design shouldn't be the bottleneck. Quality shouldn't be optional.
            </p>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              The future of Design is not doing all the design. It is creating the
              conditions for more people to design well.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="family-safety" />
        </Reveal>
      </div>
    </div>
  );
}

export { FamilySafetyPage };
