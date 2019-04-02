import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="BoxText">Portfolio</p>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>*Bem na Web*</h1>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
