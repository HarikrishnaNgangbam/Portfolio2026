import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';

export interface PressItem {
  src: string;
  alt: string;
}

/** Grid of press-coverage clipping screenshots. */
function PressGrid({ items }: { items: PressItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <div key={item.src} className="rounded-xl overflow-hidden border border-border">
          <ImageWithFallback src={item.src} alt={item.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

export { PressGrid };
