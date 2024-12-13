import React, { useState } from 'react';
import './Tarefa.css';

function Tarefa() {
    const [titulo, setTitulo] = useState('Titulo'); // Estado para armazenar o título
    const [editando, setEditando] = useState(false); // Estado para alternar entre exibição e edição

    // Função para alternar para o modo de edição
    const iniciarEdicao = () => {
        setEditando(true);
    };

    // Função para finalizar a edição e salvar o novo título
    const finalizarEdicao = (e) => {
        setTitulo(e.target.value);
        setEditando(false);
    };

    return (
        <div className="container">
            {/* Exibir título como texto ou como input dependendo do estado */}
            {editando ? (
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} // Atualiza o título enquanto o usuário digita
                    onBlur={finalizarEdicao} // Finaliza a edição ao perder o foco
                    autoFocus // Coloca o foco automático no campo de entrada
                />
            ) : (
                <h3 onClick={iniciarEdicao}>{titulo}</h3> // Alterna para o modo de edição ao clicar
            )}
            <p>Descricao</p>
        </div>
    );
}

export default Tarefa;
