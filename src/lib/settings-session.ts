import { useStorageState } from './use-storage-state';

export const SETTINGS_PASSWORD = 'Portfolio2026';

/** Whether the owner has unlocked the Settings panel this browser tab session. */
function useSettingsUnlocked() {
  return useStorageState<boolean>('portfolio:settings-unlocked', window.sessionStorage, false);
}

/** Slugs of case studies the *visitor* has unlocked this session (separate from owner access). */
function useUnlockedCaseStudies() {
  return useStorageState<string[]>('portfolio:unlocked-case-studies', window.sessionStorage, []);
}

export { useSettingsUnlocked, useUnlockedCaseStudies };
