import React from 'react';

const IndiretaFilho = (props) => {
    const gerarIdade = (min, max) => {
        return parseInt(Math.random() * (max - min));
    }

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={(e) => {
                props.quandoClicar('João', gerarIdade(18, 103), true)
            }}
            >Fornecer Informações</button>
        </div>
        
    );
};

export default IndiretaFilho;