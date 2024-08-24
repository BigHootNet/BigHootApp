import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

interface AnimatedTextProps {
  text: string;
  isLink?: boolean;
  href?: string;
  delay: number;
  isVisible: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, isLink = false, href = '', delay, isVisible }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible && textRef.current) {
      anime({
        targets: textRef.current,
        translateY: [-50, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1000,
        delay: delay,
      });
    }
  }, [isVisible, delay]);

  return isLink ? (
    <a href={href} className="animated-text" ref={textRef as React.RefObject<HTMLAnchorElement>}>
      {text}
    </a>
  ) : (
    <div className="animated-text" ref={textRef}>
      {text}
    </div>
  );
};

export default AnimatedText;
