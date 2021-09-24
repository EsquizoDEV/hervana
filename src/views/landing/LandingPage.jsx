import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import * as React from 'react';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import Processes from './components/Processes';
import CarrouselStyled from '../../components/UXComponents/carrousel/index'


const  LandingPage = () => {
  return (
      
    <div className="App">
       <Box sx={{ flexGrow: 0 }}>
           <NavBar />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <HeroSection />
                </Grid>
                <Grid item xs={12}>
                    <Pillars />
                </Grid>
                <Grid item xs={12}>
                    <Processes />
                </Grid>
                <Grid item xs={12}>
                    <CarrouselStyled />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
      
      
    </div>
  );
}

export default LandingPage;