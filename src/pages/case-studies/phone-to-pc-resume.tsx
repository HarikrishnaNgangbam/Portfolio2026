import {
  Smartphone,
  Monitor,
  Bell,
  LayoutPanelLeft,
  Target,
  Zap,
  Clock,
  X,
  Layers,
  TrendingUp,
  Shield,
} from 'lucide-react';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { RoleSection } from '@/components/casestudy/role-section';
import { Section } from '@/components/casestudy/section';
import { Prose } from '@/components/casestudy/prose';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { ImageBlock, VideoBlock } from '@/components/casestudy/image-block';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { PressGrid } from '@/components/casestudy/press-grid';
import { ChecklistSection } from '@/components/casestudy/checklist-section';
import { LinkList } from '@/components/casestudy/link-list';
import { AppScenarioCard } from '@/components/casestudy/app-scenario-card';
import {
  SpotifyIcon,
  SamsungBrowserIcon,
  Microsoft365Icon,
  WhatsAppIcon,
  ChromeIcon,
  EdgeIcon,
  SamsungNotesIcon,
} from '@/design-system/ui/icons/brands';
import { Reveal } from '@/components/reveal';

function PhoneToPcResumePage() {
  return (
    <div className="pb-20">
      <CaseStudyHero
        breadcrumbLabel="Cross Device Resume"
        badges={['Phone → PC Continuity']}
        title="Phone to PC Resume: Designing Windows Cross Device Continuity Experience"
        subtitle="Enabling users to seamlessly continue their task across Connected Devices"
        meta={[
          { label: 'Role', value: 'Lead UX Designer' },
          { label: 'Timeline', value: 'Sep 2025 - Jan 2026' },
          { label: 'Platform', value: 'Windows 11' },
          { label: 'Status', value: 'Shipped (GA - Jan 2026)' },
        ]}
        coverImage="/images/shared/project-phone-to-pc-cover.png"
        coverAlt="Phone to PC Resume - Taskbar and system-level continuity"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        <Reveal>
          <Section title="Overview">
            <Prose>
              <p>
                Often modern work often starts on a phone, reading an email, browsing
                the web, listening to music, or opening a document and naturally
                continues on a PC when the need for focus, speed, or screen real estate
                increases.
              </p>
              <p>
                Before Windows <strong>"Cross Device Resume"</strong> (Phone to PC
                Resume/Continuity), this transition was fragile. Users manually shared
                links, reopened apps, searched for the right context, and mentally
                re-oriented after switching devices. Friction appeared precisely when
                user intent was highest.
              </p>
            </Prose>
            <Prose callout>
              <strong>Cross Device Phone to PC Resume (Phone to PC Continuity)</strong>{' '}
              is a <strong>system-level</strong> capability in Windows that enables
              users to <strong>continue an active task</strong> from their{' '}
              <strong>phone</strong> directly on their <strong>PC</strong>, without
              restarting or hunting for context, turning Windows into an{' '}
              <strong>active continuation partner</strong> rather than a{' '}
              <em>passive destination</em>.
            </Prose>
            <MetaGrid
              items={[
                { label: 'Platform', value: 'Windows', pillColor: 'blue' },
                {
                  label: 'Domain',
                  value: 'Connected Experience & Ecosystem',
                  pillColor: 'purple',
                },
                { label: 'Experience Pillar', value: 'Continuity', pillColor: 'blue' },
                {
                  label: 'Capability',
                  value: 'Cross‑Device Resume (Phone to PC)',
                  pillColor: 'green',
                },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <RoleSection
            title="Lead UX Designer"
            bullets={[
              <>Defined the Windows's <strong>Continuity Experience Stretegy</strong></>,
              <>Drove system-level UX strategy for <strong>Phone to PC continuity</strong> on Windows</>,
              <><strong>Designed primary entry points for Phone to PC Resume</strong> (Taskbar-first, progressive disclosure)</>,
              <>Led design alignment across PM, Engineering, Platform Teams and{' '}
                <strong>external partners (including Samsung, Spotify, WhatsApp, etc.)</strong></>,
              <>Authored narrative for long term <strong>Windows Connected Intelligence Continuity strategy</strong></>,
              <>Shaped the shipped experience for <strong>High Value Scenarios</strong> of Media
                (<strong>Spotify</strong>), Browser(<strong>Vivo</strong>) &amp; Online files{' '}
                (<strong>M365</strong>) Continuity)</>,
            ]}
          />
        </Reveal>

        <Reveal>
          <Section title="Problem">
            <Prose>
              <p>Phone to PC transitions required manual effort:</p>
            </Prose>
            <IconCardList
              items={[
                {
                  icon: X,
                  iconColor: '#dc2626',
                  title: 'Sending links or files to oneself',
                  description: 'Email, cloud storage, or manual copying required',
                },
                {
                  icon: X,
                  iconColor: '#dc2626',
                  title: 'Reopening the correct app and locating context',
                  description: 'The exact position, state, and session were lost',
                },
                {
                  icon: X,
                  iconColor: '#dc2626',
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
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Why Now">
            <ImageBlock
              src="/images/casestudy-0/churn-reason-chart.png"
              alt="Connected Ecosystem: Top reason for churn - Lack of seamless continuity"
            />
            <IconCardList
              items={[
                {
                  icon: Clock,
                  title: 'Continuity is a baseline expectation, not a differentiator',
                  bullets: [
                    'Apple has normalized OS‑level continuity (Handoff, Universal Clipboard, AirDrop) across iPhone – iPad – Mac, setting user expectations for seamless task continuation across devices',
                    'These experiences are system-owned, always on, and require no app‑level setup, shaping daily workflows for hundreds of millions of users',
                  ],
                },
                {
                  icon: Layers,
                  iconColor: '#c2410c',
                  title: 'Windows lacked a clear, system-owned continuity model',
                  bullets: [
                    'Continuity signals on Windows existed as fragmented app integrations and passive notifications, not as a reliable OS behavior',
                    "This created a visible experience gap: users couldn't predict where or how to resume tasks, reducing trust in cross‑device workflows",
                  ],
                },
                {
                  icon: TrendingUp,
                  iconColor: 'var(--icon-green)',
                  title: 'The gap has measurable ecosystem impact',
                  bullets: [
                    'Cross‑device experiences are directly linked to retention and platform stickiness; internal data shows Phone Link usage correlates with a +5pt lift in Windows retention (reduced churn to competing platforms)',
                    'Without first‑class continuity, Windows risked losing multi‑device users to ecosystems where continuity is implicit',
                  ],
                },
                {
                  icon: Target,
                  title: 'Phone → PC Resume is a strategic response, not a feature',
                  bullets: [
                    'Reframes continuity from app‑level convenience to an OS‑level capability, owned and orchestrated by Windows',
                    'Designed to scale across 1P + 3P apps, including apps without native PC counterpart, something closed ecosystems cannot do at scale',
                  ],
                },
              ]}
            />
          </Section>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6 space-y-6">
            <div>
              <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground mb-2">
                <Shield className="w-6 h-6 text-primary" />
                Design Principle: Confidence-Driven Continuity
              </h3>
              <p className="text-foreground">
                Instead of treating Resume as a generic notification, we reframed
                continuity as a confidence-based system behavior.
              </p>
            </div>
            <IconCardList
              columns={2}
              items={[
                {
                  icon: Zap,
                  iconColor: 'var(--icon-orange)',
                  title: 'Sync Continuity (Synchronous)',
                  bullets: [
                    'High confidence of user intent',
                    'Short time gap between phone activity and PC presence',
                    <>Windows acts <strong>proactively and prominently</strong></>,
                  ],
                },
                {
                  icon: Clock,
                  iconColor: 'var(--icon-cyan)',
                  title: 'Async Continuity (Asynchronous)',
                  bullets: [
                    'Lower confidence or longer time gap',
                    'Windows avoids interruption',
                    <>Continuation remains <strong>discoverable and calm</strong></>,
                  ],
                },
              ]}
            />
            <CalloutList
              title="This model helped Windows:"
              marker="✓"
              items={['Act decisively when intent is clear', 'Stay respectful and quiet when intent is uncertain']}
            />
          </div>
        </Reveal>

        <Reveal>
          <Section title="Experience Design">
            <h3 className="text-2xl font-bold text-foreground">UX Flow</h3>
            <StepFlow
              steps={[
                { icon: Smartphone, title: 'Phone activity detected', description: 'User performs an action on their phone' },
                { icon: Bell, iconColor: 'var(--icon-purple)', title: 'Taskbar alert appears (ambient)', description: 'Non-intrusive notification in Windows Taskbar' },
                { icon: LayoutPanelLeft, iconColor: 'var(--icon-green)', title: 'Hovercard clarifies origin & action', description: 'Context on what will open and where it came from' },
                { icon: Target, iconColor: 'var(--icon-orange)', title: 'User clicks Resume alert', description: 'Single tap to continue the task' },
                { icon: Monitor, iconColor: 'var(--icon-pink)', title: 'Destination app opens on PC', description: 'Seamless transition to the PC environment' },
              ]}
            />

            <h3 className="text-2xl font-bold text-foreground mt-4">
              Primary Mode: Sync Continuity (Phone to PC Resume)
            </h3>
            <Prose>
              <p>
                When confidence is high, Windows surfaces Resume ingress where action is
                fastest.
              </p>
            </Prose>
            <p className="font-semibold text-foreground">
              Phone to PC Resume Experience - Resume ingress appears on Taskbar
            </p>
            <VideoBlock src="/videos/phone-to-pc-spotify.mp4" />
            <ImageBlock
              src="/images/casestudy-0/spotify-continuity-1.png"
              alt="Phone to PC Resume - Spotify continuity experience"
            />
            <ImageBlock
              src="/images/casestudy-0/spotify-continuity-2.png"
              alt="Spotify Phone to PC continuity experience"
            />
            <ImageBlock
              src="/images/casestudy-0/resume-variations.png"
              alt="Resume from phone continuity variations"
            />

            <div className="rounded-2xl border border-primary/20 bg-accent/10 p-6">
              <h4 className="flex items-center gap-3 text-lg font-bold text-foreground mb-4">
                <LayoutPanelLeft className="w-5 h-5 text-primary" />
                Primary Entry Point
              </h4>
              <div className="rounded-xl border border-primary/30 bg-card p-5">
                <p className="font-semibold text-foreground">Taskbar Resume</p>
                <ul className="mt-2 space-y-1.5 text-muted-foreground text-sm">
                  <li>• Appears inline with active work</li>
                  <li>• Single-click continuation</li>
                  <li>• Reinforces continuity as a system capability, not a one-off alert</li>
                </ul>
              </div>
            </div>

            <ImageBlock
              heading="Design Framework for Taskbar Resume notification"
              src="/images/casestudy-0/taskbar-framework.png"
              alt="Taskbar Resume Design Framework"
            />
            <ImageBlock
              heading="Phone to PC Resume Ingress on Taskbar & Hovercard - Depending on Phone & PC App availability"
              src="/images/casestudy-0/continuity-flow.png"
              alt="Resume from phone continuity variations across app availability"
            />

            <h3 className="text-2xl font-bold text-foreground mt-4">
              Shipped Continuity Scenarios (till Jan 2026)
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <AppScenarioCard
                icon={SpotifyIcon}
                title="Spotify"
                description="Continue playback from phone to PC"
              />
              <AppScenarioCard
                icon={SamsungBrowserIcon}
                title="Browser"
                description="Resume browsing session on PC's default browser"
              />
              <AppScenarioCard
                icon={Microsoft365Icon}
                title="Microsoft 365"
                description="Open Word, Excel, or PowerPoint files (desktop app or web)"
              />
            </div>
            <Prose>
              <p>
                These represent high-frequency, everyday transitions with unambiguous
                intent.
              </p>
            </Prose>

            <h3 className="text-xl font-bold text-foreground mt-4">Coming Soon</h3>
            <Prose>
              <p>Additional continuity scenarios in active development</p>
            </Prose>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <AppScenarioCard icon={WhatsAppIcon} title="WhatsApp" />
              <AppScenarioCard icon={ChromeIcon} title="Chrome" />
              <AppScenarioCard icon={EdgeIcon} title="Edge" />
              <AppScenarioCard icon={SamsungNotesIcon} title="Samsung Note" />
              <AppScenarioCard icon={SamsungBrowserIcon} title="Samsung Browser" />
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Metrics & Impact">
            <h3 className="text-xl font-bold text-foreground">
              Phone → PC Resume (Retail – May 2025)
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
                Intent-based continuity significantly outperforms generic notifications
                (4.2× baseline)
              </p>
            </Prose>

            <h3 className="text-xl font-bold text-foreground mt-6">
              Taskbar Resume (GA – Jan 2026)
            </h3>
            <StatGrid
              columns={2}
              stats={[
                {
                  value: '~28%',
                  label: 'Engagement on Taskbar Resume surfaces',
                  sublabel: 'Early GA / WIP Data',
                },
                {
                  value: '3.3×',
                  label: 'improvement over toasts',
                  sublabel: 'Spotify, Browser, and Microsoft 365 online files',
                },
              ]}
            />
            <Prose>
              <p>This validated Taskbar as the strongest Sync Continuity surface.</p>
            </Prose>

            <h3 className="text-xl font-bold text-foreground mt-6">Ecosystem Impact</h3>
            <Prose callout>
              Cross-device capability is a top driver of Windows purchase intent. Phone
              Link usage shows a <strong>+5pt correlation with Windows retention</strong>,
              reinforcing continuity as an ecosystem lever.
            </Prose>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Media Coverage & External Reactions">
            <Prose>
              <p>
                Phone → PC Continuity (Cross-Device Resume) received broad visibility
                across Microsoft channels and independent tech media, validating both
                the user need and the design direction.
              </p>
            </Prose>
            <CalloutList
              title="Common Themes in Coverage"
              marker="✓"
              tone="positive"
              items={[
                'Resume via the Taskbar feels natural and fast',
                'High-frequency scenarios (Spotify, browser, Office files) resonate immediately',
                'Positioned as a platform capability, not a novelty feature',
              ]}
            />
            <h3 className="text-xl font-bold text-foreground mt-4">Featured Coverage</h3>
            <PressGrid
              items={[
                { src: '/images/casestudy-0/press-sammobile.png', alt: 'SAM MOBILE coverage' },
                { src: '/images/casestudy-0/press-winbuzzer.png', alt: 'WinBuzzer coverage' },
                { src: '/images/casestudy-0/press-techradar.png', alt: 'TechRadar coverage' },
                { src: '/images/casestudy-0/press-windowscentral.png', alt: 'Windows Central coverage' },
                { src: '/images/casestudy-0/press-androidpolice.png', alt: 'Android Police coverage' },
                { src: '/images/casestudy-0/press-thurrott.png', alt: 'Thurrott coverage' },
                { src: '/images/casestudy-0/press-theverge.png', alt: 'The Verge coverage' },
                { src: '/images/casestudy-0/press-bgr.png', alt: 'BGR coverage' },
              ]}
            />
            <h3 className="text-xl font-bold text-foreground mt-4">
              Publicly Available Links
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-foreground mb-2">
                  Official Microsoft Documentation
                </p>
                <LinkList
                  links={[
                    {
                      label: 'Cross-device Resume support page',
                      href: 'https://support.microsoft.com/en-us/windows/cross-device-resume-feature-9ada0c0b-f70f-4806-abac-b7126fa6a053',
                    },
                    {
                      label: 'Windows Insider Blog – Release Preview update (Jan 27, 2026)',
                      href: 'https://blogs.windows.com/windows-insider/2026/01/27/releasing-windows-11-builds-26100-7701-and-26200-7701-to-the-release-preview-channel/',
                    },
                  ]}
                />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">Independent Media Coverage</p>
                <LinkList
                  links={[
                    {
                      label: "The Verge – Windows 11's ability to resume Android apps like Apple Handoff",
                      href: 'https://www.theverge.com/news/869161/microsoft-windows-11-android-app-resume-feature-release-preview',
                    },
                    {
                      label: 'Android Authority – Windows 11 expands Cross-Device Resume',
                      href: 'https://www.androidauthority.com/windows-11-cross-device-resume-preview-channel-3636114/',
                    },
                    {
                      label: 'TechRepublic – New Windows 11 features arrive',
                      href: 'https://www.techrepublic.com/article/news-windows-11-february-2026-update-cross-device-resume/',
                    },
                    {
                      label: 'Windows Latest – Microsoft uses the Windows 11 taskbar to resume Android activities',
                      href: 'https://www.windowslatest.com/2025/11/25/microsoft-is-using-windows-11-taskbar-to-resume-your-android-activities/',
                    },
                  ]}
                />
              </div>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <Section title="Outcome">
            <ChecklistSection
              intro="Phone → PC Continuity established a durable, scalable continuity pattern on Windows:"
              items={[
                'Users move from phone to PC without restarting work',
                "Windows acts when intent is clear and stays respectful when it's not",
                'Sync & Async Continuity form the foundation for bidirectional continuity (PC → Phone) and future Connected Intelligence investments',
              ]}
              closingStatement="This work repositioned Windows from a collection of devices to a system that moves with the user."
            />
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

export { PhoneToPcResumePage };
