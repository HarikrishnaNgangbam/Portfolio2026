import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Box,
  Briefcase,
  Calendar,
  FileText,
  Layers,
  Lock,
  Mail,
  Share2,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { DotPattern } from '@/design-system/ui/dot-pattern';
import { Badge } from '@/design-system/ui/badge';
import { PillCtaLink } from '@/design-system/ui/pill-cta-link';
import { CtaLinkRow } from '@/design-system/ui/cta-link-row';
import { ArrowLink } from '@/design-system/ui/arrow-link';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { useEffectiveProjects, useCaseStudyLocked } from '@/lib/project-settings-store';
import { parseEvidenceStats } from '@/lib/parse-evidence-stats';
import { HOME_PROJECT_ORDER, type ProjectSummary } from '@/data/projects';
import { EMAIL_HREF, LINKEDIN_URL } from '@/data/contact';
import { tint } from '@/lib/color';
import { cn, type IconComponent } from '@/lib/utils';

/**
 * Same warm-editorial token override Home and About use, scoped to this
 * page's own root wrapper only. Duplicated rather than imported from a
 * shared constant so this change never touches those pages.
 */
const WORK_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

/**
 * Per-project accent color, purely a Work-page presentation choice (not
 * stored on ProjectSummary itself, which has no color concept elsewhere).
 */
const PROJECT_ACCENTS: Record<string, string> = {
  'phone-to-pc-resume': 'var(--icon-purple)',
  'kopdar-initiative': 'var(--icon-green)',
  'family-safety': 'var(--icon-teal)',
  'pc-to-phone-resume': 'var(--icon-orange)',
};

/**
 * Filter categories, derived from the exact `narrative.capabilities` values
 * already present in the project data (Systems, Platform, 0→1, Ecosystem,
 * Leadership, AI all appear verbatim) rather than introducing a new
 * classification scheme.
 */
const FILTERS: { label: string; icon: IconComponent | null }[] = [
  { label: 'All', icon: null },
  { label: 'Systems', icon: Layers },
  { label: 'Platform', icon: Box },
  { label: '0→1', icon: Target },
  { label: 'Ecosystem', icon: Share2 },
  { label: 'Leadership', icon: Users },
  { label: 'AI', icon: Sparkles },
];

function FilterPill({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: IconComponent | null;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wide transition-all duration-200 shrink-0 active:scale-[0.98]',
        active ? 'text-[var(--icon-purple)]' : 'border-border text-muted-foreground hover:text-foreground',
      )}
      style={
        active
          ? { borderColor: 'var(--icon-purple)', backgroundColor: tint('var(--icon-purple)', 8) }
          : undefined
      }
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {label}
    </button>
  );
}

