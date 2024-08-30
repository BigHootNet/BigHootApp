import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useSectionColorChange = () => {
  useGSAP(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-bgcolor]');
    
    sections.forEach((section, i) => {
      const bgColor = section.getAttribute('data-bgcolor');
      const textColor = section.getAttribute('data-textcolor');
      const nextSection = sections[i + 1] as HTMLElement;

      const endValue = nextSection 
        ? `bottom 50%`
        : 'bottom 50%';

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: endValue,
        onEnter: () => {
          if (bgColor && textColor) {
            gsap.to(document.body, {
              backgroundColor: bgColor,
              color: textColor,
              duration: .5,
              ease: 'power2.inOut',
              overwrite: 'auto',
            });
          }
        },
        onLeaveBack: () => {
          const prevBgColor = i === 0 ? null : sections[i - 1].getAttribute('data-bgcolor');
          const prevTextColor = i === 0 ? null : sections[i - 1].getAttribute('data-textcolor');
          if (prevBgColor && prevTextColor) {
            gsap.to(document.body, {
              backgroundColor: prevBgColor,
              color: prevTextColor,
              duration: .5,
              ease: 'power2.inOut',
              overwrite: 'auto',
            });
          }
        },
        markers: false, 
        refreshPriority: 2,
        preventOverlaps: true,
      });
    });
  });
};
