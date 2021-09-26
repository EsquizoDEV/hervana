import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import greenhouse from '../../../assets/images/Greenhouse1.png';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const HeroSection = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
           <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    {
                    // * Imagen Greenhouse
                    }
                    <div className="flex flex-center ml-4"> 
                        <img src={greenhouse} alt="Greenhouse"/>
                    </div>
                </Grid>
                <Grid item xs={12} md={7}>
                    {
                    // * Textos
                    }  
                    <div className="flex flex-center ml-4"> 
                        <h1>TEXTO GRANDE</h1>
                        <Item><p><h3>TEXTO ABAJO NDFVFAOFUVNNDVNVKFLNL</h3></p></Item>
                    </div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default HeroSection;