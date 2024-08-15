import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

export const initializeScrollTrigger = (scroller: HTMLElement) => {
  const scrollInstance = new LocomotiveScroll({
    el: scroller,
    smooth: true,
  });

  ScrollTrigger.scrollerProxy(scroller, {
    scrollTop(value) {
      if (value !== undefined) {
        scrollInstance.scrollTo(value, 0, 0);
      } else {
        return scrollInstance.scroll.instance.scroll.y;
      }
    },
    getBoundingClientRect() {
      return {
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scroller.style.transform ? 'transform' : 'fixed',
  });
  

  ScrollTrigger.addEventListener('refresh', () => scrollInstance.update());
  ScrollTrigger.refresh();

  return scrollInstance;
};

export const createHorizontalScroll = (trigger: string | HTMLElement, container: string | HTMLElement, totalLength: number) => {
  return gsap.to(container, {
    x: -totalLength + window.innerWidth,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger,
      start: 'top top',
      end: `+=${totalLength}`,
      scrub: true,
      pin: true,
      markers: false,
      invalidateOnRefresh: true,
    },
  });
};
