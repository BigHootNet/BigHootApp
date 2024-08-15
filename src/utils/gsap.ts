import gsap from 'gsap';

export const animateSectionIn = (element: HTMLElement | null) => {
  if (element) {
    gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }
};

export const animateHeaderIn = (element: HTMLElement | null) => {
  if (element) {
    gsap.fromTo(element, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.2 });
  }
};

export const animateParagraphIn = (element: HTMLElement | null) => {
  if (element) {
    gsap.fromTo(element, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.3 });
  }
};

export const animateColumnsIn = (element: HTMLElement | null) => {
  if (element) {
    gsap.fromTo(element, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1.5 });
  }
};