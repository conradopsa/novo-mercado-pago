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
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import TrendingUp from '@material-ui/icons/TrendingUp';
import TrendingDown from '@material-ui/icons/TrendingDown';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MoneyOff from '@material-ui/icons/MoneyOff';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import {StyledDiv} from "./style";

function MeuFinanceiro() {
    const classes = useStyles();
    const greenColor: string = "#77C87F";
    const redColor: string = "#FF9090";

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Transações Programadas
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
            <StyledDiv className={classes.carousel}>
                <Carousel itemsToScroll={5} itemsToShow={5} className={classes.carousel}  showArrows={true} pagination={false}>
                    <Item style={{backgroundColor: greenColor}}>One</Item>
                    <Item style={{backgroundColor: redColor}}>Two</Item>
                    <Item style={{backgroundColor: redColor}}>Three</Item>
                    <Item style={{backgroundColor: redColor}}>Four</Item>
                    <Item style={{backgroundColor: redColor}}>Five</Item>
                    <Item style={{backgroundColor: greenColor}}>Six</Item>
                    <Item style={{backgroundColor: greenColor}}>Seven</Item>
                    <Item style={{backgroundColor: greenColor}}>Eight</Item>
                </Carousel>
            </StyledDiv>
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>ADICIONAR</Button>
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
                            <p className={classes.totalLeftValue}>R$XXX,XX</p>
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

export default MeuFinanceiro;
