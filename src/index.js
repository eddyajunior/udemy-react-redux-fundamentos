import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/layout/Card';

import NumeroAleatorio from './components/basics/NumeroAleatorio';
ReactDOM.render(
  <div>
    <Card 
      titulo="Desafio Aleatório"
      color="#000"
    >    
    <NumeroAleatorio min={1} max={10} />
    </Card>
  </div>, 
  document.getElementById('root')
  );