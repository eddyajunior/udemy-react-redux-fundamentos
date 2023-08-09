import React from 'react';

const ComParametro = (props) => {
    return (
        <div>
            <div><h2>Título: { props.titulo } </h2></div>
            <div><h3>Sub-título: { props.subtitulo } </h3></div>            
        </div>
    );
};

export default ComParametro;