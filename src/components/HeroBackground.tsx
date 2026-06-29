import { useRef, useEffect } from "react";
import gsap from "gsap";
import HeroWebGLBackground from "@/components/HeroWebGLBackground";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const blobs = container.querySelectorAll<HTMLElement>("[data-blob]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(blobs, {
        opacity: 0,
        scale: 0.6,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
      });

      blobs.forEach((blob, index) => {
        gsap.to(blob, {
          x: gsap.utils.random(-30, 30),
          y: gsap.utils.random(-20, 20),
          scale: gsap.utils.random(0.95, 1.08),
          duration: 4 + index * 0.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <HeroWebGLBackground />
      <div
        data-blob
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        data-blob
        className="absolute top-1/3 -right-16 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"
      />
      <div
        data-blob
        className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-purple-400/15 blur-3xl"
      />
    </div>
  );
}
