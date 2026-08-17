import type { IconComponent } from '@/lib/utils';

export interface CardHeadingProps {
  icon: IconComponent;
  iconColor?: string;
  children: React.ReactNode;
}

/** Icon + title row used at the top of About/Resume content cards. */
function CardHeading({ icon: Icon, iconColor = 'var(--icon-blue)', children }: CardHeadingProps) {
  return (
    <h3 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground mb-4">
      <Icon className="w-5 h-5" style={{ color: iconColor }} />
      {children}
    </h3>
  );
}

export { CardHeading };
