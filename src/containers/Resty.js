import React, { Component } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Form from '../components/resty/Form';
import HistoryList from '../components/resty/HistoryList';
// import Result from '../components/resty/Result';

export default class Resty extends Component{
  state = {
    url: '',
    textInput: '',
    method: '',
    response: '',
    token: '',
    username: '',
    password: ''
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
    let headers;

    if(this.state.method === 'POST' || this.state.method === 'PUT' || this.state.method === 'PATCH') {
      headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.bearerToken}`
      };
      body = this.state.textInput;
    }
    console.log(body, 'BODY');
    fetch(this.state.url, {
      method: this.state.method,
      headers: headers,
      body: body
    })
      .then(res => {
        return res.json();
      })

      .then(response => this.setState({ response: JSON.stringify(response, null, 2) }));



    this.setState(state => ({
      historyList: [
        ...state.historyList, {
          method: state.method,
          url: state.url,
          textInput: state.textInput
        }
      ]
    }));

  }
  updateStateFromHistory = (method, url, textInput) => {
    this.setState({
      method,
      url,
      textInput
    });
  };

  render() {
    const { url, textInput, method, username, password, token } = this.state;
    return (
      <>
        <Header />
        <HistoryList HistoryList={HistoryList} onClick={this.updateStateFromHistory} />
        <section>
          <Form
            url={url}
            textInput={textInput}
            method={method}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            username={username}
            password={password}
            token={token}
          />
          <pre>{this.state.response}</pre>
        </section>
        <Footer />
      </>
    );
  }
}
