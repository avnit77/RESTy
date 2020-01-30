import React, { Component } from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

export default class Resty extends Component{
//   state = {
//     showResult: false,
//     words: [],
//     one: '',
//     two: '',
//     three: '',
//     four: '',
//     five: '',
//     six: '',
//     seven: '',
//     eight: '',
//     nine: '',
//     ten: '',
//     eleven: '',
//     twelve: '',
//     thirteen: ''
//   }

  //   toggleResult = () =>
  //     this.setState(state => ({ ...state, showResult: !state.showResult }));

  //     handleChange = event => {
  //       this.setState({ one: event.target.value });
  //       this.setState({ two: event.target.value });
  //       this.setState({ three: event.target.value });
  //       this.setState({ four: event.target.value });
  //       this.setState({ five: event.target.value });
  //       this.setState({ six: event.target.value });
  //       this.setState({ seven: event.target.value });
  //       this.setState({ eight: event.target.value });
  //       this.setState({ nine: event.target.value });
  //       this.setState({ ten: event.target.value });
  //       this.setState({ eleven: event.target.value });
  //       this.setState({ twelve: event.target.value });
  //       this.setState({ thirteen: event.target.value });
  //     }

  //     handleSubmit = event => {
  //       event.preventDefault();
  //       this.toggleResult();
  //       this.setState(state => ({
  //         words: [state.one, state.two, state.three, state.four, state.five, state.six, state.seven, state.eight, state.nine, state.ten, state.eleven, state.twelve, state.thirteen]
  //       }));
  //     }

  render() {
    //   const { showResult } = this.state;
    return (
      <>
        <Header />
        {/* {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
          {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />} */}
        <Footer />
      </>
    );
  }
}
