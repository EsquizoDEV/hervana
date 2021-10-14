import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box, Typography, Button } from '@mui/material';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import Processes from './components/Processes';
import './index.css'
import ResponsiveNavBar from '../../components/navigation/ResponsiveNavBar';
import { useMediaQuery } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
  

const  LandingPage = () => {
    
    let theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    
    return (
      
        <div id="body">
            <NavBar sx={{zIndex: 9999}} id="nav" theme={theme} isMobile={isMobile} />
            <Grid id="main-container" container>
                <Grid item xs={12} sx={{marginBottom:"565px"}} id="hero-container" container spacing={1} >
                    <Grid sx={{}} id="hero-item-container" item sm={12} md={12}>
                        <HeroSection id="hero-component" isMobile={isMobile} theme={theme} />
                    </Grid>
                    <div className="py-3"></div>
                    <Grid item sm={12} md={12}>
                        <Box component='div' sx={{
                            position:"relative",
                            backgroundColor:"black", 
                            height:400,
                            width:'100%',
                            zIndex:3,
                            paddingBlock: 10
                            
                        }}>
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
                    </Grid>
                </Grid>
                
                {true ? <><Grid sx={{width:'auto', display:'flex', alignItems: 'center', justifyContent:'center'}}  id="pillars-item" container>
                    <Pillars id="pillars-component" />
                </Grid>

                <Grid item id="process-item" sx={{
                    width:'auto', 
                    display:'flex', 
                    justifyContent:'center',
                    marginTop:'80px',
                    marginBottom:'80px',
                    }} container spacing={1}>
                        
                    <Processes id="process-component" />
                    
                </Grid></>: undefined}
                <Grid item xs={12}> 
                    <Footer id="footer-component" />
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;