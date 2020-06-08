import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.css';

import Card from './components/Card';
import Header from './components/Header';
function App() {
  return (
    <div>
        <Header />
        <main>
            <div className="container">
                <h2>Bixinhos</h2>
                <div className="row">
                    <div className="col s2">
                        <Card />
                    </div>
                    <div className="col s2">
                        <Card />
                    </div>
                    <div className="col s2">
                        <Card />
                    </div>
                    <div className="col s2">
                        <Card />
                    </div>
                    <div className="col s2">
                        <Card />
                    </div>
                </div>
            </div>
        </main>
        {/* Conteúdo do wireframe */}
    </div>
  );
}

export default App;
