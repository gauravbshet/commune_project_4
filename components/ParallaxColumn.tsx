"use client";

import { useEffect, useRef } from "react";

export default function ParallaxColumn({
  children,
  speed = 0.08,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let baseTop = 0;
    let ticking = false;
    let raf = 0;

    const measure = () => {
      baseTop = outer.getBoundingClientRect().top + window.scrollY;
    };

    const apply = () => {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const distance = viewportCenter - (baseTop + outer.offsetHeight / 2);
      const shift = distance * speed;
      inner.style.transform = `translateY(${shift}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(apply);
      }
    };

    measure();
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
