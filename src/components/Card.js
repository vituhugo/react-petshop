import React from 'react';


function Card() {
    return (
        <div className="card">
            <div class="card-image">
                <img src="https://via.placeholder.com/250" />
            </div>
            <ul className="card-content">
                <li>Nome: Sasha</li>
                <li>Idade: 7 anos</li>
                <li>Genero: Femenino</li>
            </ul>
        </div>
    )
}

export default Card;