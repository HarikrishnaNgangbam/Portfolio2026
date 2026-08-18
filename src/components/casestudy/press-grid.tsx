import { cn } from '@/lib/utils';
import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';

export interface PressItem {
  src: string;
  alt: string;
}

const COLUMN_CLASSES = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
};

/** Grid of press-coverage clipping screenshots. */
function PressGrid({ items, columns = 3 }: { items: PressItem[]; columns?: 2 | 3 }) {
  return (
    <div className={cn('grid', COLUMN_CLASSES[columns], 'gap-4')}>
      {items.map((item) => (
        <div key={item.src} className="rounded-xl overflow-hidden border border-border">
          <ImageWithFallback src={item.src} alt={item.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

export { PressGrid };
