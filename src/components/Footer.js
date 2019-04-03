import React, { Component } from 'react';

import '../App.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h1>Contato</h1>
        <div>
          <p>Você tem um projeto para nós? Entre em contato e vamos conversar:</p>
          <form>
            <label>
              _nome
              <input type="text"/>
            </label>
            <label>
              _telefone
              <input type="text" />
            </label>
            <label>
              _email
              <input type="text" />
            </label>
            <label>
              _mensagem
              <textarea name="message" rows="5" placeholder="insira sua mensagem"></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="footer_infos">
          <div className="footer_realizacao">
            <p>realização</p>
            <p>Instituto PrecisaSer</p>
          </div>
          <div className="footer_parceiros">
            <p>parceiros</p>
            <div className="footer_parceiros-items">
              <p>1STi</p>
              <p>Educap</p>
              <p>Proa</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
