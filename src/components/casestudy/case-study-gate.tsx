import { useState, type FormEvent } from 'react';
import { Lock, ArchiveX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, buttonVariants } from '@/design-system/ui/button';
import { PasswordField } from '@/design-system/ui/password-field';
import { useProjectAccess } from '@/lib/project-settings-store';
import { useSettingsUnlocked, useUnlockedCaseStudies } from '@/lib/settings-session';

export interface CaseStudyGateProps {
  slug: string;
  children: React.ReactNode;
}

/**
 * Gates a case-study page behind its project-level password (set from the
 * Settings → Project Access Control panel). The site owner (settings
 * unlocked this session) always sees the real content.
 */
function CaseStudyGate({ slug, children }: CaseStudyGateProps) {
  const access = useProjectAccess(slug);
  const [settingsUnlocked] = useSettingsUnlocked();
  const [unlockedCaseStudies, setUnlockedCaseStudies] = useUnlockedCaseStudies();
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  if (access.deleted) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <ArchiveX className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground">This project is no longer available</h1>
        <p className="text-muted-foreground mt-2">
          It's been removed from the portfolio by its owner.
        </p>
        <Link to="/work" className={buttonVariants({ className: 'mt-6' })}>
          Back to Work
        </Link>
      </div>
    );
  }

  const alreadyUnlocked =
    settingsUnlocked || !access.protected || unlockedCaseStudies.includes(slug);

  if (alreadyUnlocked) {
    return <>{children}</>;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (input === access.password) {
      setUnlockedCaseStudies((prev) => (prev.includes(slug) ? prev : [...prev, slug]));
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-32">
      <div className="rounded-2xl border border-[var(--acrylic-border)] bg-[var(--acrylic-surface)] backdrop-blur-xl shadow-[var(--shadow-lg)] p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-accent/10">
          <Lock className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-xl font-bold text-foreground mb-1">Password Protected</h1>
        <p className="text-sm text-muted-foreground mb-6">
          This case study requires a password to view.
        </p>
        <form onSubmit={handleSubmit}>
          <PasswordField
            value={input}
            onChange={(value) => {
              setInput(value);
              setError(false);
            }}
            error={error}
            ariaLabel="Case study password"
            autoFocus
            className="mb-2"
            errorClassName="mb-2"
          />
          <Button type="submit" className="w-full mt-4">
            Unlock
          </Button>
        </form>
      </div>
    </div>
  );
}

export { CaseStudyGate };
