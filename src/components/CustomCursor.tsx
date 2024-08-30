import React, { useEffect } from 'react';
import '../styles/components/CustomCursor.scss';
import useIsMobile from '../hooks/useIsMobile'; // Import du hook personnalisé

const CustomCursor: React.FC = () => {
  const isMobile = useIsMobile(); // Utilisation du hook pour détecter si l'utilisateur est sur mobile

  useEffect(() => {
    if (isMobile) return; // Ne pas initialiser le curseur personnalisé sur mobile

    function createCustomCursor() {
      let cursor = document.getElementById('bigCursor');

      if (cursor) {
        console.log('bigCursor already exists');
      } else {
        cursor = document.createElement('div');
        cursor.setAttribute('id', 'bigCursor');
        document.body.appendChild(cursor);

        initCustomCursor(cursor);
      }
    }

    function initCustomCursor(cursor: HTMLElement) {
      document.body.onmousemove = function (e) {
        cursor!.style.setProperty('--x', e.clientX + 'px');
        cursor!.style.setProperty('--y', e.clientY + 'px');
      };
    }

    createCustomCursor();
  }, [isMobile]);

  return null;
};

export default CustomCursor;
