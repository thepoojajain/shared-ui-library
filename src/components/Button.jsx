import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{ padding: '10px 20px', backgroundColor: '#0052cc', color: '#fff', border: 'none', borderRadius: '4px' }}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;