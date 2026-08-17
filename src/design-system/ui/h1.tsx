import { cn } from '@/lib/utils';

export interface H1Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /** `hero` = Home/Work page titles (72px). `page` = About/Resume/case-study titles (60px). */
  size?: 'hero' | 'page';
}

function H1({ className, size = 'page', ...props }: H1Props) {
  return (
    <h1
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
