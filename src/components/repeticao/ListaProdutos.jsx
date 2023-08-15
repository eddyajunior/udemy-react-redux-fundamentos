import React from 'react';

import produtos from '../../data/produtos';
import './ListaProdutos.css';

const ListaProdutos = () => {
    const isOdd = (id) => {
        return id % 2 === 0 ? 'odd' : 'nodd';
    };

    const listaProdutos = produtos.map((produto) => {
        return (            
            <tr key={produto.id} 
                className={isOdd(produto.id)}
            >
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        );
    });

    return (
        <div>
            Produtos Escolares
            <table cellpading={10} cellSpacing={2}>                
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProdutos}
                </tbody>
            </table>
        </div>
    );
};

export default ListaProdutos;