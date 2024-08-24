declare module 'animejs' {
  interface AnimeCallback {
    (anim: AnimeInstance, index?: number, length?: number): void;
  }

  interface AnimeDelayFunction {
    (el: HTMLElement, i: number, length: number): number;
  }

  interface AnimeParams {
    [key: string]: string | number | boolean | AnimeCallback | Array<string | number | boolean | AnimeCallback> | undefined;
    targets?: string | HTMLElement | NodeList | Array<HTMLElement | SVGElement | string>;
    translateX?: number | string | Array<number | string>;
    translateY?: number | string | Array<number | string>;
    opacity?: number | Array<number>;
    easing?: string | Array<string>;
    duration?: number | Array<number>;
    delay?: number | AnimeDelayFunction | Array<number | AnimeDelayFunction>;
    rotate?: number | string | Array<number | string>;
    scale?: number | string | Array<number | string>;
    complete?: AnimeCallback;
    update?: AnimeCallback;
    begin?: AnimeCallback;
    loop?: number | boolean;
    autoplay?: boolean;
    direction?: 'normal' | 'reverse' | 'alternate';
    keyframes?: Array<AnimeParams>;
    backgroundColor?: string | Array<string>;
    borderRadius?: string | Array<string>;
    width?: string | number | Array<string | number>;
    height?: string | number | Array<string | number>;
  }

  interface AnimeInstance {
    play: () => void;
    pause: () => void;
    restart: () => void;
    reverse: () => void;
    seek: (time: number) => void;
    finished: Promise<void>;
    reset: () => void;
    tick: (time: number) => void;
    duration: number;
    progress: number;
    currentTime: number;
    paused: boolean;
    completed: boolean;
  }

  function anime(params: AnimeParams): AnimeInstance;

  export default anime;
}
