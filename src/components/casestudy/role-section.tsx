import { Users, ArrowRight } from 'lucide-react';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';

export interface RoleSectionProps {
  title: string;
  bullets: React.ReactNode[];
}

/** "My Role" card — arrow-bulleted responsibility list. */
function RoleSection({ title, bullets }: RoleSectionProps) {
  return (
    <AcrylicCard variant="surface" interactive={false}>
      <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground mb-1">
        <Users className="w-5 h-5" style={{ color: 'var(--icon-purple)' }} />
        My Role
      </h3>
      <p className="font-semibold text-foreground mb-4">{title}</p>
      <div className="space-y-3">
        {bullets.map((b, i) => (
          <div key={i} className="rounded-lg border border-border p-4 flex gap-3">
            <ArrowRight className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--icon-blue)' }} />
            <span className="text-foreground">{b}</span>
          </div>
        ))}
      </div>
    </AcrylicCard>
  );
}

export { RoleSection };
