import React, { useState } from 'react';
import closeIcon from './img/close.svg';
import checkIcon from './img/check.svg';
import './Tarefa.css';

/**
 * Componente que representa uma tarefa.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Object} props.tarefa - Objeto representando a tarefa.
 * @param {string} props.tarefa.titulo - O título da tarefa.
 * @param {boolean} props.tarefa.concluida - Indica se a tarefa está concluída.
 * @param {function} props.onApagar - Função chamada ao clicar no botão de apagar.
 * @param {function} props.onAlternarConcluida - Função chamada ao clicar no botão de alternar concluída.
 * @returns {JSX.Element} O elemento JSX que representa a tarefa.
 */
function Tarefa({ tarefa, onApagar, onAlternarConcluida }) {
    const [editando, setEditando] = useState(false);
    const [titulo, setTitulo] = useState(tarefa.titulo);

    /**
     * Inicia o modo de edição da tarefa.
     */
    function iniciarEdicao() {
        setEditando(true);
    }

    /**
     * Finaliza o modo de edição da tarefa.
     * @param {React.ChangeEvent<HTMLInputElement>} evento - O evento de alteração do input.
     */
    function finalizarEdicao(evento) {
        setTitulo(evento.target.value);
        setEditando(false);
    }

    return (
        <div className="tarefa-container">
            <div className="tarefa-texto">
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
            <div className="tarefa-botoes">
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
