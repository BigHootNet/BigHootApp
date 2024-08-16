import React from 'react';
import photo from '../assets/img/photo.png';
import illu1 from '../assets/img/illu1.png';
import illu2 from '../assets/img/illu2.png';
import illu3 from '../assets/img/illu3.png';
import '../styles/pages/Tools.scss';
import GsapLogo from '../components/GsapLogo';

const Tools: React.FC = () => {
  return (
    <div className="tools-page">
      <div className="image-display">
        <img src={photo} alt="Photo" className="photo-image" />
      </div>
      <div className="name_holder">
          <h3>Fourmiguier</h3>
          <h3>Tony</h3>
      </div>
      <div className="icon_holder">
          <i className="devicon-typescript-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-threejs-original"></i>
          <GsapLogo/>
          <i className="devicon-photoshop-plain"></i>
          <i className="devicon-premierepro-plain"></i>
      </div>
      <img src={illu1} alt="Xenomorph sketch" className="illustration-pic1" />
      <img src={illu2} alt="Ellen Ripley sketch" className="illustration-pic2" />
      <img src={illu3} alt="Robotic Child sketch" className="illustration-pic3" />
    </div>
  );
};

export default Tools;
