import {
  Zap,
  Shield,
  X,
  Users as UsersIcon,
  Palette,
  Wrench,
  TrendingUp,
  Lightbulb,
  FileText,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { RoleSection } from '@/components/casestudy/role-section';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { ImageBlock } from '@/components/casestudy/image-block';
import { Reveal } from '@/components/reveal';

function FamilySafetyPage() {
  return (
    <div className="pb-20">
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
                { icon: X, iconColor: '#dc2626', title: 'PMs waited on designer availability', description: 'Discovery was blocked by design resourcing, slowing velocity' },
                { icon: X, iconColor: '#dc2626', title: 'PM-created prototypes diverged from system components', description: 'Off-system prototyping created downstream rework and eroded design consistency' },
                { icon: X, iconColor: '#dc2626', title: 'Vibe coding lacked guardrails', description: 'PMs increasingly used AI-assisted prototyping, but without system discipline, quality suffered' },
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
                  iconColor: 'var(--icon-blue)',
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
                { icon: Lightbulb, title: 'Ideation Readiness', description: 'Clear problem framing and HMWs' },
                { icon: UsersIcon, iconColor: 'var(--icon-purple)', title: 'Explore in a Copy', description: 'PM duplicates the master prototype' },
                { icon: UsersIcon, iconColor: 'var(--icon-green)', title: 'Design Office Hours', description: 'Designer-led system and behavior review' },
                { icon: Shield, iconColor: 'var(--icon-orange)', title: 'Decision', description: 'Proceed, Iterate, or Escalate' },
                { icon: Wrench, iconColor: 'var(--icon-cyan)', title: 'Execute', description: 'Merge to master, then engineering handoff' },
              ]}
            />
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
            <IconCardList
              items={[
                {
                  icon: Shield,
                  title: 'Master Prototype as Single Source of Truth',
                  bullets: [
                    'Approved components and tokens only',
                    'Fluent-aligned interaction patterns',
                    'Realistic edge cases and states (error, blocked, pending)',
                    'Complete end-to-end portal flows',
                  ],
                },
              ]}
            />
            <div className="grid sm:grid-cols-3 gap-4">
              <ImageBlock src="/images/casestudy-2/portal-overview.png" alt="Family Safety Portal overview interface" />
              <ImageBlock src="/images/casestudy-2/portal-dashboard.png" alt="Portal dashboard interface" />
              <ImageBlock src="/images/casestudy-2/settings-edge-cases.png" alt="Settings and edge cases interface" />
            </div>
            <ImageBlock src="/images/casestudy-2/mobile-controls.png" alt="Mobile app controls and settings interface" />
            <Prose>
              <p>
                This master prototype became the single source of truth PMs could
                safely duplicate—eliminating off-system exploration.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Strategy 2: Design Office Hours (DOH) as Quality Backbone">
            <Prose>
              <p className="font-semibold text-foreground">Operating Model</p>
              <p>DOH became the quality backbone of the system. Each session:</p>
            </Prose>
            <IconCardList
              items={[
                { icon: UsersIcon, title: 'Reviewed a PM-owned prototype', description: 'Not static specs—interactive, duplicated from master' },
                { icon: Palette, iconColor: 'var(--icon-purple)', title: 'Focused on behaviors, edge cases, and system alignment', description: 'Design validated system correctness, not pixel polish' },
                { icon: Shield, iconColor: 'var(--icon-green)', title: 'Ended with a clear outcome', description: 'Proceed / Iterate / Escalate—no ambiguous feedback' },
              ]}
            />
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
            <IconCardList
              columns={3}
              items={[
                { icon: UsersIcon, title: 'PMs', description: 'Gained autonomy to ideate and validate early, unblocking discovery (PM Checklist)' },
                { icon: Palette, iconColor: 'var(--icon-purple)', title: 'Designers', description: 'Shifted from pixel production to system stewardship and quality curation (Design Office Hours)' },
                { icon: Wrench, iconColor: 'var(--icon-orange)', title: 'Engineering', description: 'Received cleaner, more build-ready references with fewer rework loops (Engineering Checklist)' },
              ]}
            />
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
            <IconCardList
              columns={2}
              items={[
                {
                  icon: TrendingUp,
                  iconColor: 'var(--icon-green)',
                  title: 'PM-Led Exploration — Earlier',
                  description: 'Ideation Phase: Unblocked. Discovery without design bottlenecks. PM exploration moved earlier in the discovery cycle, eliminating wait-time on designer availability',
                },
                {
                  icon: Shield,
                  iconColor: 'var(--icon-blue)',
                  title: 'Pre-Engineering Quality — Improved',
                  description: 'Design quality before engineering engagement. Design Office Hours caught system misalignments and edge case gaps before handoff, reducing engineering rework',
                },
              ]}
            />
            <div>
              <p className="font-semibold text-foreground mb-3">Team Impact</p>
              <CalloutList
                marker="✓"
                tone="positive"
                items={[
                  'Established reusable Family Safety design foundation that became the reference for planning, reviews, and crits',
                  'Created a scalable governance model that democratized exploration without diluting quality',
                  'Shifted design role from execution to strategic system stewardship',
                ]}
              />
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
            </Prose>
            <IconCardList
              columns={3}
              items={[
                { icon: Lightbulb, title: 'Creativity is democratized', description: 'PMs can explore independently' },
                { icon: Shield, iconColor: 'var(--icon-blue)', title: 'Quality is protected', description: 'Design governs system correctness' },
                { icon: Zap, iconColor: 'var(--icon-orange)', title: 'Teams move faster', description: 'With confidence and clarity' },
              ]}
            />
            <Prose>
              <p className="font-semibold text-foreground">
                This was a leadership problem, not an execution one—and the solution was
                a system, not a deliverable.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Artifacts">
            <ul className="space-y-3">
              {[
                { title: 'Ideation to Prototype Workflow (Master)', file: 'Family Safety — Ideation → Prototype Workflow (Master).page' },
                { title: 'PM Checklist — Ideation → Prototype', file: 'PM Checklist — Ideation → Prototype.loop' },
                { title: 'Design Office Hours Documentation', file: 'Quality gate governance and review process' },
                { title: 'Engineering Checklist', file: 'Quality gate checklist for engineering handoff' },
                { title: 'Family Safety Figma Make Master Prototype', file: 'Interactive prototype — Family Safety Figma Make' },
              ].map((artifact) => (
                <li
                  key={artifact.title}
                  className="rounded-lg border border-border p-4 flex items-start gap-3"
                >
                  <FileText className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  <div>
                    <p className="font-medium text-foreground">{artifact.title}</p>
                    <p className="text-sm text-muted-foreground">{artifact.file}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

export { FamilySafetyPage };
