import React, { useEffect } from 'react';
import '../styles/components/CustomCursor.scss';

const CustomCursor: React.FC = () => {
  useEffect(() => {
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
  }, []);

  return null;
};

export default CustomCursor;
