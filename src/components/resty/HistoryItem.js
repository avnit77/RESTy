import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, textInput, onClick }) => {
  return (
    <div onClick={() => onClick(method, url, textInput)}>
      <p >METHOD: {method}</p>
      <p >URL: {url}</p>
      {method !== 'GET' && method !== 'DELETE' && <p>BODY: {textInput}</p>}
    </div>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  textInput: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default HistoryItem;
