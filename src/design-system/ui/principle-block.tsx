export interface PrincipleBlockProps {
  number: number;
  title: string;
  iconColor?: string;
  children: React.ReactNode;
}

/** Numbered principle card (leadership/working-style statements) — no icon, no connecting arrows, unlike StepFlow's sequential-process treatment. */
function PrincipleBlock({ number, title, iconColor = 'var(--icon-blue)', children }: PrincipleBlockProps) {
  return (
    <div className="rounded-2xl border border-border bg-muted/20 p-6">
      <span
        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-sm font-bold mb-4"
        style={{ backgroundColor: iconColor }}
      >
        {String(number).padStart(2, '0')}
      </span>
      <p className="font-bold text-foreground">{title}</p>
      <p className="text-muted-foreground leading-relaxed mt-2">{children}</p>
    </div>
  );
}

export { PrincipleBlock };
