import { cn, type IconComponent } from '@/lib/utils';

export interface ContactInfoCardProps {
  icon: IconComponent;
  iconColor?: string;
  label: string;
  value: string;
  href?: string;
  className?: string;
}

function ContactInfoCard({
  icon: Icon,
  iconColor = 'var(--icon-orange)',
  label,
  value,
  href,
  className,
}: ContactInfoCardProps) {
  const content = (
    <div
      className={cn(
        'rounded-xl bg-[var(--acrylic-light)] backdrop-blur-xl border border-[var(--acrylic-border)] p-4 transition-all duration-300',
        href && 'hover:shadow-[var(--shadow-sm)] cursor-pointer',
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-6 h-6 shrink-0 mt-1" style={{ color: iconColor }} />
        <div>
          <div className="font-medium text-foreground">{label}</div>
          <div className="text-sm text-muted-foreground">{value}</div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }
  return content;
}

export { ContactInfoCard };
