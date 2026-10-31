import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HEADER_HEIGHT = 72;

export function scrollToElement(el) {
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * Scrolls to top on every route change—mirrors the fresh-load behavior of
 * the original multi-page site—and smooth-scrolls to the target section
 * when navigating to a URL with a hash (e.g. /ingredients#clinical).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Give the new page one tick to render before locating the section
      const timer = setTimeout(() => {
        scrollToElement(document.getElementById(id));
      }, 100);
      return () => clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
