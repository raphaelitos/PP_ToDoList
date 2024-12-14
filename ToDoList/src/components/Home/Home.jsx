import React, { useState } from 'react';
import Tarefa from '../Tarefa/Tarefa';

function Home() {
    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: 'Tarefa 1', concluida: false },
        { id: 2, titulo: 'Tarefa 2', concluida: false },
        { id: 3, titulo: 'Tarefa 3', concluida: false },
    ]);

    function apagarTarefa(id) {
        const novaLista = tarefas.filter(function (tarefa) {
            return tarefa.id !== id; // Remove pelo id
        });
        setTarefas(novaLista);
    }

    function alternarConcluida(id) {
        const listaAtualizada = tarefas.map(function (tarefa) {
            if (tarefa.id === id) {
                return { ...tarefa, concluida: !tarefa.concluida }; // Alterna a conclusão
            }
            return tarefa;
        });
        setTarefas(listaAtualizada);
    }

    return (
        <div className="home">
            <h1>Lista de Tarefas</h1>
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
    );
}

export default Home;
