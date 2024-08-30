import React from 'react';
import '../styles/pages/Contact.scss';
import AnimatedText from '../components/AnimatedText'; // Assurez-vous que le chemin est correct

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="section-title">
        <span>/contact</span>
      </div>
      <div className="text-container">
        <AnimatedText />
      </div>
      <a href="mailto:contact@bighoot.net" className="email-link">
        contact@bighoot.net
      </a>
    </div>
  );
};

export default Contact;
