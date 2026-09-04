import { useState, type FormEvent } from 'react';
import { Lock, LockOpen, X, Palette, ShieldCheck, LayoutList } from 'lucide-react';
import { Button } from '@/design-system/ui/button';
import { PasswordField } from '@/design-system/ui/password-field';
import { cn } from '@/lib/utils';
import { useFocusTrap } from '@/lib/use-focus-trap';
import { useSettingsUnlocked, SETTINGS_PASSWORD } from '@/lib/settings-session';
import { DesignSystemPanel } from './settings-panels/design-system-panel';
import { AccessControlPanel } from './settings-panels/access-control-panel';
import { ProjectManagementPanel } from './settings-panels/project-management-panel';

export interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

type Tab = 'design-system' | 'access-control' | 'project-management';

const TABS: { id: Tab; label: string; icon: typeof Palette }[] = [
  { id: 'design-system', label: 'Design System', icon: Palette },
  { id: 'access-control', label: 'Project Access Control', icon: ShieldCheck },
  { id: 'project-management', label: 'Project Management', icon: LayoutList },
];

function SettingsModal({ open, onClose }: SettingsModalProps) {
  const [unlocked, setUnlocked] = useSettingsUnlocked();
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [tab, setTab] = useState<Tab>('design-system');

  function handleClose() {
    setInput('');
    setError(false);
    onClose();
  }

  const trapRef = useFocusTrap<HTMLDivElement>(open, handleClose);

  if (!open) return null;

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input === SETTINGS_PASSWORD) {
      setUnlocked(true);
      setInput('');
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div
      ref={trapRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      {!unlocked ? (
        <div
          className="w-full max-w-sm rounded-2xl border border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl shadow-[var(--shadow-lg)] p-8 text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent/10">
            <Lock className="w-5 h-5 text-primary" />
          </div>
          <h2 id="settings-modal-title" className="text-xl font-bold text-foreground mb-1">
            Settings
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Enter the settings password to continue
          </p>
          <form onSubmit={handleSubmit}>
            <PasswordField
              value={input}
              onChange={(value) => {
                setInput(value);
                setError(false);
              }}
              error={error}
              ariaLabel="Settings password"
              className="mb-4"
              errorClassName="-mt-2 mb-4"
            />
            <div className="flex gap-3">
              <Button type="button" variant="outline" className="flex-1" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                Unlock
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <div
          className="w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl shadow-[var(--shadow-lg)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 border border-border">
                <Lock className="w-4 h-4 text-primary" />
              </div>
              <h2 id="settings-modal-title" className="text-lg font-bold text-foreground">
                Settings
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="Lock settings"
                title="Lock settings"
                onClick={() => setUnlocked(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-accent/80 transition-colors"
              >
                <LockOpen className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Close settings"
                onClick={handleClose}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-accent/80 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex gap-2 px-6 pt-4 flex-wrap shrink-0">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300',
                  tab === t.id
                    ? 'text-primary bg-accent shadow-sm'
                    : 'text-muted-foreground hover:text-primary hover:bg-accent/80',
                )}
              >
                <t.icon className="w-3.5 h-3.5" />
                {t.label}
              </button>
            ))}
          </div>

          <div className="px-6 py-5 overflow-y-auto">
            {tab === 'design-system' && <DesignSystemPanel onNavigate={handleClose} />}
            {tab === 'access-control' && <AccessControlPanel />}
            {tab === 'project-management' && <ProjectManagementPanel />}
          </div>
        </div>
      )}
    </div>
  );
}

export { SettingsModal };
