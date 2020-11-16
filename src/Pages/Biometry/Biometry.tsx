import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography, Container, Grid, FormGroup, FormControlLabel, Switch, Box } from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
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
                <Toolbar>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="menu">
                                <ChevronLeft />
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
            </AppBar>
    
            <Container maxWidth="sm">
                <Box my={2}>
                    <Draw style={{width: '100%', height: '20vh', maxHeight: '150px'}} />
                </Box>

                <Box my={2}>
                    <Grid container direction="column" style={{border: '1px solid #ccc', borderRadius: '4px'}} spacing={2}>
                        <Grid item style={{borderBottom: '1px solid #ccc', paddingLeft: '2vw', paddingRight: '2vw'}}>
                            Realize pagamentos com a Biometria
                        </Grid>

                        <Grid item style={{paddingLeft: '2vw', paddingRight: '2vw'}}>
                            Com a biometria, seus pagamentos se tornam mais seguros
                        </Grid>
                    </Grid>
                </Box>

                <Box my={1}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch color="primary" size="small" checked={checked} onChange={toggleChecked} />}
                            label={<Typography variant="caption" component="p">Ativar Biometria</Typography>}
                        />
                    </FormGroup>
                </Box>
            </Container>
        </>
    );
}