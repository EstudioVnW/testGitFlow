import React, { Component } from 'react';
import Images from './Images';
import './App.css';

import Service from './components/Service.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="BoxText">Portfolio</p>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>*Bem na Web*</h1>
        </header>
      <div className="servicosBox">
        <div className="servicosBos_box-items">
          <h1>Serviços</h1>
          <p>Utilizamos as melhores plataformas e linguagens para entregar 
            soluções digitais otimizadas, confiáveis e que 
            atendam seus reais objetivos de negócios.</p>
        </div>
       </div>
        <Images />
      </div>
    );
  }
}

export default App;
