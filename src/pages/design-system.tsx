import { useState } from 'react';
import {
  Mail,
  MapPin,
  Briefcase,
  Award,
  Smartphone,
  Bell,
  Target,
  X,
  Check,
} from 'lucide-react';
import { Button } from '@/design-system/ui/button';
import { Badge } from '@/design-system/ui/badge';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { IconList } from '@/design-system/ui/icon-list';
import { DotList } from '@/design-system/ui/dot-list';
import { CardHeading } from '@/design-system/ui/card-heading';
import { ContactInfoCard } from '@/design-system/ui/contact-info-card';
import { ExperienceCard } from '@/design-system/ui/experience-card';
import { ProjectCard } from '@/components/portfolio/project-card';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { RoleSection } from '@/components/casestudy/role-section';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { StepFlow } from '@/components/casestudy/step-flow';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { Quote } from '@/components/casestudy/quote';
import { ChecklistSection } from '@/components/casestudy/checklist-section';
import { SettingsModal } from '@/components/nav/settings-modal';
import { Seo } from '@/components/seo';
import { PROJECTS } from '@/data/projects';

const COLOR_TOKENS = [
  { name: '--background', value: '#f5f8fb', usage: 'Page background' },
  { name: '--foreground', value: '#384959', usage: 'Primary text' },
  { name: '--primary', value: '#5a9dd9', usage: 'Links, active states, primary buttons' },
  { name: '--muted-foreground', value: '#6a89a7', usage: 'Secondary / muted text' },
  { name: '--accent', value: '#88bdf21a', usage: 'Active nav pill, subtle fills' },
  { name: '--border', value: '#6a89a726', usage: 'Card and divider borders' },
  { name: '--destructive', value: '#d4183d', usage: 'Errors, destructive actions' },
];

const ICON_TOKENS = [
  { name: '--icon-blue', value: '#5a9dd9' },
  { name: '--icon-teal', value: '#5dade2' },
  { name: '--icon-purple', value: '#a78bfa' },
  { name: '--icon-green', value: '#6fcf97' },
  { name: '--icon-orange', value: '#f39c12' },
  { name: '--icon-pink', value: '#ec7c9d' },
  { name: '--icon-slate', value: '#6a89a7' },
  { name: '--icon-cyan', value: '#45b7d1' },
];

const NAV_LINKS = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'actions', label: 'Actions' },
  { id: 'content', label: 'Content' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'casestudy', label: 'Case Study' },
  { id: 'interactive', label: 'Interactive' },
];

function ShowcaseSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-6 py-10 border-b border-border">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
      </div>
      {children}
    </section>
  );
}

function ComponentDemo({
  name,
  purpose,
  children,
}: {
  name: string;
  purpose: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border p-6 space-y-4">
      <div>
        <h3 className="font-bold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{purpose}</p>
      </div>
      <div className="rounded-xl border border-dashed border-border bg-muted/20 p-6">
        {children}
      </div>
    </div>
  );
}

function DesignSystemPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Seo
        title="Design System"
        description="Internal component and design-token reference."
        noindex
      />
      <H1 className="mb-2">Design System</H1>
      <LeadParagraph className="mb-10">
        Living documentation of the tokens and components that power this portfolio —
        every example on this page renders the same production component used
        elsewhere in the site, so changes to one automatically apply everywhere.
      </LeadParagraph>

      <nav className="flex flex-wrap gap-2 mb-4 sticky top-[72px] z-10 bg-background/95 backdrop-blur py-3 border-b border-border">
        {NAV_LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* FOUNDATIONS */}
      <ShowcaseSection
        id="foundations"
        title="Foundations"
        description="Design tokens extracted directly from the reference site's compiled CSS."
      >
        <div>
          <h3 className="font-bold text-foreground mb-3">Color</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COLOR_TOKENS.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <div
                  className="w-10 h-10 rounded-md border border-border shrink-0"
                  style={{ backgroundColor: t.value }}
                />
                <div className="min-w-0">
                  <p className="font-mono text-xs text-foreground truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-3">Icon accent palette</h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
            {ICON_TOKENS.map((t) => (
              <div key={t.name} className="text-center">
                <div
                  className="w-10 h-10 rounded-full border border-border mx-auto"
                  style={{ backgroundColor: t.value }}
                />
                <p className="font-mono text-[10px] text-muted-foreground mt-1">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-3">Typography</h3>
          <div className="space-y-4">
            <div>
              <H1 size="hero">Hero H1 — 72px</H1>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                text-5xl md:text-7xl · font-bold · tracking-tight
              </p>
            </div>
            <div>
              <H1 size="page">Page H1 — 60px</H1>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                text-4xl md:text-6xl · font-bold · tracking-tight
              </p>
            </div>
            <div>
              <LeadParagraph>
                Lead paragraph — 18px, muted-foreground, leading-relaxed. Used for
                intros and subtitles throughout the site.
              </LeadParagraph>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-3">Radius & Shadow</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-border bg-card p-4 text-center text-sm text-muted-foreground">
              rounded-2xl
              <br />
              (cards)
            </div>
            <div className="rounded-full border border-border bg-card p-4 text-center text-sm text-muted-foreground">
              rounded-full
              <br />
              (pills)
            </div>
            <div
              className="rounded-2xl border border-border bg-card p-4 text-center text-sm text-muted-foreground"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              shadow-md
            </div>
            <div
              className="rounded-2xl border border-border bg-card p-4 text-center text-sm text-muted-foreground"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              shadow-lg
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-foreground mb-3">Motion — scroll reveal</h3>
          <p className="text-sm text-muted-foreground">
            Sections fade + slide up (700ms ease-out) on scroll into view via
            IntersectionObserver, and reset when scrolled away — matching the
            reference site's re-triggering behavior. See the <code>Reveal</code>{' '}
            component wrapping every section on Home, About, Resume, and case-study
            pages.
          </p>
        </div>
      </ShowcaseSection>

      {/* ACTIONS */}
      <ShowcaseSection id="actions" title="Actions" description="Button variants, sizes, and states.">
        <ComponentDemo name="Button" purpose="Primary interactive element across the site.">
          <div className="flex flex-wrap gap-3">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="default" disabled>
              Disabled
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Icon button">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </ComponentDemo>

        <ComponentDemo name="Badge" purpose="Color-cycled tag pill (hash-stable per label).">
          <div className="flex flex-wrap gap-2">
            <Badge>Task Continuity</Badge>
            <Badge>Vibe Coding</Badge>
            <Badge>Design Operations</Badge>
            <Badge>Super App</Badge>
            <Badge>Community Engagement</Badge>
          </div>
        </ComponentDemo>
      </ShowcaseSection>

      {/* CONTENT */}
      <ShowcaseSection id="content" title="Content" description="Text and list primitives.">
        <ComponentDemo name="IconList" purpose="Checkmark bullet list — used for Resume/Home experience bullets.">
          <IconList
            items={[
              'Lead UX strategy for Windows cross-device continuity',
              'Spearheaded multiple AI-Lead Design exploration sprints',
            ]}
          />
        </ComponentDemo>

        <ComponentDemo name="DotList" purpose="Simple dot bullet list — used on the About page.">
          <DotList items={['Design Leadership & Strategy', 'Systems & Experience Architecture', 'Execution Excellence']} />
        </ComponentDemo>

        <ComponentDemo name="CardHeading" purpose="Icon + title row for About/Resume content cards.">
          <CardHeading icon={Award} iconColor="var(--icon-blue)">
            Skills & Expertise
          </CardHeading>
        </ComponentDemo>

        <ComponentDemo name="AcrylicCard" purpose="Translucent glass card — base (interactive) and surface (static) variants.">
          <div className="grid sm:grid-cols-2 gap-4">
            <AcrylicCard>Base variant — hover to lift</AcrylicCard>
            <AcrylicCard variant="surface" interactive={false}>
              Surface variant — static
            </AcrylicCard>
          </div>
        </ComponentDemo>

        <ComponentDemo name="ContactInfoCard" purpose="Icon + label + value card used on Home and Contact.">
          <div className="grid sm:grid-cols-2 gap-4">
            <ContactInfoCard icon={Mail} iconColor="var(--icon-orange)" label="Email" value="hello@example.com" />
            <ContactInfoCard icon={MapPin} iconColor="var(--icon-green)" label="Location" value="Hyderabad, India" />
          </div>
        </ComponentDemo>
      </ShowcaseSection>

      {/* PORTFOLIO */}
      <ShowcaseSection id="portfolio" title="Portfolio" description="Project listing components.">
        <ComponentDemo name="ProjectCard" purpose="Featured/Work project card — links to its case study.">
          <ProjectCard project={PROJECTS[0]} />
        </ComponentDemo>

        <ComponentDemo name="ExperienceCard" purpose="Work-history card with logo, dates, and bullets.">
          <ExperienceCard
            role="Senior Product Designer"
            company="Microsoft - Windows"
            companyLogo="/images/logos/microsoft-windows.png"
            companyLogoAlt="Microsoft - Windows logo"
            dates="Aug 2024 - Present"
            location="Hyderabad, India"
            bullets={['Lead UX strategy for Windows cross-device continuity']}
          />
        </ComponentDemo>
      </ShowcaseSection>

      {/* CASE STUDY */}
      <ShowcaseSection
        id="casestudy"
        title="Case Study"
        description="Composable narrative blocks used to build every case-study page."
      >
        <ComponentDemo name="MetaGrid" purpose="Platform / Domain / Pillar / Capability quick-facts.">
          <MetaGrid
            items={[
              { label: 'Platform', value: 'Windows', pillColor: 'blue' },
              { label: 'Domain', value: 'Connected Experience', pillColor: 'purple' },
              { label: 'Pillar', value: 'Continuity', pillColor: 'blue' },
              { label: 'Capability', value: 'Cross-Device Resume', pillColor: 'green' },
            ]}
          />
        </ComponentDemo>

        <ComponentDemo name="RoleSection" purpose="'My Role' arrow-bulleted responsibility list.">
          <RoleSection
            title="Lead UX Designer"
            bullets={['Drove system-level UX strategy', 'Designed primary entry points']}
          />
        </ComponentDemo>

        <ComponentDemo name="IconCardList" purpose="Icon + title (+description|bullets) cards — Problem, Why Now, Strategy sections. 1–3 columns.">
          <IconCardList
            columns={2}
            items={[
              { icon: X, iconColor: 'var(--icon-red)', title: 'Manual copying required', description: 'Email, cloud storage, or manual copying' },
              { icon: Target, title: 'Strategic response', description: 'Not a one-off feature' },
            ]}
          />
        </ComponentDemo>

        <ComponentDemo name="CalloutList" purpose="Tinted summary box — negative / positive / neutral tone, • or ✓ marker.">
          <div className="space-y-3">
            <CalloutList tone="negative" title="This caused:" items={['Drop-off during high-intent moments']} />
            <CalloutList tone="positive" marker="✓" title="This helped:" items={['Act decisively when intent is clear']} />
          </div>
        </ComponentDemo>

        <ComponentDemo name="StepFlow" purpose="Numbered step flow with icon avatars — UX/workflow diagrams.">
          <StepFlow
            steps={[
              { icon: Smartphone, title: 'Activity detected', description: 'User acts on phone' },
              { icon: Bell, iconColor: 'var(--icon-purple)', title: 'Alert appears', description: 'Ambient notification' },
              { icon: Check, iconColor: 'var(--icon-green)', title: 'Resumed', description: 'Task continues' },
            ]}
          />
        </ComponentDemo>

        <ComponentDemo name="StatGrid" purpose="Big-number metric cards — Metrics & Impact / Results sections.">
          <StatGrid
            columns={3}
            stats={[
              { value: '3.1M', label: 'Monthly alerts' },
              { value: '28%', label: 'Engagement' },
              { value: '8.5%', label: 'Conversion' },
            ]}
          />
        </ComponentDemo>

        <ComponentDemo name="Quote" purpose="Attributed pull-quote.">
          <Quote attribution="PKM, Jakarta Region">
            "This changed how we work. We're building a smarter, more connected
            community."
          </Quote>
        </ComponentDemo>

        <ComponentDemo name="ChecklistSection" purpose="Individually-boxed checkmark rows with an optional closing statement — Outcome sections.">
          <ChecklistSection
            intro="This work established a durable pattern:"
            items={['Users move between devices without restarting work']}
            closingStatement="This repositioned the product as a connected system."
          />
        </ComponentDemo>
      </ShowcaseSection>

      {/* INTERACTIVE */}
      <ShowcaseSection
        id="interactive"
        title="Interactive"
        description="Stateful components — open them to inspect behavior."
      >
        <ComponentDemo name="SettingsModal" purpose="Owner-only settings lock screen, reproduced from the reference.">
          <Button onClick={() => setSettingsOpen(true)}>Open Settings Modal</Button>
          <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
        </ComponentDemo>

        <ComponentDemo name="Header / Mobile Nav" purpose="Resize your browser below the lg breakpoint to see the hamburger menu — it's the same Header component rendered site-wide.">
          <p className="text-sm text-muted-foreground">
            See the live header at the top of this page.
          </p>
        </ComponentDemo>
      </ShowcaseSection>

      <div className="flex items-center gap-3 pt-4 text-muted-foreground">
        <Briefcase className="w-4 h-4" />
        Internal reference page — not linked from the public navigation.
      </div>
    </div>
  );
}

export { DesignSystemPage };
