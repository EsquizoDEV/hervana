import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pillars = () => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item>TEXTO</Item>
            </Grid>
        </Grid>
    )
}

export default Pillars;