import React, { useState } from 'react';
import "./Home.css"
import Tarefa from '../../components/Tarefa/Tarefa';
import addIcon from './img/add.svg';

function Home() {
    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: 'Tarefa 1', concluida: false }
    ]);

    // Remove tarefa pelo id
    function apagarTarefa(id) {
        const novaLista = tarefas.filter(function (tarefa) {
            return tarefa.id !== id; 
        });
        setTarefas(novaLista);
    }

    // Alterna o status de concluída
    function alternarConcluida(id) {
        const listaAtualizada = tarefas.map(function (tarefa) {
            if (tarefa.id === id) {
                return { ...tarefa, concluida: !tarefa.concluida };
            }
            return tarefa;
        });
        setTarefas(listaAtualizada);
    }

    // Adiciona uma nova tarefa
    function addTarefa() {
        const novaTarefa = {
            id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 1, // Gera ID baseado no último item
            titulo: 'Nova Tarefa', // Título padrão
            concluida: false,
        };
        setTarefas([...tarefas, novaTarefa]); // Adiciona nova tarefa ao estado
    }

    return (
        <div className="home-container">
            <header className='home-header'>
                <p>Qtd.: {tarefas.length}</p>
                <h1>Suas Tarefas</h1>
                <button className="add_button" onClick={addTarefa}>
                    <img src={addIcon} alt="Nova tarefa" />
                </button>
            </header>
            <div className='home-tarefas'>
                {tarefas.map(function (tarefa) {
                    return (
                        <Tarefa
                            key={tarefa.id}
                            tarefa={tarefa}
                            onApagar={function () {
                                apagarTarefa(tarefa.id);
                            }}
                            onAlternarConcluida={function () {
                                alternarConcluida(tarefa.id);
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;