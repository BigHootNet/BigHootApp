import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimateOnScroll = (elements: (HTMLDivElement | HTMLAnchorElement)[]) => {
  useEffect(() => {
    if (!elements || elements.length === 0) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: elements[0], // Déclencher l'animation dès que le premier élément entre dans le viewport
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
        markers: false, // Mettre sur true pour voir les markers
      }
    });

    elements.forEach((el, index) => {
      timeline.fromTo(
        el,
        { opacity: 0, y: 50 }, // Point de départ de l'animation (opacité 0 et déplacé vers le bas)
        { opacity: 1, y: 0, duration: 1, ease: 'power4.out' }, // Animation vers une opacité de 1 et position normale
        index * 0.2 // Décalage pour que les animations soient échelonnées
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [elements]);
};
