import './Footer.scss';

import { Home, Linkedin, Mail, Smartphone } from 'react-feather';

const Footer = () => {
  return (
    <div className="contact">
      <p>
        <Home />
        <a
          href="https://goo.gl/maps/szX2T9X6C7AGfyHG9"
          target="_blank"
          rel="noreferrer"
        >
          01800 - Saint Jean de Niost
        </a>
      </p>
      <p>
        <Smartphone />
        <a href="tel:+33663293741">06.63.29.37.41</a>
      </p>
      <p>
        <Mail />
        <a href="mailto:baraille.fabien@gmail.com">baraille.fabien@gmail.com</a>
      </p>
      <p>
        <Linkedin />
        <a
          href="https://www.linkedin.com/in/fabienbaraille/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/fabienbaraille/
        </a>
      </p>
    </div>
  );
};

export default Footer;
