import { useEffect } from 'react';

/**
 * Sets the browser tab title and meta description per page,
 * equivalent to the per-page <title>/<meta> in the original HTML.
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }, [title, description]);
}
