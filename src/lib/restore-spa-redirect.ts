/**
 * Companion to public/404.html's GitHub Pages SPA redirect. If we landed
 * here via that redirect, the real path is packed into ?redirect=..., so
 * swap it back into the address bar via replaceState before React Router
 * ever sees the URL — otherwise a deep link or hard refresh on any route
 * other than "/" would render the home page instead.
 */
function restoreSpaRedirect() {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get('redirect');
  if (!redirect) return;

  params.delete('redirect');
  const remainingQuery = params.toString();
  const newUrl =
    window.location.pathname.replace(/\/$/, '') +
    redirect +
    (remainingQuery ? `${redirect.includes('?') ? '&' : '?'}${remainingQuery}` : '');

  window.history.replaceState(null, '', newUrl);
}

export { restoreSpaRedirect };
