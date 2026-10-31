import { useEffect, useRef } from 'react';

/**
 * Adds the scroll-in animation the original script.js applied via
 * IntersectionObserver (fadeInUp 0.6s ease-out) to elements marked with
 * .section-header, .value-card, .process-step, .feature-item, .ingredient-card.
 *
 * Renders the element itself (no extra wrapper), so grid/flex layouts,
 * class names, and styling stay identical to the original markup.
 */
export default function Reveal({
  className = '',
  children,
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}
