import React from 'react';
import ReactDOM from "react-dom";
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import NumeroAleatorio from './components/basics/NumeroAleatorio';

// //import './index.css';
// import Primeiro from './components/basic/Primeiro';
// import ComParametro from './components/basics/ComParametro';

//let tag = "Eu sou uma tag!";

ReactDOM.render(
  <div>
    <strong>Olá React</strong>
    <Primeiro />
    <ComParametro  
      titulo="Vamos Aprender ReactJS"
      subtitulo="Udemy"
    />
    <NumeroAleatorio min="1" max="5" />
  </div>, 
  document.getElementById('root')
  );