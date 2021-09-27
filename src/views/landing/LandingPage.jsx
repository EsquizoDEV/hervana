import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import * as React from 'react';

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
            <NavBar />
            <Grid container>
                <Grid item xs={6}>
                    <HeroSection />
                </Grid>
                <Grid item xs={12}>
                    <Pillars />
                </Grid>
                <Grid item xs={12}>
                    <Processes />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        {/* </Box> */}
      
      
    </div>
  );
}

export default LandingPage;