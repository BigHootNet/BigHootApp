import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useCreateHorizontalScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    if (!container || !section) return;

    const calculateScroll = () => {
      const totalScrollWidth = (container.scrollWidth - section.offsetWidth) / 1.35;

      if (totalScrollWidth > 0) {
        gsap.to(section, {
          x: -totalScrollWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: "#projects",
            start: 'top top',
            end: () => `+=${totalScrollWidth}`,
            scrub: true,
            pin: true,
            pinSpacing: true,
            markers: false,
          },
        });

        ScrollTrigger.refresh();
      }
    };

    const observer = new MutationObserver(() => {
      if (container.scrollWidth > 0) {
        calculateScroll();
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  });

  return { containerRef, sectionRef };
};
