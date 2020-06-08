import React from 'react';


function Card(props) {
    return (
        <div className="card">
            <div class="card-image">
                <img src={props.imagem} />
            </div>
            <ul className="card-content">
                <li>Nome: {props.nome}</li>
                <li>Idade: {props.idade}</li>
                <li>Genero: {props.genero}</li>
            </ul>
        </div>
    )
}

export default Card;