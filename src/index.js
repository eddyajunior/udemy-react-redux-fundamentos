import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';

ReactDOM.render(
  <div>
    <Card titulo="06 - Repetição" color="#ccc">
      <ListaAlunos />
    </Card>
  </div>, 
  document.getElementById('root')
  );