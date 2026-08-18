import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

export interface CaseStudyNavProps {
  /** Current case study's slug, used to find its neighbors in PROJECTS. */
  slug: string;
}

/** Previous/Next links between case studies, wrapping around at the ends. */
function CaseStudyNav({ slug }: CaseStudyNavProps) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return null;

  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <nav aria-label="Case study navigation" className="grid sm:grid-cols-2 gap-4">
      <Link
        to={`/work/${prev.slug}`}
        className="rounded-2xl border border-border p-5 flex items-center gap-3 hover:border-primary/50 hover:bg-accent/30 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 shrink-0 text-primary" />
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Previous case study</p>
          <p className="font-semibold text-foreground truncate">{prev.narrative?.title ?? prev.title}</p>
        </div>
      </Link>
      <Link
        to={`/work/${next.slug}`}
        className="rounded-2xl border border-border p-5 flex items-center gap-3 justify-end text-right hover:border-primary/50 hover:bg-accent/30 transition-colors"
      >
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Next case study</p>
          <p className="font-semibold text-foreground truncate">{next.narrative?.title ?? next.title}</p>
        </div>
        <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
      </Link>
    </nav>
  );
}

export { CaseStudyNav };
