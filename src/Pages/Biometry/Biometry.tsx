import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Container, Grid, FormGroup, FormControlLabel, Switch, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Share from '@material-ui/icons/Share';
import { ReactComponent as Draw } from '../../assets/biometry_draw.svg';

export default function Biometry() {
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };

    return (
        <>
            <AppBar elevation={1} position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Grid container direction="row" alignItems="center">
                            <Grid item>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                            </Grid>
                        
                            <Grid item style={{flex: '1'}}>
                                <Typography variant="body1" align="center">
                                    Biometria
                                </Typography>
                            </Grid>
                        
                            <Grid item>
                                <IconButton
                                    aria-label="share"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <Share />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
    
            <Container maxWidth="sm">
                <Grid container direction="column" spacing={3}>
                    <Grid item style={{alignSelf: 'center'}}>
                        <Draw style={{height: '25vh', maxHeight: '150px', width: 'auto', marginTop: '2vh'}} />
                    </Grid>
                
                     <Grid item>
                        <Grid container direction="column" style={{border: '1px solid #ccc', borderRadius: '4px'}} spacing={2}>
                            <Grid item style={{borderBottom: '1px solid #ccc', paddingLeft: '1vw', paddingRight: '1vw'}}>
                                <Typography variant="subtitle2">
                                    Realize pagamentos com a Biometria
                                </Typography>
                            </Grid>

                            <Grid item style={{paddingLeft: '1vw', paddingRight: '1vw'}}>
                                Com a biometria, seus pagamentos se tornam mais seguros
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <FormGroup>
                            <FormControlLabel
                                control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                                label="Ativar Biometria"
                            />
                        </FormGroup>
                    </Grid>

                    <Grid item>
                        <Button fullWidth={true} variant="contained" component={Link} to="/">
                            Voltar
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}