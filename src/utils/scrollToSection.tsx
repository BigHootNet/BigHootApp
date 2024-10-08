import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash) as HTMLElement;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

export default ScrollToSection;
