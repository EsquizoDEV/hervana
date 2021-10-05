import * as React from 'react';
import {Box,Button} from '@mui/material';
import greenhouse from '../../../assets/images/Greenhouse1.png';
import {
    createTheme,
    responsiveFontSizes,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  
let theme = createTheme();
theme = responsiveFontSizes(theme);


const HeroSection = () => {
    return (
    <Box sx={
        {
            position:"relative",
            zIndex:999,
            bottom:-250
        }
    } id="box-header-container">
        <Box sx={{display:'flex', justifyContent:"center", zIndex:2}}>
                
                {
                // * Imagen Greenhouse
                }
                    <img style={{height:500}} src={greenhouse} alt="Greenhouse"/>
                {
                // * Textos
                }  

            <Box component="span" sx={
                { 
                    marginLeft:10,
                    display:'block',
                    width:700
                }}>

                    <Typography sx={{marginTop:"100px"}} style={{color:"#101111", fontWeight:"bold"}} variant="h3" theme={theme}>Naturaleza y tecnología por un mundo mejor</Typography>
                    <Typography variant="h6" sx={{marginBottom:"200px"}} style={{color: "#101111",fontWeight:"bold"}}>Un enfoque estratégico a la agricultura a través de innovación y digitalización</Typography>
                    <Typography  sx={{marginBottom:"20px"}}style={{fontWeight: 'bold', color:"white"}} variant="body1">
                        Hervana Group es una empresa de conocimiento y socio estratégico que provee 
                        “know how” innovador, operacional y analitico, en negocios y cultivo en ambientes controlados con un
                        enfoque “tailor made”. Esto nos permite adaptarnos a tus
                        necesidades dependiendo la fase de tu proyecto. Lo que nos
                        define es nuestra cultura empresarial y aplicación de innovación
                        y analítica basada en datos.
                    </Typography>

                    <Box sx={{
                        
                        display:'flex',
                        justifyContent:'flex-end',
                        width:'full'
                        }}>

                        <Button variant="filled" style={
                            {
                                backgroundColor:"white",
                                color:"black",
                                fontWeight:"bold",
                                borderRadius:"30px",
                                width:200
                            }}
                        >
                                Tengo un proyecto

                        </Button>
                    </Box>
            </Box> 
        </Box>
    </Box>
    )
}

export default HeroSection;