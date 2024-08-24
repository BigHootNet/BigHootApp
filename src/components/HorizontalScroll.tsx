import React from 'react';
import { useCreateHorizontalScroll } from '../hooks/useCreateHorizontalScroll';
import '../styles/components/HorizontalScroll.scss';

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const { containerRef, sectionRef } = useCreateHorizontalScroll();

  return (
    <section id="projects" ref={sectionRef} className="projects-page section color-light">
      <div className="horizontal-scroll-container" ref={containerRef}>
        <div id="column-container">
          {children}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
