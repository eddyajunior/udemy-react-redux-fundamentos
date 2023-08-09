import React from 'react';

const NumeroAleatorio = (props) => {
    const result = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);

    return (
        <>            
            {result}
        </>
    );
};

export default NumeroAleatorio;