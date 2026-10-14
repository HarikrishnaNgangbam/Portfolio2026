import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { assetUrl } from '@/lib/asset-url';
import { EvidenceLabel, type EvidenceKind } from '@/components/casestudy/evidence-label';
import { cn } from '@/lib/utils';

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  heading?: string;
  /** Optional quiet marker for what kind of evidence this image represents (shipped vs. exploration vs. concept). */
  evidence?: EvidenceKind;
  /**
   * Fixed height in pixels (desktop/tablet only) — use when this image sits
   * side by side with another of a different aspect ratio and both need to
   * line up. The image scales to fill the box (object-cover), matching the
   * plain cropped-photo treatment already used elsewhere in case studies.
   */
  height?: number;
}

function ImageBlock({ src, alt, caption, heading, evidence, height }: ImageBlockProps) {
  return (
    <div>
      {(heading || evidence) && (
        <div className="flex items-center justify-between gap-3 mb-3">
          {heading && <p className="font-semibold text-foreground">{heading}</p>}
          {evidence && <EvidenceLabel kind={evidence} />}
        </div>
      )}
      <div
        className={cn(
          'rounded-2xl overflow-hidden border border-border',
          height != null && 'sm:h-[var(--image-block-height)]',
        )}
        style={height != null ? ({ '--image-block-height': `${height}px` } as React.CSSProperties) : undefined}
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className={height != null ? 'w-full h-auto sm:h-full object-cover' : 'w-full h-auto'}
        />
      </div>
      {caption && <p className="text-sm text-muted-foreground mt-2 text-center">{caption}</p>}
    </div>
  );
}

export interface VideoBlockProps {
  src: string;
  heading?: string;
  caption?: string;
  evidence?: EvidenceKind;
  /** Frame shown before playback starts, and while the video is loading. */
  poster?: string;
}

/** User-initiated, muted, looping product-demo clip embedded in case-study body content. */
function VideoBlock({ src, heading, caption, evidence, poster }: VideoBlockProps) {
  return (
    <div>
      {(heading || evidence) && (
        <div className="flex items-center justify-between gap-3 mb-3">
          {heading && <p className="font-semibold text-foreground">{heading}</p>}
          {evidence && <EvidenceLabel kind={evidence} />}
        </div>
      )}
      <div className="rounded-2xl overflow-hidden border border-border">
        <video
          src={assetUrl(src)}
          poster={poster ? assetUrl(poster) : undefined}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={heading ?? caption ?? 'Product demo video'}
          className="w-full h-auto bg-black"
        />
      </div>
      {caption && <p className="text-sm text-muted-foreground mt-2 text-center">{caption}</p>}
    </div>
  );
}

export { ImageBlock, VideoBlock };
