import React from 'react';

import logoImg from './images/logo.svg'

import './styles/global.css'
import './styles/pages/landing.css'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy Logo"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>
      </div>

      <div className="location">
        <strong>São Luís</strong>
        <span>Maranhão</span>
      </div>

      <a href="" className="enter-app">
        >
      </a>
    </div>
  );
}

export default App;
