import { Quote as QuoteIcon } from 'lucide-react';

export interface QuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

function Quote({ children, attribution }: QuoteProps) {
  return (
    <blockquote className="rounded-2xl border border-primary/20 bg-accent/10 p-6">
      <QuoteIcon className="w-6 h-6 text-primary mb-3" />
      <p className="text-lg text-foreground italic leading-relaxed">{children}</p>
      {attribution && (
        <footer className="text-sm text-muted-foreground mt-3">{attribution}</footer>
      )}
    </blockquote>
  );
}

export { Quote };
