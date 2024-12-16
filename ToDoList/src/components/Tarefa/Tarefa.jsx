import React, { useState } from 'react';
import closeIcon from './img/close.svg';
import checkIcon from './img/check.svg';
import './Tarefa.css';

function Tarefa({ tarefa, onApagar, onAlternarConcluida }) {
    const [editando, setEditando] = useState(false);
    const [titulo, setTitulo] = useState(tarefa.titulo);

    function iniciarEdicao() {
        setEditando(true);
    }

    function finalizarEdicao(evento) {
        setTitulo(evento.target.value);
        setEditando(false);
    }

    return (
        <div className="container">
            <div className="texto">
                {editando ? (
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        onBlur={finalizarEdicao}
                        autoFocus
                    />
                ) : (
                    <h3
                        onClick={iniciarEdicao}
                        className={tarefa.concluida ? 'riscado' : ''}
                    >
                        {titulo}
                    </h3>
                )}
            </div>
            <div className="botoes">
                <button className="del_button" onClick={onApagar}>
                    <img src={closeIcon} alt="Excluir" />
                </button>
                <button className="check_button" onClick={onAlternarConcluida}>
                    <img src={checkIcon} alt="Concluir" />
                </button>
            </div>
        </div>
    );
}

export default Tarefa;
