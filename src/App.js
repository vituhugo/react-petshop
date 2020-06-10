import React, { useState } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';

import Card from './components/Card';
import Header from './components/Header';
import Line from './components/Line';
import Table from './components/Table';

import Title from './components/Title';

function App() {
    let [bixinhos, setBixinhos] = useState([
        {
            nome: "Maria Joaquina",
            idade: "7 anos",
            genero: "Feminino",
            imagem: "https://media.gazetadopovo.com.br/viver-bem/2018/11/dog3-768x587-0e01be20.jpg"
        },
        {
            nome: "Tob",
            idade: "7 anos",
            genero: "Masculino",
            imagem: "https://www.folhape.com.br/obj/7/343796,475,80,0,0,475,365,0,0,0,0.jpg"
        },
    ]);
  return (
    <div>
        <Header />
        <main>
            <div className="container">
                <h2>Bixinhos</h2>
                <div className="row">
                   {bixinhos.map(bixinho => (
                        <div className="col s2">
                            <Card nome={bixinho.nome} idade={bixinho.idade} genero={bixinho.genero} imagem={bixinho.imagem} />
                        </div>
                    ))}
                </div>
                
                <button onClick={ e => setBixinhos([]) }>Limpar bixinhos</button>
                
                <h2>Pessoas</h2>
                <Table>
                    <Line nome="Victor" genero="Masculino" idade="27" />
                    <Line nome="Wagner" genero="Masculino" idade="20" />
                    <Line nome="Sonia" genero="Feminina" idade="43" />
                </Table>
            </div>
        </main>
        {/* Conteúdo do wireframe */}
    </div>
  );
}

export default App;
