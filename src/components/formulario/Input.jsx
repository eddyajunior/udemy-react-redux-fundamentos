import React, { useState } from 'react';

const Input = (props) => {
    const [valor, setValor] = useState('Inicial');

    const quandoMudar = (e) => {
        console.log(e.target.value);
    }

    return (
        <div className='Input'>
            <input 
                value={valor} 
                onChange={quandoMudar}
            />
        </div>
    );
};

export default Input;