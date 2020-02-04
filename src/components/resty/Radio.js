import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, label, onChange }) => (
  <>
    <input type="radio"></input>
  </>
);

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
