import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ArrowLinkProps = {
  label: string;
  /** Accent color override (e.g. Work's per-project color). Defaults to `text-primary` when omitted. */
  color?: string;
  className?: string;
} & (
  | { to: string; nested?: false }
  | {
      /** Renders a plain, non-interactive wrapper instead of a Link — for use inside an already-clickable ancestor (Work's ProjectSection card), avoiding a nested interactive element. Uses `group-hover:gap-3` since the hover target is the ancestor, not this element. */
      nested: true;
      to?: never;
    }
);

/**
 * Text link with a trailing arrow that widens its gap on hover — the site's
 * secondary "see more" affordance, distinct from PillCtaLink's solid-button
 * treatment.
 */
function ArrowLink(props: ArrowLinkProps) {
  const nested = 'nested' in props && props.nested === true;
  const className = cn(
    'inline-flex items-center gap-2 font-medium transition-all',
    !props.color && 'text-primary',
    nested ? 'group-hover:gap-3' : 'hover:gap-3',
    props.className,
  );
  const style = props.color ? { color: props.color } : undefined;
  const content = (
    <>
      {props.label}
      <ArrowRight className="w-4 h-4" />
    </>
  );

  if (nested) {
    return (
      <div className={className} style={style}>
        {content}
      </div>
    );
  }

  return (
    <Link to={(props as { to: string }).to} className={className} style={style}>
      {content}
    </Link>
  );
}

export { ArrowLink };
