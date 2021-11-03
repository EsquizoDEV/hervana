import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import PillarsM from './components/PillarsM';
import Processes from './components/Processes';
import './index.css'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import history from '../../history';
  

const  LandingPage = () => {
  return (
      
        <div id="body">
            <Grid id="main-container" container>
            <NavBar sx={{zIndex: 9999}} id="nav" theme={theme} isMobile={isMobile} />
                <Grid item xs={12} sx={{marginBottom:""}} id="hero-container" container spacing={1} >
                    <Grid sx={{}} id="hero-item-container" item sm={12} md={12}>
                        <HeroSection id="hero-component" isMobile={isMobile} theme={theme} />
                    </Grid>
                    <div className="py-5"></div>
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
                            paddingBlock: 10,
                            zindex:10
                            
                        }}>
                            <Stack
                                direction={isMobile ? "column" : "row"}
                                justifyContent={isMobile ? "flex-start" : "space-evenly"}
                                alignItems="center"
                                sx={{width: "100%"}}
                            >
                                <Typography  sx={{width: isMobile ? "80%" : "60%", marginTop:"100px", marginX:"5%"  }} style={{fontWeight: 'bold', color:"white"}} variant="body1">
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
                                    width:'full',
                                    marginRight: "5%"
                                }}>

                                    <Button variant="filled" 
                                    onClick={()=> {
                                        history.push('/proyecto'); 
                                        window.location.reload();
                                    }}
                                    style={
                                        {
                                            marginTop: '120px',
                                            backgroundColor:"white",
                                            color:"black",
                                            fontWeight:"bold",
                                            borderRadius:"30px",
                                            width:200,
                                            maxHeight:"60px",
                                        }}
                                    >
                                            Tengo un proyecto

                                    </Button>
                                </Box> 
                            </Stack>   
                        </Box>
                    </Grid>
                </Grid>
                
                <Grid sx={{maxWidth:'100%', display:'flex', alignItems: 'center', justifyContent:'center'}}  id="pillars-item" item container>
                    {isMobile 
                        ?   <PillarsM id="pillars-component" />
                        :   <Pillars isMobile={isMobile} id="pillars-component" />
                    }
                </Grid>

                <Grid id="process-item" sx={{
                    display:'flex', 
                    justifyContent:'center',
                    }} container spacing={1}>
                        
                    <Processes href="#procesos" isMobile={isMobile} id="process-component" />
                    
                </Grid>
                <Grid item xs={12}> 
                    <Footer isMobile={isMobile} id="footer-component" />
                </Grid>
                    <Footer id="footer-component" />
                {/* <Grid id="footer-item" item xs={12}>
                </Grid> */}
            </Grid>
        {/* </Box> */}
      
      
    </div>
  );
}

export default LandingPage;