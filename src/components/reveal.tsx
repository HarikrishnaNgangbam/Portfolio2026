import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional scroll delay before revealing, in ms — used to stagger lists. */
  delay?: number;
}

/**
 * Fades + slides content in as it enters the viewport, and resets when it
 * leaves — matching the reference site's re-triggering scroll behavior
 * (sections are re-hidden when scrolled away from, not a one-shot reveal).
 */
function Reveal({ className, delay = 0, children, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Positive bottom margin triggers the reveal before the section is
    // actually in view, so content is already visible by the time it
    // scrolls into frame instead of popping in late.
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px 300px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </div>
  );
}

export { Reveal };
