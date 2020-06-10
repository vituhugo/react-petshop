import React, { useState } from 'react';

function Input() {
    let [cartoes, setCartoes] = useState(["Primeira tarefa!"]);
    
    let [input, setInput] = useState("");

    console.log("CARTOES: ", cartoes);

    function handleRemover(cartao_atual) {
        // Lógica com filter
        let novo_cartoes = cartoes.filter(c => c != cartao_atual);
        setCartoes(novo_cartoes);

        // // Lógica com splice
        // cartoes.splice(cartoes.indexOf(cartao_atual), 1);
        // setCartoes(cartoes);
    }

    return (
        <div>
            <p>
                <label>Texto:</label>
                <input onChange={ e => setInput(e.target.value)} value={input} />
            </p>
            {/* Envia o valor armazenado na variavel input para a variável frase */}
            <button onClick={ e => setCartoes([...cartoes, input])}>
                Adicionar
            </button>

            <div className="lista-cards">
                {cartoes.map(cartao => (
                    <p>
                        {cartao}
                        <button onClick={e => handleRemover(cartao)} >Remover</button>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Input;