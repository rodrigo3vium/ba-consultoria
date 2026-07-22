// Utilitários de animação compartilhados entre demos de portfólio.
// Extraído do padrão usado em BeforeAfterStudio.tsx — mesma mecânica
// (rAF + easing cúbico), reaproveitada aqui para não duplicar o hook local.

// easeInOut cúbico
export function ease(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function animateValue(
  from: number,
  to: number,
  duration: number,
  onUpdate: (v: number) => void,
  onComplete?: () => void,
) {
  const start = performance.now();
  let raf = 0;
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    onUpdate(from + (to - from) * ease(t));
    if (t < 1) raf = requestAnimationFrame(tick);
    else onComplete?.();
  };
  raf = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
