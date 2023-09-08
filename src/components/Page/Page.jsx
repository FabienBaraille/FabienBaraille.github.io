/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { useEffect, useRef } from 'react';
import './Page.scss';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [children]);

  return (
    <div className="page" ref={divRef}>
      {children}
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.array,
};

export default Page;
