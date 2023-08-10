import React from 'react';

const NumeroAleatorio = (props) => {
    // const min = props.min;
    const { min, max } = props;
    // const max = props.max;

    const result = parseInt(Math.random() * (max - min) + min);

    return (
        <>          
        <h2>Valor Aleatório</h2>  
        <p><strong>Valor mínimo: {props.min}</strong></p>
        <p><strong>Valor máximo: {props.max}</strong></p>
        <p><strong>Valor sorteado: {result}</strong></p>
        </>
    );
};

export default NumeroAleatorio;