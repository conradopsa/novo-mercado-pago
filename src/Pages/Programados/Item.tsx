import React from 'react';
import styled from 'styled-components';
import { Card, CardActions, CardContent, Grid, IconButton, Typography } from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import MoneyOff from '@material-ui/icons/MoneyOff';
import Edit from '@material-ui/icons/Edit';

const Content = styled(CardContent)`
    padding: 1vh 2vw;
    &:last-child {
        padding-bottom: 1vh;
    }
`;

function Item(props: any) {
    return (
        <>
            <Card variant="outlined">
                <Content>
                    <Grid container direction="row" wrap="nowrap" alignItems="center" spacing={2}>
                        <Grid item>
                            {props.category ? <MoneyOff style={{fill: 'red'}} /> : <AttachMoney style={{fill: 'green'}} /> }
                        </Grid>

                        <Grid item style={{flex: '1'}}>
                            <p>{props.description}</p>
                            <Typography variant="subtitle1" component="p">R$ {props.value}</Typography>
                            <p style={{fontSize: '0.8em'}}>{props.category ? 'DESPESA' : 'RECEITA'}</p>
                        </Grid>

                        <Grid item>
                            <CardActions style={{float: 'right'}}>
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </CardActions>
                        </Grid>
                    </Grid>
                </Content>
            </Card>
        </>
    );
}

export default Item;
