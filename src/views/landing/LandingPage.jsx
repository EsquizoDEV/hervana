import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import { withRouter } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import Processes from './components/Processes';
import CarrouselStyled from '../../components/UXComponents/carrousel/index'
import './index.css'


const  LandingPage = () => {
  return (
      
    <div id="body">
       {/* <Box sx={{ flexGrow: 0 }}> */}
            <NavBar id="nav" />
            <Grid id="main-container" container>
                
                <Grid sx={{marginBottom:"565px"}} id="hero-container" container spacing={1} >
                        <Grid sx={{}} id="hero-item-container" item xs={12} md={12} lg={12}>
                            <HeroSection id="hero-component"  />
                            <Box component='div' sx={
                                {
                                    position:"absolute",
                                    backgroundColor:"white", 
                                    height:400,
                                    width:'100%',
                                    zIndex:3
                                    // aligItems:"right",
                                }}>
                                
                            </Box>
                        </Grid>
                </Grid>
                
                <Grid  id="pillars-item" container>
                    <Pillars id="pillars-component" />
                </Grid>

                    <Processes id="process-component" />
                {/* <Grid id="process-item" item xs={12}>
                </Grid> */}
                    <Footer id="footer-component" />
                {/* <Grid id="footer-item" item xs={12}>
                </Grid> */}
            </Grid>
        {/* </Box> */}
      
      
    </div>
  );
}

export default LandingPage;