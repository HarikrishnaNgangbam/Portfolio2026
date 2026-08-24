import { ImageWithFallback } from '@/design-system/ui/image-with-fallback';
import { assetUrl } from '@/lib/asset-url';
import { EvidenceLabel, type EvidenceKind } from '@/components/casestudy/evidence-label';

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  heading?: string;
  /** Optional quiet marker for what kind of evidence this image represents (shipped vs. exploration vs. concept). */
  evidence?: EvidenceKind;
}

function ImageBlock({ src, alt, caption, heading, evidence }: ImageBlockProps) {
  return (
    <div>
      {(heading || evidence) && (
        <div className="flex items-center justify-between gap-3 mb-3">
          {heading && <p className="font-semibold text-foreground">{heading}</p>}
          {evidence && <EvidenceLabel kind={evidence} />}
        </div>
      )}
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
