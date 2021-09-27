import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Container } from '@mui/material';
import greenhouse from '../../../assets/images/Greenhouse1.png';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  
let theme = createTheme();
theme = responsiveFontSizes(theme);


const HeroSection = () => {
    return (
    <Box>
        <Box sx={{display:'flex'}}>
            <Grid item>
                
                <Box sx={{ display:'flex', p:20}}>
                    {
                    // * Imagen Greenhouse
                    }
                        <img src={greenhouse} alt="Greenhouse"/>
                    {
                    // * Textos
                    }  
                </Box>

            </Grid>
            
            <Grid item>

            <Box sx={{ display:'flex',flexDirection:'column', p:20}}>
                <Typography style={{color:"white", fontWeight:"bold"}} variant="h3" theme={theme}>Naturaleza y tecnología por un mundo mejor</Typography>
                <Typography style={{color: "#1CF445",fontWeight:"bold"}}>Un enfoque estratégico a la agricultura a través de innovación y digitalización</Typography>
            </Box> 

            </Grid>
                    
        </Box>

        <Grid item>
            <Typography style={{fontWeight: 'bold', color:"white"}} variant="body1">Hervana Group es una empresa de conocimiento y socio estratégico que provee “know how” innovador, operacional y analitico, en negocios y cultivo en ambientes controlados con un
                enfoque “tailor made”. Esto nos permite adaptarnos a tus
                necesidades dependiendo la fase de tu proyecto. Lo que nos
                define es nuestra cultura empresarial y aplicación de innovación
                y analítica basada en datos.
            </Typography>
        </Grid>
    </Box>
    )
}

export default HeroSection;