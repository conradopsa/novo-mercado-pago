import React from 'react';
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";

import { AppBar, Typography, IconButton, Toolbar, Button, Grid, Container, Box, Fab } from '@material-ui/core';
import Share from '@material-ui/icons/Share';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import TrendingUp from '@material-ui/icons/TrendingUp';
import FilterList from '@material-ui/icons/FilterList';
import Add from '@material-ui/icons/Add';
import Flight from '@material-ui/icons/Flight';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Fastfood from '@material-ui/icons/Fastfood';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import FlashOn from '@material-ui/icons/FlashOn';
import CardGiftcard from '@material-ui/icons/CardGiftcard';
import CameraAlt from '@material-ui/icons/CameraAlt';

import useStyles, { StyledDiv } from "./style";
import CarouselItem from "./CarouselItem";
import Item from './Item';

const DADOS = [
    {
        category: 0,
        description: 'SALÁRIO MENSAL',
        value: 3397.98
    },
    {
        category: 1,
        description: 'EMPRÉSTIMO',
        value: 500
    },
    {
        category: 1,
        description: 'EMPRÉSTIMO',
        value: 500
    }
];

const greenColor = "#77C87F";
const redColor = "#FF9090";

function MeuFinanceiro() {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <IconButton edge="start" component={Link} to="/financeiro" className={classes.menuButton} color="inherit" aria-label="menu">
                                <ChevronLeft />
                            </IconButton>
                        </Grid>

                        <Grid item style={{flex: '1'}}>
                            <Typography variant="subtitle1" align="center">
                                Transações Programadas
                            </Typography>
                        </Grid>

                        <Grid item>
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
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

            <Box my={2}>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography color="primary" variant="subtitle2">Saldo em Conta</Typography>
                    </Grid>

                    <Grid item>
                        <Typography color="primary" variant="h4">R$ {(DADOS.filter(({category}) => category == 0).reduce((acc, {value}) => (acc + value), 0) - DADOS.filter(({category}) => category == 1).reduce((acc, {value}) => (acc + value), 0)).toFixed(2)}</Typography>
                    </Grid>

                    <Grid item>
                        <p style={{fontSize: '0.8em'}}>M$ 1.523,00</p>
                    </Grid>
                </Grid>
            </Box>

            <Box my={2}>
                <Grid container direction="row" wrap="nowrap" justify="space-evenly" style={{width: '100%', maxWidth: '400px', margin: '0 auto'}}>
                    <Grid item>
                        <Grid container direction="row" wrap="nowrap" alignItems="center" spacing={2} style={{border: '1px solid #ccc'}}>
                            <Grid item>
                                <TrendingUp style={{fill: 'green'}} />
                            </Grid>

                            <Grid item>
                                <Typography>Tot. Entradas</Typography>
                                <Typography>R$ {DADOS.filter(({category}) => category == 0).reduce((acc, {value}) => (acc + value), 0).toFixed(2)}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
            
                    <Grid item>
                        <Grid container direction="row" wrap="nowrap" alignItems="center" spacing={2} style={{border: '1px solid #ccc'}}>
                            <Grid item>
                                <TrendingUp style={{fill: 'red'}} />
                            </Grid>

                            <Grid item>
                                <Typography>Tot. Saídas</Typography>
                                <Typography>R$ {DADOS.filter(({category}) => category == 1).reduce((acc, {value}) => (acc + value), 0).toFixed(2)}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

            <Box my={2} style={{maxWidth: '600px', margin: '0 auto'}}>
                <StyledDiv className={classes.carousel}>
                    <Carousel itemsToScroll={5} itemsToShow={5} className={classes.carousel} showArrows={true} pagination={false}>
                        <CarouselItem style={{ backgroundColor: greenColor }}><AttachMoney/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: redColor }}><Flight/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: redColor }}><Fastfood/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: redColor }}><FitnessCenter/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: redColor }}><FlashOn/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: greenColor }}><TrendingUp/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: greenColor }}><CardGiftcard/></CarouselItem>
                        <CarouselItem style={{ backgroundColor: greenColor }}><CameraAlt/></CarouselItem>
                    </Carousel>
                </StyledDiv>
            </Box>

            <Container maxWidth="sm">
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Grid item>
                        <Button color="primary">ADICIONAR</Button>
                    </Grid>

                    <Grid item>
                        <IconButton color="primary">
                            <FilterList fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid container direction="column" spacing={2}>
                    {
                        DADOS.map((item, index) => (<Grid item><Item key={index} {...item} /></Grid>))
                    }
                </Grid>
            </Container> 
        </>
    );
}

export default MeuFinanceiro;
