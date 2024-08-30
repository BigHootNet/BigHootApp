import React, { useState } from 'react';
import photo from '../assets/img/photo.png';
import illu1 from '../assets/img/illu1.png';
import illu2 from '../assets/img/illu2.png';
import illu3 from '../assets/img/illu3.png';
import Tooltip from '../components/Tooltip';
import '../styles/pages/Tools.scss';

const Tools: React.FC = () => {
  const [tooltip, setTooltip] = useState({ text: '', isVisible: false });
  const [backgroundClass, setBackgroundClass] = useState('');

  const handleMouseOver = (text: string, bgClass: string) => {
    setTooltip({ text, isVisible: true });
    setBackgroundClass(bgClass);
  };

  const handleMouseOut = () => {
    setTooltip({ ...tooltip, isVisible: false });
    setBackgroundClass(''); // Reset the background class
  };

  return (
    <div className="tools-page">
      <div className={`dynBkg ${backgroundClass}`}></div>
      <div className="section-title">
        <span>/some_info</span>
      </div>
      <div className="image-display">
        <img src={photo} alt="Photo" className="photo-image" />
      </div>
      <div className="name_holder">
        <h3>Fourmiguier</h3>
        <h3>Tony</h3>
      </div>
      <div className="icon_holder">
        <i
          className="devicon-typescript-plain TSi"
          onMouseOver={() => handleMouseOver('TypeScript, makes JS even more wonderful', 'TSi-hover')}
          onMouseOut={handleMouseOut}
        ></i>
        <i
          className="devicon-javascript-plain JSi"
          onMouseOver={() => handleMouseOver('JavaScript, the goat of all languages', 'JSi-hover')}
          onMouseOut={handleMouseOut}
        ></i>
        <i
          className="devicon-react-original REi"
          onMouseOver={() => handleMouseOver('React, it changed my life', 'REi-hover')}
          onMouseOut={handleMouseOut}
        ></i>
        <i
          className="devicon-threejs-original THi"
          onMouseOver={() => handleMouseOver('Three.js, cuz like, 3D without it, it\'s hard', 'THi-hover')}
          onMouseOut={handleMouseOut}
        ></i>
        <i
          className="devicon-photoshop-plain PSi"
          onMouseOver={() => handleMouseOver('Photoshop, where it all started', 'PSi-hover')}
          onMouseOut={handleMouseOut}
        ></i>
        <i
          className="devicon-premierepro-plain PPi"
          onMouseOver={() => handleMouseOver('Premiere Pro, cuz I\'m a Wish version of Spielberg', 'PPi-hover')}
          onMouseOut={handleMouseOut}
        ></i>
      </div>
      <img src={illu1} alt="Xenomorph sketch" className="illustration-pic1" />
      <img src={illu2} alt="Ellen Ripley sketch" className="illustration-pic2" />
      <img src={illu3} alt="Robotic Child sketch" className="illustration-pic3" />

      <Tooltip text={tooltip.text} isVisible={tooltip.isVisible} />
    </div>
  );
};

export default Tools;
