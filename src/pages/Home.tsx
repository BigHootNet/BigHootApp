import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Specialization from './Specialization';
import Tools from './Tools';
import '../styles/pages/Home.scss';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import { useSectionColorChange } from '../hooks/useSectionColorChange';

const Home: React.FC = () => {
  useSmoothScroll();
  useSectionColorChange();
  console.log('%c You\'re not supposed to see this... Or maybe you are? Well, huh... Hi I guess ? Don\'t pay attention to the slices of pizza and World of Warcraft rolling, it\'s for research purpose of course !! *kof*kof*... Also, 42 is the answer you\'re looking for.', 'background: #222; color: #bada55')

  return (
    <div className="app">
      <section id="home" className="landing section" data-bgcolor="#1F1D1E" data-textcolor="#C9C9C9">
        <Hero />
      </section>
      <section id="about" className="about-page section" data-bgcolor="#C9C9C9" data-textcolor="#1F1D1E">
        <About />
      </section>
      <section id="specialization" className="specialization-page section" data-bgcolor="#1F1D1E" data-textcolor="#C9C9C9">
        <Specialization />
      </section>
      <section id="projects" className="projects-page section" data-bgcolor="#C9C9C9" data-textcolor="#1F1D1E">
        <div className="section-title">
          <span>/projects</span>
        </div>
        <Projects />
      </section>
      <section id="tools" className="tools-page section" data-bgcolor="#1F1D1E" data-textcolor="#C9C9C9">
        <Tools />
      </section>
      <section id="contact" className="contact-page section" data-bgcolor="#C9C9C9" data-textcolor="#1F1D1E">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
