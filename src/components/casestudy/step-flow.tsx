import { ArrowRight } from 'lucide-react';
import type { IconComponent } from '@/lib/utils';
import { cn } from '@/lib/utils';
import { tint } from '@/lib/color';

export interface StepFlowItem {
  icon: IconComponent;
  iconColor?: string;
  title: string;
  description: React.ReactNode;
  /** Overrides the "Step N" kicker above the title — e.g. "Question", "Decision", "Outcome" — for a flow that isn't a plain sequence of process steps. */
  kicker?: string;
}

export interface StepFlowProps {
  steps: StepFlowItem[];
  /** `numbered` = colored circle badge + top border + connecting arrows (Data Flow Architecture). */
  variant?: 'default' | 'numbered';
}

/** Numbered "Step 1 / Step 2 / ..." flow with icon avatars, used for UX/workflow diagrams. */
function StepFlow({ steps, variant = 'default' }: StepFlowProps) {
  if (variant === 'numbered') {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            <div
              className="rounded-xl border-2 bg-card p-5 flex-1 h-full"
              style={{ borderColor: step.iconColor }}
            >
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-sm font-bold mb-3"
                style={{ backgroundColor: step.iconColor }}
              >
                {i + 1}
              </span>
              <p className="font-bold" style={{ color: step.iconColor }}>
                {step.title}
              </p>
              <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                className="w-5 h-5 mx-2 hidden lg:block shrink-0"
                style={{ color: step.iconColor }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-5')}>
      {steps.map((step, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-muted/30 p-5 text-center flex flex-col items-center"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
            style={{ backgroundColor: tint(step.iconColor ?? 'var(--icon-blue)', 15) }}
          >
            <step.icon className="w-5 h-5" style={{ color: step.iconColor ?? 'var(--icon-blue)' }} />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {step.kicker ?? `Step ${i + 1}`}
          </span>
          <p className="font-semibold text-foreground mt-1">{step.title}</p>
          <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export { StepFlow };
