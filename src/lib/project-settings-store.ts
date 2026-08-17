import { useStorageState } from './use-storage-state';
import { PROJECTS, type ProjectSummary } from '@/data/projects';

export interface ProjectOverride {
  order: number;
  hidden: boolean;
  deleted: boolean;
  protected: boolean;
  password: string;
}

export type ProjectOverrideMap = Record<string, ProjectOverride>;

const STORAGE_KEY = 'portfolio:project-overrides';

function defaultOverride(order: number): ProjectOverride {
  return { order, hidden: false, deleted: false, protected: false, password: '' };
}

/** Merges stored overrides on top of the base project data, defined order included. */
function useProjectOverrides() {
  return useStorageState<ProjectOverrideMap>(STORAGE_KEY, window.localStorage, {});
}

function getOverride(overrides: ProjectOverrideMap, slug: string, fallbackOrder: number): ProjectOverride {
  return overrides[slug] ?? defaultOverride(fallbackOrder);
}

export interface ManagedProject {
  project: ProjectSummary;
  override: ProjectOverride;
}

/** All projects (including hidden/deleted) with their current override, sorted for the admin panel. */
function useManagedProjects(): [ManagedProject[], (slug: string, patch: Partial<ProjectOverride>) => void, () => void] {
  const [overrides, setOverrides] = useProjectOverrides();

  const managed: ManagedProject[] = PROJECTS.map((project, i) => ({
    project,
    override: getOverride(overrides, project.slug, i),
  })).sort((a, b) => a.override.order - b.override.order);

  const update = (slug: string, patch: Partial<ProjectOverride>) => {
    const baseIndex = PROJECTS.findIndex((p) => p.slug === slug);
    setOverrides((prev) => {
      const current = getOverride(prev, slug, baseIndex);
      return { ...prev, [slug]: { ...current, ...patch } };
    });
  };

  const reset = () => setOverrides({});

  return [managed, update, reset];
}

/** Public-facing project list for Home/Work — visible, non-deleted, in admin-defined order. */
function useEffectiveProjects(): ProjectSummary[] {
  const [managed] = useManagedProjects();
  return managed.filter((m) => !m.override.hidden && !m.override.deleted).map((m) => m.project);
}

function moveProject(
  managed: ManagedProject[],
  update: (slug: string, patch: Partial<ProjectOverride>) => void,
  slug: string,
  direction: -1 | 1,
) {
  const index = managed.findIndex((m) => m.project.slug === slug);
  const swapIndex = index + direction;
  if (index === -1 || swapIndex < 0 || swapIndex >= managed.length) return;
  const a = managed[index];
  const b = managed[swapIndex];
  update(a.project.slug, { order: b.override.order });
  update(b.project.slug, { order: a.override.order });
}

/** Returns the project's override (or a safe default) — used by case-study pages to check protection. */
function useProjectAccess(slug: string): ProjectOverride {
  const [overrides] = useProjectOverrides();
  const baseIndex = PROJECTS.findIndex((p) => p.slug === slug);
  return getOverride(overrides, slug, baseIndex);
}

export { useManagedProjects, useEffectiveProjects, useProjectAccess, moveProject };
