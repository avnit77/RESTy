import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, ...props }) => (
  <button {...props}>{text}</button>
);

Button.PropTypes = {
  text: PropTypes.string.isRequired,

};

export default Button;
