export interface EditorialColumnProps {
  heading: string;
  /** Short emphasized line under the heading, e.g. "Some users are easy to overlook." */
  hook?: string;
  children: React.ReactNode;
}

/**
 * Plain typographic column used for lightweight editorial groupings (no
 * card, no icon) — Home's "Complexity comes in different forms" and About's
 * closing "Clarity. Empathy. Ownership." both use this same three-column
 * heading + short paragraph shape.
 */
function EditorialColumn({ heading, hook, children }: EditorialColumnProps) {
  return (
    <div>
      <h3 className="text-xl font-bold text-foreground">{heading}</h3>
      {hook && <p className="text-foreground font-medium mt-2">{hook}</p>}
      <p className="text-muted-foreground leading-relaxed mt-2">{children}</p>
    </div>
  );
}

export { EditorialColumn };
