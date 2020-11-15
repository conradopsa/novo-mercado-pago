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
import { Bar  } from 'react-chartjs-2';
import Carousel from "react-elastic-carousel";
import {StyledDiv} from "./style";
import Item from './Item';

const dataFirstResult = {
	labels: ['Total', 'Poupou', 'Lucrou'],
	datasets: [
		{
            label: "Lucro",
			backgroundColor: ['rgba(119,200,127,1)', 'rgba(119,200,127,0.7)', 'rgba(119,200,127,0.4)'],
			hoverBackgroundColor: 'rgba(119,200,127,1)',
			data: [65, 0, 80]
        },
        {
            label: "Prejuízo",
			backgroundColor: ['rgba(255,144,144,1)', 'rgba(255,144,144,0.7)', 'rgba(255,144,144,0.4)'],
			hoverBackgroundColor: 'rgba(255,144,144,1)',
			data: [0, 59, 0]
        }
    ],
};

const dataSecondResult = {
	labels: ['Total', 'Poupou', 'Lucrou'],
	datasets: [
        {
            label: "Lucro",
			backgroundColor: ['rgba(119,200,127,1)', 'rgba(119,200,127,0.7)', 'rgba(119,200,127,0.4)'],
			hoverBackgroundColor: 'rgba(119,200,127,1)',
			data: [65, 0, 80]
        },
		{
            label: "Prejuízo",
			backgroundColor: ['rgba(255,144,144,1)', 'rgba(255,144,144,0.7)', 'rgba(255,144,144,0.4)'],
			hoverBackgroundColor: 'rgba(255,144,144,1)',
			data: [0, 59, 0]
        }
    ],
};

function SaldoFuturo() {
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
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>2020</Button>
            </div>
            <StyledDiv className={classes.carousel} >
                <Carousel itemsToScroll={5} itemsToShow={5} className={classes.carousel}    showArrows={true} pagination={false}>
                    <Item >Jan</Item>
                    <Item >Fev</Item>
                    <Item >Mar</Item>
                    <Item >Abr</Item>
                    <Item >Mai</Item>
                    <Item >Jun</Item>
                    <Item >Jul</Item>
                    <Item >Ago</Item>
                    <Item >Set</Item>
                    <Item >Out</Item>
                    <Item >Nov</Item>
                    <Item >Dez</Item>
                </Carousel>
            </StyledDiv>
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>RESULTADO (R$)</Button>
            </div>
            <div className={classes.barChart}>
                <div className="flex flex-col items-center w-full max-w-md">
                    <Bar  data={dataFirstResult} />
                </div>
            </div>
            <div className={classes.editOptions}>
                <Button className={classes.buttonAdd}>RESULTADO (M$)</Button>
            </div>
            <div  className={classes.barChart}>
                <div className="flex flex-col items-center w-full max-w-md">
                    <Bar  data={dataSecondResult} />
                </div>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </>
    );
}

export default SaldoFuturo;
