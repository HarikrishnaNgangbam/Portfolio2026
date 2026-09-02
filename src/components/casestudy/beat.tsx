/**
 * Small uppercase eyebrow + a large takeaway headline (+ optional short
 * supporting line) — a standalone narrative-heading unit usable anywhere a
 * full `Section` wrapper isn't wanted, e.g. a secondary beat nested partway
 * through an already-titled section. For a section's own primary heading,
 * prefer `Section`'s `eyebrow`/`title`/`supporting` props instead.
 */
function Beat({
  eyebrow,
  color,
  supporting,
  children,
}: {
  eyebrow: string;
  color: string;
  supporting?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight">
        {children}
      </h2>
      {supporting && (
        <p className="text-muted-foreground leading-relaxed mt-3">{supporting}</p>
      )}
    </div>
  );
}

export { Beat };
