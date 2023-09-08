/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './Navbar.scss';

const Navbar = ({ page, setPage, isLittle }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    isLittle ? setHide(true) : setHide(false);
  }, [isLittle]);

  const toggleMenuPage = (pageName) => {
    if (isLittle) {
      setHide(!hide);
    }
    setPage(pageName);
  };

  return (
    <div className="nav">
      {!isLittle ? (
        <div className="logo" />
      ) : (
        <button
          type="button"
          className="btn title-btn"
          onClick={() => setHide(!hide)}
        >
          Menu
        </button>
      )}
      {!hide && (
        <div className="menu-div">
          <button
            onClick={() => toggleMenuPage('home')}
            type="button"
            className={
              page === 'home' ? 'btn menu-btn selected' : 'btn menu-btn'
            }
          >
            Home
          </button>
          <button
            onClick={() => toggleMenuPage('formation')}
            type="button"
            className={
              page === 'formation' ? 'btn menu-btn selected' : 'btn menu-btn'
            }
          >
            Formation & Expérience
          </button>
          <button
            onClick={() => toggleMenuPage('loading')}
            type="button"
            className={
              page === 'loading' ? 'btn menu-btn selected' : 'btn menu-btn'
            }
          >
            Projets
          </button>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.string,
  isLittle: PropTypes.bool,
};

export default Navbar;
