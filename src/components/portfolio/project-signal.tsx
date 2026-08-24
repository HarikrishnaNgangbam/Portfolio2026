import { cn } from '@/lib/utils';

/**
 * Immediately communicates the type of design problem a project represents
 * (SYSTEMS, PLATFORM, 0→1, LEADERSHIP, AI, ECOSYSTEM...) — a design
 * classification, not a filter chip, so it reads as plain uppercase
 * tracked text rather than a colored pill like `Badge`.
 */
function ProjectSignal({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <p className={cn('text-xs font-bold uppercase tracking-widest text-primary/80', className)}>
      {items.join(' · ')}
    </p>
  );
}

export { ProjectSignal };
