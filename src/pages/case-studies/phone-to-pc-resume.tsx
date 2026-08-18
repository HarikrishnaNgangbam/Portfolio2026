import { useState } from 'react';
import {
  Smartphone,
  Monitor,
  LayoutPanelLeft,
  Target,
  Zap,
  Clock,
  X,
  Layers,
  TrendingUp,
  Shield,
  ArrowRight,
  ArrowLeftRight,
  HelpCircle,
  Search,
  Users,
  Check,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { ImageBlock, VideoBlock } from '@/components/casestudy/image-block';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { PressGrid } from '@/components/casestudy/press-grid';
import { LinkList } from '@/components/casestudy/link-list';
import { AppScenarioCard } from '@/components/casestudy/app-scenario-card';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { PrincipleBlock } from '@/design-system/ui/principle-block';
import {
  SpotifyIcon,
  BrowserIcon,
  Microsoft365Icon,
  WhatsAppIcon,
  ChromeIcon,
  EdgeIcon,
  SamsungNotesIcon,
  SamsungBrowserIcon,
} from '@/design-system/ui/icons/brands';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';

const PRESS_FEATURED = [
  { src: '/images/casestudy-0/press-theverge.webp', alt: 'The Verge coverage' },
  { src: '/images/casestudy-0/press-techradar.webp', alt: 'TechRadar coverage' },
  { src: '/images/casestudy-0/press-windowscentral.webp', alt: 'Windows Central coverage' },
  { src: '/images/casestudy-0/press-androidpolice.webp', alt: 'Android Police coverage' },
];

const PRESS_MORE = [
  { src: '/images/casestudy-0/press-sammobile.webp', alt: 'SAM MOBILE coverage' },
  { src: '/images/casestudy-0/press-winbuzzer.webp', alt: 'WinBuzzer coverage' },
  { src: '/images/casestudy-0/press-thurrott.webp', alt: 'Thurrott coverage' },
  { src: '/images/casestudy-0/press-bgr.webp', alt: 'BGR coverage' },
];

function PhoneToPcResumePage() {
  const [showMorePress, setShowMorePress] = useState(false);

  return (
    <div className="pb-20">
      <Seo
        title="Phone to PC Continuity"
        description="How Windows learned to anticipate where work should continue: a confidence-driven approach to cross-device resume across phone and PC."
      />
      <CaseStudyHero
        eyebrow="Microsoft · Windows Connected Experience & Ecosystem"
        breadcrumbLabel="Phone → PC Continuity"
        badges={['Phone → PC Continuity']}
        title="Phone → PC Continuity"
        subtitle="When Windows learned to anticipate where work should continue."
        meta={[
          { label: 'Role', value: 'Lead UX Designer' },
          { label: 'Timeline', value: 'Sep 2025 - Jan 2026' },
          { label: 'Platform', value: 'Windows 11' },
          { label: 'Status', value: 'Shipped · GA Jan 2026' },
        ]}
        coverImage="/images/shared/project-phone-to-pc-cover.webp"
        coverAlt="Phone to PC Resume - Taskbar and system-level continuity"
        iconFlow={[
          { icon: Smartphone, color: 'var(--icon-teal)' },
          { icon: ArrowRight, color: 'var(--icon-orange)' },
          { icon: Monitor, color: 'var(--icon-blue)' },
        ]}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        {/* The Human Moment */}
        <Reveal>
          <Section title="The moment is simple. The system isn't.">
            <Prose>
              <p>
                You start something on your phone. Maybe it's a song, a document, a
                webpage or a message. Later, you're sitting at your PC.
              </p>
              <p>
                You shouldn't have to remember what you were doing, find the right app,
                send yourself a link, or reconstruct your context. You should simply be
                able to continue.
              </p>
            </Prose>
            <Prose callout>
              The challenge was making Windows understand that transition without
              becoming another interruption.
            </Prose>
            <MetaGrid
              items={[
                { label: 'Platform', value: 'Windows', pillColor: 'blue' },
                { label: 'Domain', value: 'Connected Experience & Ecosystem', pillColor: 'purple' },
                { label: 'Experience Pillar', value: 'Continuity', pillColor: 'blue' },
                { label: 'Capability', value: 'Cross-Device Resume (Phone to PC)', pillColor: 'green' },
              ]}
            />
          </Section>
        </Reveal>

        {/* The Problem */}
        <Reveal>
          <Section title="The old model treated continuity as a notification problem.">
            <StepFlow
              steps={[
                { icon: Smartphone, title: 'Start on phone', description: 'Activity begins' },
                { icon: ArrowLeftRight, iconColor: 'var(--icon-orange)', title: 'Switch devices', description: 'Move to the PC' },
                { icon: HelpCircle, iconColor: 'var(--icon-red)', title: 'Where was I?', description: 'Context is lost' },
                { icon: Search, iconColor: 'var(--icon-purple)', title: 'Find context', description: 'Manually search or reopen' },
                { icon: Check, iconColor: 'var(--icon-green)', title: 'Continue', description: 'Finally resume, if at all' },
              ]}
            />
            <IconCardList
              items={[
                {
                  icon: X,
                  iconColor: 'var(--icon-red)',
                  title: 'Sending links or files to oneself',
                  description: 'Email, cloud storage, or manual copying required',
                },
                {
                  icon: X,
                  iconColor: 'var(--icon-red)',
                  title: 'Reopening the correct app and locating context',
                  description: 'The exact position, state, and session were lost',
                },
                {
                  icon: X,
                  iconColor: 'var(--icon-red)',
                  title: 'Reconstructing mental state after switching devices',
                  description: 'Cognitive overhead disrupted flow and momentum',
                },
              ]}
            />
            <CalloutList
              title="This caused:"
              tone="negative"
              items={[
                'Drop-off during high-intent moments',
                'Cognitive overhead during transitions',
                "A perception of Windows as disconnected from the user's flow",
              ]}
            />
            <Prose callout>
              The real problem wasn't that users couldn't move between devices. It was
              that the device transition broke their mental model of the task.
            </Prose>
          </Section>
        </Reveal>

        {/* Why This Was a Systems Problem */}
        <Reveal>
          <Section title="Continuity couldn't belong to an app.">
            <Prose>
              <p>The experience needed to work across:</p>
            </Prose>
            <CalloutList
              marker="•"
              items={[
                'First-party and third-party apps',
                'Different phone manufacturers',
                'Apps with and without a native PC counterpart',
                'Different time gaps between phone and PC activity',
                "Different levels of user intent",
                'Different PC states',
              ]}
            />
            <Prose callout>
              The design challenge wasn't simply creating a Resume action. It was
              defining how Windows should behave when it knows something might be worth
              continuing.
            </Prose>

            <div className="grid sm:grid-cols-3 gap-3 items-center">
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <Smartphone className="w-6 h-6 mb-2" style={{ color: 'var(--icon-teal)' }} />
                <p className="font-semibold text-foreground">Phone</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Spotify, browser, other activity
                </p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 sm:rotate-0" />
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <Shield className="w-6 h-6 mb-2 text-primary" />
                <p className="font-semibold text-foreground">Windows continuity system</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Taskbar, hovercard, Resume
                </p>
              </div>
            </div>

            <IconCardList
              columns={2}
              items={[
                {
                  icon: Clock,
                  title: 'Continuity was already a baseline expectation',
                  description:
                    'Apple normalized OS-level continuity (Handoff, Universal Clipboard) across iPhone, iPad and Mac, setting user expectations for seamless task continuation.',
                },
                {
                  icon: Layers,
                  iconColor: '#c2410c',
                  title: 'Windows lacked a system-owned model',
                  description:
                    "Continuity signals existed as fragmented app integrations, not a reliable OS behavior. Users couldn't predict where or how to resume a task.",
                },
                {
                  icon: TrendingUp,
                  iconColor: 'var(--icon-green)',
                  title: 'The gap had ecosystem consequences',
                  description:
                    'Cross-device experiences are directly linked to retention and platform stickiness, not just individual task completion.',
                },
                {
                  icon: Target,
                  title: 'This called for a strategic response, not a feature',
                  description:
                    'Reframing continuity as an OS-level capability designed to scale across first- and third-party apps, including apps without a native PC counterpart.',
                },
              ]}
            />
          </Section>
        </Reveal>

        {/* My Role */}
        <Reveal>
          <Section title="My role">
            <Prose>
              <p>
                I led the UX strategy for Phone → PC Continuity, from defining the
                experience model to shaping the primary entry points and aligning the
                system across Product, Engineering, Platform teams and external
                partners, including Samsung, Spotify and WhatsApp.
              </p>
            </Prose>
            <IconCardList
              columns={2}
              items={[
                { icon: Target, title: 'Strategy', description: 'Defined the Windows Continuity experience strategy.' },
                { icon: Layers, iconColor: 'var(--icon-purple)', title: 'System design', description: 'Established the interaction model for Phone → PC Resume.' },
                { icon: LayoutPanelLeft, iconColor: 'var(--icon-green)', title: 'Experience', description: 'Designed the primary Taskbar-first entry point and progressive disclosure model.' },
                { icon: Users, iconColor: 'var(--icon-orange)', title: 'Alignment', description: 'Worked across Product, Engineering, Platform teams and external partners.' },
              ]}
            />
          </Section>
        </Reveal>

        {/* The Design Question */}
        <Reveal>
          <Section title="So how proactive should Windows be?">
            <Prose>
              <p>
                Too passive, and users have to search for continuity themselves. Too
                proactive, and Windows interrupts them with activity they may not care
                about.
              </p>
            </Prose>
            <Prose callout>
              The more confident Windows is about a user's intent, the more proactive it
              can be.
            </Prose>
          </Section>
        </Reveal>

        {/* Confidence-Driven Continuity */}
        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 space-y-6">
            <div>
              <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground mb-2">
                <Shield className="w-7 h-7 text-primary" />
                Confidence-Driven Continuity
              </h2>
              <p className="text-foreground">
                Continuity should respond to confidence, not simply activity.
              </p>
            </div>
            <IconCardList
              columns={2}
              items={[
                {
                  icon: Zap,
                  iconColor: 'var(--icon-orange)',
                  title: 'High confidence: act',
                  bullets: [
                    'Recent activity, a clear task',
                    'User is at the PC, destination is known',
                    <>Experience: <strong>proactive surfacing</strong> via Taskbar and Resume</>,
                  ],
                },
                {
                  icon: Clock,
                  iconColor: 'var(--icon-cyan)',
                  title: 'Low confidence: stay discoverable',
                  bullets: [
                    'Older activity, unclear intent',
                    'Ambiguous destination',
                    <>Experience: <strong>stay quiet</strong> and remain discoverable</>,
                  ],
                },
              ]}
            />
            <div className="rounded-xl border border-primary/30 bg-card p-5 text-center">
              <p className="font-semibold text-lg text-foreground">
                Continuity should feel like Windows understands the user's intent, not
                like Windows is reporting everything the phone did.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Key Design Decisions */}
        <Reveal>
          <Section title="Turning the principle into an experience">
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  01. Taskbar became the primary surface.
                </h3>
                <Prose>
                  <p>
                    Rather than introducing another notification destination, we placed
                    Resume where ongoing work already lives: close to the existing
                    Windows mental model, near active work, with system-owned
                    interaction and lower cognitive overhead.
                  </p>
                </Prose>
                <ImageBlock
                  heading="Design framework for Taskbar Resume"
                  src="/images/casestudy-0/taskbar-framework.webp"
                  alt="Taskbar Resume design framework"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  02. Progressive disclosure instead of immediate interruption.
                </h3>
                <Prose>
                  <p>Users get more context only when they ask for it.</p>
                </Prose>
                <StepFlow
                  variant="numbered"
                  steps={[
                    { icon: Smartphone, iconColor: 'var(--icon-teal)', title: 'Signal', description: 'Ambient Taskbar indicator' },
                    { icon: LayoutPanelLeft, iconColor: 'var(--icon-purple)', title: 'Context', description: 'Hovercard shows origin and action' },
                    { icon: Target, iconColor: 'var(--icon-orange)', title: 'Action', description: 'Single click to Resume' },
                  ]}
                />
                <VideoBlock
                  heading="Signal to Resume, demonstrated with Spotify"
                  src="/videos/phone-to-pc-spotify.mp4"
                />
                <ImageBlock
                  heading="Resume ingress on Taskbar and hovercard, by app availability"
                  src="/images/casestudy-0/continuity-flow.webp"
                  alt="Resume continuity variations across app availability"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  03. Make the destination predictable.
                </h3>
                <Prose>
                  <p>
                    One of the biggest anxieties in continuity is not knowing what will
                    happen after selecting Resume. The hovercard needed to answer what
                    is being resumed, where it will open, and what to expect.
                  </p>
                </Prose>
                <Prose callout>
                  The user should understand the consequence before committing to it.
                </Prose>
                <div className="grid sm:grid-cols-2 gap-4">
                  <ImageBlock
                    src="/images/casestudy-0/spotify-continuity-1.webp"
                    alt="Spotify continuity hovercard state"
                  />
                  <ImageBlock
                    src="/images/casestudy-0/spotify-continuity-2.webp"
                    alt="Spotify continuity hovercard state, expanded"
                  />
                </div>
                <ImageBlock
                  heading="Resume variations communicating what will happen next"
                  src="/images/casestudy-0/resume-variations.webp"
                  alt="Resume from phone continuity variations"
                />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* Designing for Different Kinds of Work */}
        <Reveal>
          <Section title="One continuity model. Different kinds of work.">
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Media</p>
                <AppScenarioCard
                  icon={SpotifyIcon}
                  title="Spotify"
                  description="Continue playback without rebuilding the context."
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Web</p>
                <AppScenarioCard
                  icon={BrowserIcon}
                  title="Browser"
                  description="Resume the browsing session where the user left off."
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Productivity</p>
                <AppScenarioCard
                  icon={Microsoft365Icon}
                  title="Microsoft 365"
                  description="Reopen the relevant work and continue from the appropriate context."
                />
              </div>
            </div>
            <Prose>
              <p>
                The interaction model remained consistent even though the underlying
                task and destination differed.
              </p>
            </Prose>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">Coming soon</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Additional continuity scenarios in active development
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                <AppScenarioCard icon={WhatsAppIcon} title="WhatsApp" />
                <AppScenarioCard icon={ChromeIcon} title="Chrome" />
                <AppScenarioCard icon={EdgeIcon} title="Edge" />
                <AppScenarioCard icon={SamsungNotesIcon} title="Samsung Notes" />
                <AppScenarioCard icon={SamsungBrowserIcon} title="Samsung Browser" />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* Scaling the Pattern */}
        <Reveal>
          <Section title="One pattern. Many destinations.">
            <div className="grid sm:grid-cols-3 gap-3 items-center">
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <Smartphone className="w-6 h-6 mb-2" style={{ color: 'var(--icon-teal)' }} />
                <p className="font-semibold text-foreground">Phone activity</p>
                <p className="text-muted-foreground text-sm mt-1">Continuity signal</p>
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90 sm:rotate-0" />
              </div>
              <div className="rounded-xl border border-border bg-muted/30 p-5">
                <Layers className="w-6 h-6 mb-2 text-primary" />
                <p className="font-semibold text-foreground">Windows</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Spotify, browser, Microsoft 365, and more
                </p>
              </div>
            </div>
            <Prose>
              <p>
                The experience needed to remain coherent even when the destination
                experience differed. This is what made it a platform behavior rather
                than a feature tuned for a single app.
              </p>
            </Prose>
          </Section>
        </Reveal>

        {/* Measured Impact */}
        <Reveal>
          <Section title="Did the model work?">
            <h3 className="text-xl font-bold text-foreground">
              Phone → PC Resume (Retail, May 2025)
            </h3>
            <StatGrid
              columns={3}
              stats={[
                { value: '3.1M', label: 'Monthly Resume alerts delivered' },
                { value: '290K+', label: 'Monthly engaged users' },
                {
                  value: '8.5%',
                  label: 'Conversion on Resume toasts',
                  sublabel: 'vs. ~1-2% for standard Windows toasts',
                },
              ]}
            />
            <Prose>
              <p>
                Resume toasts converted at roughly 4.2× the baseline of standard Windows
                toasts.
              </p>
            </Prose>

            <h3 className="text-xl font-bold text-foreground mt-6">
              Taskbar Resume (early GA / WIP data, GA Jan 2026)
            </h3>
            <StatGrid
              columns={2}
              stats={[
                {
                  value: '~28%',
                  label: 'Engagement on Taskbar Resume surfaces',
                  sublabel: 'Early GA / WIP data',
                },
                {
                  value: '3.3×',
                  label: 'Improvement over toasts',
                  sublabel: 'Spotify, Browser, and Microsoft 365 online files',
                },
              ]}
            />
            <Prose>
              <p>This validated Taskbar as the strongest surface for high-confidence continuity.</p>
            </Prose>
          </Section>
        </Reveal>

        {/* Ecosystem Signal */}
        <Reveal>
          <Section title="An ecosystem signal">
            <div className="rounded-xl border border-border bg-muted/20 p-5 max-w-md">
              <p className="text-2xl font-bold text-foreground">+5pt correlation</p>
              <p className="text-muted-foreground text-sm mt-1">
                Between Phone Link usage and Windows retention, reinforcing the
                strategic value of cross-device experiences. Correlation, not a measured
                causal effect of Resume itself.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* External Validation */}
        <Reveal>
          <Section title="The experience also resonated externally.">
            <Prose>
              <p>
                Coverage highlighted the Taskbar as a natural entry point and positioned
                Resume as part of a broader Windows continuity experience.
              </p>
            </Prose>
            <PressGrid
              items={showMorePress ? [...PRESS_FEATURED, ...PRESS_MORE] : PRESS_FEATURED}
              columns={2}
            />
            {!showMorePress && (
              <button
                type="button"
                onClick={() => setShowMorePress(true)}
                className="text-primary font-medium text-sm hover:underline"
              >
                View more coverage
              </button>
            )}

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="font-semibold text-foreground mb-2">Official Microsoft documentation</p>
                <LinkList
                  links={[
                    {
                      label: 'Cross-device Resume support page',
                      href: 'https://support.microsoft.com/en-us/windows/cross-device-resume-feature-9ada0c0b-f70f-4806-abac-b7126fa6a053',
                    },
                    {
                      label: 'Windows Insider Blog: Release Preview update (Jan 27, 2026)',
                      href: 'https://blogs.windows.com/windows-insider/2026/01/27/releasing-windows-11-builds-26100-7701-and-26200-7701-to-the-release-preview-channel/',
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Independent media coverage</p>
                <LinkList
                  links={[
                    {
                      label: "The Verge: Windows 11's ability to resume Android apps like Apple Handoff",
                      href: 'https://www.theverge.com/news/869161/microsoft-windows-11-android-app-resume-feature-release-preview',
                    },
                    {
                      label: 'Android Authority: Windows 11 expands Cross-Device Resume',
                      href: 'https://www.androidauthority.com/windows-11-cross-device-resume-preview-channel-3636114/',
                    },
                    {
                      label: 'TechRepublic: New Windows 11 features arrive',
                      href: 'https://www.techrepublic.com/article/news-windows-11-february-2026-update-cross-device-resume/',
                    },
                    {
                      label: 'Windows Latest: Microsoft uses the Windows 11 taskbar to resume Android activities',
                      href: 'https://www.windowslatest.com/2025/11/25/microsoft-is-using-windows-11-taskbar-to-resume-your-android-activities/',
                    },
                  ]}
                />
              </div>
            </div>
          </Section>
        </Reveal>

        {/* What Changed */}
        <Reveal>
          <Section title="What changed">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Before</p>
                <p className="font-semibold text-foreground">Connected devices</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Users had to reconstruct context between them.
                </p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-accent/10 p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">After</p>
                <p className="font-semibold text-foreground">A system that moves with the user</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Windows can help users pick up where they left off.
                </p>
              </div>
            </div>
            <Prose>
              <p>
                Phone → PC Resume established a system-level continuity pattern that can
                extend across devices, apps and future directions such as bidirectional
                continuity.
              </p>
            </Prose>
            <div className="rounded-xl border border-primary/30 p-5 text-center">
              <p className="font-semibold text-lg text-foreground">
                Windows moved from a collection of connected devices to a system that
                moves with the user.
              </p>
            </div>
          </Section>
        </Reveal>

        {/* What I Learned */}
        <Reveal>
          <Section title="What this taught me">
            <div className="grid sm:grid-cols-1 gap-4">
              <PrincipleBlock number={1} title="Systems design is often about behavior" iconColor="var(--icon-blue)">
                The important design decision wasn't the appearance of the Resume
                surface. It was deciding when Windows should act.
              </PrincipleBlock>
              <PrincipleBlock number={2} title="Good platform experiences create rules that scale" iconColor="var(--icon-purple)">
                A clear interaction model made it possible to support very different
                scenarios without reinventing the experience each time.
              </PrincipleBlock>
              <PrincipleBlock number={3} title="Proactivity needs restraint" iconColor="var(--icon-orange)">
                The more intelligent a system becomes, the more important it is to know
                when not to interrupt.
              </PrincipleBlock>
            </div>
          </Section>
        </Reveal>

        {/* My Contribution */}
        <Reveal>
          <Section title="My contribution">
            <Prose callout>
              I helped define the experience model, align cross-functional teams around
              it, and turn an ambiguous continuity problem into a scalable system
              pattern that shipped across Windows.
            </Prose>
          </Section>
        </Reveal>

        {/* Closing */}
        <Reveal>
          <div className="text-center py-6">
            <p className="text-2xl md:text-3xl font-bold text-foreground max-w-2xl mx-auto leading-snug">
              Windows doesn't need to ask where you want to work next. It can help you
              pick up where you left off.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <CaseStudyNav slug="phone-to-pc-resume" />
        </Reveal>
      </div>
    </div>
  );
}

export { PhoneToPcResumePage };
