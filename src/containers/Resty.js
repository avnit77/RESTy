import React, { Component } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Form from '../components/resty/Input';
// import Result from '../components/resty/Result';

export default class Resty extends Component{
  state = {
    url: '',
    textInput: '',
    method: '',
    response: '',
  }

  handleChange = ({ target }) => {
    if(target.type === 'text') {
      this.setState({ [target.name]: target.value });
    } else if(target.type === 'radio') {
      this.setState({ [target.name]: target.value });
    } else if(target.type === 'textarea') {
      this.setState({ textInput: target.value });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    let body;

    if(this.state.method === 'POST' || this.state.method === 'PUT' || this.state.method === 'PATCH') {
      body = this.state.textInput;
    }
    console.log(body, 'BODY');

  }

  render() {
    const { url, textInput, method } = this.state;
    return (
      <>
        <Header />
        <section>
          <Form
            url={url}
            textInput={textInput}
            method={method}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
          />
          <pre>{this.state.response}</pre>
        </section>
        <Footer />
      </>
    );
  }
}
