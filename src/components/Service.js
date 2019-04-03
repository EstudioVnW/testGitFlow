import React, { Component } from 'react';
// import styled from 'styled-components';

/*   IMAGE    */
// import iconResponsive from '../Assets/img/Icone-Landing.svg';
// import iconSystem from '../Assets/img/Icone-Sistemas.svg';
// import iconEmail from '../Assets/img/Icone-Email.svg';
// import iconAplication from '../Assets/img/Icone-Aplicativos.svg';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: deepskyblue;
// `;

// const Description = styled.p`
//   font-size: 1.5em;
//   text-align: center;
//   color: deepskyblue;
// `;




class Service extends Component {
  render() {
    return (
      <main>
        <section>
        <h1>Serviços</h1>
        <p>Utilizamos as melhores plataformas e linguagens para entregar soluções digitais otimizadas, confiáveis e que atendam seus reais objetivos de negócios.</p>
          <div>
          <span>
            <p>Sites e landing pages responsivas</p>
            {/* <img src={iconResponsive} alt="icon responsive"/> */}
          </span>
          <span>
            <p>Sistemas e portais</p>
            {/* <img src={iconSystem} alt="icon system"/> */}
          </span>
          <span>
            <p>E-mails marketing</p>
            {/* <img src={iconEmail} alt="icon email"/> */}
          </span>
          <span>
            <p>Aplicativos nativos</p>
            {/* <img src={iconAplication} alt="icon aplication"/> */}
          </span>
          </div>
          <div>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>Vue.js</li>
              <li>Python</li>
              <li>React Native</li>
            </ul>
          </div>
        </section>       
      </main>
    );
  }
}

export default Service;
