import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const HEADLINE = "Websites, Branding & Marketing for Local Businesses";

const LEAD =
  "Simple, affordable digital solutions that help your business attract more customers. From professional websites and branding to multilingual marketing, we help local businesses grow without the agency jargon.";

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
      <h1 data-animate className="hero-title opacity-0">
        {HEADLINE}
      </h1>
      <p data-animate className="hero-lead opacity-0">
        {LEAD}
      </p>
    </div>
  );
}
