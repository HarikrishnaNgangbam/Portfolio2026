import {
  Zap,
  Shield,
  X,
  Users as UsersIcon,
  Workflow,
  Lightbulb,
  FileText,
  Target,
  GitBranch,
  CircleCheckBig,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { RoleSection } from '@/components/casestudy/role-section';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { ImageBlock } from '@/components/casestudy/image-block';
import { buttonVariants } from '@/design-system/ui/button';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';

const MASTER_PROTOTYPE_URL = 'https://familysafetyproto.figma.site/';

function FamilySafetyPage() {
  return (
    <div className="pb-20">
      <Seo
        title="Family Safety"
        description="Democratizing early-stage design while maintaining system quality through a design-led governance model."
      />
      <CaseStudyHero
        breadcrumbLabel="Family Safety Design System"
        badges={['Design Systems & Operations']}
        title="Family Safety: Scaling Design Exploration Through Vibe Coding"
        subtitle="Democratizing early-stage design while maintaining system quality through a design-led governance model"
        meta={[
          { label: 'Role', value: 'Design Lead' },
          { label: 'Timeline', value: 'Dec 2025' },
          { label: 'Platform', value: 'Family Safety Portal' },
          { label: 'Status', value: 'Established & Adopted' },
        ]}
        coverImage="/images/shared/project-family-safety-cover.png"
        coverAlt="Family Safety app interface with collaborative team environment"
        iconFlow={[
          { icon: Lightbulb, color: 'var(--icon-orange)' },
          { icon: ArrowRight, color: 'var(--icon-pink)' },
          { icon: Workflow, color: 'var(--icon-blue)' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        <Reveal>
          <Section title="Overview">
            <Prose>
              <p>
                Family Safety spans multiple platforms, surfaces, and requires frequent
                incremental changes. As the team grew and velocity increased, a critical
                tension emerged: PMs needed to explore ideas independently to unblock
                discovery, but early prototypes often diverged from system
                standards—creating downstream rework and eroding design consistency.
              </p>
              <p>
                Rather than gatekeeping exploration, I led the{' '}
                <strong>Ideation → Prototype initiative</strong>—a design-led governance
                model that democratized early-stage prototyping while preserving system
                quality. By pairing vibe coding with system-correct design, I enabled
                PMs to ideate autonomously while Design retained quality ownership.
              </p>
            </Prose>
            <Prose callout>
              The outcome: a recreated end-to-end Family Safety Portal master
              prototype, a formalized workflow for exploration, and a{' '}
              <strong>Design Office Hours (DOH)</strong> governance model that scaled
              design leadership—not by doing more pixels, but by enabling others to
              design well.
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <RoleSection
            title="Design Lead"
            bullets={[
              'Defined the Ideation → Prototype workflow and decision checkpoints',
              'Led the rebuild of the Family Safety Portal master prototype (system-correct, vibe-coded foundation)',
              'Established Design Office Hours (DOH) as a formal quality gate and governance model',
              'Set the operating model: PMs explore → Design curates quality → Engineering builds with confidence',
              'Shifted design focus from pixel production to system stewardship and strategic quality ownership',
            ]}
          />
        </Reveal>

        <Reveal>
          <Section title="Problem">
            <Prose>
              <p>Early exploration consistently broke down in two ways:</p>
            </Prose>
            <IconCardList
              items={[
                { icon: X, iconColor: 'var(--icon-red)', title: 'PMs waited on designer availability', description: 'Discovery was blocked by design resourcing, slowing velocity' },
                { icon: X, iconColor: 'var(--icon-red)', title: 'PM-created prototypes diverged from system components', description: 'Off-system prototyping created downstream rework and eroded design consistency' },
                { icon: X, iconColor: 'var(--icon-red)', title: 'Vibe coding lacked guardrails', description: 'PMs increasingly used AI-assisted prototyping, but without system discipline, quality suffered' },
              ]}
            />
            <CalloutList
              title="This caused:"
              tone="negative"
              items={[
                'Design became a bottleneck during high-velocity phases',
                'Inconsistent prototypes reached engineering, creating rework loops',
                'System quality eroded without clear governance',
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 space-y-6">
            <div>
              <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground mb-2">
                <Shield className="w-6 h-6 text-primary" />
                Design Principle: Democratize Exploration, Protect Quality
              </h3>
              <p className="text-foreground">
                The challenge wasn't whether PMs should prototype—it was how to enable
                it safely, consistently, and at scale.
              </p>
            </div>
            <IconCardList
              columns={2}
              items={[
                {
                  icon: Zap,
                  iconColor: 'var(--icon-orange)',
                  title: 'Enable Speed',
                  bullets: ['PMs can explore independently', 'Vibe coding accelerates prototyping', 'Discovery is unblocked by design capacity'],
                },
                {
                  icon: Shield,
                  iconColor: 'var(--icon-green)',
                  title: 'Protect Quality',
                  bullets: ['System-correct master prototype as single source of truth', 'Design Office Hours as formal quality gate', 'Design retains strategic ownership of quality'],
                },
              ]}
            />
            <CalloutList
              title="This model helped the team:"
              marker="✓"
              items={[
                'Move faster without compromising system integrity',
                'Shift design from pixel production to system stewardship',
                'Reduce downstream rework through upfront quality governance',
              ]}
            />
          </div>
        </Reveal>

        <Reveal>
          <Section title="Solution: Ideation → Prototype Workflow">
            <h3 className="text-xl font-bold text-foreground">The Workflow</h3>
            <StepFlow
              steps={[
                { icon: Target, iconColor: 'var(--icon-blue)', title: 'Ideation Readiness', description: 'Clear problem framing and HMWs' },
                { icon: GitBranch, iconColor: 'var(--icon-purple)', title: 'Explore in a Copy', description: 'PM duplicates the master prototype' },
                { icon: UsersIcon, iconColor: 'var(--icon-green)', title: 'Design Office Hours', description: 'Designer-led system and behavior review' },
                { icon: CircleCheckBig, iconColor: 'var(--icon-orange)', title: 'Decision', description: 'Proceed, Iterate, or Escalate' },
                { icon: Workflow, iconColor: 'var(--icon-pink)', title: 'Execute', description: 'Merge to master, then engineering handoff' },
              ]}
            />
            <div className="text-center">
              <span className={buttonVariants({ className: 'w-full sm:w-auto justify-center' })}>
                View Full Workflow Documentation
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
            <ImageBlock
              heading="Design Office Hours in action"
              src="/images/casestudy-2/design-office-hours.jpg"
              alt="Team collaboration during Design Office Hours"
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Strategy 1: Recreating the Family Safety Portal (System-Correct Master)">
            <Prose>
              <p>
                I led the rebuild of the Family Safety Portal master prototype in
                Figma. While vibe coding accelerated reconstruction, design rigor
                ensured system correctness.
              </p>
            </Prose>

            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <h4 className="flex items-center gap-3 font-bold text-foreground mb-4">
                <FileText className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
                Master Prototype as Single Source of Truth
              </h4>
              <div className="rounded-xl border border-primary/30 bg-card p-5">
                <p className="font-semibold text-foreground mb-2">Key Requirements</p>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  <li>• Approved components and tokens only</li>
                  <li>• Fluent-aligned interaction patterns</li>
                  <li>• Realistic edge cases and states (error, blocked, pending)</li>
                  <li>• Complete end-to-end portal flows</li>
                </ul>
              </div>
            </div>

            <ImageBlock
              heading="System-correct prototype interfaces"
              src="/images/casestudy-2/portal-overview.png"
              alt="Family Safety Portal overview interface"
            />
            <ImageBlock
              heading="Family Safety Portal — Master prototype"
              src="/images/casestudy-2/portal-dashboard.png"
              alt="Portal dashboard interface with make a copy and share actions"
              caption="Make copy of prototype and start editing"
            />
            <ImageBlock
              heading="Prompt and output"
              src="/images/casestudy-2/settings-edge-cases.png"
              alt="Figma Make prompt panel and CAPTCHA modal output"
            />
            <ImageBlock
              src="/images/casestudy-2/mobile-controls.png"
              alt="Mobile app controls and settings interface"
            />

            <Prose callout>
              This master prototype became the single source of truth PMs could
              safely duplicate—eliminating off-system exploration.
            </Prose>

            <div className="text-center">
              <a
                href={MASTER_PROTOTYPE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ className: 'w-full sm:w-auto justify-center' })}
              >
                Try the Master Prototype
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Strategy 2: Design Office Hours (DOH) as Quality Backbone">
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <h4 className="flex items-center gap-3 font-bold text-foreground mb-2">
                <CircleCheckBig className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
                Operating Model
              </h4>
              <p className="text-muted-foreground mb-4">
                DOH became the quality backbone of the system. Each session:
              </p>
              <div className="space-y-3">
                {[
                  { title: 'Reviewed a PM-owned prototype', description: 'Not static specs—interactive, duplicated from master' },
                  { title: 'Focused on behaviors, edge cases, and system alignment', description: 'Design validated system correctness, not pixel polish' },
                  { title: 'Ended with a clear outcome', description: 'Proceed / Iterate / Escalate—no ambiguous feedback' },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-primary/30 bg-card p-4 flex items-start gap-3">
                    <CircleCheckBig className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-blue)' }} />
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Prose>
              <p>
                This eliminated ambiguous feedback loops and reduced downstream churn
                by catching quality issues before engineering handoff.
              </p>
            </Prose>

            <h3 className="text-xl font-bold text-foreground mt-6">
              Democratizing Design (Without Diluting It)
            </h3>
            <Prose>
              <p>The initiative intentionally reframed ownership across the team:</p>
            </Prose>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: UsersIcon, color: 'var(--icon-blue)', title: 'PMs', description: 'Gained autonomy to ideate and validate early, unblocking discovery', cta: 'PM Checklist' },
                { icon: Shield, color: 'var(--icon-purple)', title: 'Designers', description: 'Shifted from pixel production to system stewardship and quality curation', cta: 'Design Office Hours' },
                { icon: Workflow, color: 'var(--icon-green)', title: 'Engineering', description: 'Received cleaner, more build-ready references with fewer rework loops', cta: 'Engineering Checklist' },
              ].map((col) => (
                <div key={col.title} className="rounded-xl border border-border bg-muted/30 p-5 flex flex-col">
                  <col.icon className="w-6 h-6 mb-3" style={{ color: col.color }} />
                  <p className="font-bold text-foreground">{col.title}</p>
                  <p className="text-muted-foreground text-sm mt-1 flex-1">{col.description}</p>
                  <span className={buttonVariants({ size: 'sm', className: 'mt-4 justify-center' })}>
                    {col.cta}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
            <Prose>
              <p>
                Guardrails—checklists, naming conventions, and DOH agendas—preserved
                consistency while enabling speed.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Impact (Directional)">
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <h4 className="flex items-center gap-3 font-bold text-foreground mb-4">
                <Lightbulb className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
                PM-Led Exploration
              </h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary">Earlier</p>
                  <p className="text-muted-foreground text-sm">Ideation Phase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">Unblocked</p>
                  <p className="text-muted-foreground text-sm">Discovery without design bottlenecks</p>
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4 mt-4 text-sm text-foreground">
                PM exploration moved earlier in the discovery cycle, eliminating
                wait-time on designer availability
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <h4 className="flex items-center gap-3 font-bold text-foreground mb-3">
                <Shield className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
                Pre-Engineering Quality
              </h4>
              <p className="text-3xl font-bold text-primary">Improved</p>
              <p className="text-muted-foreground text-sm">Design quality before engineering engagement</p>
              <div className="rounded-lg border border-border bg-card p-4 mt-4 text-sm text-foreground">
                Design Office Hours caught system misalignments and edge case gaps{' '}
                <strong>before handoff</strong>, reducing engineering rework
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <p className="font-bold text-foreground mb-4">Team Impact</p>
              <ul className="space-y-3">
                {[
                  'Established reusable Family Safety design foundation that became the reference for planning, reviews, and crits',
                  'Created a scalable governance model that democratized exploration without diluting quality',
                  'Shifted design role from execution to strategic system stewardship',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground text-sm">
                    <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-blue)' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Leadership Reflection">
            <Prose callout>
              <p>
                This work demonstrates how design leadership scales impact—not by doing
                more design, but by enabling others to design well.
              </p>
              <p className="mt-4">By pairing vibe coding with system discipline, I created an environment where:</p>
              <div className="grid sm:grid-cols-3 gap-4 mt-4 not-italic">
                {[
                  { title: 'Creativity is democratized', description: 'PMs can explore independently' },
                  { title: 'Quality is protected', description: 'Design governs system correctness' },
                  { title: 'Teams move faster', description: 'With confidence and clarity' },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg border border-primary/30 bg-card p-4">
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-semibold text-foreground not-italic">
                This was a leadership problem, not an execution one—and the solution was
                a system, not a deliverable.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Artifacts">
            <div className="rounded-2xl border border-border p-4 space-y-1">
              {[
                { title: 'Ideation to Prototype Workflow (Master)', file: 'Family Safety — Ideation → Prototype Workflow (Master).page', color: 'var(--icon-blue)' },
                { title: 'PM Checklist — Ideation → Prototype', file: 'PM Checklist — Ideation → Prototype.loop', color: 'var(--icon-teal)' },
                { title: 'Design Office Hours Documentation', file: 'Quality gate governance and review process', color: 'var(--icon-green)' },
                { title: 'Engineering Checklist', file: 'Quality gate checklist for engineering handoff', color: 'var(--icon-purple)' },
                {
                  title: 'Family Safety Figma Make Master Prototype',
                  file: 'Interactive prototype — Family Safety Figma Make',
                  color: 'var(--icon-orange)',
                  href: MASTER_PROTOTYPE_URL,
                },
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
                      <p className="font-medium text-foreground">{artifact.title}</p>
                      <p className="text-sm text-muted-foreground">{artifact.file}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 shrink-0 mt-0.5 text-muted-foreground" />
                  </a>
                ) : (
                  <div key={artifact.title} className="rounded-lg p-3 flex items-start gap-3">
                    <FileText className="w-4 h-4 shrink-0 mt-0.5" style={{ color: artifact.color }} />
                    <div>
                      <p className="font-medium text-foreground">{artifact.title}</p>
                      <p className="text-sm text-muted-foreground">{artifact.file}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

export { FamilySafetyPage };
