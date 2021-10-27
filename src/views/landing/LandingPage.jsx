import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box, Typography, Button } from '@mui/material';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import Processes from './components/Processes';
import './index.css'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import history from '../../history';
  

const  LandingPage = () => {
    
    let theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    
    return (
      
        <div id="body">
            <Grid id="main-container" container>
            <NavBar sx={{}} id="nav" theme={theme} isMobile={isMobile} />
                <Grid item xs={12} sx={{marginBottom:""}} id="hero-container" container spacing={1} >
                    <Grid sx={{}} id="hero-item-container" item sm={12} md={12}>
                        <HeroSection id="hero-component" isMobile={isMobile} theme={theme} />
                    </Grid>
                    <div className="py-3"></div>
                    <Grid item sm={12} md={12}>
                        <Box component='div' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:"center",
                            position:"relative",
                            backgroundColor:"black",
                            bottom:"300px", 
                            height:600,
                            width:'100%',
                            zIndex:2,
                            paddingBlock: 10
                            
                        }}>
                            <Typography  sx={{width: isMobile ? "80%" : "60%", marginTop:"100px"  }} style={{fontWeight: 'bold', color:"white"}} variant="body1">
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

                                <Button variant="filled" 
                                onClick={ window.location.reload}
                                style={
                                    {
                                        marginTop: '120px',
                                        backgroundColor:"white",
                                        color:"black",
                                        fontWeight:"bold",
                                        borderRadius:"30px",
                                        width:200,
                                        maxHeight:"60px",
                                        zIndex:100
                                    }}
                                >
                                        Tengo un proyecto

                                </Button>
                            </Box>    
                        </Box>
                    </Grid>
                </Grid>
                
                <Grid sx={{width:'100%', display:'flex', alignItems: 'center', justifyContent:'center'}}  id="pillars-item" item container>
                    <Pillars isMobile={isMobile} id="pillars-component" />
                </Grid>

                <Grid item id="process-item" sx={{
                    width:'auto', 
                    display:'flex', 
                    justifyContent:'center',
                    }} container spacing={1}>
                        
                    <Processes id="process-component" />
                    
                </Grid>
                <Grid item xs={12}> 
                    <Footer isMobile={isMobile} id="footer-component" />
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;