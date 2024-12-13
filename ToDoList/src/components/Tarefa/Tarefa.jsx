import React, { useState } from 'react';
import './Tarefa.css';

function Tarefa() {
    const [titulo, setTitulo] = useState('Titulo'); 
    const [editando, setEditando] = useState(false); 

    function iniciarEdicao() {
        setEditando(true);
    }

    function finalizarEdicao(evento) {
        setTitulo(evento.target.value);
        setEditando(false);
    }

    function alterarTitulo(evento) {
        setTitulo(evento.target.value);
    }

    return (
        <div className="container">
            {editando ? (
                <input
                    type="text"
                    value={titulo}
                    onChange={alterarTitulo} 
                    onBlur={finalizarEdicao} 
                    autoFocus 
                />
            ) : (
                <h3 onClick={iniciarEdicao}>{titulo}</h3> 
            )}
        </div>
    );
}

export default Tarefa;
