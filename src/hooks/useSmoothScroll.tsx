import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1, // Ajustez la durée pour contrôler la fluidité du défilement
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // fonction d'easing pour le défilement
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop() {
        return lenis.scroll !== undefined ? lenis.scroll : 0;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener('refresh', () => lenis.raf(Date.now()));
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy(); // Remplacez `update` par `destroy` pour nettoyer correctement l'instance Lenis
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Utilisez `getAll` pour tuer tous les triggers actifs
    };
  }, []);
};
