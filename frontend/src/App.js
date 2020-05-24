import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import api from './services/api';

import Header from './paginas/Header/index';
import Loja from './paginas/Loja/index';
import Cadastro from './paginas/Cadastro/index';
import Login from './paginas/Login/index';
import Conta from './paginas/Conta/index';
import Produtos from './paginas/Produtos/index';
import Busca from './paginas/Busca/index';
import Tarja from './paginas/Tarja';
import PrincipioAtivo from './paginas/PrincipioAtivo';
import EditarConta from './paginas/EditarConta/index';
import Cont from './services/context';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token') ?? '');
    const localStorageToken = localStorage.getItem('token');
    useEffect(() => {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        console.log(api.defaults.headers);
    }, [token]);

    useEffect(() => {
        if(localStorageToken) {
            setToken(localStorageToken)
        }
    });

    return (
        <BrowserRouter>
            <Cont.Provider value={{ token, setToken }}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Loja} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Conta" component={Conta} />
                </Switch>
            </Cont.Provider>
        </BrowserRouter>
    );
}
export default App;
