import React from 'react';
import '../styles/components/AnimatedText.scss'; // Créez ce fichier pour inclure les styles

const AnimatedText: React.FC = () => {
  return (
    <div className="animated-text-container">
      <p className="animated-text-static">Wanna</p>
      <b className="animated-text-wrapper">
        <span className="animated-text">
          contact<br />
          hire<br />
          date
        </span>
      </b>
      <p className="animated-text-static">me?</p>
    </div>
  );
};

export default AnimatedText;