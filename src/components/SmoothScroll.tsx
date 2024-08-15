import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: ReactNode;
};

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = new LocomotiveScroll({
      el: scrollRef.current!,
      smooth: true, 
    });

    scroller.on('scroll', ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollRef.current!, {
      scrollTop(value) {
        if (value !== undefined) {
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
      pinType: scrollRef.current!.style.transform ? 'transform' : 'fixed',
    });

    const scrollColorElems = document.querySelectorAll<HTMLElement>('[data-bgcolor]');
    scrollColorElems.forEach((colorSection, i) => {
      const nextSection = scrollColorElems[i + 1] as HTMLElement;
      
      ScrollTrigger.create({
        trigger: colorSection,
        scroller: scrollRef.current!,
        start: 'top 50%',
        end: nextSection ? `top 50%` : 'bottom 50%',
        onEnter: () => {
          const bgColor = colorSection.getAttribute('data-bgcolor');
          const textColor = colorSection.getAttribute('data-textcolor');
          if (bgColor && textColor) {
            gsap.to(document.body, {
              backgroundColor: bgColor,
              color: textColor,
              duration: 1,
              overwrite: 'auto',
            });
          }
        },
        onLeaveBack: () => {
          const prevBgColor = i === 0 ? null : scrollColorElems[i - 1].getAttribute('data-bgcolor');
          const prevTextColor = i === 0 ? null : scrollColorElems[i - 1].getAttribute('data-textcolor');
          if (prevBgColor && prevTextColor) {
            gsap.to(document.body, {
              backgroundColor: prevBgColor,
              color: prevTextColor,
              duration: 1,
              overwrite: 'auto',
            });
          }
        },
        markers: false, 
      });
    });

    ScrollTrigger.addEventListener('refresh', () => scroller.update());
    ScrollTrigger.refresh();

    return () => {
      scroller.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <div className="wrap" ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
