import React from 'react';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Login from './components/Login/Login';

function App() {
    document.title = 'To-Do List';
    return (
        <div className="App">
            <Login />
        </div>
    );
}

export default App;
