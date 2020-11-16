import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
import "./App.scss";
import Cash from './Pages/Cash/Cash';
import Home from './Pages/Home/Home';
import Biometry from './Pages/Biometry/Biometry';
import MeuFinanceiro from './Pages/MeuFinanceiro/MeuFinanceiro';
import Programados from './Pages/Programados/Programados';
import Gerenciamento from './Pages/Gerenciamento/Gerenciamento';
import SaldoFuturo from './Pages/SaldoFuturo/SaldoFuturo';

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