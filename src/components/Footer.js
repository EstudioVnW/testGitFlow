import React, { Component } from 'react';

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

              <input type="text" />
            </label>

              <textarea name="message" rows="5" placeholder="insira sua mensagem"></textarea>
            </label>
            <button type="submit">Enviar</button>

          </form>
        </div>
      </footer>
    );
  }
}

export default Footer;
