export interface DotListProps {
  items: React.ReactNode[];
}

/** Simple dot-bulleted list used for skills/capabilities columns. */
function DotList({ items }: DotListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-foreground">
          <span className="text-primary mt-2.5 text-xs" aria-hidden="true">
            ●
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export { DotList };
