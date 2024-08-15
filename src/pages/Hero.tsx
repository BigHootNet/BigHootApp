import React from 'react';
import '../styles/pages/Hero.scss';
import logo from '../assets/img/logofaded.png';

const Hero: React.FC = () => {
  return (
      <div className="landing-container">
        <div className="logo">
          <img src={logo} alt="BigHoot Logo" />
        </div>
        <div className="bighoot-title">
          <h1>BigHoot</h1>
        </div>
        <div className="bighoot-subtitle">
          <h3>Front-End Developer</h3>
        </div>
      </div>
  );
};

export default Hero;
