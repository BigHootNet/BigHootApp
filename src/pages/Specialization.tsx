import React from 'react';
import SpecializationItem from '../components/SpecializationItem';
import '../styles/pages/Specialization.scss';
import img from '../assets/img/field-logo.png';

const Specialization: React.FC = () => {

  return (
    <>
      <div className="section-title">
        <span>/which_means</span>
      </div>
      <div className="specialization-container">
        <div className="specialization-logo-container">
          <img src={img} className="specialization-logo"alt="logo hidden in background"></img>
        </div>
        <SpecializationItem title="WEBDESIGN" subTitle="CAUGHT BY SWAG POLICE" />
        <SpecializationItem title="MOTION DESIGN" subTitle="TREE GOING BRRR SPINNIN" />
        <SpecializationItem title="FRONT-END DEV" subTitle="THAT'S WHY U CAME HERE" />
        <SpecializationItem title="UX DESIGN" subTitle="DO YOU LIKE IT ?" />
        <SpecializationItem title="UI DESIGN" subTitle="I NEEDED ANOTHER LINE" />
      </div>
    </>
  );
};

export default Specialization;