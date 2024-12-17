import React from 'react';

import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';

import { createBrowserRouter, createRoutesFromElements,
        Route, RouterProvider } from 'react-router';

        
const browserRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/'>
        <Route index element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='cadastro' element={<Cadastro />} />
    </Route>
))

function App() {
    document.title = 'To-Do List';
    return (
        <RouterProvider router={browserRouter}/>
    );
}

export default App;
