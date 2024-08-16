import React from 'react';
import '../styles/components/Tooltip.scss';

interface TooltipProps {
  text: string;
  isVisible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, isVisible }) => {
  return (
    <div className={`tooltip ${isVisible ? 'visible' : ''}`}>
      {text}
    </div>
  );
};

export default Tooltip;
