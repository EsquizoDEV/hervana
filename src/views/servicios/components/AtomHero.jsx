import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import Atom from '../../../assets/svg/Atomo (servicios).svg';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const AtomHero = () => {
    return (
        <Box sx={{ flexGrow: 0 }}>
           <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    {
                    // * Textos
                    }  
                    <div className="flex flex-center ml-4"> 
                        <h1>TEXTO GRANDE</h1>
                        <Item><p><h3>TEXTO ABAJO NDFVFAOFUVNNDVNVKFLNL</h3></p></Item>
                    </div>
                </Grid>
                <Grid item xs={12} md={5}>
                    {
                    // * Imagen Greenhouse
                    }
                    <div className="flex flex-center ml-4"> 
                        <img src={Atom} alt="Atom"/>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtomHero;