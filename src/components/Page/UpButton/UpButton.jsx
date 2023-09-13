import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { ArrowUpCircle } from 'react-feather';
import './UpButton.scss';

const UpButton = ({ scrollTop, setTop }) => {
  const BtnRef = useRef(null);

  useEffect(() => {
    if (scrollTop > 50) {
      BtnRef.current.style.display = 'block';
    } else {
      BtnRef.current.style.display = 'none';
    }
  }, [scrollTop]);

  window.onscroll = function toggle() {
    if (document.documentElement.scrollTop > 50) {
      BtnRef.current.style.display = 'block';
    } else {
      BtnRef.current.style.display = 'none';
    }
  };

  const toTheTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTop(0);
  };
  return (
    <button
      ref={BtnRef}
      type="button"
      className="to-the-top"
      onClick={toTheTop}
    >
      <ArrowUpCircle />
    </button>
  );
};

UpButton.propTypes = {
  scrollTop: PropTypes.number.isRequired,
  setTop: PropTypes.func.isRequired,
};

export default UpButton;
