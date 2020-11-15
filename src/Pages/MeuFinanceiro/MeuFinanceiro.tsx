import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.tsx';
import { AppBar, Typography, IconButton, Menu, MenuItem,Toolbar } from '@material-ui/core';
import Share from '@material-ui/icons/Share';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MoneyOff from '@material-ui/icons/MoneyOff';
import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';


function MeuFinanceiro() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Meu Financeiro
                </Typography>
                    <IconButton color="inherit">
                        <Share 
                            aria-label="compartilhar"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            className={classes.menuIcon}
                        >
                            <Share />
                        </Share>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.saldoTitleContent}>
                <p className={classes.saldoTitle}>
                    Saldo em Conta
                </p>
                <p className={classes.valorSaldo}>
                    R$ 2.397,98
                </p>
                <p className={classes.valorSaldoCash}>
                    M$ 1.523,00
                </p>
            </div>
            <div className={classes.totals}>
                <div className={classes.boxTotalLeft}>
                    <div className={classes.totalLeftIcon}>
                        <TrendingUp/>
                    </div>
                    <div className={classes.totalLeft}>
                        <p className={classes.totalLeftTitle}>Tot. Entradas</p>
                        <p className={classes.totalLeftValue}>R$XXX,XX</p>
                    </div>
                </div>
                <div className={classes.boxTotalRight}>
                    <div className={classes.totalRightIcon}>
                        <TrendingDown/>
                    </div>
                    <div className={classes.totalRight}>
                        <p className={classes.totalRightTitle}>Tot. Saídas</p>
                        <p className={classes.totalRightValue}>R$XXX,XX</p>
                    </div>
                </div>
            </div>
            <div className={classes.card}>
                <p className={classes.cardTitle}>Entradas / Saídas Programadas</p>
                <p className={classes.cardDescription}>Total</p>
                <div className={classes.totalCard}>
                    <div className={classes.cardTotalLeft}>
                        <div className={classes.totalLeftIcon}>
                            <AttachMoney fontSize="large"/>
                        </div>
                        <div className={classes.cardLeft}>
                            <p className={classes.cardMoneyValue}>R$XXX,XX</p>
                            <p className={classes.cardCashValue}>M$XXX,XX</p>
                        </div>
                    </div>
                    <div className={classes.cardTotalRight}>
                        <div className={classes.totalRightIcon}>
                            <MoneyOff fontSize="large"/>
                        </div>
                        <div className={classes.cardRight}>
                            <p className={classes.cardMoneyValue}>R$XXX,XX</p>
                            <p className={classes.cardCashValue}>M$XXX,XX</p>
                        </div>
                    </div>
                </div>
                <div className={classes.cardFooter}>
                    <PlayCircleFilledWhite style={{color: "#FFFF"}}/>
                </div>
            </div>
            <div className={classes.card}>
                <p className={classes.cardTitle}>Seu Gerenciamento</p>
                <p className={classes.cardDescription}>Última Movimentação</p>
                <div className={classes.totalCardMoviment}>
                    <div className={classes.cardTotalLeftMoviment}>
                        <div className={classes.totalIconMoviment}>
                            <AttachMoney fontSize="large"/>
                        </div>
                        <div className={classes.cardLeft}>
                            <p className={classes.cardMoneyValue}>R$XXX,XX</p>
                            <p className={classes.cardTypeName}>SALÁRIO MENSAL</p>
                        </div>
                    </div>
                </div>
                <div className={classes.cardFooter}>
                    <PlayCircleFilledWhite style={{color: "#FFFF"}}/>
                </div>
            </div>
            <div className={classes.card}>
                <p className={classes.cardTitle}>Saldo Futuro Previsto</p>
                <p className={classes.cardDescription}>ATUAL / PREVISTA</p>
                <div className={classes.totalCardMoviment}>
                    <div className={classes.cardTotalLeftMoviment}>
                        <div className={classes.totalIconMoviment}>
                            <AttachMoney fontSize="small"/>
                        </div>
                        <div className={classes.valueFutureBox}>
                            <p className={classes.cardValueNow}>R$XXX,XX</p>
                            <p className={classes.cardValueNow} > / </p>
                            <p className={classes.cardValueFuture}>R$XXX,XX</p>
                        </div>
                    </div>
                </div>
                <div className={classes.totalCardMoviment}>
                    <div className={classes.cardTotalLeftMoviment}>
                        <div className={classes.totalIconMovimentOff}>
                            <MoneyOff fontSize="small"/>
                        </div>
                        <div className={classes.valueFutureBox}>
                            <p className={classes.cardValueNow}>R$XXX,XX</p>
                            <p className={classes.cardValueNow} > / </p>
                            <p className={classes.cardValueFuture}>R$XXX,XX</p>
                        </div>
                    </div>
                </div>
                <div className={classes.cardFooter}>
                    <PlayCircleFilledWhite style={{color: "#FFFF"}}/>
                </div>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </>
    );
}

export default MeuFinanceiro;
