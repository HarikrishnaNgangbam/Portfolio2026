import { cn } from '@/lib/utils';

function SectionDivider({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) {
  return <hr className={cn('border-t border-border my-12', className)} {...props} />;
}

export { SectionDivider };
