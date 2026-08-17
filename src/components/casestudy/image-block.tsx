import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  heading?: string;
}

function ImageBlock({ src, alt, caption, heading }: ImageBlockProps) {
  return (
    <div>
      {heading && <p className="font-semibold text-foreground mb-3">{heading}</p>}
      <div className="rounded-2xl overflow-hidden border border-border">
        <ImageWithFallback src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && <p className="text-sm text-muted-foreground mt-2 text-center">{caption}</p>}
    </div>
  );
}

export interface VideoBlockProps {
  src: string;
  heading?: string;
  caption?: string;
}

/** User-initiated, muted, looping product-demo clip embedded in case-study body content. */
function VideoBlock({ src, heading, caption }: VideoBlockProps) {
  return (
    <div>
      {heading && <p className="font-semibold text-foreground mb-3">{heading}</p>}
      <div className="rounded-2xl overflow-hidden border border-border">
        <video
          src={src}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-auto bg-black"
        />
      </div>
      {caption && <p className="text-sm text-muted-foreground mt-2 text-center">{caption}</p>}
    </div>
  );
}

export { ImageBlock, VideoBlock };
