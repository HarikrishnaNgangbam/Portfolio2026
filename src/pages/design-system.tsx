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
  GitCompare,
  Workflow,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { Button } from '@/design-system/ui/button';
import { PillCtaLink } from '@/design-system/ui/pill-cta-link';
import { CtaLinkRow } from '@/design-system/ui/cta-link-row';
import { ArrowLink } from '@/design-system/ui/arrow-link';
import { Badge } from '@/design-system/ui/badge';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { MarkerList } from '@/design-system/ui/marker-list';
import { CardHeading } from '@/design-system/ui/card-heading';
import { ContactInfoCard } from '@/design-system/ui/contact-info-card';
import { ExperienceHeaderRow } from '@/design-system/ui/experience-header-row';
import { NarrativeSection } from '@/design-system/ui/narrative-section';
import { EditorialColumn } from '@/design-system/ui/editorial-column';
import { PrincipleBlock } from '@/design-system/ui/principle-block';
import { ProjectCard } from '@/components/portfolio/project-card';
import { CtaBand } from '@/components/portfolio/cta-band';
import { CaseStudyProgress } from '@/components/casestudy/case-study-progress';
import { CaseStudyNav } from '@/components/casestudy/case-study-nav';
import { CaseStudyHero } from '@/components/casestudy/case-study-hero';
import { Section } from '@/components/casestudy/section';
import { Beat } from '@/components/casestudy/beat';
import { MetaGrid } from '@/components/casestudy/meta-grid';
import { Ownership } from '@/components/casestudy/ownership';
import { IconCardList } from '@/components/casestudy/icon-card-list';
import { CalloutList } from '@/components/casestudy/callout-list';
import { Prose } from '@/components/casestudy/prose';
import { Takeaway } from '@/components/casestudy/takeaway';
import { DecisionStrip } from '@/components/casestudy/decision-strip';
import { EvidenceLabel, type EvidenceKind } from '@/components/casestudy/evidence-label';
import { Placeholder } from '@/components/casestudy/placeholder';
import { StepFlow } from '@/components/casestudy/step-flow';
import { BeforeAfter, BeforeAfterCompact, BeforeAfterInline } from '@/components/casestudy/before-after';
import { StatGrid } from '@/components/casestudy/stat-grid';
import { Quote } from '@/components/casestudy/quote';
import { ChecklistSection } from '@/components/casestudy/checklist-section';
import { AppScenarioCard } from '@/components/casestudy/app-scenario-card';
import { LinkList } from '@/components/casestudy/link-list';
import { PressGrid } from '@/components/casestudy/press-grid';
import { SpotifyIcon } from '@/design-system/ui/icons/brands';
import { Switch } from '@/design-system/ui/switch';
import { Footer } from '@/components/nav/footer';
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

const SEMANTIC_TOKENS: { name: string; usage: string }[] = [
  { name: '--color-insight', usage: 'A callout naming what was learned' },
  { name: '--color-decision', usage: 'DecisionStrip, and "decision" callouts' },
  { name: '--color-outcome', usage: 'Results, impact, "outcome" callouts' },
  { name: '--color-evidence', usage: 'Product exploration evidence' },
  { name: '--color-warning', usage: 'Caveats, "note" callouts' },
];

const EVIDENCE_KINDS: EvidenceKind[] = [
  'shipped',
  'exploration',
  'system-model',
  'design-exploration',
  'directional-outcome',
  'concept',
];

