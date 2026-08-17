import {
  Smartphone,
  Bell,
  Layers,
  Zap,
  Waves,
  Eye,
  Ruler,
  Users as UsersIcon,
  MessageSquare,
  Settings2,
  Grid3x3,
  Phone as PhoneIcon,
  X,
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

function PcToPhoneResumePage() {
  return (
    <div className="pb-20">
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
                  iconColor: '#dc2626',
                  title: 'Copying links or manually sharing content',
                  description: 'Users had to email themselves, use cloud storage, or copy links to continue PC tasks on their phone',
                },
                {
                  icon: X,
                  iconColor: '#dc2626',
                  title: 'Reopening apps and hunting for context',
                  description: 'The exact position, state, and session were lost in the transition',
                },
                {
                  icon: X,
                  iconColor: '#dc2626',
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
                  icon: Waves,
                  title: 'Work and life are mobile‑first after PC‑first',
                  description: 'Meetings end, commutes begin, context shifts demand mobility. Users expect seamless transitions without manual intervention',
                },
                {
                  icon: Layers,
                  iconColor: 'var(--icon-purple)',
                  title: 'Competitors deliver system‑level continuity',
                  description: "Apple's Handoff, Universal Clipboard, and AirDrop set user expectations for seamless, invisible cross‑device experiences",
                },
                {
                  icon: PhoneIcon,
                  iconColor: 'var(--icon-orange)',
                  title: 'Windows felt like a one‑way ecosystem',
                  description: 'Without PC → Phone continuity, Windows was a destination, not a connected journey. This project aimed to close that loop',
                },
              ]}
            />
            <Prose callout>
              <p className="font-semibold text-foreground mb-2">Design Goal</p>
              Create a low‑friction, system‑level resume experience that preserves task
              context across PC → Phone, works across multiple app categories, and
              balances implicit intelligence with explicit user control.
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Users & Jobs‑to‑Be‑Done">
            <Prose callout>
              <p className="font-semibold text-foreground mb-1">Primary JTBD</p>
              "When I step away from my PC, I want my active task to continue on my
              phone, so I can stay productive without restarting."
            </Prose>
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
                { icon: Zap, iconColor: 'var(--icon-orange)', title: 'Seamlessness', description: 'Transition tasks across devices with minimal steps. Resume should feel immediate and require no re‑learning.' },
                { icon: Eye, iconColor: 'var(--icon-cyan)', title: 'Non‑Intrusiveness', description: "Surfaces should be ambient and contextual. Assist without interrupting the user's primary intent." },
                { icon: Ruler, iconColor: 'var(--icon-green)', title: 'Context Awareness', description: 'Understand user intent and task relevance. Avoid noisy prompts and confusing residue after dismissal.' },
                { icon: Grid3x3, iconColor: 'var(--icon-purple)', title: 'Scalability', description: 'Should support Android and iOS. Remain extensible to future multi‑device scenarios.' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Design Strategy">
            <IconCardList
              items={[
                { icon: Layers, title: 'Platform‑native capability', description: 'Built as a Windows‑owned system capability, not a single‑app feature; scalable across browser, productivity, and media.' },
                { icon: Waves, iconColor: 'var(--icon-purple)', title: 'Bidirectional continuity', description: 'Tasks flow PC → Phone and Phone → PC, reinforcing trust in the ecosystem.' },
                { icon: Bell, iconColor: 'var(--icon-orange)', title: 'Moment‑driven resume', description: 'Resume is triggered by user activity & transitions (active, lock, idle, leave, proximity, present, etc).' },
              ]}
            />
            <Prose>
              <p>
                PC → Phone Resume is part of a broader Connected Experience Continuity
                strategy—designed to make Windows feel like a coherent ecosystem rather
                than a collection of isolated devices.
              </p>
            </Prose>
            <ImageBlock
              heading="PC → Phone Continuity Map"
              src="/images/casestudy-1/xdr-platform-diagram.png"
              alt="Cross Device Resume (XDR) - Platform diagram"
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Key Design Explorations">
            <h3 className="text-xl font-bold text-foreground">Mode of Continuity</h3>
            <IconCardList
              columns={2}
              items={[
                { icon: Zap, iconColor: 'var(--icon-orange)', title: 'Implicit Continuity', description: 'The system anticipates user intent and makes certain tasks available across devices automatically, enabling users to resume with minimal effort.' },
                { icon: UsersIcon, iconColor: 'var(--icon-blue)', title: 'Explicit Continuity', description: 'The user explicitly provides intent or instruction to make a specific task available on a specific device.' },
              ]}
            />
            <h3 className="text-xl font-bold text-foreground mt-6">Key Entry Points</h3>
            <IconCardList
              columns={2}
              items={[
                { icon: Bell, iconColor: 'var(--icon-purple)', title: 'One UI Now Bar', description: 'Ambient resume surface at glanceable moments' },
                { icon: MessageSquare, iconColor: 'var(--icon-green)', title: 'Material UI Live Notification', description: 'Contextual, time‑sensitive resume prompt' },
                { icon: Grid3x3, iconColor: 'var(--icon-orange)', title: 'App Switcher', description: 'Resume surfaced during active task switching' },
                { icon: Settings2, iconColor: 'var(--icon-cyan)', title: 'App Widget', description: 'Persistent, user‑controlled entry to continue tasks' },
              ]}
            />

            <h3 className="text-xl font-bold text-foreground mt-6">Proposed Experience</h3>
            <ImageBlock
              heading="Teams Notification — Contextual resume prompt delivered at the right moment on your Phone"
              src="/images/casestudy-1/teams-notification.png"
              alt="PC to Phone Resume — Teams notification prompting the user to resume"
            />
            <VideoBlock
              heading="Teams Call — Resume a call left on PC, continued seamlessly on phone"
              src="/videos/pc-to-phone-teams-call.m4v"
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

            <CalloutList
              marker="✓"
              items={['Leave a task on PC', 'Receive a timely, contextual resume entry on phone', 'Continue exactly where they left off']}
            />
            <Prose>
              <p>
                The experience feels assistive, not interruptive—present when needed,
                invisible otherwise.
              </p>
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Impact (Directional)">
            <CalloutList
              marker="✓"
              tone="positive"
              items={[
                'Improved continuity perception across Windows ecosystem',
                'Reduced task restart friction during PC → mobile transitions',
                'Increased engagement with connected device experiences',
              ]}
            />
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
                { icon: Smartphone, title: 'Designing across two platforms with different affordances', description: 'Android and iOS have distinct interaction patterns and system constraints that required careful adaptation.' },
                { icon: UsersIcon, iconColor: 'var(--icon-purple)', title: 'Aligning system, app, and partner expectations', description: 'Coordinating across Windows, first-party apps, and third-party partners required clear vision and flexible implementation.' },
                { icon: Eye, iconColor: 'var(--icon-orange)', title: 'Balancing intelligence with user trust', description: 'Making the system feel smart without being creepy required careful sensitivity calibration and transparent user control.' },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Learnings">
            <IconCardList
              items={[
                { icon: Zap, iconColor: 'var(--icon-orange)', title: 'Continuity succeeds when it feels inevitable, not impressive', description: 'The best continuity experiences disappear into the background, feeling like they were always there.' },
                { icon: Layers, title: 'The best cross‑device UX minimizes decision‑making', description: 'Every choice point is an opportunity for drop-off. Implicit intelligence reduces friction dramatically.' },
                { icon: Eye, iconColor: 'var(--icon-green)', title: 'Trust is as critical as speed in system‑level experiences', description: "Users must trust that the system respects their privacy and intent, or they won't engage at all." },
              ]}
            />
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
