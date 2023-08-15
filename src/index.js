import React from 'react';
import ReactDOM from "react-dom";
import Card from './components/layout/Card';
import ListaAlunos from './components/repeticao/ListaAlunos';
import ListaProdutos from './components/repeticao/ListaProdutos';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';

ReactDOM.render(
  <div>
    <Card titulo="12 - Classes" color="yellow">
      <Contador numeroInicial={100} />
    </Card>

    <Card titulo="11 - Componente Controlado" color="blue">
      <Input />
    </Card>

    <Card titulo="09 - Comun. Inireta" color="silver">
      <IndiretaPai />
    </Card>

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