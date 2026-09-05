import { useEffect, useRef, useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { assetUrl } from '@/lib/asset-url';

export interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {}

/** Renders an <img>, swapping to a neutral placeholder if the source fails to load, and fading in once it does. */
function ImageWithFallback({ className, alt, src, onLoad, ...props }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // A cached image can finish loading before this effect runs, which means
  // the browser may have already fired (and missed) the load event above —
  // this catches that case so the image doesn't stay stuck invisible.
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, [src]);

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
      ref={imgRef}
      className={cn(
        'transition-opacity duration-300 motion-reduce:transition-none',
        loaded ? 'opacity-100' : 'opacity-0',
        className,
      )}
      alt={alt}
      src={typeof src === 'string' ? assetUrl(src) : src}
      onError={() => setFailed(true)}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
      loading="lazy"
      {...props}
    />
  );
}

export { ImageWithFallback };
