import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comrad from './Comrad';

class App extends Component {
  componentDidMount(){
    this.setState({
      greeting: 'Hello gentelments'
    })

    setTimeout(() => {
      this.setState({
        greeting: "Hallo Kameraden!"
      })
    }, 10000)
  }

  render() {
    const state = this.state && this.state.greeting || '';
    return (
      <div className="App">
        <header className="App-header">
          <Comrad comradGreeting={state} />
          <Comrad comradGreeting={state} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
