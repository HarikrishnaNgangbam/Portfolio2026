import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import { PROJECTS } from '@/data/projects';
import { useCaseStudyLocked } from '@/lib/project-settings-store';

export interface CaseStudyNavProps {
  /** Current case study's slug, used to find its neighbors in PROJECTS. */
  slug: string;
}

/** Previous/Next links between case studies, wrapping around at the ends. */
function CaseStudyNav({ slug }: CaseStudyNavProps) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  const prev = PROJECTS[(safeIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(safeIndex + 1) % PROJECTS.length];
  // Mirrors the lock badge on Home/Work project cards, so this link doesn't
  // send a reader into an unexplained password wall.
  const prevLocked = useCaseStudyLocked(prev.slug);
  const nextLocked = useCaseStudyLocked(next.slug);

  if (index === -1) return null;

  return (
    <nav aria-label="Case study navigation" className="grid sm:grid-cols-2 gap-4">
      <Link
        to={`/work/${prev.slug}`}
        className="rounded-2xl border border-border p-5 flex items-center gap-3 hover:border-primary/50 hover:bg-accent/30 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 shrink-0 text-primary" />
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Previous case study</p>
          <p className="font-semibold text-foreground flex items-center gap-1.5">
            <span className="truncate min-w-0">{prev.narrative?.title ?? prev.title}</span>
            {prevLocked && <Lock className="w-3.5 h-3.5 shrink-0 text-muted-foreground" aria-label="Password protected" />}
          </p>
        </div>
      </Link>
      <Link
        to={`/work/${next.slug}`}
        className="rounded-2xl border border-border p-5 flex items-center gap-3 justify-end text-right hover:border-primary/50 hover:bg-accent/30 transition-colors"
      >
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground">Next case study</p>
          <p className="font-semibold text-foreground flex items-center justify-end gap-1.5">
            {nextLocked && <Lock className="w-3.5 h-3.5 shrink-0 text-muted-foreground" aria-label="Password protected" />}
            <span className="truncate min-w-0">{next.narrative?.title ?? next.title}</span>
          </p>
        </div>
        <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
      </Link>
    </nav>
  );
}

export { CaseStudyNav };
