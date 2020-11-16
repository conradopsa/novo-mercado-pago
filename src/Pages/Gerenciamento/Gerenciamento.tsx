import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './style.tsx';
import { AppBar, Typography, IconButton, Menu, MenuItem,Toolbar, Button } from '@material-ui/core';
import Share from '@material-ui/icons/Share';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import useStyles from './style';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MoneyOff from '@material-ui/icons/MoneyOff';
import PlayCircleFilledWhite from '@material-ui/icons/PlayCircleFilledWhite';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import Settings from '@material-ui/icons/Settings';
import { Doughnut } from 'react-chartjs-2';

const dataFirstResult = {
	labels: ['Despesas', 'Diversão', 'Vendas'],
	datasets: [
		{
			data: [1000, 500, 3000],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}
    ],
};

const dataSecondResult = {
	labels: ['Despesas', 'Diversão', 'Vendas'],
	datasets: [
		{
			data: [1000, 50, 3000],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
		}
    ],
};

function Gerenciamento() {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                <IconButton edge="start" component={Link} to="/financeiro" className={classes.menuButton} color="inherit" aria-label="menu">
                    <ChevronLeft />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Seu Gerenciamento
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
                    R$ 2397,98
                </p>
                <p className={classes.valorSaldoCash}>
                    M$ 1523,00
                </p>
            </div>
            <div className={classes.totals}>
                <div className={classes.boxTotalLeft}>
                    <div className={classes.totalLeftIcon}>
                        <TrendingUp/>
                    </div>
                    <div className={classes.totalLeft}>
                        <p className={classes.totalLeftTitle}>Tot. Entradas</p>
                        <p className={classes.totalLeftValue}>R$2397,98</p>
                    </div>
                </div>
                <div className={classes.boxTotalRight}>
                    <div className={classes.totalRightIcon}>
                        <TrendingDown/>
                    </div>
                    <div className={classes.totalRight}>
                        <p className={classes.totalRightTitle}>Tot. Saídas</p>
                        <p className={classes.totalRightValue}>R$1000,00</p>
                    </div>
                </div>
            </div>
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>RESULTADO DESEJADO</Button>
                <Button className={classes.settings}>
                <p className={classes.settingName}>Ajustes</p>
                <Settings fontSize="small" className={classes.settingIcon}/>
            </Button>
            </div>
            <div className="flex flex-col items-center w-full max-w-md">
				<Doughnut data={dataFirstResult} />
			</div>
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>RESULTADO ATUAL</Button>
            </div>
            <div className="flex flex-col items-center w-full max-w-md">
				<Doughnut data={dataSecondResult} />
			</div>
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>TRANSAÇÕES DO MÊS</Button>
                <Button className={classes.settings}>
                    <FilterList fontSize="small" className={classes.settingIcon}/>
                </Button>
            </div>
            <div>
                <div className={classes.card}>
                    <div className={classes.cardValue}>
                        <div className={classes.cardIcon}>
                            <AttachMoney fontSize="large"/>
                        </div>
                        <div className={classes.totalLeft}>
                            <p className={classes.totalLeftTitle}>05/ABR</p>
                            <p className={classes.totalLeftValue}>R$ 2397,98</p>
                        </div>
                    </div>
                    <div className={classes.cardDetail}>
                        <p className={classes.totalLeftTitle}>SALÁRIO MENSAL</p>
                    </div>
                    <Button className={classes.iconEdit}>
                        <Edit fontSize="small" style={{color: "black", opacity: "50%"}}/>
                    </Button>
                </div>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </>
    );
}

export default Gerenciamento;
