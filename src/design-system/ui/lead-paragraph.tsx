import { cn } from '@/lib/utils';

function LeadParagraph({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-lg text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  );
}

export { LeadParagraph };
