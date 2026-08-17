import { useState } from 'react';
import { ShieldCheck, Eye, EyeOff } from 'lucide-react';
import { Switch } from '@/design-system/ui/switch';
import { useManagedProjects } from '@/lib/project-settings-store';

function AccessControlPanel() {
  const [managed, update] = useManagedProjects();
  const [visiblePasswords, setVisiblePasswords] = useState<Record<string, boolean>>({});

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground flex items-start gap-2">
        <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
        Password-protect individual case studies. Visitors will need the exact
        password to view a protected project — you always see everything
        while Settings is unlocked.
      </p>

      <div className="space-y-3">
        {managed.map(({ project, override }) => (
          <div key={project.slug} className="rounded-xl border border-border p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="font-medium text-foreground truncate">{project.title}</p>
                <p className="text-xs text-muted-foreground">/work/{project.slug}</p>
              </div>
              <Switch
                checked={override.protected}
                onCheckedChange={(checked) => update(project.slug, { protected: checked })}
                label={`Password protect ${project.title}`}
              />
            </div>
            {override.protected && (
              <div className="relative mt-3">
                <input
                  type={visiblePasswords[project.slug] ? 'text' : 'password'}
                  value={override.password}
                  onChange={(e) => update(project.slug, { password: e.target.value })}
                  placeholder="Set a password"
                  aria-label={`Password for ${project.title}`}
                  className="w-full rounded-md border border-primary/50 bg-transparent px-3 py-1.5 text-sm text-foreground outline-none ring-2 ring-transparent focus:ring-primary/40"
                />
                <button
                  type="button"
                  aria-label={visiblePasswords[project.slug] ? 'Hide password' : 'Show password'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() =>
                    setVisiblePasswords((v) => ({ ...v, [project.slug]: !v[project.slug] }))
                  }
                >
                  {visiblePasswords[project.slug] ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { AccessControlPanel };
