import { useEffect, useRef, useState } from 'react';
import { cn, type IconComponent } from '@/lib/utils';
import { tint } from '@/lib/color';

export interface StatItem {
  value: string;
  label: string;
  sublabel?: string;
  icon?: IconComponent;
  color?: string;
}

const COLUMN_CLASSES: Record<2 | 3 | 4, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

const COUNT_UP_MS = 1200;

interface ParsedStatValue {
  prefix: string;
  suffix: string;
  target: number;
  decimals: number;
  hasComma: boolean;
}

/** Splits a stat value like "~3.1M" or "70,000+" into its animatable parts, or null if it isn't a recognizable number. */
function parseStatValue(value: string): ParsedStatValue | null {
  const match = value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  if (!match) return null;
  const [, prefix, numberPart, suffix] = match;
  const decimals = (numberPart.split('.')[1] ?? '').length;
  const target = parseFloat(numberPart.replace(/,/g, ''));
  if (Number.isNaN(target)) return null;
  return { prefix, suffix, target, decimals, hasComma: numberPart.includes(',') };
}

/** Formats a parsed stat value at a given 0-1 progress, preserving its original prefix, suffix, decimals and comma grouping. */
function formatAt(parsed: ParsedStatValue, progress: number) {
  const current = parsed.target * progress;
  let numberPart = current.toFixed(parsed.decimals);
  if (parsed.hasComma) {
    const [int, dec] = numberPart.split('.');
    numberPart = Number(int).toLocaleString('en-US') + (dec ? `.${dec}` : '');
  }
  return `${parsed.prefix}${numberPart}${parsed.suffix}`;
}

/**
 * Animates a stat's numeric portion counting up from 0 once it scrolls into
 * view (a one-shot animation, unlike Reveal's repeatable fade — recounting
 * every time a stat scrolls back into view would feel excessive). Falls back
 * to the static value untouched when it isn't a recognizable number, or
 * reduced motion is preferred.
 */
function useCountUp(value: string) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const parsed = parseStatValue(value);
    const el = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!parsed || !el || reducedMotion) {
      setDisplay(value);
      return;
    }

    setDisplay(formatAt(parsed, 0));
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / COUNT_UP_MS);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(formatAt(parsed, eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return { ref, display };
}

function Stat({ stat }: { stat: StatItem }) {
  const { ref, display } = useCountUp(stat.value);
  return (
    <div
      className={cn(
        'rounded-2xl border p-6',
        stat.icon ? 'text-left' : 'text-center border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl',
      )}
      style={
        stat.icon
          ? { borderColor: stat.color, backgroundColor: tint(stat.color ?? 'var(--icon-blue)', 8) }
          : undefined
      }
    >
      {stat.icon && <stat.icon className="w-6 h-6 mb-3" style={{ color: stat.color }} />}
      <p
        ref={ref}
        className={cn('text-4xl font-bold tabular-nums', !stat.icon && 'text-primary')}
        style={stat.icon ? { color: stat.color } : undefined}
      >
        {display}
      </p>
      <p className="text-foreground font-medium mt-2">{stat.label}</p>
      {stat.sublabel && (
        <p className="text-muted-foreground text-sm mt-1">{stat.sublabel}</p>
      )}
    </div>
  );
}

/** Big-number metric cards used in "Metrics & Impact" / "Results" sections. */
function StatGrid({ stats, columns = 3 }: { stats: StatItem[]; columns?: 2 | 3 | 4 }) {
  return (
    <div className={cn('grid grid-cols-1 gap-4', COLUMN_CLASSES[columns])}>
      {stats.map((stat, i) => (
        <Stat key={i} stat={stat} />
      ))}
    </div>
  );
}

export { StatGrid };
