import { useCallback, useSyncExternalStore } from 'react';

// useSyncExternalStore requires getSnapshot to return a referentially stable
// value when the underlying data hasn't changed. JSON.parse() allocates a new
// object/array every call, which would otherwise loop forever — so each
// storage key caches its last-parsed value and only re-parses when the raw
// string actually changes.
const cache = new Map<string, { raw: string | null; parsed: unknown }>();

function safeGetItem(storage: Storage, key: string): string | null {
  try {
    return storage.getItem(key);
  } catch {
    // Storage can throw (Safari private browsing, disabled cookies, blocked
    // third-party storage) — treat it as "nothing saved" rather than crashing.
    return null;
  }
}

function safeSetItem(storage: Storage, key: string, value: string): void {
  try {
    storage.setItem(key, value);
  } catch {
    // Quota exceeded or storage disabled — the in-memory cache below still
    // updates so the UI stays responsive for the rest of the session, it
    // just won't persist across reloads.
  }
}

function readCached<T>(storageId: string, key: string, storage: Storage, defaultValue: T): T {
  const cacheKey = `${storageId}:${key}`;
  const raw = safeGetItem(storage, key);
  const cached = cache.get(cacheKey);
  if (cached && cached.raw === raw) {
    return cached.parsed as T;
  }
  let parsed: T;
  if (raw === null) {
    parsed = defaultValue;
  } else {
    try {
      parsed = JSON.parse(raw) as T;
    } catch {
      parsed = defaultValue;
    }
  }
  cache.set(cacheKey, { raw, parsed });
  return parsed;
}

/**
 * Reactive, persisted state backed by localStorage or sessionStorage.
 * Updates propagate immediately to every component using the same key,
 * in the same tab (via a custom event — the native `storage` event only
 * fires in *other* tabs) and across tabs (via `storage`).
 */
function useStorageState<T>(
  key: string,
  storage: Storage,
  defaultValue: T,
): [T, (value: T | ((prev: T) => T)) => void] {
  const eventName = `storage-state:${key}`;
  const storageId = storage === window.localStorage ? 'local' : 'session';

  const getSnapshot = useCallback(
    () => readCached(storageId, key, storage, defaultValue),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, storage],
  );

  const subscribe = useCallback(
    (callback: () => void) => {
      window.addEventListener('storage', callback);
      window.addEventListener(eventName, callback);
      return () => {
        window.removeEventListener('storage', callback);
        window.removeEventListener(eventName, callback);
      };
    },
    [eventName],
  );

  const value = useSyncExternalStore(subscribe, getSnapshot, () => defaultValue);

  // Reads the current value straight from storage (not the render-time
  // closure) so multiple setValue() calls in the same tick — e.g. swapping
  // two entries — each build on the other's result instead of clobbering it.
  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prev = readCached(storageId, key, storage, defaultValue);
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(prev) : next;
      const raw = JSON.stringify(resolved);
      safeSetItem(storage, key, raw);
      // Keep the cache in sync even if the physical write above was silently
      // dropped (quota exceeded, storage disabled), so the UI still reflects
      // the change for the rest of this session.
      cache.set(`${storageId}:${key}`, { raw, parsed: resolved });
      window.dispatchEvent(new Event(eventName));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key, storage, eventName],
  );

  return [value, setValue];
}

export { useStorageState };
