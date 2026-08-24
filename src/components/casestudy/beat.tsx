/** Small uppercase eyebrow + a large takeaway headline, the two-tier heading used to open a narrative beat in a case study. */
function Beat({
  eyebrow,
  color,
  children,
}: {
  eyebrow: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color }}>
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
        {children}
      </h2>
    </div>
  );
}

export { Beat };
