import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Box, Container, Button } from '@mui/material';
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
    <Box id="box-header-container">
        <Box sx={{display:'flex', marginTop:20, justifyContent:"center"}}>
                
                {
                // * Imagen Greenhouse
                }
                    <img src={greenhouse} alt="Greenhouse"/>
                {
                // * Textos
                }  

            <Box  sx={
                { 
                    display:'block',
                    width:700
                }}>
                <Typography style={{color:"white", fontWeight:"bold"}} variant="h3" theme={theme}>Naturaleza y tecnología por un mundo mejor</Typography>

                <Typography variant="h6" style={{color: "#1CF445",fontWeight:"bold"}}>Un enfoque estratégico a la agricultura a través de innovación y digitalización</Typography>
                <Typography style={{fontWeight: 'bold'}} variant="body1">
                    Hervana Group es una empresa de conocimiento y socio estratégico que provee 
                    “know how” innovador, operacional y analitico, en negocios y cultivo en ambientes controlados con un
                    enfoque “tailor made”. Esto nos permite adaptarnos a tus
                    necesidades dependiendo la fase de tu proyecto. Lo que nos
                    define es nuestra cultura empresarial y aplicación de innovación
                    y analítica basada en datos.
                </Typography>

                <Button variant="outlined" style={
                    {
                        position: 'absolute',
                        right:0,
                        borderColor:"#101111", 
                        fontWeight:"bold",
                        width:200
                    }}
                >
                        Tengo un proyecto

                </Button>
            </Box> 

                    
        </Box>

        <Box sx={
            {
                backgroundColor:"white", 
                height:450,
                // aligItems:"right",
                }}>
            
            <Box component="div" sx={
                {
                    width:300
                }}>
               
            </Box>
            
        </Box>
    </Box>
    )
}

export default HeroSection;