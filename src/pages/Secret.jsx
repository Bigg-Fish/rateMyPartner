import React, { Component } from 'react';
import Header from "../components/Header"

export default class Secret extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Loading...'
    }
  }

  componentDidMount() {
    fetch('/api/secret')
      .then(res => res.text())
      .then(res => this.setState({ message: res }));
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Secret</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}