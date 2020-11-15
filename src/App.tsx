import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import "./App.scss";
import Cash from './Pages/Cash/Cash';
import Home from './Pages/Home/Home';
import Biometry from './Pages/Biometry/Biometry';
import MeuFinanceiro from './Pages/MeuFinanceiro/MeuFinanceiro';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/cash">
                        <Cash />
                    </Route>

                    <Route path="/biometria">
                        <Biometry />
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
        </ThemeProvider>
    );
}
export default App;