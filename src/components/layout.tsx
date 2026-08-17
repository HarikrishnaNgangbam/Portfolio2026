import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/nav/header';
import { Footer } from '@/components/nav/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { ErrorBoundary } from '@/components/error-boundary';

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[200] focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-[72px]">
        {/* location.key changes on every navigation (unlike pathname, which
            stays the same for search/hash-only changes or a same-route
            "back to home" link), so the boundary always resets. */}
        <ErrorBoundary key={location.key}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}

export { Layout };
