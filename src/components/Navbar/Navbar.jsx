/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

import './Navbar.scss';

const Navbar = ({ page, setPage }) => {
  return (
    <div className="nav">
      <div className="logo">Logo</div>
      <button
        onClick={() => setPage('home')}
        type="button"
        className={page === 'home' ? 'selected' : ''}
      >
        Home
      </button>
      <button
        onClick={() => setPage('formation')}
        type="button"
        className={page === 'formation' ? 'selected' : ''}
      >
        Formation & Expérience
      </button>
      <button
        onClick={() => setPage('loading')}
        type="button"
        className={page === 'projets' ? 'selected' : ''}
      >
        Projets
      </button>
    </div>
  );
};

Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
  page: PropTypes.string,
};

export default Navbar;
