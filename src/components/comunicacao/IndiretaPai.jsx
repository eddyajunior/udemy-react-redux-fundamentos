import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

const IndiretaPai = () => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    const fornecereInformacoes = (pNome, pIdade, pNerd) =>
    {
        setNome(pNome);
        setIdade(pIdade);
        setNerd(pNerd);    

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