import React from 'react';

import alunos from '../../data/alunos';

const ListaAlunos = (props) => {
    const lista = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li>)
    })
    return (
        <div>
            <ul>
                {lista}
            </ul>            
        </div>
    );
};

export default ListaAlunos;