/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import './Page.scss';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return <div className="page">{children}</div>;
};

Page.propTypes = {
  children: PropTypes.array,
};

export default Page;
