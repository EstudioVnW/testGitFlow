import React, { Component } from 'react';
import './App.css';

import Servicos from './components/Servicos';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="BoxText">Portfolio</p>
          <h1>*Bem na Web*</h1>
        </header>
        <Servicos />
        <Footer />
      </div>
    );
  }
}

export default App;
