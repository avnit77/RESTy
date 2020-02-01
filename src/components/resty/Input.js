import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, method, url, textInput }) => (
  <form onSubmit={onSubmit} >

    <input type="text" placeholder="URL" value={url} name="url" onChange={onChange} />
    <section>
      <label><input type="radio" checked={method === 'GET'} name="method" value="GET" onChange={onChange}></input><span>GET</span></label>
      <label><input type="radio" checked={method === 'POST'} name="method" value="POST" onChange={onChange}></input><span>POST</span></label>
      <label><input type="radio" checked={method === 'PATCH'} name="method" value="PATCH" onChange={onChange}></input><span>PATCH</span></label>
      <label><input type="radio" checked={method === 'PUT'} name="method" value="PUT" onChange={onChange}></input><span>PUT</span></label>
      <label><input type="radio" checked={method === 'DELETE'} name="method" value="DELETE" onChange={onChange}></input><span>DELETE</span></label>
      <button>GO</button>
      <section>
        <textarea name="textInput" type="text" value={textInput} placeholder="Raw JSON" onChange={onChange}></textarea>
      </section>
    </section>
  </form>
);
Form.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;

