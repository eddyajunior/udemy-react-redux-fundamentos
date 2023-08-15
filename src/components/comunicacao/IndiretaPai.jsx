import React from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = () => {
    const fornecereInformacoes = (nome, idade, nerd) =>
    {
        console.log(nome, idade, nerd);
    }
    return (
        <div>
            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecereInformacoes}></IndiretaFilho>
        </div>
    );
};

export default IndiretaPai;