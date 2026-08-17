import {
  Smartphone,
  Bell,
  Zap,
  Clock,
  Target,
  TrendingUp,
  PanelsTopLeft,
  Monitor,
  Shield,
  X,
  ArrowRight,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { RoleSection } from '@/components/casestudy/role-section';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { ImageBlock, VideoBlock } from '@/components/casestudy/image-block';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';

function PcToPhoneResumePage() {
  return (
    <div className="pb-20">
      <Seo
        title="PC to Phone Resume"
        description="Enabling users to seamlessly continue PC tasks on mobile when they step away."
      />
      <CaseStudyHero
        breadcrumbLabel="PC to Phone Resume"
        badges={['PC → Phone Continuity', 'Work in Progress']}
        title="PC to Phone Resume: Completing the Continuity Loop"
        subtitle="Enabling users to seamlessly continue PC tasks on mobile when they step away"
        meta={[
          { label: 'Role', value: 'Lead Product Designer' },
          { label: 'Timeline', value: 'Oct 2025 – Present' },
          { label: 'Platform', value: 'Windows 11, Android, iOS' },
          { label: 'Status', value: 'Work in Progress' },
        ]}
        coverImage="/images/shared/project-pc-to-phone-cover.png"
        coverAlt="PC to Phone continuity - Desktop to mobile transition"
        workInProgress
        iconFlow={[
          { icon: Monitor, color: 'var(--icon-blue)' },
          { icon: ArrowRight, color: 'var(--icon-orange)' },
          { icon: Smartphone, color: 'var(--icon-teal)' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        <Reveal>
          <Section title="Overview">
            <Prose>
              <p>
                Modern work and life increasingly start on PC—emails, documents, web
                browsing, media—and naturally continue on mobile when users step away.
                Meetings end, commutes begin, or context shifts demand mobility.
              </p>
              <p>
                Before PC → Phone Resume, this transition was fragile. Users manually
                copied links, reopened apps, or relied on memory to recreate context on
                their phones. Friction appeared precisely when users were most
                time-constrained.
              </p>
            </Prose>
            <Prose callout>
              <strong>PC → Phone Resume</strong> is a <strong>system-level capability</strong>{' '}
              that enables users to continue active PC tasks on their phone, without
              restarting or hunting for context—turning Windows into a{' '}
              <strong>bidirectional continuation partner</strong>.
            </Prose>
            <MetaGrid
              items={[
                { label: 'Platform', value: 'Windows', pillColor: 'blue' },
                { label: 'Domain', value: 'Connected Experience & Ecosystem', pillColor: 'purple' },
                { label: 'Experience Pillar', value: 'Continuity', pillColor: 'blue' },
                { label: 'Capability', value: 'Cross‑Device Resume (PC to Phone)', pillColor: 'green' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <RoleSection
            title="Lead Product Designer"
            bullets={[
              'Led end‑to‑end design for PC → Phone Resume, from concept to shipped experience',
              'Defined the continuity vision as part of the broader Connected Experience strategy',
              'Designed system‑level patterns for cross‑device resume across PC and phone',
              'Balanced implicit intelligence and explicit user control across sensitive and non‑sensitive scenarios',
              'Partnered closely with Product Management and Engineering to align feasibility, platform constraints, and long‑term scalability',
            ]}
          />
        </Reveal>

        <Reveal>
          <Section title="Problem">
            <Prose>
              <p>PC to phone transitions required manual effort:</p>
            </Prose>
            <IconCardList
              items={[
                {
                  icon: X,
                  iconColor: 'var(--icon-red)',
                  title: 'Copying links or manually sharing content',
                  description: 'Users had to email themselves, use cloud storage, or copy links to continue PC tasks on their phone',
                },
                {
                  icon: X,
                  iconColor: 'var(--icon-red)',
                  title: 'Reopening apps and hunting for context',
                  description: 'The exact position, state, and session were lost in the transition',
                },
                {
                  icon: X,
                  iconColor: 'var(--icon-red)',
                  title: 'Reconstructing mental state after leaving PC',
                  description: 'Cognitive overhead disrupted flow precisely when users were most time-constrained',
                },
              ]}
            />
            <CalloutList
              title="This caused:"
              tone="negative"
              items={[
                'Task abandonment during PC → mobile transitions',
                'Friction at high-intent moments (meetings ending, commutes beginning)',
                'A perception of Windows as a one-way ecosystem, not a connected journey',
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Why This Matters Now">
            <IconCardList
              items={[
                {
                  icon: Clock,
                  iconColor: 'var(--icon-blue)',
                  title: 'Work and life are mobile‑first after PC‑first',
                  description: 'Meetings end, commutes begin, context shifts demand mobility. Users expect seamless transitions without manual intervention',
                },
                {
                  icon: Target,
                  iconColor: 'var(--icon-teal)',
                  title: 'Competitors deliver system‑level continuity',
                  description: "Apple's Handoff, Universal Clipboard, and AirDrop set user expectations for seamless, invisible cross‑device experiences",
                },
                {
                  icon: Zap,
                  iconColor: 'var(--icon-orange)',
                  title: 'Windows felt like a one‑way ecosystem',
                  description: 'Without PC → Phone continuity, Windows was a destination, not a connected journey. This project aimed to close that loop',
                },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Design Goal">
            <Prose callout>
              Create a <strong>low‑friction, system‑level resume experience</strong> that:
              <ul className="mt-3 space-y-1.5 list-disc list-inside">
                <li>Preserves task context across PC → Phone</li>
                <li>Works across multiple app categories</li>
                <li>Balances implicit intelligence with explicit user control</li>
              </ul>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Users & Jobs‑to‑Be‑Done">
            <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6">
              <p className="flex items-center gap-2 font-semibold text-foreground mb-1">
                <Target className="w-4 h-4" style={{ color: 'var(--icon-blue)' }} />
                Primary JTBD
              </p>
              <p className="text-foreground">
                "When I step away from my PC, I want my active task to continue on my
                phone, so I can stay productive without restarting."
              </p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-3">Secondary JTBDs</p>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>• Quickly access my last PC activity on phone</li>
                <li>• Trust that sensitive content resumes intentionally</li>
                <li>• Avoid learning new gestures or flows</li>
              </ul>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Design Principles">
            <IconCardList
              columns={2}
              items={[
                { icon: Zap, iconColor: 'var(--icon-blue)', title: 'Seamlessness', description: 'Transition tasks across devices with minimal steps. Resume should feel immediate and require no re‑learning.' },
                { icon: Bell, iconColor: 'var(--icon-teal)', title: 'Non‑Intrusiveness', description: "Surfaces should be ambient and contextual. Assist without interrupting the user's primary intent." },
                { icon: Target, iconColor: 'var(--icon-purple)', title: 'Context Awareness', description: 'Understand user intent and task relevance. Avoid noisy prompts and confusing residue after dismissal.' },
                { icon: TrendingUp, iconColor: 'var(--icon-green)', title: 'Scalability', description: 'Should support Android and iOS. Remain extensible to future multi‑device scenarios.' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Design Strategy">
            <div className="space-y-4">
              {[
                { title: 'Platform‑native capability', description: 'Built as a Windows‑owned system capability, not a single‑app feature; scalable across browser, productivity, and media.' },
                { title: 'Bidirectional continuity', description: 'Tasks flow PC → Phone and Phone → PC, reinforcing trust in the ecosystem.' },
                { title: 'Moment‑driven resume', description: 'Resume is triggered by user activity & transitions (active, lock, idle, leave, proximity, present, etc).' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Connected Experience Continuity Strategy">
            <Prose>
              <p>
                PC → Phone Resume is part of a broader{' '}
                <strong>Connected Experience Continuity strategy</strong>—designed to
                make Windows feel like a coherent ecosystem rather than a collection of
                isolated devices.
              </p>
            </Prose>
            <ImageBlock
              src="/images/casestudy-1/xdr-platform-diagram.png"
              alt="Cross Device Resume (XDR) - Platform diagram"
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="PC → Phone Continuity Map">
            <ImageBlock
              src="/images/casestudy-1/resume-map-flow.png"
              alt="PC to Phone Resume Map - UX flow showing Active Task, Conflict, Means, Continue"
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Key Design Explorations">
            <h3 className="text-xl font-bold text-foreground">Mode of Continuity</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Implicit Continuity', description: 'The system anticipates user intent and makes certain tasks available across devices automatically, enabling users to resume with minimal effort.' },
                { title: 'Explicit Continuity', description: 'The user explicitly provides intent or instruction to make a specific task available on a specific device.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-muted/30 p-5">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-foreground mt-6">Key Entry Points</h3>
            <IconCardList
              columns={2}
              items={[
                { icon: PanelsTopLeft, iconColor: 'var(--icon-blue)', title: 'One UI Now Bar', description: 'Ambient resume surface at glanceable moments' },
                { icon: Bell, iconColor: 'var(--icon-teal)', title: 'Material UI Live Notification', description: 'Contextual, time‑sensitive resume prompt' },
                { icon: Monitor, iconColor: 'var(--icon-purple)', title: 'App Switcher', description: 'Resume surfaced during active task switching' },
                { icon: PanelsTopLeft, iconColor: 'var(--icon-green)', title: 'App Widget', description: 'Persistent, user‑controlled entry to continue tasks' },
              ]}
            />

            <h3 className="text-xl font-bold text-foreground mt-6">Proposed Experience</h3>
            <VideoBlock
              heading="Teams Call — Resume a call left on PC, continued seamlessly on phone"
              src="/videos/pc-to-phone-teams-call.mp4"
            />
            <ImageBlock
              heading="Teams Notification — Contextual resume prompt delivered at the right moment on your Phone"
              src="/images/casestudy-1/teams-notification.png"
              alt="PC to Phone Resume — Teams notification prompting the user to resume"
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <ImageBlock
                heading="Nowbar — Single app resume entry"
                src="/images/casestudy-1/nowbar-single-app.png"
                alt="PC to Phone Resume — Nowbar showing a single active app ready to resume"
              />
              <ImageBlock
                heading="Nowbar — Multiple apps available"
                src="/images/casestudy-1/nowbar-multiple-app.png"
                alt="PC to Phone Resume — Nowbar showing multiple apps available to resume"
              />
            </div>
            <ImageBlock
              heading="Status Chip — Persistent multi-app resume indicator for ongoing cross-device sessions"
              src="/images/casestudy-1/status-chip-multiple-app.png"
              alt="PC to Phone Resume — Status chip indicating multiple apps available to resume"
            />

            <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6">
              <p className="font-semibold text-foreground mb-3">
                PC → Phone Resume enables users to:
              </p>
              <ul className="space-y-1.5 text-foreground text-sm">
                <li className="flex gap-2">
                  <span className="text-primary" aria-hidden="true">•</span>
                  Leave a task on PC
                </li>
                <li className="flex gap-2">
                  <span className="text-primary" aria-hidden="true">•</span>
                  Receive a timely, contextual resume entry on phone
                </li>
                <li className="flex gap-2">
                  <span className="text-primary" aria-hidden="true">•</span>
                  Continue exactly where they left off
                </li>
              </ul>
            </div>
            <Prose>
              <p className="italic">
                The experience feels assistive, not interruptive—present when needed,
                invisible otherwise.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Impact (Directional)">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: TrendingUp, iconColor: 'var(--icon-blue)', text: 'Improved continuity perception across Windows ecosystem' },
                { icon: Zap, iconColor: 'var(--icon-green)', text: 'Reduced task restart friction during PC → mobile transitions' },
                { icon: Target, iconColor: 'var(--icon-orange)', text: 'Increased engagement with connected device experiences' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="rounded-xl border border-border bg-muted/30 p-6 text-center flex flex-col items-center"
                >
                  <item.icon className="w-7 h-7 mb-3" style={{ color: item.iconColor }} />
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <Prose>
              <p className="text-sm italic">
                (Exact metrics tracked internally; results informed iteration and
                expansion.)
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="What Made This Hard">
            <IconCardList
              items={[
                { icon: Shield, iconColor: 'var(--icon-blue)', title: 'Designing across two platforms with different affordances', description: 'Android and iOS have distinct interaction patterns and system constraints that required careful adaptation.' },
                { icon: Target, iconColor: 'var(--icon-teal)', title: 'Aligning system, app, and partner expectations', description: 'Coordinating across Windows, first-party apps, and third-party partners required clear vision and flexible implementation.' },
                { icon: Shield, iconColor: 'var(--icon-purple)', title: 'Balancing intelligence with user trust', description: 'Making the system feel smart without being creepy required careful sensitivity calibration and transparent user control.' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Learnings">
            <div className="space-y-4">
              {[
                { title: 'Continuity succeeds when it feels inevitable, not impressive', description: 'The best continuity experiences disappear into the background, feeling like they were always there.' },
                { title: 'The best cross‑device UX minimizes decision‑making', description: 'Every choice point is an opportunity for drop-off. Implicit intelligence reduces friction dramatically.' },
                { title: 'Trust is as critical as speed in system‑level experiences', description: "Users must trust that the system respects their privacy and intent, or they won't engage at all." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-primary/20 bg-accent/10 p-5">
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="What's Next">
            <CalloutList
              items={[
                'Expand resume coverage across more app categories',
                'Deeper personalization of resume moments',
                'Stronger ecosystem signals tying PC and phone together',
              ]}
            />
            <Prose callout>
              PC to Phone Resume completes the continuity loop—turning Windows from a
              destination into a connected journey.
            </Prose>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

export { PcToPhoneResumePage };
