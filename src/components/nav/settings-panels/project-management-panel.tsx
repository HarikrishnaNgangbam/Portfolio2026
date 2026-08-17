import { useState } from 'react';
import { ChevronUp, ChevronDown, Eye, EyeOff, Trash2, RotateCcw, LayoutList } from 'lucide-react';
import { Button } from '@/design-system/ui/button';
import { useManagedProjects, moveProject } from '@/lib/project-settings-store';
import { cn } from '@/lib/utils';

function ProjectManagementPanel() {
  const [managed, update, reset] = useManagedProjects();
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-muted-foreground flex items-start gap-2">
          <LayoutList className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
          Reorder, show/hide, or delete projects from your portfolio. Changes
          apply immediately on the Home and Work pages.
        </p>
        <Button variant="ghost" size="sm" onClick={reset} className="shrink-0">
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>

      <div className="space-y-2">
        {managed.map(({ project, override }, index) => (
          <div
            key={project.slug}
            className={cn(
              'rounded-xl border border-border p-3 flex items-center gap-3',
              (override.hidden || override.deleted) && 'opacity-50',
            )}
          >
            <div className="flex flex-col">
              <button
                type="button"
                aria-label="Move up"
                disabled={index === 0}
                onClick={() => moveProject(managed, update, project.slug, -1)}
                className="text-muted-foreground hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Move down"
                disabled={index === managed.length - 1}
                onClick={() => moveProject(managed, update, project.slug, 1)}
                className="text-muted-foreground hover:text-primary disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground truncate">{project.title}</p>
              {override.deleted && (
                <p className="text-xs text-destructive">Deleted — hidden from Work & case study</p>
              )}
              {!override.deleted && override.hidden && (
                <p className="text-xs text-muted-foreground">Hidden from listings</p>
              )}
            </div>

            {!override.deleted && (
              <button
                type="button"
                aria-label={override.hidden ? 'Show project' : 'Hide project'}
                onClick={() => update(project.slug, { hidden: !override.hidden })}
                className="text-muted-foreground hover:text-primary shrink-0"
              >
                {override.hidden ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}

            {override.deleted ? (
              <Button
                variant="outline"
                size="sm"
                className="shrink-0"
                onClick={() => update(project.slug, { deleted: false })}
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Restore
              </Button>
            ) : confirmDelete === project.slug ? (
              <div className="flex items-center gap-1 shrink-0">
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => {
                    update(project.slug, { deleted: true });
                    setConfirmDelete(null);
                  }}
                >
                  Confirm
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setConfirmDelete(null)}>
                  Cancel
                </Button>
              </div>
            ) : (
              <button
                type="button"
                aria-label="Delete project"
                onClick={() => setConfirmDelete(project.slug)}
                className="text-muted-foreground hover:text-destructive shrink-0"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProjectManagementPanel };
