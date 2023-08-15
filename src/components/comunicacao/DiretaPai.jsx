import React from 'react';
import DiretaFilho from './DiretaFilho';

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho nome="Junior" idade={20} nerd={true} />            
            <DiretaFilho nome="Matheus" idade={21} nerd={true} />            
            <DiretaFilho nome="Igor" idade={18} nerd={false} />            
        </div>
    );
};

export default DiretaPai;