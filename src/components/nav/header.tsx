import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { assetUrl } from '@/lib/asset-url';
import { NAV_ITEMS } from '@/data/nav';
import { SettingsModal } from './settings-modal';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

/** The wordmark on the left is the Home link, so the text nav only lists the rest. */
const NAV_LINKS = NAV_ITEMS.filter((item) => item.href !== '/');

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const navGroupRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const activeItem = NAV_ITEMS.find((item) => isActive(location.pathname, item.href));
  const currentTitle = activeItem?.label ?? 'Home';

  // Measures the active desktop link so the underline can slide to it instead
  // of each link animating its own border independently.
  useEffect(() => {
    function measure() {
      const activeLink = NAV_LINKS.find((item) => isActive(location.pathname, item.href));
      const el = activeLink ? linkRefs.current[activeLink.href] : null;
      const group = navGroupRef.current;
      if (!el || !group) {
        setIndicator(null);
        return;
      }
      const elRect = el.getBoundingClientRect();
      const groupRect = group.getBoundingClientRect();
      setIndicator({ left: elRect.left - groupRect.left, width: elRect.width });
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [location.pathname]);

  return (
    <>
      <nav
        aria-label="Main"
        className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--surface-warm)]/85 backdrop-blur-sm border-b border-[var(--surface-warm-border)]"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between max-w-7xl mx-auto h-[72px]">
            <Link to="/" aria-label="Harikrishna Ngangbam, Home" className="flex items-center shrink-0">
              <img src={assetUrl('/images/shared/logo-mark.svg')} alt="" className="h-8 w-auto" />
            </Link>

            {/* Desktop layout */}
            <div className="hidden lg:flex items-center gap-8">
              <div ref={navGroupRef} className="relative flex items-center gap-8">
                {NAV_LINKS.map((item) => {
                  const active = isActive(location.pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      ref={(el) => {
                        linkRefs.current[item.href] = el;
                      }}
                      to={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'text-sm font-medium pb-1 border-b-2 border-transparent transition-colors duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm',
                        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                {indicator && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 h-0.5 bg-[var(--icon-purple)] transition-[left,width] duration-300 ease-out motion-reduce:transition-none"
                    style={{ left: indicator.left, width: indicator.width }}
                  />
                )}
              </div>
              <button
                type="button"
                aria-label="Settings"
                onClick={() => setSettingsOpen(true)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile layout */}
            <div className="flex lg:hidden items-center justify-between flex-1 pl-4">
              <span className="font-medium text-foreground">{currentTitle}</span>
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-panel"
                onClick={() => setMobileOpen((v) => !v)}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200',
                  mobileOpen ? 'text-foreground bg-muted' : 'text-foreground hover:bg-muted',
                )}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden border-t border-[var(--surface-warm-border)] bg-[var(--surface-warm)] px-4 py-3"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((item) => {
                const active = isActive(location.pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-200',
                      active ? 'text-foreground bg-muted' : 'text-muted-foreground hover:bg-muted',
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  setSettingsOpen(true);
                }}
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        )}
      </nav>

      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}

export { Header };
