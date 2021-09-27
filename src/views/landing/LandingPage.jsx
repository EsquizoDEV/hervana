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
                
                <Grid id="hero-item" item xs={8} md={8} lg={8}>
                    <HeroSection id="hero-component"  />
                </Grid>
                
                <Grid  id="pillars-item" item xs={12}>
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