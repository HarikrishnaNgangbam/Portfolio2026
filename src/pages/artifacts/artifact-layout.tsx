import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight, CheckCircle2, XCircle, AlertTriangle, RefreshCw, ArrowUpCircle } from 'lucide-react';
import { Seo } from '@/components/seo';

/**
 * Same warm-editorial token override Family Safety uses, scoped to these
 * standalone artifact pages only, so they read as part of the same case
 * study rather than a generic documentation template.
 */
const ARTIFACT_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-blue)',
  '--ring': 'var(--icon-blue)',
} as React.CSSProperties;

/** The four artifacts in their intended reading order, for the subtle cross-navigation row. */
const ARTIFACT_NAV = [
  { slug: 'ideation-to-prototype-workflow', label: 'Ideation Workflow' },
  { slug: 'pm-checklist', label: 'PM Checklist' },
  { slug: 'design-office-hours', label: 'Design Office Hours' },
  { slug: 'engineering-readiness-framework', label: 'Engineering Readiness' },
] as const;

export type ArtifactSlug = (typeof ARTIFACT_NAV)[number]['slug'];

/** Small uppercase eyebrow + serif heading + supporting line, matching Family Safety's own EditorialHeading. */
function ArtifactHeading({ eyebrow, heading, supporting }: { eyebrow: string; heading: string; supporting: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-blue)' }}>
        {eyebrow}
      </p>
      <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">{heading}</h1>
      <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{supporting}</p>
    </div>
  );
}

export interface ArtifactPageShellProps {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  supporting: string;
  /** This page's slug, so the cross-navigation row can render it as the current item rather than a link. */
  currentSlug: ArtifactSlug;
  children: React.ReactNode;
}

/**
 * Shared shell for the four Family Safety artifact pages (Ideation to
 * Prototype Workflow, PM Checklist, Design Office Hours, Engineering
 * Readiness Framework). Local to this feature rather than a shared
 * src/components/ export, since it's specific to Family Safety's own
 * supporting documentation rather than a portfolio-wide pattern.
 */
function ArtifactPageShell({ title, description, eyebrow, heading, supporting, currentSlug, children }: ArtifactPageShellProps) {
  return (
    <div style={ARTIFACT_THEME_VARS} className="bg-background text-foreground min-h-screen pb-24">
      <Seo title={title} description={description} noindex />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/work" className="hover:text-primary">Work</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/work/family-safety" className="hover:text-primary">Family Safety Design System</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground">{eyebrow}</span>
        </nav>

        <Link
          to="/work/family-safety"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Family Safety case study
        </Link>

        <ArtifactHeading eyebrow={eyebrow} heading={heading} supporting={supporting} />

        <div className="mt-12 space-y-12">{children}</div>

        <nav aria-label="Related artifacts" className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-16 pt-8 border-t border-border">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mr-1">Related artifacts</span>
          {ARTIFACT_NAV.map((a, i) => (
            <span key={a.slug} className="flex items-center gap-2">
              {a.slug === currentSlug ? (
                <span className="text-xs font-bold text-foreground">{a.label}</span>
              ) : (
                <Link to={`/work/family-safety/${a.slug}`} className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors">
                  {a.label}
                </Link>
              )}
              {i < ARTIFACT_NAV.length - 1 && <ChevronRight className="w-3 h-3 text-muted-foreground/50" aria-hidden="true" />}
            </span>
          ))}
        </nav>

        <div className="mt-8">
          <Link
            to="/work/family-safety"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Family Safety case study
          </Link>
        </div>
      </div>
    </div>
  );
}

/** A single labeled content block inside an artifact page (e.g. "Purpose", "Workflow"). */
function ArtifactSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-3">{title}</h2>
      <div className="space-y-4 text-muted-foreground leading-relaxed">{children}</div>
    </section>
  );
}

/**
 * A numbered step in a workflow's spine (e.g. "01 — Ideation Readiness").
 * The number badge plus indented body is the visual backbone of the
 * Ideation → Prototype Workflow and Engineering-Readiness pages, so the
 * five/six steps read as a sequence rather than a flat list of headings.
 */
function ArtifactStep({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-4">
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ backgroundColor: 'color-mix(in srgb, var(--icon-blue) 12%, transparent)', color: 'var(--icon-blue)' }}
        >
          {number}
        </span>
        <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="pl-11 space-y-5">{children}</div>
    </section>
  );
}

/** A small uppercase sub-label inside a step or section, grouping the checklist rows beneath it. */
function ArtifactSubLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{children}</p>;
}

/** A single checklist row with a checkmark, for real checklist content (not an ordinary bullet). */
function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 py-1">
      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
      <span className="text-foreground text-sm leading-relaxed">{children}</span>
    </li>
  );
}

function ChecklistList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-1">{children}</ul>;
}

/** A tinted, bordered warning note for the "Warning:"/"Don't proceed without..." callouts preserved from the source. */
function WarningNote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border p-4 flex items-start gap-3"
      style={{ borderColor: 'color-mix(in srgb, var(--icon-orange) 30%, transparent)', backgroundColor: 'color-mix(in srgb, var(--icon-orange) 6%, transparent)' }}
    >
      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-orange)' }} aria-hidden="true" />
      <p className="text-sm text-foreground leading-relaxed">{children}</p>
    </div>
  );
}

/** A left-accented pull-quote for the source's preserved verbatim lines ("No ambiguous feedback...", etc). */
function ArtifactQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="rounded-xl p-4 border-l-4 text-foreground text-sm leading-relaxed"
      style={{ borderColor: 'var(--icon-blue)', backgroundColor: 'color-mix(in srgb, var(--icon-blue) 5%, transparent)' }}
    >
      {children}
    </blockquote>
  );
}

export interface OutcomeItem {
  label: string;
  description: string;
}

/**
 * The Proceed / Iterate / Escalate decision outcomes — the visual signature
 * shared by the Ideation Workflow, PM Checklist and Design Office Hours
 * pages, reusing the same green/orange/red language already established in
 * the Family Safety case study's own governance diagrams.
 */
function OutcomeTrio({ proceed, iterate, escalate }: { proceed: OutcomeItem; iterate: OutcomeItem; escalate: OutcomeItem }) {
  const items = [
    { ...proceed, icon: CheckCircle2, color: 'var(--icon-green)' },
    { ...iterate, icon: RefreshCw, color: 'var(--icon-orange)' },
    { ...escalate, icon: ArrowUpCircle, color: 'var(--icon-red)' },
  ];
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border p-4"
          style={{ borderColor: `color-mix(in srgb, ${item.color} 30%, transparent)`, backgroundColor: `color-mix(in srgb, ${item.color} 6%, transparent)` }}
        >
          <item.icon className="w-5 h-5 mb-2" style={{ color: item.color }} aria-hidden="true" />
          <p className="font-bold text-foreground text-sm">{item.label}</p>
          <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

/** A restrained two-column Do / Don't checklist, used for quick-reference summaries. */
function DoDontColumns({ dos, donts }: { dos: string[]; donts: string[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-green)' }}>Do</p>
        <ul className="space-y-1.5">
          {dos.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-green)' }} aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--icon-red)' }}>Don't</p>
        <ul className="space-y-1.5">
          {donts.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-foreground">
              <XCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-red)' }} aria-hidden="true" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export {
  ArtifactPageShell,
  ArtifactSection,
  ArtifactStep,
  ArtifactSubLabel,
  ChecklistItem,
  ChecklistList,
  WarningNote,
  ArtifactQuote,
  OutcomeTrio,
  DoDontColumns,
};
