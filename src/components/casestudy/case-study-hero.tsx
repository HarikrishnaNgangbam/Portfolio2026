import { Link } from 'react-router-dom';
import { ChevronRight, AlertTriangle } from 'lucide-react';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { Badge } from '@/design-system/ui/badge';

export interface CaseStudyMetaItem {
  label: string;
  value: string;
}

export interface CaseStudyHeroProps {
  breadcrumbLabel: string;
  badges: string[];
  title: string;
  subtitle: string;
  meta: CaseStudyMetaItem[];
  coverImage: string;
  coverAlt: string;
  /** Reference site shows this notice for the still-in-progress PC-to-Phone case study. */
  workInProgress?: boolean;
}

function CaseStudyHero({
  breadcrumbLabel,
  badges,
  title,
  subtitle,
  meta,
  coverImage,
  coverAlt,
  workInProgress,
}: CaseStudyHeroProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
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
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-900">Work in Progress</p>
            <p className="text-amber-800 text-sm mt-1">
              This case study is actively being developed. Some sections are incomplete
              and content may change as the project evolves.
            </p>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-4">
        {badges.map((badge) => (
          <Badge key={badge}>{badge}</Badge>
        ))}
      </div>

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground leading-relaxed mt-4">{subtitle}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {meta.map((item) => (
          <div key={item.label}>
            <p className="text-sm text-muted-foreground">{item.label}</p>
            <p className="font-semibold text-foreground">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl overflow-hidden border border-border mt-10">
        <ImageWithFallback src={coverImage} alt={coverAlt} className="w-full h-auto" />
      </div>
    </div>
  );
}

export { CaseStudyHero };
