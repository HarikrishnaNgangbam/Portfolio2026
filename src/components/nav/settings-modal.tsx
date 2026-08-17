import { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/design-system/ui/button';

export interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Faithful reproduction of the reference site's owner-only Settings lock
 * screen. The real panel behind it is private CMS tooling with no
 * publicly observable content, so this reproduces the gate UI only.
 */
function SettingsModal({ open, onClose }: SettingsModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl shadow-[var(--shadow-lg)] p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent/10">
          <Lock className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold text-foreground mb-1">Settings</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Enter the settings password to continue
        </p>
        <div className="relative mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            className="w-full rounded-md border border-primary/50 bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-2 ring-transparent focus:ring-primary/40"
          />
          <button
            type="button"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            onClick={() => setShowPassword((v) => !v)}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Cancel
          </Button>
          <Button className="flex-1" onClick={onClose}>
            Unlock
          </Button>
        </div>
      </div>
    </div>
  );
}

export { SettingsModal };
