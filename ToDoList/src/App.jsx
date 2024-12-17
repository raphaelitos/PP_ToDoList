import React from 'react';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';


function App() {
    document.title = 'To-Do List';
    return (
        <div className="App">
            <Home/>
        </div>
    );
}

export default App;
