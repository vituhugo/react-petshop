import React, { useState } from 'react';

function Input() {
    /**
     * Variavel frase, armazena a frase a ser exibida.
     */
    let [frase, setFrase] = useState("");
    /**
     * Variavel input, armazena o valor atual do input.
     */
    let [input, setInput] = useState("");

    return (
        <div>
            <p>
                <label>Texto:</label>
                <input onChange={ e => setInput(e.target.value)} value={input} />
            </p>
            {/* Envia o valor armazenado na variavel input para a variável frase */}
            <button onClick={ e => setFrase(input)}>
                Capturar texto!
            </button>
            <button onClick={ e => setInput("")}>
                Limpa input
            </button>

            <p>
                {/* Exibe o valor da variável frase */}
                O Texto digitado foi: { input }
            </p>
        </div>
    )
}

export default Input;