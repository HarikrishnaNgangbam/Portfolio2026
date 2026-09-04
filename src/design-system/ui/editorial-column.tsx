import { cn, type IconComponent } from '@/lib/utils';
import { tint } from '@/lib/color';

export interface EditorialColumnProps {
  icon?: IconComponent;
  /** Icon color, and tint source for the 'tinted'/'bordered' icon chip. */
  color?: string;
  /** 'plain' = bare icon, no container (About's principles). 'tinted' = icon chip on a tinted card fill (Home's columns). 'bordered' = icon chip on a bordered card (Contact's interests). */
  variant?: 'plain' | 'tinted' | 'bordered';
  /** Small colored label above the heading, e.g. a category (Contact's interests rows). */
  eyebrow?: string;
  heading: string;
  /** Short emphasized line under the heading, e.g. "Some users are easy to overlook." */
  hook?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Icon (optional) + heading + short paragraph column — the canonical shape
 * behind Home's icon columns, About's guiding principles, and Contact's
 * interest rows. `variant` captures the only presentational differences
 * that exist across those three: no container, a tinted-fill card, or a
 * bordered card.
 */
function EditorialColumn({
  icon: Icon,
  color,
  variant = 'plain',
  eyebrow,
  heading,
  hook,
  children,
  className,
}: EditorialColumnProps) {
  return (
    <div
      className={cn(
        variant === 'tinted' && 'rounded-2xl p-5',
        variant === 'bordered' && 'rounded-2xl border border-border p-6',
        className,
      )}
      style={variant === 'tinted' && color ? { backgroundColor: tint(color, 6) } : undefined}
    >
      {Icon &&
        (variant === 'plain' ? (
          <Icon className="w-6 h-6 mb-3" style={{ color }} aria-hidden="true" />
        ) : (
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: color ? tint(color, 18) : undefined }}
          >
            <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
          </div>
        ))}
      {eyebrow && (
        <p className="text-sm font-semibold" style={{ color }}>
          {eyebrow}
        </p>
      )}
      <h3
        className={cn(
          'font-bold text-foreground',
          variant === 'plain' ? 'text-xl' : 'leading-snug',
          eyebrow && 'mt-1',
        )}
      >
        {heading}
      </h3>
      {hook && <p className="text-foreground font-medium mt-2">{hook}</p>}
      <p className={cn('text-muted-foreground leading-relaxed mt-2', variant !== 'plain' && 'text-sm')}>
        {children}
      </p>
    </div>
  );
}

export { EditorialColumn };