/** One project rendered as a full-width editorial section, image and content side by side. */
function ProjectSection({
  project,
  index,
  accentColor,
}: {
  project: ProjectSummary;
  index: number;
  accentColor: string;
}) {
  const narrative = project.narrative;
  const capabilities = narrative?.capabilities ?? project.tags;
  const stats = parseEvidenceStats(narrative?.evidence);
  const locked = useCaseStudyLocked(project.slug);

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group grid lg:grid-cols-2 gap-8 lg:gap-14 items-center py-9 md:py-14 border-t border-border first:border-t-0 first:pt-0"
    >
      <div className="relative rounded-2xl overflow-hidden aspect-video">
        <span
          className="absolute top-4 left-4 z-10 flex items-center justify-center w-10 h-10 rounded-xl bg-background/95 shadow-sm text-sm font-bold"
          style={{ color: accentColor }}
        >
          {String(index).padStart(2, '0')}
        </span>
        {locked && (
          <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/95 shadow-sm text-xs font-semibold text-muted-foreground">
            <Lock className="w-3.5 h-3.5" />
            Protected
          </span>
        )}
        <ImageWithFallback
          src={project.coverImage}
          alt={project.coverAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div>
        {project.companyLogo && (
          <div className="flex items-center gap-2 mb-1">
            <ImageWithFallback
              src={project.companyLogo}
              alt=""
              className="w-5 h-5 object-contain"
            />
            <span className="text-sm font-medium text-muted-foreground">{project.companyLogoAlt}</span>
          </div>
        )}
        {project.role && (
          <p className="text-xs text-muted-foreground mb-3">
            <span className="font-semibold text-foreground">My role</span> · {project.role}
          </p>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug transition-colors">
          {narrative?.title ?? project.title}
        </h2>
        {narrative?.label && (
          <p className="text-sm font-semibold italic mt-1.5" style={{ color: accentColor }}>
            {narrative.label}
          </p>
        )}
        <p className="text-muted-foreground leading-relaxed mt-3">
          {narrative?.description ?? project.description}
        </p>

        {capabilities.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {capabilities.map((cap) => (
              <Badge key={cap}>{cap}</Badge>
            ))}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-5 pt-5 border-t border-border">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-bold text-lg text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <ArrowLink nested label="View case study" color={accentColor} className="mt-6" />
      </div>
    </Link>
  );
}

function WorkPage() {
  const effectiveProjects = useEffectiveProjects();
  /**
   * Sorted to match Home's fixed order rather than trusting
   * useEffectiveProjects' order directly, since that order is driven by a
   * per-project `order` value that persists in localStorage once set (e.g.
   * from Settings > Project Management) and would otherwise silently drift
   * out of sync with Home whenever that stored value doesn't match
   * HOME_PROJECT_ORDER. Any project not listed there (e.g. newly added)
   * falls back to the end, in its useEffectiveProjects order.
   */
  const projects = [...effectiveProjects].sort((a, b) => {
    const ai = HOME_PROJECT_ORDER.indexOf(a.slug);
    const bi = HOME_PROJECT_ORDER.indexOf(b.slug);
    return (ai === -1 ? HOME_PROJECT_ORDER.length : ai) - (bi === -1 ? HOME_PROJECT_ORDER.length : bi);
  });

  const [filter, setFilter] = useState('All');
  const filteredProjects =
    filter === 'All' ? projects : projects.filter((p) => p.narrative?.capabilities.includes(filter));

  return (
    <div style={WORK_THEME_VARS} className="bg-background text-foreground">
      <Seo
        title="Work"
        description="Products, systems and ecosystems shaped across Microsoft and Gojek: cross-device continuity, operational platforms, customer experience and design leadership."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 md:pt-12 md:pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-0 lg:gap-10 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
              My Work
            </p>
            <H1 size="hero" className="font-serif mt-3 leading-[1.05]">
              Products, systems and ecosystems I've had the privilege to shape.
            </H1>
            <LeadParagraph className="mt-3 md:mt-6 max-w-2xl">
              Across Microsoft and Gojek, I've worked on problems that span devices, platforms,
              operations and design teams. These projects are different on the surface, but they
              share a common thread: understanding the system around the problem and finding
              where design can create leverage.
            </LeadParagraph>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-5 md:mt-8">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4" style={{ color: 'var(--icon-purple)' }} />
                <div>
                  <p className="font-bold text-foreground leading-tight">{projects.length}</p>
                  <p className="text-xs text-muted-foreground leading-tight">Featured projects</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" style={{ color: 'var(--icon-blue)' }} />
                <div>
                  <p className="font-bold text-foreground leading-tight">290K+</p>
                  <p className="text-xs text-muted-foreground leading-tight">Engaged users</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4" style={{ color: 'var(--icon-orange)' }} />
                <div>
                  <p className="font-bold text-foreground leading-tight">10+ years</p>
                  <p className="text-xs text-muted-foreground leading-tight">Designing at scale</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="hidden lg:block relative w-40 shrink-0">
              <DotPattern
                className="absolute -right-8 -top-8 w-24 h-24 -z-10"
                spacing={14}
                size={1.25}
                color="var(--icon-purple)"
              />
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="col-span-2 rounded-2xl p-4 flex items-center justify-center aspect-[2/1]"
                  style={{ backgroundColor: tint('var(--icon-purple)', 8) }}
                >
                  <Layers className="w-8 h-8" style={{ color: 'var(--icon-purple)' }} />
                </div>
                <div
                  className="rounded-2xl p-4 flex items-center justify-center aspect-square"
                  style={{ backgroundColor: tint('var(--icon-blue)', 8) }}
                >
                  <Box className="w-6 h-6" style={{ color: 'var(--icon-blue)' }} />
                </div>
                <div
                  className="rounded-2xl p-4 flex items-center justify-center aspect-square"
                  style={{ backgroundColor: tint('var(--icon-green)', 8) }}
                >
                  <Sparkles className="w-6 h-6" style={{ color: 'var(--icon-green)' }} />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <Reveal>
          <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-1 sm:pb-0 gap-2.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {FILTERS.map((f) => (
              <FilterPill
                key={f.label}
                label={f.label}
                icon={f.icon}
                active={filter === f.label}
                onClick={() => setFilter(f.label)}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects, stacked one after another */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectSection
              project={project}
              index={i + 1}
              accentColor={PROJECT_ACCENTS[project.slug] ?? 'var(--icon-purple)'}
            />
          </Reveal>
        ))}
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 border-t border-border">
        <Reveal>
          <CtaBand
            variant="panel"
            className="p-6 md:p-10 gap-6 md:gap-10"
            heading="Want the details?"
            button={
              filteredProjects[0] && (
                <PillCtaLink
                  to={`/work/${filteredProjects[0].slug}`}
                  label="Explore all case studies"
                />
              )
            }
            links={
              <div className="space-y-3">
                <CtaLinkRow to="/resume" icon={<FileText className="w-4 h-4" />} label="Resume" />
                <CtaLinkRow
                  href={LINKEDIN_URL}
                  external
                  icon={<Linkedin className="w-4 h-4" />}
                  label="LinkedIn"
                />
                <CtaLinkRow href={EMAIL_HREF} icon={<Mail className="w-4 h-4" />} label="Email" />
              </div>
            }
          >
            <p className="mb-3">Dive deeper into the thinking, process and outcomes behind each project.</p>
            <ul className="space-y-2">
              {['Problem & opportunity', 'Approach & decisions', 'Outcomes & impact', 'What I learned'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowUpRight className="w-4 h-4 shrink-0" style={{ color: 'var(--icon-purple)' }} />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </CtaBand>
        </Reveal>
      </section>
    </div>
  );
}

export { WorkPage };
