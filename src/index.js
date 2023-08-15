import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import DiretaPai from './components/comunicacao/DiretaPai';

ReactDOM.render(
  <div>
    <Card titulo="08 - Comun. Direta" color="brown">
      <DiretaPai />
    </Card>

    <Card titulo="07 - Ex. Repetição" color="#cbb">
      <ListaProdutos />
    </Card>

    <Card titulo="06 - Repetição" color="#ccc">
      <ListaAlunos />
    </Card>


  </div>, 
  document.getElementById('root')
  );