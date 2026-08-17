import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { assetUrl } from '@/lib/asset-url';

export interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

/** Renders an <img>, swapping to a neutral placeholder if the source fails to load. */
function ImageWithFallback({ className, alt, src, ...props }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-8 h-8" />
      </div>
    );
  }

  return (
    <img
      className={className}
      alt={alt}
      src={typeof src === 'string' ? assetUrl(src) : src}
      onError={() => setFailed(true)}
      loading="lazy"
      {...props}
    />
  );
}

export { ImageWithFallback };
