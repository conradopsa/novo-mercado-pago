import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Container, Grid, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Share from '@material-ui/icons/Share';
import Money from '@material-ui/icons/Money';
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import {ReactComponent as Wallet} from '../../assets/wallet.svg';

export default function Cash() {
    return (
        <>
            <AppBar position="static" elevation={1}>
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>

                        <Container maxWidth="xl">
                            <Typography variant="body1" align="center">
                                Mercado Cash
                            </Typography>
                        </Container>
            
                        <IconButton
                            aria-label="share result"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Share />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Container maxWidth="sm">
                <Wallet style={{display: 'block', height: '15vh', width: 'auto', margin: '0 auto', marginTop: '2vh'}} />
              
                <Grid container direction="column" justify="center" style={{maxWidth: '100%', margin: '2vh 0', border: '1px solid #ccc', borderRadius: '2px'}} spacing={1}>
                    <Grid item style={{padding: '1vh 2vw', borderBottom: '1px solid #ccc', borderRadius: '2px'}}>
                        <Grid container direction="row" alignItems="center" wrap="nowrap" spacing={1}>
                            <Grid item>
                                <Money fontSize="large" style={{maxHeight: '48px', fill: 'green'}} />
                            </Grid>

                            <Grid item>
                                <Typography>
                                    Como pagar com Mercado Cash?
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item style={{paddingLeft: '3vw', paddingRight: '3vw'}}>
                        1. Certifique-se que a plataforma ou estabelecimento desejado aceita compras via Mercado Pago.
                    </Grid>

                    <Grid item style={{paddingLeft: '3vw', paddingRight: '3vw'}}>
                        2. Diga ao vendedor que deseja realizar a compra via Mercado Cash.
                    </Grid>

                    <Grid item style={{paddingLeft: '3vw', paddingRight: '3vw'}}>
                        3. Realize seu pagamento via cartão Mercado Pago, código QR ou da maneira como prefirir.
                    </Grid>

                    <Grid item style={{paddingLeft: '3vw', paddingRight: '3vw'}}>
                        4. Pronto! 
                    </Grid>

                    <Grid item style={{paddingLeft: '3vw', paddingRight: '3vw', fontSize: '0.85em'}}>
                        Obs.: Caso o seu saldo seja menor que o valor do produto então o restante será debitado em Real.
                    </Grid>
                </Grid> 

                <Grid container direction="column" justify="center" style={{maxWidth: '100%', margin: '2vh 0', border: '1px solid #ccc', borderRadius: '2px'}} spacing={2}>
                    <Grid item style={{padding: '1vh 3vw', borderBottom: '1px solid #ccc', borderRadius: '2px'}}>
                        <Grid container direction="row" alignItems="center" wrap="nowrap" spacing={2}>
                            <Grid item>
                                <MonetizationOn fontSize="large" style={{maxHeight: '48px', fill: '#d9aa29'}} />
                            </Grid>

                            <Grid item>
                                <Typography>
                                    Como ganhar com Mercado Cash?
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item style={{paddingLeft: '3vw', paddingRight: '3vw'}}>
                        Comprando com nossos parceiros, você tem a chance de ganhar cashbacks direto em sua conta Mercado Pago.
                    </Grid>
                </Grid> 

                <Grid container direction="row" wrap="nowrap" justify="space-between">
                    <Grid item>
                        <Button color="primary" component={Link} to="/" variant="contained">
                            Voltar
                        </Button>
                    </Grid>

                    <Grid item>
                        <Button color="primary" variant="contained">
                            Transferir M$
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};