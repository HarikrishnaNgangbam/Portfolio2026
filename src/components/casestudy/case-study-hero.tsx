import { Link } from 'react-router-dom';
import { ChevronRight, Construction } from 'lucide-react';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Badge } from '@/design-system/ui/badge';
import { LeadParagraph } from '@/design-system/ui/lead-paragraph';
import { CaseStudyProgress } from '@/components/casestudy/case-study-progress';
import type { IconComponent } from '@/lib/utils';

export interface CaseStudyMetaItem {
  label: string;
  value: string;
  /** Only rendered when `metaVariant="cards"` (Kopdar's colored meta-card treatment). */
  icon?: IconComponent;
  color?: string;
  bg?: string;
}

export interface CaseStudyHeroProps {
  /** Small uppercase label above the badges, e.g. "Microsoft · Windows Connected Experience & Ecosystem". */
  eyebrow?: string;
  breadcrumbLabel: string;
  badges: string[];
  title: string;
  /** Substring of `title` to render in the primary-green accent (Kopdar's partial-color heading). */
  titleHighlight?: string;
  subtitle: string;
  /** Optional supporting paragraph rendered after the subtitle, before the meta row. */
  description?: React.ReactNode;
  meta: CaseStudyMetaItem[];
  /** `cards` = colored icon cards (Kopdar). `pills` = compact icon chips in a wrapping row. Default `plain` = label/value pairs (other case studies). */
  metaVariant?: 'plain' | 'cards' | 'pills';
  coverImage: string;
  coverAlt: string;
  /** Small pill overlaid on the top-left corner of the cover image, e.g. "Live from Jakarta". */
  imageBadge?: string;
  /** Reference site shows this notice for the still-in-progress PC-to-Phone case study. */
  workInProgress?: boolean;
  /** Device → arrow → device row under the subtitle (e.g. smartphone → PC), each with its own color. */
  iconFlow?: { icon: IconComponent; color: string }[];
  /** `h1` (default) for every real case-study page. Set to `h2` when embedding this component on a page that already has its own `h1` (e.g. the design-system showcase). */
  headingLevel?: 'h1' | 'h2';
  /** Mounts the fixed reading-progress bar. Default `true`; set `false` when this component is rendered somewhere other than the top of an actual case-study page, to avoid a second progress bar on screen. */
  showProgress?: boolean;
}

function CaseStudyHero({
  eyebrow,
  breadcrumbLabel,
  badges,
  title,
  titleHighlight,
  subtitle,
  description,
  meta,
  metaVariant = 'plain',
  coverImage,
  coverAlt,
  imageBadge,
  workInProgress,
  iconFlow,
  headingLevel: Heading = 'h1',
  showProgress = true,
}: CaseStudyHeroProps) {
  const titleParts = titleHighlight ? title.split(titleHighlight) : null;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      {showProgress && <CaseStudyProgress />}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="flex items-center gap-1 hover:text-primary">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/work" className="hover:text-primary">
          Work
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-foreground">{breadcrumbLabel}</span>
      </nav>

      {workInProgress && (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 flex gap-3 mb-6">
          <Construction className="w-5 h-5 shrink-0 mt-0.5" style={{ color: 'rgb(202, 138, 4)' }} />
          <div>
            <p className="font-semibold text-amber-900">Work in Progress</p>
            <p className="text-amber-800 text-sm mt-1">
              This case study is actively being developed. Some sections are incomplete
              and content may change as the project evolves.
            </p>
          </div>
        </div>
      )}

      {eyebrow && (
        <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">
          {eyebrow}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {badges.map((badge) =>
          badge === 'Work in Progress' ? (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full font-medium border"
              style={{
                backgroundColor: 'rgb(254, 252, 232)',
                color: 'rgb(161, 98, 7)',
                borderColor: 'rgb(253, 224, 71)',
              }}
            >
              <Construction className="w-3.5 h-3.5" />
              {badge}
            </span>
          ) : (
            <Badge key={badge}>{badge}</Badge>
          ),
        )}
      </div>

      <Heading className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
        {titleParts ? (
          <>
            {titleParts[0]}
            <span className="text-[var(--icon-green)]">{titleHighlight}</span>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </Heading>
      <LeadParagraph className="mt-4">{subtitle}</LeadParagraph>
      {description && (
        <p className="text-muted-foreground leading-relaxed mt-4 max-w-2xl">{description}</p>
      )}

      {iconFlow && (
        <div className="flex items-center gap-2 mt-6">
          {iconFlow.map((item, i) => (
            <item.icon key={i} className="w-6 h-6" style={{ color: item.color }} />
          ))}
        </div>
      )}

      {metaVariant === 'pills' ? (
        <div className="flex flex-wrap gap-3 mt-8">
          {meta.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border"
            >
              {item.icon && <item.icon className="w-4 h-4 shrink-0" style={{ color: item.color }} aria-hidden="true" />}
              <span className="text-sm font-medium text-foreground">
                {item.value}
                <span className="sr-only"> ({item.label})</span>
              </span>
            </div>
          ))}
        </div>
      ) : metaVariant === 'cards' ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          {meta.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border p-4 flex items-center gap-3"
              style={{ backgroundColor: item.bg }}
            >
              {item.icon && (
                <item.icon className="w-5 h-5 shrink-0" style={{ color: item.color }} />
              )}
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="text-sm text-muted-foreground">{item.label}</p>
              {item.value === 'Work in Progress' ? (
                <p className="flex items-center gap-1.5 font-semibold" style={{ color: 'rgb(161, 98, 7)' }}>
                  <Construction className="w-4 h-4" />
                  {item.value}
                </p>
              ) : (
                <p className="font-semibold text-foreground">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="relative rounded-2xl overflow-hidden border border-border mt-10">
        {imageBadge && (
          <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full font-medium bg-white/90 text-foreground backdrop-blur-sm">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: 'var(--icon-green)' }}
              aria-hidden="true"
            />
            {imageBadge}
          </span>
        )}
        <ImageWithFallback
          src={coverImage}
          alt={coverAlt}
          className="w-full h-auto"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}

export { CaseStudyHero };
