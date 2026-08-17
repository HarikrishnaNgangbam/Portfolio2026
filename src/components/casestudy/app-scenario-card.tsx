import type { BrandIconProps } from '@/design-system/ui/icons/brands';

export interface AppScenarioCardProps {
  icon: (props: BrandIconProps) => React.ReactElement;
  title: string;
  description?: string;
}

/** Icon + title (+description) card for shipped/upcoming app-integration scenarios. */
function AppScenarioCard({ icon: Icon, title, description }: AppScenarioCardProps) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-5">
      <Icon className="w-9 h-9 rounded-full" />
      <p className="font-semibold text-foreground mt-3">{title}</p>
      {description && <p className="text-muted-foreground text-sm mt-1">{description}</p>}
    </div>
  );
}

export { AppScenarioCard };
