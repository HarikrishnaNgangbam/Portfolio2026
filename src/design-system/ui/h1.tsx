import { cn } from '@/lib/utils';

export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /** `hero` = Work/Resume page titles (72px). `page` = Home/About/Contact/case-study titles (60px). */
  size?: 'hero' | 'page';
  /**
   * Render tag override. Defaults to a real `<h1>` for every page-level use
   * across the site. The /design-system showcase sets this to `p` for its
   * *examples* of this component so a document never ends up with more than
   * one actual `<h1>` — same visual styling either way.
   */
  as?: 'h1' | 'h2' | 'p';
}

function H1({ className, size = 'page', as: Tag = 'h1', ...props }: H1Props) {
  return (
    <Tag
      className={cn(
        'font-bold tracking-tight text-foreground',
        size === 'hero' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl',
        className,
      )}
      {...props}
    />
  );
}

export { H1 };
