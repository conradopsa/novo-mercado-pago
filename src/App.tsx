import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import MeuFinanceiro from './Pages/MeuFinanceiro/MeuFinanceiro'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <h2>Home</h2>
                </Route>

                <Route path="/cash">
                    <h2>Mercado Cash</h2>
                </Route>

                <Route path="/biometria">
                    <h2>Biometria</h2>
                </Route>

                <Route exact path="/financeiro">
                    <MeuFinanceiro />
                </Route>
                
                <Route path="/financeiro/programado">
                    <h2>Entradas/Saídas Programado</h2>
                </Route>

                <Route path="/financeiro/gerenciamento">
                    <h2>Gerenciamento Finanças</h2>
                </Route>

                <Route path="/financeiro/projecao">
                    <h2>Projeção Financeira</h2>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
