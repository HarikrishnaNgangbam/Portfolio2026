import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PasswordFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  ariaLabel: string;
  autoFocus?: boolean;
  /** Applied to the relative-positioned input wrapper, e.g. for the surrounding margin each caller needs. */
  className?: string;
  /** Applied to the inline error message, e.g. for the surrounding margin each caller needs. */
  errorClassName?: string;
}

/**
 * Password input + show/hide toggle + inline error message — the shared
 * piece of every password-gate form on the site (CaseStudyGate,
 * SettingsModal). Heading, copy, submit/cancel buttons, and outer
 * wrapper stay owned by each caller.
 */
function PasswordField({
  value,
  onChange,
  error,
  ariaLabel,
  autoFocus,
  className,
  errorClassName,
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className={cn('relative', className)}>
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter password"
          aria-label={ariaLabel}
          autoFocus={autoFocus}
          className={cn(
            'w-full rounded-md border bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-2 ring-transparent focus:ring-primary/40',
            error ? 'border-destructive' : 'border-primary/50',
          )}
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
      {error && <p className={cn('text-destructive text-sm', errorClassName)}>Incorrect password</p>}
    </>
  );
}

export { PasswordField };
