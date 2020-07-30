import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, method, url, textInput, username, password, token }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="URL" value={url} name="url" onChange={onChange} />
      <section>
        <label htmlFor={name}><input id={name} type="radio" checked={method === 'GET'} name="method" value="GET" onChange={onChange}></input><span>GET</span></label>
        <label><input type="radio" checked={method === 'POST'} name="method" value="POST" onChange={onChange}></input><span>POST</span></label>
        <label><input type="radio" checked={method === 'PATCH'} name="method" value="PATCH" onChange={onChange}></input><span>PATCH</span></label>
        <label><input type="radio" checked={method === 'PUT'} name="method" value="PUT" onChange={onChange}></input><span>PUT</span></label>
        <label><input type="radio" checked={method === 'DELETE'} name="method" value="DELETE" onChange={onChange}></input><span>DELETE</span></label>
        <button type='submit'>GO</button>
        <button type='reset'>Clear All</button>
      </section>
      <section>
        <textarea disabled={method === 'GET' || method === 'DELETE'} placeholder='Raw JSON Body' name='textInput' value={textInput} onChange={onChange}></textarea>
      </section>
      <div>
        <p>Basic Authorization</p>
        <input className='username' type='text' name='username' placeholder='Username' value={username} onChange={onChange}></input>
        <input className='password' type='password' name='password' placeholder='Password' value={password} onChange={onChange}></input>
        <p>Bearer Token</p>
        <input className='text' type='text' name='token' placeholder='Bearer Token' value={token} onChange={onChange}></input>
      </div>
    </form>
  );
};

Form.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  textInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  token: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default Form;

