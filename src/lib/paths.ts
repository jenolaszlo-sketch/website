const rawBase = import.meta.env.BASE_URL ?? '/';
const base = rawBase === '/' ? '' : rawBase.replace(/\/+$/, '');

/**
 * Prefix an internal, root-relative path with the configured Astro base path.
 *
 * External URLs, protocol-relative URLs, and fragment/relative links are
 * returned unchanged. With the default base ("/") this is a no-op, so the same
 * components work for an origin-root deployment and a sub-path (project site)
 * deployment without hard-coding either prefix.
 */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `${base}${path}`;
}
