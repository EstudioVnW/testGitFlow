import React, { Component } from 'react';
import './App.css';
import Img1 from './Icone-Sistemas.svg';
import Img2 from './Icone-Email.svg';

import Servicos from './components/Servicos';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div class="container">
        <h1 class="container__title">Serviços</h1>  
        <p class="container__paragraph"> Utilizamos as melhores plataformas e linguagens para entregar
           soluções digitais otimizadas, confiáveis e que atendam seus reais
            objetivos de negócios.
        </p>
        <div>
          <p class="container__paragraphIcon">Sites e Landing pages responsivas</p>
          <img class="container__image" src={Img1}></img>
          <p class="container__paragraphIcon">E-mail marketing</p>   
          <img class="container__image" src={Img2}></img>       
        </div>
        <div>
          
        </div>
      </div>
    );
  }
}

export default App;
