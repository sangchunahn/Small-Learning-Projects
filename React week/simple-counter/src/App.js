import React, { Component } from 'react';
import Count from './Count'
import Incrementor from './Incrementor'
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      number: 0
    }

    this.increaseNumber = this.increaseNumber.bind(this)

  }
  increaseNumber() {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter</h2>
        </div>
        <Count count={this.props.number} />
        <Incrementor callback={this.increaseNumber}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    number: state.number
  }
}

export default connect(mapStateToProps)(App);
