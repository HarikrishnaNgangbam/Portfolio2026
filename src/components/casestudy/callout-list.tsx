import { cn } from '@/lib/utils';

export interface CalloutListProps {
  title?: React.ReactNode;
  items: React.ReactNode[];
  /** `negative` = red/pink "this caused" tint. `positive` = green tint. `neutral` = blue tint. */
  tone?: 'negative' | 'positive' | 'neutral';
  /** Bullet marker — '•' for consequence lists, '✓' for benefit/outcome lists. */
  marker?: '•' | '✓';
}

const TONE_STYLES: Record<NonNullable<CalloutListProps['tone']>, string> = {
  negative: 'bg-red-50 border-red-200 text-red-900',
  positive: 'bg-green-50 border-green-200 text-green-900',
  neutral: 'bg-accent/10 border-primary/20 text-foreground',
};

/** Tinted callout box with a title and bullet list — used for "This caused:" / outcome summaries. */
function CalloutList({ title, items, tone = 'neutral', marker = '•' }: CalloutListProps) {
  return (
    <div className={cn('rounded-xl border p-5', TONE_STYLES[tone])}>
      {title && <p className="font-semibold mb-2">{title}</p>}
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm">
            <span aria-hidden="true">{marker}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { CalloutList };
