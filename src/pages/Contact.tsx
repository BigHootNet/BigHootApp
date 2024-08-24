import React, { useRef } from 'react';
import '../styles/pages/Contact.scss';

const Contact: React.FC = () => {
  const textRefs = useRef<(HTMLDivElement | HTMLAnchorElement)[]>([]);

  // Utilisation de notre hook personnalisé pour animer la section contact


  return (
    <div className="contact-page">
      <div className="section-title">
        <span>/contact</span>
      </div>
      <div className="text-container">
        <div className="animated-text" ref={(el) => el && textRefs.current.push(el)}>Want to contact me?</div>
        <div className="animated-text" ref={(el) => el && textRefs.current.push(el)}>Want to hire me?</div>
        <div className="animated-text" ref={(el) => el && textRefs.current.push(el)}>Want to date me?</div>
        <a href="mailto:contact@bighoot.net" className="animated-text" ref={(el) => el && textRefs.current.push(el)}>
          contact@bighoot.net
        </a>
      </div>
    </div>
  );
};

export default Contact;
