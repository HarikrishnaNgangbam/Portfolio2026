import {
  Monitor,
  Smartphone,
  ArrowRight,
  ArrowLeftRight,
  Layers,
  Target,
  Clock,
  Zap,
  Bell,
  PanelsTopLeft,
  Shield,
  TrendingUp,
  Users,
  Workflow,
  HelpCircle,
  LogOut,
  PhoneCall,
  Eye,
  Scale,
  SlidersHorizontal,
  LayoutGrid,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { ImageBlock, VideoBlock } from '@/components/casestudy/image-block';
import { Placeholder } from '@/components/casestudy/placeholder';
import { Takeaway } from '@/components/casestudy/takeaway';
import { DecisionStrip } from '@/components/casestudy/decision-strip';
import { Ownership } from '@/components/casestudy/ownership';
import { PrincipleBlock } from '@/design-system/ui/principle-block';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';

function PcToPhoneResumePage() {
  return (
    <div className="pb-20">
      <Seo
        title="PC to Phone Resume"
        description="Designing a system-level continuity experience that lets people move from Windows PC to phone without losing their task, context, or momentum."
      />
      <CaseStudyHero
        eyebrow="Microsoft · Windows Connected Experience & Ecosystem"
        breadcrumbLabel="PC to Phone Resume"
        badges={['PC to Phone Continuity', 'Work in Progress']}
        title="PC to Phone Resume"
        subtitle="The task shouldn't stop when you leave the PC. Designing a system-level continuity experience that lets people move from Windows PC to phone without losing their task, context, or momentum."
        meta={[
          { label: 'Role', value: 'Lead Product Designer' },
          { label: 'Timeline', value: 'Oct 2025 to Present' },
          { label: 'Platform', value: 'Windows 11, Android, iOS' },
          { label: 'Status', value: 'Work in Progress' },
        ]}
        coverImage="/images/shared/project-pc-to-phone-cover.webp"
        coverAlt="PC to Phone continuity: moving a task's context from desktop to mobile"
        workInProgress
        iconFlow={[
          { icon: Monitor, color: 'var(--icon-blue)' },
          { icon: ArrowRight, color: 'var(--icon-orange)' },
          { icon: Layers, color: 'var(--icon-purple)' },
          { icon: ArrowRight, color: 'var(--icon-orange)' },
          { icon: Smartphone, color: 'var(--icon-teal)' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        {/* 01 The Problem */}
        <Reveal>
          <Section title="Leaving the PC shouldn't mean leaving the task.">
            <Prose>
              <p>
                Modern work rarely stays on one device. It starts on the PC, a
                document, a call, a browsing session, and it keeps going after the
                PC is closed. Meetings end. Commutes begin. The task doesn't stop,
                but historically, continuing it did.
              </p>
              <p>
                Before PC to Phone Resume, continuing that task on a phone meant
                doing all the reconstruction yourself.
              </p>
            </Prose>
            <CalloutList
              title="Users had to:"
              tone="negative"
              items={[
                'Copy links or share content manually',
                'Reopen the right app from scratch',
                'Find the right conversation or window again',
                'Reconstruct exactly where they left off',
              ]}
            />
            <Prose callout>
              Friction showed up at the exact moment users were switching devices,
              which is also the moment they were most time-constrained.
            </Prose>
            <MetaGrid
              items={[
                { label: 'Platform', value: 'Windows', pillColor: 'blue' },
                { label: 'Domain', value: 'Connected Experience & Ecosystem', pillColor: 'purple' },
                { label: 'Experience Pillar', value: 'Continuity', pillColor: 'blue' },
                { label: 'Capability', value: 'Cross-Device Resume (PC to Phone)', pillColor: 'green' },
              ]}
            />
          </Section>
        </Reveal>

        {/* 02 The Insight */}
        <Reveal>
          <Section title="Continuity isn't about moving the app. It's about preserving context.">
            <Prose callout kind="insight">
              The unit of continuity is the task, not the device.
            </Prose>
            <Prose>
              <p>Three things need to travel with the task for it to feel resumed instead of restarted:</p>
            </Prose>
            <IconCardList
              columns={3}
              items={[
                {
                  icon: Target,
                  iconColor: 'var(--icon-blue)',
                  title: 'Intent',
                  description: 'Why am I doing this? The reason the task exists in the first place.',
                },
                {
                  icon: Clock,
                  iconColor: 'var(--icon-teal)',
                  title: 'State',
                  description: 'Where was I? The exact position and progress within the task.',
                },
                {
                  icon: Layers,
                  iconColor: 'var(--icon-purple)',
                  title: 'Context',
                  description: 'What surrounded the task? The people, content, and situation around it.',
                },
              ]}
            />
            <Placeholder
              icon={ArrowLeftRight}
              title="Context Transfer Model"
              type="System diagram placeholder"
              descriptor="How intent, state, and context travel with a task as it moves from PC to phone"
              color="var(--icon-purple)"
            />
          </Section>
        </Reveal>

        {/* 03 Why This Matters */}
        <Reveal>
          <Section title="The ecosystem had become connected. The experience hadn't.">
            <IconCardList
              columns={3}
              items={[
                {
                  icon: Clock,
                  iconColor: 'var(--icon-blue)',
                  title: 'Context increasingly moves between PC and phone',
                  description: "Work doesn't stay on one device anymore, and users expect it to follow them.",
                },
                {
                  icon: Target,
                  iconColor: 'var(--icon-teal)',
                  title: 'Other ecosystems raised the bar',
                  description: 'Handoff-style experiences elsewhere had already made continuity feel automatic.',
                },
                {
                  icon: Zap,
                  iconColor: 'var(--icon-orange)',
                  title: 'Windows needed to feel like a journey, not a destination',
                  description: 'Without PC to phone continuity, Windows was a one-way ecosystem.',
                },
              ]}
            />
          </Section>
        </Reveal>

        {/* 04 The Design Challenge */}
        <Reveal>
          <Section title="The system had to know when to help without becoming annoying.">
            <IconCardList
              columns={2}
              items={[
                {
                  icon: HelpCircle,
                  iconColor: 'var(--icon-red)',
                  title: 'Too little intelligence',
                  description: 'The user has to notice the transition, find the task, and rebuild context by hand.',
                },
                {
                  icon: Bell,
                  iconColor: 'var(--icon-orange)',
                  title: 'Too much intervention',
                  description: 'The system interrupts constantly, surfacing things the user never asked for.',
                },
              ]}
            />
            <DecisionStrip
              decision="Aim for helpful without being interruptive, rather than maximizing either automation or user control on its own."
              why="Too little intelligence forces the user to do everything by hand. Too much intervention makes the system noisy and untrustworthy."
            />
            <Prose>
              <p>
                That meant designing for seamlessness, resuming with minimal steps
                and no new gestures to learn; context awareness, understanding
                intent rather than just activity; non-intrusiveness, favoring
                ambient surfaces over interruptions; and scalability, a pattern
                that could extend past Android and iOS to whatever comes next.
              </p>
            </Prose>
            <Placeholder
              icon={Scale}
              title="Continuity Intelligence vs User Control"
              type="Tension diagram placeholder"
              descriptor="Where the system should lean toward automation, and where it should leave the decision to the user"
              color="var(--icon-orange)"
            />
          </Section>
        </Reveal>

        {/* 05 Continuity as a Spectrum */}
        <Reveal>
          <Section title="How much should the system decide for the user?">
            <Prose>
              <p>Continuity isn't binary. It's a spectrum of system confidence and user control.</p>
            </Prose>
            <IconCardList
              columns={3}
              items={[
                {
                  icon: Zap,
                  iconColor: 'var(--icon-blue)',
                  title: 'Implicit: system anticipates',
                  description: 'The system recognizes intent and makes the task available automatically, with minimal user effort.',
                },
                {
                  icon: Target,
                  iconColor: 'var(--icon-purple)',
                  title: 'Hybrid: system suggests',
                  description: 'The system surfaces a resume opportunity without assuming the user wants to act on it.',
                },
                {
                  icon: Users,
                  iconColor: 'var(--icon-teal)',
                  title: 'Explicit: user initiates',
                  description: 'The user decides what continues and when, and the system stays out of the way until asked.',
                },
              ]}
            />
            <Placeholder
              icon={SlidersHorizontal}
              title="Implicit to Hybrid to Explicit Continuity Spectrum"
              type="Spectrum diagram placeholder"
              descriptor="Continuity behavior mapped against how much confidence the system has and how much control the user keeps"
              color="var(--icon-blue)"
            />
          </Section>
        </Reveal>

        {/* 06 The Continuity Lifecycle */}
        <Reveal>
          <Section title="From active task to resumed task.">
            <Prose>
              <p>
                Continuity isn't a single moment. It's a sequence, from an active
                task on the PC to that same task, resumed, on the phone.
              </p>
            </Prose>
            <Placeholder
              icon={Workflow}
              title="Continuity Lifecycle"
              type="Lifecycle diagram placeholder"
              descriptor="Active Task → User Transition → Context Capture → Decision → Resume Surface → Resume → Continue"
              color="var(--icon-teal)"
              size="large"
            />
          </Section>
        </Reveal>

        {/* 07 System Strategy */}
        <Reveal>
          <Section title="One capability. Many experiences.">
            <Prose>
              <p>
                PC to Phone Resume is one expression of a broader capability, not
                a single app integration. The same continuity model is designed
                to scale across browser, productivity, media, and other Windows
                and phone experiences, as part of the wider Connected Experience
                Continuity strategy.
              </p>
            </Prose>
            <ImageBlock
              heading="Cross-Device Resume: one platform capability, many surfaces"
              src="/images/casestudy-1/xdr-platform-diagram.webp"
              alt="Cross Device Resume platform diagram showing continuity as a shared capability across app surfaces"
              evidence="system-model"
            />
          </Section>
        </Reveal>

        {/* 08 PC to Phone Resume Map */}
        <Reveal>
          <Section title="Resume is a path, not a single step.">
            <Prose>
              <p>
                The experience is a lifecycle rather than a one-time handoff:
                the task stays active, the transition is detected, and the
                system decides how and where to bring it back.
              </p>
            </Prose>
            <ImageBlock
              heading="PC to Phone Resume Map"
              src="/images/casestudy-1/resume-map-flow.webp"
              alt="PC to Phone Resume map showing the active task, transition, and continuation flow"
              evidence="system-model"
            />
          </Section>
        </Reveal>

        {/* 09 Entry Points */}
        <Reveal>
          <Section title="Same capability. Right moment.">
            <Prose>
              <p>
                Where should continuity appear? The answer depends on how much
                of the user's attention is already available. Now Bar is
                ambient, always present but never demanding attention.
                Notification is timely, appearing exactly when a resume moment
                becomes relevant. App Switcher is active, surfacing resume
                while the user is already mid-task. Widget is persistent, a
                standing entry point the user chooses to keep visible.
              </p>
            </Prose>
            <div className="grid sm:grid-cols-2 gap-4">
              <ImageBlock
                heading="Now Bar: single app ready to resume"
                src="/images/casestudy-1/nowbar-single-app.webp"
                alt="Now Bar showing a single active app ready to resume"
                evidence="design-exploration"
              />
              <ImageBlock
                heading="Now Bar: multiple apps available"
                src="/images/casestudy-1/nowbar-multiple-app.webp"
                alt="Now Bar showing multiple apps available to resume"
                evidence="design-exploration"
              />
            </div>
            <ImageBlock
              heading="Notification: a contextual resume prompt"
              src="/images/casestudy-1/teams-notification.webp"
              alt="Notification prompting the user to resume a task"
              evidence="design-exploration"
            />
            <ImageBlock
              heading="Status chip: a persistent multi-app indicator"
              src="/images/casestudy-1/status-chip-multiple-app.webp"
              alt="Status chip indicating multiple apps available to resume"
              evidence="design-exploration"
            />
            <Placeholder
              icon={LayoutGrid}
              title="Continuity Entry Point Spectrum"
              type="Comparison diagram placeholder"
              descriptor="Now Bar, Notification, App Switcher and Widget positioned across ambient to persistent attention"
              color="var(--icon-teal)"
            />
          </Section>
        </Reveal>

        {/* 10 The Proposed Experience */}
        <Reveal>
          <Section title="The moment continuity becomes real.">
            <VideoBlock
              heading="A Teams call, resumed exactly where it left off"
              src="/videos/pc-to-phone-teams-call.mp4"
              evidence="design-exploration"
            />
            <StepFlow
              variant="numbered"
              steps={[
                { icon: Monitor, iconColor: 'var(--icon-blue)', title: 'On the PC', description: 'Teams call is active on PC.' },
                { icon: LogOut, iconColor: 'var(--icon-orange)', title: 'Leaving', description: 'The user leaves the PC.' },
                { icon: Smartphone, iconColor: 'var(--icon-purple)', title: 'On the phone', description: 'The phone surfaces a contextual resume opportunity.' },
                { icon: PhoneCall, iconColor: 'var(--icon-green)', title: 'Resumed', description: 'The user continues the call.' },
              ]}
            />
            <ImageBlock
              heading="The resume prompt on phone"
              src="/images/casestudy-1/teams-notification.webp"
              alt="Phone notification prompting the user to resume the Teams call"
            />
            <Prose callout kind="outcome">
              <p className="text-center text-lg font-semibold">
                Same call. Same context. No reconstruction.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 11 Explorations */}
        <Reveal>
          <Section title="Getting the balance right took iteration, not a first guess.">
            <IconCardList
              items={[
                {
                  icon: PanelsTopLeft,
                  iconColor: 'var(--icon-blue)',
                  title: 'Where should resume appear?',
                  description: 'Ambient surfaces like the Now Bar worked for a single active task. Once more than one app had something to resume, the same surface needed to communicate volume, not just presence, which is why the single-app and multi-app states diverge.',
                },
                {
                  icon: Clock,
                  iconColor: 'var(--icon-teal)',
                  title: 'When should it appear?',
                  description: "A notification made sense for time-sensitive moments like an active call, where waiting costs the user something. Less urgent tasks didn't need that same level of interruption.",
                },
                {
                  icon: Eye,
                  iconColor: 'var(--icon-purple)',
                  title: 'How much should the system infer?',
                  description: "A persistent status chip let the system stay quiet about tasks it wasn't confident enough to actively surface, while keeping them reachable.",
                },
              ]}
            />
          </Section>
        </Reveal>

        {/* 12 Role */}
        <Reveal>
          <Section title="What I was responsible for">
            <Ownership
              items={[
                { dimension: 'vision', description: 'Defined the continuity vision as part of the broader Connected Experience strategy.' },
                { dimension: 'system', description: 'Designed system-level patterns for cross-device resume across PC and phone.' },
                { dimension: 'experience', description: 'Balanced implicit intelligence with explicit user control across sensitive and non-sensitive scenarios.' },
                { dimension: 'collaboration', description: 'Partnered closely with Product Management and Engineering to align feasibility, platform constraints, and long-term scalability.' },
                { dimension: 'execution', description: 'Led end-to-end design for PC to Phone Resume, from concept through active development.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* 13 Impact */}
        <Reveal>
          <Section title="Impact (Directional)">
            <div className="space-y-3">
              {[
                { icon: TrendingUp, color: 'var(--icon-blue)', text: 'Continuity now feels like part of the Windows ecosystem, not an afterthought.' },
                { icon: Zap, color: 'var(--icon-green)', text: 'Fewer moments where switching devices means restarting a task.' },
                { icon: Target, color: 'var(--icon-orange)', text: 'More engagement with connected, cross-device experiences.' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="rounded-xl border border-border bg-muted/30 p-5 flex items-center gap-4"
                >
                  <item.icon className="w-6 h-6 shrink-0" style={{ color: item.color }} />
                  <p className="text-foreground font-semibold text-lg">{item.text}</p>
                </div>
              ))}
            </div>
            <Prose>
              <p className="text-sm italic">
                (Exact metrics are tracked internally. These directional outcomes
                shaped iteration and expansion.)
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* 14 What Made This Hard */}
        <Reveal>
          <Section title="The hard part wasn't the handoff. It was trust.">
            <IconCardList
              columns={3}
              items={[
                { icon: Shield, iconColor: 'var(--icon-blue)', title: 'Platform', description: 'Android and iOS have different affordances.' },
                { icon: Target, iconColor: 'var(--icon-teal)', title: 'Ecosystem', description: 'System, app, and partner expectations need alignment.' },
                { icon: Shield, iconColor: 'var(--icon-purple)', title: 'Intelligence', description: 'The system needs to feel useful without feeling intrusive.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* 15 Learnings */}
        <Reveal>
          <Section title="What this changed in my thinking">
            <div className="space-y-4">
              <PrincipleBlock number={1} title="Continuity should feel inevitable, not impressive" iconColor="var(--icon-blue)">
                The best version of this experience is the one nobody notices. It
                should feel like it was always there, not like a clever feature.
              </PrincipleBlock>
              <PrincipleBlock number={2} title="Reducing decisions matters more than adding options" iconColor="var(--icon-purple)">
                Every choice point is a place users can drop off. Good
                cross-device experiences remove decisions rather than offering
                more of them.
              </PrincipleBlock>
              <PrincipleBlock number={3} title="Trust travels with intelligence" iconColor="var(--icon-orange)">
                A system that acts on your behalf has to earn the right to do
                that. Speed doesn't matter if the user doesn't trust what's
                happening.
              </PrincipleBlock>
            </div>
          </Section>
        </Reveal>

        {/* 16 Closing */}
        <Reveal>
          <Takeaway
            supporting={
              <>
                PC to Phone Resume is one expression of a broader continuity system.
                The long-term opportunity is to make Windows feel less like a
                collection of devices and more like a continuous environment that
                follows the user's task, context, and intent.
              </>
            }
          >
            Changing devices should feel irrelevant.
          </Takeaway>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Monitor className="w-5 h-5" style={{ color: 'var(--icon-blue)' }} />
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <Layers className="w-5 h-5" style={{ color: 'var(--icon-purple)' }} />
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
            <Smartphone className="w-5 h-5" style={{ color: 'var(--icon-teal)' }} />
          </div>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="pc-to-phone-resume" />
        </Reveal>
      </div>
    </div>
  );
}

export { PcToPhoneResumePage };
