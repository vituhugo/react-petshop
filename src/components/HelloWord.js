/**
 * Exemplo de useState
 * 
 * 1. Primeiro passo para utilizando do State em um componente de função é
 *    a importação da função useState através da lib do 'react';
 */
import React, { useState } from 'react';

function HelloWord() {
    /**
     * Após importar a função vamos utilizar a função useState para iniciar a nossa variável
     * seguindo a estrutura 
     *      let [NOME_VARIAVEL, setNOME_VARIAVEL] = useState(VALOR_INICIAL)
     * onde:
     *  NOME_VARIAVEL, é o nome da variável que vc deseja criar,
     *  setNOME_VARIAVEL, é uma função que será utilizada para mudar o valor original da variável criada
     *  VALOR_INICIAL, é o valor que a variável vai receber ao ser iniciada.
     */
    let [frase, setFrase] = useState("Olá mundo!");

    console.log("RENDER!");

    // exemplo antigo que não funciona let frase = "Olá mundo!"
    return (
        <>
            <h1>{ frase }</h1>
            {/* O botão tem a responsabilidade de alterar o valor da variável, 
            utilizando a função que foi retornada no useState(), estamos alterando 
            o valor original da variável frase para "Fui alterado" ao clicar neste botão */}
            <button onClick={e => setFrase("Fui alterado!")}>Alterar Frase</button>
            {/* exemplo antigo que não funciona: <button onClick={e => frase = "Fui alterado!"}>Alterar Frase</button> */}
        </>
    )
}

export default HelloWord;