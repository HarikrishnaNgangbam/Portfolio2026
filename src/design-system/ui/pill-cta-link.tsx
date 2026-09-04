import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from '@/design-system/ui/button';
import { cn } from '@/lib/utils';

export type PillCtaLinkProps = {
  label: string;
} & ({ to: string; href?: never } | { href: string; to?: never });

/**
 * Solid dark pill CTA — buttonVariants() plus the site's one fixed override
 * and a trailing arrow — used for the primary "go do the main thing" action
 * on Home, Contact and Work. Renders a router Link when `to` is given, a
 * plain anchor when `href` is given.
 */
function PillCtaLink(props: PillCtaLinkProps) {
  const className = cn(buttonVariants(), 'rounded-full bg-foreground text-background hover:bg-foreground/90');
  const content = (
    <>
      {props.label}
      <ArrowRight className="w-4 h-4" />
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={(props as { href: string }).href} className={className}>
      {content}
    </a>
  );
}

export { PillCtaLink };
