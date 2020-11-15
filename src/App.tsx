import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import "./App.scss";
import Cash from './pages/Cash/Cash';
import Home from './pages/Home/Home';
import Biometry from './pages/Biometry/Biometry';
import MeuFinanceiro from './pages/MeuFinanceiro/MeuFinanceiro';
import Programados from './pages/Programados/Programados';
import Gerenciamento from './pages/Gerenciamento/Gerenciamento';
import SaldoFuturo from './pages/SaldoFuturo/SaldoFuturo';

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
                        <Programados/>
                    </Route>

                    <Route path="/financeiro/gerenciamento">
                        <Gerenciamento/>
                    </Route>

                    <Route path="/financeiro/projecao">
                        <SaldoFuturo/>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}
export default App;