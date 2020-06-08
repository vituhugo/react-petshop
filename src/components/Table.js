import React from 'react';

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Genero</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default Table;