const NAV_LINKS = [
  { id: 'foundations', label: 'Foundations' },
  { id: 'navigation', label: 'Navigation' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'casestudy', label: 'Case Study' },
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
  const [switchOn, setSwitchOn] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Seo
        title="Design System"
        description="Internal component and design-token reference."
        noindex
      />
      {/* Renders live: scroll this page to see the actual CaseStudyProgress
          component in action, the same one mounted on every case study. */}
      <CaseStudyProgress />
      <H1 className="mb-2">Design System</H1>
      <LeadParagraph className="mb-10">
        Living documentation of the shared component layer that makes this portfolio feel
        like one coherent system instead of a set of individually designed pages. Every
        example here renders the same production component used elsewhere in the site, so
        a change to one automatically applies everywhere.
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
        description="Design tokens extracted directly from the reference site's compiled CSS, plus the semantic aliases layered on top for editorial components."
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
          <h3 className="font-bold text-foreground mb-3">Semantic tokens</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Aliases onto the icon palette above, so editorial components reach for what a
            color <em>means</em> (a decision, an insight, an outcome) instead of a hardcoded
            accent — no new palette introduced.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SEMANTIC_TOKENS.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-lg border border-border p-3">
                <div
                  className="w-10 h-10 rounded-md border border-border shrink-0"
                  style={{ backgroundColor: `var(${t.name})` }}
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
          <h3 className="font-bold text-foreground mb-3">Typography</h3>
          <div className="space-y-4">
            <div>
              <H1 as="p" size="hero">Hero H1 — 72px</H1>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                text-5xl md:text-7xl · font-bold · tracking-tight
              </p>
            </div>
            <div>
              <H1 as="p" size="page">Page H1 — 60px</H1>
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
            reference site's re-triggering behavior. Respects{' '}
            <code>prefers-reduced-motion</code> by skipping straight to the final state.
            See the <code>Reveal</code> component wrapping every section on Home, About,
            Resume, and case-study pages, and the reading-progress bar in the{' '}
            <a href="#navigation" className="text-primary hover:underline">Navigation</a>{' '}
            section below.
          </p>
        </div>

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

        <ComponentDemo name="PillCtaLink" purpose="Primary 'go do the main thing' pill CTA — buttonVariants() plus the site's one fixed override and a trailing arrow. Renders a router Link (`to`) or a plain anchor (`href`).">
          <div className="flex flex-wrap gap-3">
            <PillCtaLink to="/work" label="Explore my work" />
            <PillCtaLink href="#top" label="Let's talk" />
          </div>
        </ComponentDemo>

        <ComponentDemo name="ArrowLink" purpose="Secondary 'see more' text link with a trailing arrow that widens its gap on hover. `nested` renders a plain non-interactive wrapper with `group-hover:gap-3` for use inside an already-clickable ancestor (Work's project rows), and `color` overrides the default text-primary tint.">
          <div className="flex flex-wrap items-center gap-6">
            <ArrowLink to="/work" label="View all projects" />
            <ArrowLink nested label="View case study" color="var(--icon-teal)" />
          </div>
        </ComponentDemo>

        <ComponentDemo name="CtaLinkRow" purpose="Icon + label secondary link used inside CtaBand's `links` slot. Icon is passed pre-rendered so each call site keeps its own exact attributes. Renders a router Link (`to`) or an anchor (`href`, optionally `external`).">
          <div className="space-y-3">
            <CtaLinkRow to="/resume" icon={<FileText className="w-4 h-4" />} label="Resume" />
            <CtaLinkRow href="#top" external icon={<Linkedin className="w-4 h-4" />} label="LinkedIn" />
          </div>
        </ComponentDemo>

        <ComponentDemo name="Badge" purpose="Color-cycled tag pill (hash-stable per label) — for ordinary tags and project capability labels.">
          <div className="flex flex-wrap gap-2">
            <Badge>Task Continuity</Badge>
            <Badge>Vibe Coding</Badge>
            <Badge>Design Operations</Badge>
            <Badge>Super App</Badge>
            <Badge>Community Engagement</Badge>
          </div>
        </ComponentDemo>

        <ComponentDemo name="Switch" purpose="Toggle control used in the owner-only Settings panels (e.g. Project Access Control).">
          <Switch checked={switchOn} onCheckedChange={setSwitchOn} label="Example toggle" />
        </ComponentDemo>
      </ShowcaseSection>

      {/* NAVIGATION */}
      <ShowcaseSection
        id="navigation"
        title="Navigation"
        description="Orientation — getting around the site, and knowing where you are in a long case study."
      >
        <ComponentDemo name="Header / Mobile Nav" purpose="Fixed, translucent, never visually dominant. Resize your browser below the lg breakpoint to see the hamburger menu — it's the same Header rendered site-wide.">
          <p className="text-sm text-muted-foreground">
            See the live header at the top of this page.
          </p>
        </ComponentDemo>

        <ComponentDemo name="Breadcrumb" purpose="Home / Work / [Case Study] — built into CaseStudyHero, giving every case study a clear way back to Work without a separate component.">
          <nav aria-label="Breadcrumb example" className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span aria-hidden="true">›</span>
            <span>Work</span>
            <span aria-hidden="true">›</span>
            <span className="text-foreground">PC to Phone Resume</span>
          </nav>
        </ComponentDemo>

        <ComponentDemo name="CaseStudyProgress" purpose="A 2px reading-progress line fixed just below the header — subtle on desktop and mobile alike, never a floating panel or a page count.">
          <p className="text-sm text-muted-foreground">
            Mounted once, at the top of this page (via CaseStudyHero on every case study).
            Scroll to see it fill — it's tracking your actual position on this page right now.
          </p>
        </ComponentDemo>

        <ComponentDemo name="CaseStudyNav" purpose="Previous/Next links between case studies, wrapping at the ends — closes out every case study page.">
          <CaseStudyNav slug={PROJECTS[0].slug} />
        </ComponentDemo>

        <ComponentDemo name="Footer" purpose="Site-wide closing note.">
          <Footer />
        </ComponentDemo>

        <ComponentDemo name="SettingsModal" purpose="Owner-only settings lock screen, reproduced from the reference.">
          <Button onClick={() => setSettingsOpen(true)}>Open Settings Modal</Button>
          <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
        </ComponentDemo>

        <ComponentDemo name="CaseStudyGate" purpose="Gates a case study behind its project-level password, set from Settings → Project Access Control. The site owner always sees the real content once settings are unlocked.">
          <p className="text-sm text-muted-foreground">
            No case study here is currently password-protected, so there's nothing to unlock
            in this demo — set a password on a project in Settings to see the gate live on
            its case-study page.
          </p>
        </ComponentDemo>
      </ShowcaseSection>

      {/* PORTFOLIO */}
      <ShowcaseSection id="portfolio" title="Portfolio" description="Project listing and career components.">
        <ComponentDemo name="ProjectCard" purpose="Grid-friendly vertical project card (image on top, metadata below) used by Home's Selected Work section.">
          <div className="max-w-xs">
            <ProjectCard project={PROJECTS[0]} number={1} />
          </div>
        </ComponentDemo>

        <ComponentDemo name="CtaBand" purpose="The closing 'here's what to do next' prompt shared by Home and Work — a heading, optional supporting copy, and one or more links. `surface` wraps it in an AcrylicCard; `plain` sits directly on the page.">
          <CtaBand
            heading="Have a complex product problem?"
            links={
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                Let's talk →
              </span>
            }
          >
            I'm interested in opportunities where the problem is bigger than a screen.
          </CtaBand>
        </ComponentDemo>

        <ComponentDemo name="ExperienceHeaderRow" purpose="Presentational logo + primary label + right-aligned dates row shared by Resume's experience list and Home's career timeline. No card, bullet or timeline logic — those stay page-specific.">
          <div className="grid sm:grid-cols-2 gap-8">
            <ExperienceHeaderRow
              label="Senior Product Designer"
              dates="Aug 2024 - Present"
              labelClassName="text-xl"
              datesClassName="shrink-0 tabular-nums"
            />
            <ExperienceHeaderRow
              logo="/images/logos/microsoft-windows.webp"
              logoAlt="Microsoft - Windows logo"
              label="Microsoft"
              dates="Aug 2024 - Present"
              labelClassName="text-lg"
            />
          </div>
        </ComponentDemo>

        <ComponentDemo name="ContactInfoCard" purpose="Icon + label + value card used on Contact.">
          <div className="grid sm:grid-cols-2 gap-4">
            <ContactInfoCard icon={Mail} iconColor="var(--icon-orange)" label="Email" value="hello@example.com" />
            <ContactInfoCard icon={MapPin} iconColor="var(--icon-green)" label="Location" value="Imphal, India" />
          </div>
        </ComponentDemo>
      </ShowcaseSection>

      {/* EDITORIAL */}
      <ShowcaseSection
        id="editorial"
        title="Editorial"
        description="The narrative-craft components — how a case study speaks, not just what it shows."
      >
        <ComponentDemo name="Section (eyebrow + title + supporting)" purpose="The shared section-heading pattern: a category eyebrow, a large narrative headline, and an optional supporting line — used in place of generic 'Overview / Problem / Solution' labels.">
          <Section
            eyebrow="The insight"
            eyebrowColor="var(--icon-purple)"
            title="Continuity isn't about moving the app. It's about preserving context."
            supporting="A section heading with all three tiers filled in."
          >
            <p className="text-sm text-muted-foreground">Section body content renders here.</p>
          </Section>
        </ComponentDemo>

        <ComponentDemo name="Beat" purpose="A standalone eyebrow + headline unit for a secondary beat nested inside an already-titled section. Prefer Section's own eyebrow/title/supporting props for a section's primary heading.">
          <Beat eyebrow="Field notes" color="var(--icon-teal)">
            What we found wasn't what we expected.
          </Beat>
        </ComponentDemo>

        <ComponentDemo name="Takeaway" purpose="Closes a section with one memorable idea — the portfolio's recurring closing-statement pattern, used identically across every case study instead of a hand-styled centered paragraph.">
          <Takeaway supporting="This should become one of the portfolio's recognizable patterns.">
            Continuity isn't about moving the app. It's about preserving the task.
          </Takeaway>
        </ComponentDemo>

        <ComponentDemo name="DecisionStrip" purpose="Names a single product/design decision and the reasoning behind it — used sparingly, at genuinely deliberate choices, to communicate senior product thinking.">
          <DecisionStrip
            decision="Move from app-level handoff to task-level continuity."
            why="Context survives the transition."
          />
        </ComponentDemo>

        <ComponentDemo name="Prose callout kinds" purpose="Semantic callout types (insight / decision / outcome / note) layered onto the existing neutral callout — omit `kind` for the plain treatment used everywhere else.">
          <div className="space-y-3">
            <Prose callout>A plain callout, unchanged from before — no kind specified.</Prose>
            <Prose callout kind="insight">An insight worth pulling out of the narrative.</Prose>
            <Prose callout kind="decision">A lighter-weight decision note, for when DecisionStrip is too heavy.</Prose>
            <Prose callout kind="outcome">What actually happened as a result.</Prose>
            <Prose callout kind="note">A caveat or scoping note.</Prose>
          </div>
        </ComponentDemo>

        <ComponentDemo name="CalloutList" purpose="Tinted summary box — negative / positive / neutral tone, • or ✓ marker.">
          <div className="space-y-3">
            <CalloutList tone="negative" title="This caused:" items={['Drop-off during high-intent moments']} />
            <CalloutList tone="positive" marker="✓" title="This helped:" items={['Act decisively when intent is clear']} />
          </div>
        </ComponentDemo>

        <ComponentDemo name="Quote" purpose="Attributed pull-quote in large editorial type, attribution kept secondary. Used sparingly.">
          <Quote attribution="PKM, Jakarta Region">
            This changed how we work. We're building a smarter, more connected community.
          </Quote>
        </ComponentDemo>

        <ComponentDemo name="MarkerList" purpose="Canonical marker-list primitive — 'check' for role/experience highlights (Experience cards), 'dot' for skills/capabilities columns (Resume).">
          <div className="grid sm:grid-cols-2 gap-8">
            <MarkerList
              marker="check"
              items={[
                'Lead UX strategy for Windows cross-device continuity',
                'Spearheaded multiple AI-Lead Design exploration sprints',
              ]}
            />
            <MarkerList
              marker="dot"
              items={['Design Leadership & Strategy', 'Systems & Experience Architecture', 'Execution Excellence']}
            />
          </div>
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

        <ComponentDemo name="NarrativeSection" purpose="Canonical section-heading primitive for Home, About and Contact — heading + optional supporting paragraph, keeping the font-serif/size/weight treatment consistent across all three pages.">
          <NarrativeSection
            heading="Complexity comes in different forms."
            supportingText="I've spent my career learning to design not just for the person using a product, but for the systems, teams and organizations that make the experience possible."
          >
            <p className="text-sm text-muted-foreground">Section content renders here.</p>
          </NarrativeSection>
        </ComponentDemo>

        <ComponentDemo name="EditorialColumn" purpose="Canonical icon + heading + description primitive — 'plain' for About's guiding principles, 'tinted' for Home's icon columns, 'bordered' for Contact's interest rows. Optional hook (below heading) and eyebrow (above heading).">
          <div className="grid sm:grid-cols-3 gap-6">
            <EditorialColumn heading="Clarity" hook="Some users are easy to overlook.">
              Make complexity visible so teams can make better decisions.
            </EditorialColumn>
            <EditorialColumn icon={Award} color="var(--icon-blue)" variant="tinted" heading="Products">
              Features, flows, states, platforms and dependencies.
            </EditorialColumn>
            <EditorialColumn icon={Target} color="var(--icon-orange)" variant="bordered" eyebrow="0 → 1 & strategy" heading="Figuring out what should exist.">
              Finding opportunities and turning ambiguity into something a team can build.
            </EditorialColumn>
          </div>
        </ComponentDemo>

        <ComponentDemo name="PrincipleBlock" purpose="Numbered principle card — Home's 'How I lead' section.">
          <div className="grid sm:grid-cols-2 gap-4">
            <PrincipleBlock number={1} title="Make complexity visible" iconColor="var(--icon-blue)">
              I use systems maps, prototypes and clear narratives to turn ambiguity into
              something teams can reason about together.
            </PrincipleBlock>
            <PrincipleBlock number={2} title="Design for the system" iconColor="var(--icon-purple)">
              I look beyond the primary user to understand the operators and constraints
              behind the experience.
            </PrincipleBlock>
          </div>
        </ComponentDemo>
      </ShowcaseSection>

      {/* CASE STUDY */}
      <ShowcaseSection
        id="casestudy"
        title="Case Study"
        description="Composable narrative blocks used to build every case-study page."
      >
        <ComponentDemo name="CaseStudyHero" purpose="The opening block for every case study: breadcrumb, badges, title, subtitle, meta facts, cover image, optional Work in Progress notice and icon flow. Also mounts CaseStudyProgress internally.">
          <CaseStudyHero
            headingLevel="h2"
            showProgress={false}
            breadcrumbLabel={PROJECTS[0].title}
            badges={PROJECTS[0].narrative?.capabilities.slice(0, 2) ?? PROJECTS[0].tags.slice(0, 2)}
            title={PROJECTS[0].title}
            subtitle={PROJECTS[0].description}
            meta={[
              { label: 'Role', value: PROJECTS[0].role },
              { label: 'Timeline', value: PROJECTS[0].period },
            ]}
            coverImage={PROJECTS[0].coverImage}
            coverAlt={PROJECTS[0].coverAlt}
          />
        </ComponentDemo>

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

        <ComponentDemo name="Ownership" purpose="'What I owned' — every case study maps its real responsibilities onto the same five dimensions (Vision / System / Experience / Collaboration / Execution), styled identically everywhere.">
          <Ownership
            items={[
              { dimension: 'vision', description: 'Defined the continuity vision.' },
              { dimension: 'system', description: 'Designed the cross-device interaction model.' },
              { dimension: 'experience', description: 'Balanced automation with user control.' },
            ]}
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

        <ComponentDemo name="StepFlow" purpose="Numbered step flow with icon avatars. Each step's kicker can be overridden (e.g. 'Question' / 'Decision' / 'Outcome') instead of the default 'Step N', for a flow that isn't a plain process sequence.">
          <div className="space-y-6">
            <StepFlow
              steps={[
                { icon: Smartphone, title: 'Activity detected', description: 'User acts on phone' },
                { icon: Bell, iconColor: 'var(--icon-purple)', title: 'Alert appears', description: 'Ambient notification' },
                { icon: Check, iconColor: 'var(--icon-green)', title: 'Resumed', description: 'Task continues' },
              ]}
            />
            <StepFlow
              steps={[
                { icon: Target, kicker: 'Question', title: 'Where should it appear?', description: 'Ambient, timely, active or persistent' },
                { icon: Workflow, kicker: 'Decision', iconColor: 'var(--icon-purple)', title: 'Match the surface to the moment', description: 'Different attention levels need different surfaces' },
                { icon: Check, kicker: 'Outcome', iconColor: 'var(--icon-green)', title: 'Four distinct entry points', description: 'Each with a clear reason to exist' },
              ]}
            />
          </div>
        </ComponentDemo>

        <ComponentDemo name="BeforeAfter family" purpose="Three sizes of the same transformation pattern (manual → automated, fragmented → unified): a two-column panel for richer content, a compact single card for dense grids, and an inline pair for a short textual contrast.">
          <div className="space-y-4">
            <BeforeAfterInline
              before={{ label: 'Connected devices', sublabel: 'Users had to reconstruct context.' }}
              after={{ label: 'A system that moves with the user', sublabel: 'Windows helps pick up where they left off.' }}
            />
            <div className="grid sm:grid-cols-3 gap-3">
              <BeforeAfterCompact icon={GitCompare} before="Separate flows" after="One session flow" color="var(--icon-green)" />
              <BeforeAfterCompact icon={GitCompare} before="Connectivity required" after="Offline capture + sync" color="var(--icon-orange)" />
              <BeforeAfterCompact icon={GitCompare} before="Too many metrics" after="Focused signals" color="var(--icon-teal)" />
            </div>
            <BeforeAfter
              color="var(--icon-blue)"
              before={<p className="text-sm text-muted-foreground">Any content — text, a diagram, a small flow.</p>}
              after={<p className="text-sm text-muted-foreground">Any content on the other side too.</p>}
            />
          </div>
        </ComponentDemo>

        <ComponentDemo name="EvidenceLabel" purpose="A quiet marker distinguishing what kind of evidence an image or video represents, since the portfolio mixes real shipped screenshots with conceptual artifacts. Wired into ImageBlock/VideoBlock via an optional `evidence` prop.">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {EVIDENCE_KINDS.map((kind) => (
              <EvidenceLabel key={kind} kind={kind} />
            ))}
          </div>
        </ComponentDemo>

        <ComponentDemo name="Placeholder" purpose="Stand-in for a visual asset that doesn't exist yet, naming exactly what belongs there. `diagram` variant for a system/concept model; `screenshot` variant locks a fixed aspect ratio for a specific product screenshot.">
          <div className="grid sm:grid-cols-2 gap-4">
            <Placeholder
              icon={Workflow}
              title="Context Transfer Model"
              type="System diagram placeholder"
              descriptor="How intent, state and context travel with a task"
              color="var(--icon-purple)"
            />
            <Placeholder
              variant="screenshot"
              icon={ImageIcon}
              title="FS_BEFORE_AFTER"
              type="Insert: before/after screenshot"
              aspect="video"
            />
          </div>
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

        <ComponentDemo name="ChecklistSection" purpose="Individually-boxed checkmark rows with an optional closing statement — Outcome sections.">
          <ChecklistSection
            intro="This work established a durable pattern:"
            items={['Users move between devices without restarting work']}
            closingStatement="This repositioned the product as a connected system."
          />
        </ComponentDemo>

        <ComponentDemo name="AppScenarioCard" purpose="Icon + title (+description) card for shipped/upcoming app-integration scenarios — 'Designing for Different Kinds of Work' style sections.">
          <div className="grid sm:grid-cols-3 gap-4">
            <AppScenarioCard icon={SpotifyIcon} title="Spotify" description="Continue playback without rebuilding context." />
          </div>
        </ComponentDemo>

        <ComponentDemo name="PressGrid" purpose="Grid of press-coverage clipping screenshots — External Validation sections.">
          <PressGrid
            columns={2}
            items={[
              { src: '/images/casestudy-0/press-theverge.webp', alt: 'The Verge coverage' },
              { src: '/images/casestudy-0/press-techradar.webp', alt: 'TechRadar coverage' },
            ]}
          />
        </ComponentDemo>

        <ComponentDemo name="LinkList" purpose="External reference links (documentation, press) with a consistent icon and underline treatment.">
          <LinkList
            links={[
              { label: 'Cross-device Resume support page', href: 'https://support.microsoft.com' },
              { label: 'Windows Insider Blog update', href: 'https://blogs.windows.com/windows-insider' },
            ]}
          />
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
