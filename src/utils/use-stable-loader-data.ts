import { createMemo, type Accessor } from 'solid-js'

type Fallback<T> = T | (() => T)

const resolveFallback = <T>(fallback: Fallback<T> | undefined): T | undefined =>
  typeof fallback === 'function' ? (fallback as () => T)() : fallback

export function useStableLoaderData<T>(
  loaderData: Accessor<T | undefined>,
  options: { fallback: Fallback<T> },
): Accessor<T>
export function useStableLoaderData<T>(
  loaderData: Accessor<T | undefined>,
  options?: { fallback?: Fallback<T> },
): Accessor<T | undefined>

// Keeps the latest resolved loader snapshot to avoid transient undefined
// values during route/backstack synchronization.
export function useStableLoaderData<T>(
  loaderData: Accessor<T | undefined>,
  options?: { fallback?: Fallback<T> },
): Accessor<T | undefined> {
  return createMemo<T | undefined>(
    (prev) => loaderData() ?? prev ?? resolveFallback(options?.fallback),
  )
}
