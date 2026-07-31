import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const HEADLINE = "Professional Websites, Branding & Marketing Support for Businesses";

const LEAD =
  "Fixed-price websites, design and marketing support that helps businesses grow — without agency prices or confusing jargon.";

export default function HeroHeadline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>("[data-animate]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(elements, { opacity: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 32, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.18,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <h1 data-animate className="hero-title opacity-0 tracking-tight">
        {HEADLINE}
      </h1>
      <p data-animate className="hero-lead max-w-xl opacity-0">
        {LEAD}
      </p>
    </div>
  );
}
