import {
  Zap,
  Shield,
  Users as UsersIcon,
  Workflow,
  Lightbulb,
  FileText,
  Target,
  GitBranch,
  CircleCheckBig,
  ArrowRight,
  ArrowDown,
  ArrowUpCircle,
  ExternalLink,
  Sparkles,
  Eye,
  Cog,
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

/** The signature operating-model diagram: a linear chain that opens into three decision branches, one of which continues to Engineering. */
function OperatingModelDiagram() {
  return (
    <div>
      <FlowChain
        steps={[
          { icon: Lightbulb, label: 'Idea', color: 'var(--icon-orange)' },
          { icon: Sparkles, label: 'AI / Vibe code', color: 'var(--icon-purple)' },
          { icon: Eye, label: 'Explore', color: 'var(--icon-purple)' },
          { icon: UsersIcon, label: 'Design Office Hours', color: 'var(--icon-blue)' },
        ]}
      />
      <div className="flex justify-center my-2">
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex justify-center">
        <FlowNode icon={Target} label="Decision" color="var(--icon-blue)" />
      </div>
      <div className="relative mt-2 pt-6">
        <div className="hidden sm:block absolute top-0 left-1/6 right-1/6 border-t-2 border-border" style={{ left: '16.66%', right: '16.66%' }} />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-2">
            <div className="hidden sm:block w-px h-4 -mt-4 bg-border" />
            <FlowNode icon={CircleCheckBig} label="Proceed" sublabel="Ready to build" color="var(--icon-green)" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="hidden sm:block w-px h-4 -mt-4 bg-border" />
            <FlowNode icon={RefreshCw} label="Iterate" sublabel="Back to explore" color="var(--icon-orange)" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="hidden sm:block w-px h-4 -mt-4 bg-border" />
            <FlowNode icon={ArrowUpCircle} label="Escalate" sublabel="Needs a bigger call" color="var(--icon-red)" />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </div>
      <div className="flex justify-center">
        <FlowNode icon={Workflow} label="Engineering" color="var(--icon-teal)" />
      </div>
    </div>
  );
}

/** Three stacked, connected layers forming one capability. */
function LayerStack({ layers }: { layers: { number: string; icon: IconComponent; title: string; description: string; color: string }[] }) {
  return (
    <div className="space-y-2">
      {layers.map((layer, i) => (
        <div key={layer.title}>
          <div className="rounded-xl border-2 p-4 flex items-center gap-4" style={{ borderColor: layer.color, backgroundColor: `color-mix(in srgb, ${layer.color} 6%, transparent)` }}>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold shrink-0" style={{ backgroundColor: layer.color }}>
              {layer.number}
            </span>
            <layer.icon className="w-6 h-6 shrink-0" style={{ color: layer.color }} />
            <div>
              <p className="font-bold text-foreground">{layer.title}</p>
              <p className="text-muted-foreground text-sm">{layer.description}</p>
            </div>
          </div>
          {i < layers.length - 1 && (
            <div className="flex justify-center py-1">
              <span className="text-lg text-muted-foreground leading-none">+</span>
            </div>
          )}
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
            <div className="mt-6 space-y-2">
              <FlowChain
                steps={[
                  { icon: Boxes, label: 'Multiple platforms', sublabel: 'Frequent incremental changes', color: 'var(--icon-blue)' },
                  { icon: UsersIcon, label: 'Team velocity', sublabel: 'Growing', color: 'var(--icon-orange)' },
                  { icon: Eye, label: 'Exploration demand', sublabel: 'Rising', color: 'var(--icon-purple)' },
                ]}
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="rounded-xl border border-border p-5">
                <UsersIcon className="w-5 h-5 mb-2" style={{ color: 'var(--icon-orange)' }} />
                <p className="font-bold text-foreground">PM</p>
                <p className="text-muted-foreground text-sm mt-1">Needs to explore independently.</p>
              </div>
              <div className="rounded-xl border border-border p-5">
                <Shield className="w-5 h-5 mb-2" style={{ color: 'var(--icon-blue)' }} />
                <p className="font-bold text-foreground">Design</p>
                <p className="text-muted-foreground text-sm mt-1">Needs to protect system quality.</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ color: 'var(--icon-red)', backgroundColor: 'color-mix(in srgb, var(--icon-red) 10%, transparent)' }}>
                Exploration wait
              </span>
              <span className="text-muted-foreground text-sm font-medium">vs</span>
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ color: 'var(--icon-orange)', backgroundColor: 'color-mix(in srgb, var(--icon-orange) 10%, transparent)' }}>
                Quality drift
              </span>
            </div>
          </Section>
        </Reveal>

        {/* 02 The AI shift */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The tension" color="var(--icon-purple)">AI made prototyping faster. It also made inconsistency easier.</Beat>
            <div className="mt-6">
              <BeforeAfter
                color="var(--icon-orange)"
                before={
                  <>
                    <FlowChain steps={[
                      { icon: Lightbulb, label: 'PM idea', color: 'var(--icon-orange)' },
                      { icon: UsersIcon, label: 'Design queue', color: 'var(--icon-blue)' },
                      { icon: Workflow, label: 'Prototype', color: 'var(--icon-blue)' },
                      { icon: Workflow, label: 'Engineering', color: 'var(--icon-teal)' },
                    ]} />
                    <p className="text-center text-sm font-semibold mt-4" style={{ color: 'var(--icon-red)' }}>Problem: exploration wait</p>
                  </>
                }
                after={
                  <>
                    <FlowChain steps={[
                      { icon: Lightbulb, label: 'PM idea', color: 'var(--icon-orange)' },
                      { icon: Sparkles, label: 'AI / vibe code', color: 'var(--icon-purple)' },
                      { icon: Workflow, label: 'Working prototype', color: 'var(--icon-purple)' },
                      { icon: ArrowUpCircle, label: 'System divergence', color: 'var(--icon-red)' },
                    ]} />
                    <p className="text-center text-sm font-semibold mt-4" style={{ color: 'var(--icon-orange)' }}>Problem: quality drift</p>
                  </>
                }
              />
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
              <BeforeAfter
                color="var(--icon-blue)"
                before={
                  <FlowChain steps={[
                    { icon: Lightbulb, label: 'PM', color: 'var(--icon-orange)' },
                    { icon: Shield, label: 'Design', color: 'var(--icon-blue)' },
                    { icon: Workflow, label: 'Prototype', color: 'var(--icon-blue)' },
                    { icon: Workflow, label: 'Engineering', color: 'var(--icon-teal)' },
                  ]} />
                }
                after={<OperatingModelDiagram />}
              />
            </div>
          </Section>
        </Reveal>

        {/* 05 Ownership model, compact */}
        <Reveal>
          <Section title="">
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
              <FlowNode icon={Lightbulb} label="PM" sublabel="Explore" color="var(--icon-orange)" />
              <FlowNode icon={Shield} label="Design" sublabel="Curate" color="var(--icon-blue)" />
              <FlowNode icon={Workflow} label="Engineering" sublabel="Build" color="var(--icon-teal)" />
            </div>
            <p className="text-center text-xl font-bold text-foreground mt-6">
              Exploration became distributed. Quality stayed owned.
            </p>
          </Section>
        </Reveal>

        {/* 06 Three-layer model */}
        <Reveal>
          <Section title="">
            <Beat eyebrow="The model" color="var(--icon-purple)">The model had three layers.</Beat>
            <div className="mt-6 max-w-lg mx-auto">
              <LayerStack
                layers={[
                  { number: '01', icon: Sparkles, title: 'Capability', description: 'AI-assisted exploration', color: 'var(--icon-purple)' },
                  { number: '02', icon: Boxes, title: 'System', description: 'System-correct Family Safety master prototype', color: 'var(--icon-blue)' },
                  { number: '03', icon: Cog, title: 'Operating model', description: 'Design Office Hours and governance', color: 'var(--icon-teal)' },
                ]}
              />
            </div>
            <div className="flex justify-center my-3">
              <span className="text-lg text-muted-foreground leading-none">=</span>
            </div>
            <div className="max-w-xs mx-auto">
              <FlowNode icon={ShieldCheck} label="Scalable design exploration" color="var(--icon-green)" />
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
            <div className="mt-6 max-w-md mx-auto space-y-2">
              <FlowNode icon={Boxes} label="Master prototype" color="var(--icon-blue)" />
              <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-muted-foreground" /></div>
              <div className="rounded-xl border border-border bg-muted/20 p-4 text-center">
                <p className="font-bold text-foreground text-sm mb-1">System foundation</p>
                <p className="text-muted-foreground text-xs">Components · Tokens · Patterns · Behaviour · Edge states · Complete flows</p>
              </div>
              <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-muted-foreground" /></div>
              <FlowNode icon={GitBranch} label="Make a copy" color="var(--icon-purple)" />
              <div className="flex justify-center"><ArrowDown className="w-4 h-4 text-muted-foreground" /></div>
              <FlowNode icon={Lightbulb} label="PM exploration" color="var(--icon-orange)" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <ImageBlock src="/images/casestudy-2/portal-overview.webp" alt="Family Safety Portal overview interface, part of the system-correct master prototype" />
              <ImageBlock src="/images/casestudy-2/portal-dashboard.webp" alt="Family Safety Portal dashboard with make a copy and share actions" caption="Make a copy of the prototype and start exploring" />
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
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['Components', 'Tokens', 'Patterns', 'Behaviour', 'Edge states', 'Complete flows'].map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-full text-sm font-medium border border-border text-foreground">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex justify-center my-3">
              <ArrowDown className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="max-w-xs mx-auto">
              <FlowNode icon={ShieldCheck} label="System-correct prototype" color="var(--icon-teal)" />
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
              <FlowChain
                steps={[
                  { icon: Lightbulb, label: 'PM prototype', color: 'var(--icon-orange)' },
                  { icon: Boxes, label: 'System review', color: 'var(--icon-blue)' },
                  { icon: Eye, label: 'Behaviour review', color: 'var(--icon-blue)' },
                  { icon: Shield, label: 'Edge case review', color: 'var(--icon-blue)' },
                  { icon: Target, label: 'Decision', color: 'var(--icon-teal)' },
                ]}
              />
            </div>
            <p className="text-center text-lg font-semibold text-foreground mt-6">
              We weren't reviewing pixels. We were reviewing readiness.
            </p>
            <Prose>
              <p className="text-center max-w-xl mx-auto">
                Office Hours were a lightweight readiness mechanism, not a design
                crit. Each session asked the same four questions: does the idea fit
                the system, does the behaviour make sense, are the important edge
                cases considered, and is it ready for the next stage.
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
              <FlowChain
                steps={[
                  { icon: Boxes, label: 'Master prototype', color: 'var(--icon-blue)' },
                  { icon: FileText, label: 'PM checklist', color: 'var(--icon-orange)' },
                  { icon: UsersIcon, label: 'Design Office Hours', color: 'var(--icon-blue)' },
                  { icon: FileText, label: 'Engineering checklist', color: 'var(--icon-teal)' },
                ]}
              />
            </div>
            <div className="flex justify-center my-3">
              <ArrowDown className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="max-w-xs mx-auto">
              <FlowNode icon={Cog} label="Design operating system" color="var(--icon-green)" />
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
              <p className="text-center max-w-xl mx-auto">
                More people could explore. Design still owned quality. Engineering
                received clearer signals.
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
            <div className="flex flex-wrap gap-3">
              {[
                { title: 'Ideation to Prototype workflow', color: 'var(--icon-blue)' },
                { title: 'PM checklist', color: 'var(--icon-orange)' },
                { title: 'Design Office Hours documentation', color: 'var(--icon-blue)' },
                { title: 'Engineering checklist', color: 'var(--icon-teal)' },
              ].map((artifact) => (
                <span key={artifact.title} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border border-border text-foreground">
                  <FileText className="w-3.5 h-3.5" style={{ color: artifact.color }} />
                  {artifact.title}
                </span>
              ))}
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
