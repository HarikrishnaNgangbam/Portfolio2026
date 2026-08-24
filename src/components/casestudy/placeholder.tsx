import { Image as ImageIcon } from 'lucide-react';
import { cn, type IconComponent } from '@/lib/utils';

export interface PlaceholderProps {
  /** What belongs here, e.g. "Context Transfer Model" or "Before/after screenshot". */
  title: string;
  /** Classification of the missing visual, e.g. "System diagram placeholder" or "Screenshot placeholder". */
  type: string;
  descriptor?: string;
  icon?: IconComponent;
  color?: string;
  /**
   * `diagram` (default): flexible height, tinted dashed card — for a
   * system/concept model that doesn't have a fixed shape yet.
   * `screenshot`: fixed aspect-ratio, neutral dashed card — for a specific
   * product screenshot that hasn't been captured yet, so the layout around
   * it doesn't shift once it arrives.
   */
  variant?: 'diagram' | 'screenshot';
  aspect?: 'video' | 'wide';
  /** `large` gives the diagram variant extra padding for a placeholder meant to read as a major artifact on the page. */
  size?: 'default' | 'large';
  className?: string;
}

/**
 * Polished stand-in for a visual asset that doesn't exist yet, naming
 * exactly what belongs here so the layout doesn't need to change once the
 * real diagram or screenshot arrives.
 */
function Placeholder({
  title,
  type,
  descriptor,
  icon: Icon = ImageIcon,
  color = 'var(--icon-blue)',
  variant = 'diagram',
  aspect = 'video',
  size = 'default',
  className,
}: PlaceholderProps) {
  if (variant === 'screenshot') {
    return (
      <div
        className={cn(
          'rounded-2xl border-2 border-dashed border-border bg-muted/20 flex flex-col items-center justify-center text-center p-8',
          aspect === 'wide' ? 'aspect-[21/9]' : 'aspect-video',
          className,
        )}
      >
        <Icon className="w-7 h-7 text-muted-foreground/40 mb-3" aria-hidden="true" />
        <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5">{title}</p>
        <p className="text-sm text-muted-foreground max-w-sm">{type}</p>
        {descriptor && <p className="text-xs text-muted-foreground/80 max-w-sm mt-1">{descriptor}</p>}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center gap-2',
        size === 'large' ? 'p-12 md:p-16' : 'p-8',
        className,
      )}
      style={{
        borderColor: `color-mix(in srgb, ${color} 30%, transparent)`,
        backgroundColor: `color-mix(in srgb, ${color} 4%, transparent)`,
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
        style={{ backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)` }}
      >
        <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
      </div>
      <p className="font-bold text-foreground">{title}</p>
      <p className="text-xs font-semibold uppercase tracking-wide" style={{ color }}>
        {type}
      </p>
      {descriptor && <p className="text-sm text-muted-foreground max-w-lg mt-1">{descriptor}</p>}
    </div>
  );
}

export { Placeholder };
