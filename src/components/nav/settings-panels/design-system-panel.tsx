import { Link } from 'react-router-dom';
import { Palette, ArrowUpRight } from 'lucide-react';
import { AcrylicCard } from '@/design-system/ui/acrylic-card';
import { buttonVariants } from '@/design-system/ui/button';

function DesignSystemPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <AcrylicCard variant="surface" interactive={false}>
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-border">
          <Palette className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-foreground">Design System</h3>
          <p className="text-sm text-muted-foreground mt-1">
            View every reusable component and design token that powers this
            portfolio — colors, typography, spacing, and the full component
            library, all rendered from the same production code.
          </p>
          <Link
            to="/design-system"
            onClick={onNavigate}
            className={buttonVariants({ variant: 'outline', size: 'sm', className: 'mt-4' })}
          >
            Open Design System
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </AcrylicCard>
  );
}

export { DesignSystemPanel };
