import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Settings, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/data/nav';
import { SettingsModal } from './settings-modal';

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const activeItem = NAV_ITEMS.find((item) => isActive(location.pathname, item.href));
  const currentTitle = activeItem?.label ?? 'Home';

  return (
    <>
      <nav
        aria-label="Main"
        className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[var(--acrylic-border)] bg-[var(--acrylic-base)] backdrop-blur-2xl shadow-[var(--shadow-sm)]"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Desktop layout */}
            <div className="hidden lg:block w-24" />
            <div className="hidden lg:flex items-center gap-3">
              {NAV_ITEMS.map((item) => {
                const active = isActive(location.pathname, item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
                      active
                        ? 'text-primary bg-accent shadow-md'
                        : 'text-muted-foreground hover:text-primary hover:bg-accent/80 hover:shadow-sm',
                    )}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={item.href === '/' ? { color: 'var(--icon-blue)' } : undefined}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <div className="hidden lg:flex w-24 justify-end">
              <button
                type="button"
                aria-label="Settings"
                onClick={() => setSettingsOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-accent/80 transition-all duration-300"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile layout */}
            <div className="flex lg:hidden items-center justify-between w-full">
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-panel"
                onClick={() => setMobileOpen((v) => !v)}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300',
                  mobileOpen
                    ? 'text-primary bg-accent'
                    : 'text-foreground hover:bg-accent/80',
                )}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <span className="font-semibold text-foreground">{currentTitle}</span>
              <div className="w-9" />
            </div>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <div
            id="mobile-nav-panel"
            className="lg:hidden border-t border-[var(--acrylic-border)] bg-[var(--acrylic-base)] backdrop-blur-2xl px-4 py-3"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const active = isActive(location.pathname, item.href);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                      active
                        ? 'text-primary bg-accent'
                        : 'text-foreground hover:bg-accent/50',
                    )}
                  >
                    <Icon className="w-4 h-4" />
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
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-accent/50 transition-all duration-300"
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
