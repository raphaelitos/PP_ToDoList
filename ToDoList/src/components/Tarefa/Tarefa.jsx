/*import React, { useState } from 'react';
import './Tarefa.css';
import closeIcon from './img/close.svg';
import checkIcon from './img/check.svg';

function Tarefa() {
    const [titulo, setTitulo] = useState('Tarefa');
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
            <div className="texto">
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
            <div className="botoes">
                <button className="check_button">
                    <img src={checkIcon}/>
                </button>
                <button className="del_button">
                    <img src={closeIcon}/>
                </button>
            </div>
        </div>
    );
}

export default Tarefa;*/

import React, { useState } from 'react';
import './Tarefa.css';
import closeIcon from './img/close.svg';
import checkIcon from './img/check.svg';

function Tarefa() {
    const [titulo, setTitulo] = useState('Tarefa');
    const [editando, setEditando] = useState(false);
    const [concluida, setConcluida] = useState(false);

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

    function alternarConcluida() {
        setConcluida(!concluida); // Alterna entre riscado e normal
    }

    return (
        //Divisao entre texto e botoes para melhor formatacao
        <div className="container">
            <div className="texto"> 
                {editando ? (
                    <input
                        type="text"
                        value={titulo}
                        onChange={alterarTitulo}
                        onBlur={finalizarEdicao}
                        autoFocus
                    />
                ) : (
                    <h3 
                        onClick={iniciarEdicao} 
                        className={concluida ? 'riscado' : ''}
                    >
                        {titulo}
                    </h3>
                )}
            </div>
            <div className="botoes">
                <button className="del_button">
                    <img src={closeIcon} />
                </button>
                <button className="check_button" onClick={alternarConcluida}>
                    <img src={checkIcon} />
                </button>
            </div>
        </div>
    );
}

export default Tarefa;
