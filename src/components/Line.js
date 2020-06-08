import React from 'react';

function Line(props) {
    return (
        <tr>
            <td>{props.nome}</td>
            <td>{props.genero}</td>
            <td>{props.idade}</td>
        </tr>
    )
}

export default Line;