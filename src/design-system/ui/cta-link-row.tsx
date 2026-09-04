import { Link } from 'react-router-dom';

export type CtaLinkRowProps = {
  /** Pre-rendered icon element, e.g. `<Linkedin className="w-4 h-4" />` — passed as-is so each call site keeps its own exact icon attributes (including whether it's aria-hidden). */
  icon: React.ReactNode;
  label: string;
} & ({ to: string; href?: never; external?: never } | { href: string; to?: never; external?: boolean });

/**
 * Icon + label secondary link — the LinkedIn/Email/Resume rows used inside
 * CtaBand's `links` slot on Home, Work and Contact. Renders a router Link
 * when `to` is given, an anchor (optionally external) when `href` is given.
 */
function CtaLinkRow(props: CtaLinkRowProps) {
  const className = 'flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors';

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={className}>
        {props.icon}
        {props.label}
      </Link>
    );
  }

  const { href, external } = props as { href: string; external?: boolean };
  return (
    <a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {props.icon}
      {props.label}
    </a>
  );
}

export { CtaLinkRow };
