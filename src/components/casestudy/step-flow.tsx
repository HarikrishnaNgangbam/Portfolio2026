import type { IconComponent } from '@/lib/utils';

export interface StepFlowItem {
  icon: IconComponent;
  iconColor?: string;
  title: string;
  description: React.ReactNode;
}

/** Numbered "Step 1 / Step 2 / ..." flow with icon avatars, used for UX/workflow diagrams. */
function StepFlow({ steps }: { steps: StepFlowItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-muted/30 p-5 text-center flex flex-col items-center"
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
            style={{ backgroundColor: `color-mix(in srgb, ${step.iconColor ?? 'var(--icon-blue)'} 15%, transparent)` }}
          >
            <step.icon className="w-5 h-5" style={{ color: step.iconColor ?? 'var(--icon-blue)' }} />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            Step {i + 1}
          </span>
          <p className="font-semibold text-foreground mt-1">{step.title}</p>
          <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
        </div>
      ))}
    </div>
  );
}

export { StepFlow };
