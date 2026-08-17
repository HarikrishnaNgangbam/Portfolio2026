export interface MetaGridItem {
  label: string;
  value: string;
  pillColor: 'blue' | 'purple' | 'green';
}

const PILL_STYLES: Record<MetaGridItem['pillColor'], string> = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200',
  purple: 'bg-purple-100 text-purple-700 border-purple-200',
  green: 'bg-green-100 text-green-700 border-green-200',
};

/** The 4-card Platform / Domain / Experience Pillar / Capability grid on case-study pages. */
function MetaGrid({ items }: { items: MetaGridItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl p-4 text-center"
        >
          <span
            className={`inline-block px-3 py-1 rounded-md text-sm font-semibold border ${PILL_STYLES[item.pillColor]}`}
          >
            {item.label}
          </span>
          <p className="font-semibold text-foreground mt-3">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export { MetaGrid };
