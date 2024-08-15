import React, { useEffect } from 'react';
import SpecializationItem from '../components/SpecializationItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/pages/Specialization.scss';
import img from '../assets/img/field-logo.png';

gsap.registerPlugin(ScrollTrigger);

const Specialization: React.FC = () => {
  useEffect(() => {
    const textElements = gsap.utils.toArray('.text') as HTMLElement[];

    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

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