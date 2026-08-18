const SITE_NAME = 'Harikrishna Design Portfolio';

export interface SeoProps {
  title: string;
  description: string;
  /** Internal/dev-only pages (e.g. /design-system) opt out of indexing. */
  noindex?: boolean;
  /** Use `title` verbatim as the document title instead of appending " | SITE_NAME". */
  raw?: boolean;
}

/**
 * Per-route document metadata. React 19 hoists <title>/<meta>/<link> tags
 * rendered anywhere in the tree into <head> automatically, so this needs no
 * portal, effect, or extra dependency — just render it once per page.
 */
function Seo({ title, description, noindex, raw }: SeoProps) {
  const fullTitle = raw ? title : `${title} | ${SITE_NAME}`;
  const canonical = typeof window !== 'undefined' ? window.location.href : undefined;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        canonical && <link rel="canonical" href={canonical} />
      )}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
}

export { Seo };
