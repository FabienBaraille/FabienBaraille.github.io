import './Footer.scss';

// import home from '../../assets/images/home-icon.png';
// import phone from '../../assets/images/phone-icon.png';
// import mail from '../../assets/images/mail-icon.png';
// import linkedIn from '../../assets/images/linkedin-icon.png';
import { Home, Linkedin, Mail, Smartphone } from 'react-feather';

const Footer = () => {
  return (
    <div className="contact">
      <p>
        <Home />
        {/* <img src={home} alt="home" /> */}
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
        {/* <img src={phone} alt="tel" /> */}
        <a href="tel:+33663293741">06.63.29.37.41</a>
      </p>
      <p>
        <Mail />
        {/* <img src={mail} alt="mail" /> */}
        <a href="mailto:baraille.fabien@gmail.com">baraille.fabien@gmail.com</a>
      </p>
      <p>
        <Linkedin />
        {/* <img src={linkedIn} alt="linkedIn" /> */}
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
