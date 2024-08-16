import React, { useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import '../styles/components/HorizontalScroll.scss';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  useLayoutEffect(() => {
    // Initialisation de Locomotive Scroll
    const scroller = new LocomotiveScroll({
      el: document.querySelector('.wrap') as HTMLElement,
      smooth: true,
    });

    scroller.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.wrap', {
      scrollTop(value) {
        if (typeof value !== 'undefined') {
          scroller.scrollTo(value, 0, 0);
        } else {
          return scroller.scroll.instance.scroll.y;
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
      pinType: (document.querySelector('.wrap') as HTMLElement).style.transform ? 'transform' : 'fixed',
    });

    ScrollTrigger.matchMedia({
      "all": function() {
        const container = document.getElementById('column-container');
        if (container) {
          const totalWidth = container.scrollWidth * 4;

          const scrollTriggerInstance = gsap.to(container, {
            x: -totalWidth + window.innerWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: '#projects',
              scroller: document.querySelector('.wrap') as HTMLElement,
              start: 'top top',
              end: `+=${totalWidth}`,
              scrub: true,
              pin: true,
              markers: false,
              invalidateOnRefresh: true,
            },
          });

          ScrollTrigger.refresh();

          return () => {
            scrollTriggerInstance.scrollTrigger?.kill();
          };
        }
      }
    });

    ScrollTrigger.addEventListener('refresh', () => scroller.update());
    ScrollTrigger.refresh();

    return () => {
      scroller.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="horizontal-scroll-container">
      <div id="column-container">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
