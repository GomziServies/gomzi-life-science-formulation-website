import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Drives a CSS scroll-snap slider (the track must be `position: relative`
 * and its direct children are the slides).
 *
 * Works out the scroll positions that are actually reachable — when several
 * slides are visible at once, the last few all land on the same "end"
 * position — so dots and arrows always map 1:1 to a real stop.
 */
export function useSnapSlider() {
  const trackRef = useRef(null);
  const [stops, setStops] = useState([0]);
  const [active, setActive] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const max = track.scrollWidth - track.clientWidth;
    const points = [];
    Array.from(track.children).forEach((slide) => {
      const left = Math.max(0, Math.min(slide.offsetLeft - pad, max));
      if (!points.some((p) => Math.abs(p - left) < 4)) points.push(left);
    });
    setStops(points.length ? points : [0]);
  }, []);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const x = track.scrollLeft;
    let closest = 0;
    stops.forEach((p, i) => {
      if (Math.abs(p - x) < Math.abs(stops[closest] - x)) closest = i;
    });
    setActive(closest);
  }, [stops]);

  useEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track || typeof ResizeObserver === 'undefined') return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [measure]);

  useEffect(sync, [sync]);

  const goTo = useCallback(
    (i) => {
      const track = trackRef.current;
      if (!track) return;
      const target = stops[Math.max(0, Math.min(i, stops.length - 1))];
      track.scrollTo({ left: target, behavior: 'smooth' });
    },
    [stops]
  );

  return {
    trackRef,
    onScroll: sync,
    stops,
    active,
    goTo,
    prev: () => goTo(active - 1),
    next: () => goTo(active + 1),
    atStart: active === 0,
    atEnd: active === stops.length - 1,
  };
}
