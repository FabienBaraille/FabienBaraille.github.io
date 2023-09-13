/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { useEffect, useRef, useState } from 'react';
import './Page.scss';
import PropTypes from 'prop-types';
import UpButton from './UpButton/UpButton';

const Page = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [top, setTop] = useState(0);
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTop(10);
  }, [children, top]);
  return (
    <div
      className="page"
      ref={divRef}
      onScroll={(event) => setScrollTop(event.target.scrollTop)}
    >
      {children}
      <UpButton scrollTop={scrollTop} setTop={setTop} />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.array,
};

export default Page;
