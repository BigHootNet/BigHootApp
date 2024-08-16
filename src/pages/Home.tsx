import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Specialization from './Specialization';
import Tools from './Tools';
import '../styles/pages/Home.scss';
import '../styles/pages/Hero.scss';
import '../styles/pages/About.scss';
import '../styles/pages/Projects.scss';
import '../styles/pages/Contact.scss';
import '../styles/pages/Specialization.scss';
import '../styles/pages/Tools.scss';

const Home: React.FC = () => {
  return (
    <div>
      <section id="home" className="landing" data-bgcolor="#1F1D1E" data-textcolor="#C9C9C9">
        <Hero />
      </section>

      <section id="about" className="about-page" data-bgcolor="#C9C9C9" data-textcolor="#1F1D1E">
        <About />
      </section>

      <section id="specialization" className="specialization-page" data-bgcolor="#1F1D1E" data-textcolor="#C9C9C9">
        <Specialization />
      </section>

      <section id="projects" className="projects-page" data-bgcolor="#C9C9C9" data-textcolor="#1F1D1E">
      <div className="section-title">
            <span>/projects</span>
      </div>
        <Projects />
      </section>

      <section id="tools" className="tools-page" data-bgcolor="#1F1D1E" data-textcolor="#C9C9C9">
        <Tools />
      </section>

      <section id="contact" className="contact-page" data-bgcolor="#C9C9C9" data-textcolor="#1F1D1E">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
