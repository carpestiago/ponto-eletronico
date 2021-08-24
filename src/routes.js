import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/login/login';
import ProximaPagina from './pages/nextPage/nextPage';

export default function Rotas() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/nextPage' component={ProximaPagina} />
            </Switch>
        </BrowserRouter>
    );
}