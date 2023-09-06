/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import './Container.scss';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
