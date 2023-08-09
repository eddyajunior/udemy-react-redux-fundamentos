import React from 'react';
import ReactDOM from "react-dom";

import './index.css';

let tag = "Eu sou uma tag!";

ReactDOM.render(
  <div>
    <strong>Olá React</strong>
    <div>{tag}</div>
  </div>, 
  document.getElementById('root')
  );