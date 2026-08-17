import { cn } from '@/lib/utils';

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label?: string;
  id?: string;
}

/** Toggle switch — uses the reference theme's dedicated --switch-background token. */
function Switch({ checked, onCheckedChange, label, id }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      id={id}
      aria-checked={checked}
      aria-label={label}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      )}
      style={{ backgroundColor: checked ? 'var(--primary)' : 'var(--switch-background)' }}
    >
      <span
        className={cn(
          'inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200',
          checked ? 'translate-x-6' : 'translate-x-1',
        )}
      />
    </button>
  );
}

export { Switch };
