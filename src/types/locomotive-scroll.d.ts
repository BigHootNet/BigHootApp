declare module 'locomotive-scroll' {
    interface LocomotiveScrollOptions {
      el: HTMLElement | null;
      smooth: boolean;
    }
  
    class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: () => void): void;
      scrollTo(target: string | number | HTMLElement, offset?: number, duration?: number): void;
      update(): void;
      destroy(): void;
      scroll: {
        instance: {
          scroll: { y: number };
        };
      };
    }
  
    export default LocomotiveScroll;
  }
  