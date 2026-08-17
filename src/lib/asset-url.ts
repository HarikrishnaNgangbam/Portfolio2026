/**
 * Prefixes a root-relative public asset path (e.g. "/images/foo.png") with
 * Vite's configured base URL. Needed because GitHub Pages serves this
 * project site under a subpath (/Portfolio2026/) rather than the domain
 * root — plain "/images/..." string literals throughout the content data
 * aren't rewritten by Vite's build the way imported assets are, since
 * they're just string props, not module references it can see.
 *
 * A no-op in local dev, where base is "/".
 */
function assetUrl(path: string): string {
  if (!path.startsWith('/')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export { assetUrl };
