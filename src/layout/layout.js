import React from 'react';

function Layout(props) {
    return (
        <header>
            {/* conteudo header */}
        </header>

        <aside>
            {/* conteudo aside */}
        </aside>

        <section>
            {props.children}
        </section>
        <footer>
            {/* conteudo footer */}
        </footer>
    );
}