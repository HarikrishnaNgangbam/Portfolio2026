import { Link } from 'react-router-dom';
import { Download, ArrowRight } from 'lucide-react';
import { H1 } from '@/design-system/ui/h1';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { buttonVariants } from '@/design-system/ui/button';
import { DotList } from '@/design-system/ui/dot-list';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Linkedin } from '@/design-system/ui/icons/linkedin';
import { CtaBand } from '@/components/portfolio/cta-band';
import { Reveal } from '@/components/reveal';
import { Seo } from '@/components/seo';
import { assetUrl } from '@/lib/asset-url';
import { cn } from '@/lib/utils';
import { EXPERIENCE, EDUCATION, SKILLS } from '@/data/experience';
import { LINKEDIN_URL } from '@/data/contact';

/**
 * Same warm-editorial token override Home, About and Contact use, scoped to
 * this page's own root wrapper only. Duplicated rather than imported from a
 * shared constant so this change never touches those pages.
 */
const RESUME_THEME_VARS = {
  '--background': 'var(--surface-warm)',
  '--foreground': 'var(--surface-warm-foreground)',
  '--muted-foreground': 'var(--surface-warm-muted)',
  '--border': 'var(--surface-warm-border)',
  '--primary': 'var(--icon-purple)',
  '--ring': 'var(--icon-purple)',
} as React.CSSProperties;

/** Brand mark sized by height only, so every logo keeps its own natural aspect ratio. */
function Logo({ src, alt, className }: { src?: string; alt?: string; className?: string }) {
  if (!src) return null;
  return <ImageWithFallback src={src} alt={alt ?? ''} className={cn('w-auto object-contain', className)} />;
}

/** First-row categories in the Capabilities grid — Emerging pairs with Leadership below for width. */
const CAPABILITIES_ROW_1 = ['Product', 'Systems', 'Craft'] as const;
const CAPABILITIES_ROW_2 = ['Leadership', 'Emerging'] as const;

/**
 * Experience uses the full Microsoft wordmark+icon lockup, while the Hero
 * (and Home, via the shared `companyLogo` field) keep the icon-only mark —
 * the full lockup next to "Microsoft · Windows" text elsewhere would repeat
 * the name.
 */
const EXPERIENCE_LOGO_OVERRIDES: Partial<Record<string, string>> = {
  'Microsoft - Windows': '/images/logos/microsoft-windows.svg',
};

function ResumePage() {
  const current = EXPERIENCE[0];

  return (
    <div style={RESUME_THEME_VARS} className="bg-background text-foreground">
      <Seo
        title="Resume"
        description="Senior Product Designer and Design Leader — experience, capabilities and education across Microsoft, Gojek and beyond."
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 md:pt-14 md:pb-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--icon-purple)' }}>
            Resume
          </p>
          <H1 size="hero" className="font-serif leading-[0.95] mt-3">
            Design Leader
          </H1>
          <div className="flex items-center gap-2.5 mt-4 text-foreground font-medium">
            <Logo src={current.companyLogo} alt="" className="h-5" />
            Microsoft · Windows
          </div>
          <p className="text-muted-foreground text-sm mt-1">
            {current.location} · {current.dates}
          </p>
          <LeadParagraph className="max-w-2xl mt-6">
            Designing products and systems across connected devices, platforms, and AI.
          </LeadParagraph>
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href={assetUrl('/documents/Harikrishna_Product_Designer_Resume.pdf')}
              download
              className={buttonVariants()}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: 'outline' })}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </Reveal>
      </section>

      {/* Experience — one continuous chronology, no "Earlier" split */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Experience</h2>
          <div className="mt-8">
            {EXPERIENCE.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 40}>
                <div
                  className={cn(
                    'flex flex-col gap-4 sm:grid sm:grid-cols-[15rem_1fr] sm:gap-x-6 sm:items-start sm:justify-items-start',
                    i === 0 ? 'pb-9' : 'py-9 border-t border-border',
                  )}
                >
                  <Logo
                    src={EXPERIENCE_LOGO_OVERRIDES[exp.company] ?? exp.companyLogo}
                    alt={exp.companyLogoAlt}
                    className="h-7"
                  />
                  <div className="min-w-0 w-full">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-bold text-xl text-foreground">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground shrink-0 tabular-nums">{exp.dates}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {exp.company}
                      {exp.location && ` · ${exp.location}`}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.resumeBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-foreground/80 leading-relaxed">
                          <span className="mt-2.5 w-1 h-1 rounded-full bg-current shrink-0" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Capabilities — 3-column first row, 2-column second row so Leadership and Emerging get full-width columns */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Capabilities</h2>
          <div className="grid lg:grid-cols-3 gap-x-10 gap-y-10 mt-8">
            {CAPABILITIES_ROW_1.map((category) => (
              <div key={category}>
                <h3 className="text-lg font-bold text-foreground">{category}</h3>
                <div className="mt-3">
                  <DotList items={SKILLS[category]} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-8">
            {CAPABILITIES_ROW_2.map((category) => (
              <div key={category} className={category === 'Leadership' ? 'lg:col-span-2' : undefined}>
                <h3 className="text-lg font-bold text-foreground">{category}</h3>
                <div className="mt-3">
                  <DotList items={SKILLS[category]} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Education</h2>
          <div className="grid sm:grid-cols-2 gap-y-8 mt-8 sm:divide-x sm:divide-border">
            {EDUCATION.map((edu) => (
              <div key={edu.degree} className="flex items-center gap-6 sm:px-10 sm:first:pl-0">
                <Logo src={edu.logo} alt={edu.logoAlt} className="h-11 shrink-0" />
                <div>
                  <p className="text-lg font-bold text-foreground">{edu.degree}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-border">
        <Reveal>
          <CtaBand
            variant="plain"
            heading="Have a project worth exploring?"
            links={
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Let's start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
        </Reveal>
      </section>
    </div>
  );
}

export { ResumePage };
