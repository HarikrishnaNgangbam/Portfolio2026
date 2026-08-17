import { useState } from 'react';
import { Check } from 'lucide-react';
import { cn, type IconComponent } from '@/lib/utils';

export interface ContactInfoCardProps {
  icon: IconComponent;
  iconColor?: string;
  label: string;
  value: string;
  href?: string;
  /** Opens href in a new tab (external links, e.g. LinkedIn). */
  external?: boolean;
  /** Clicking the value text copies it to the clipboard instead of following href. */
  copyOnClick?: boolean;
  className?: string;
}

function ContactInfoCard({
  icon: Icon,
  iconColor = 'var(--icon-orange)',
  label,
  value,
  href,
  external,
  copyOnClick,
  className,
}: ContactInfoCardProps) {
  const [copied, setCopied] = useState(false);

  function openLink() {
    if (!href) return;
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = href;
    }
  }

  async function handleCopy(e: React.MouseEvent) {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard access denied — silently ignore, the card click-through still works.
    }
  }

  return (
    <div
      role={href ? 'link' : undefined}
      tabIndex={href ? 0 : undefined}
      onClick={openLink}
      onKeyDown={(e) => {
        if (href && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          openLink();
        }
      }}
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
          {copyOnClick ? (
            <button
              type="button"
              onClick={handleCopy}
              title="Click to copy"
              className="text-sm text-muted-foreground hover:text-primary hover:underline underline-offset-2 text-left inline-flex items-center gap-1.5"
            >
              {value}
              {copied && (
                <span className="inline-flex items-center gap-0.5 text-primary text-xs font-medium">
                  <Check className="w-3 h-3" />
                  Copied
                </span>
              )}
            </button>
          ) : (
            <div className="text-sm text-muted-foreground">{value}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export { ContactInfoCard };
