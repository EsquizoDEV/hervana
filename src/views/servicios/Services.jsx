import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid } from '@mui/material';
import * as React from 'react';
import AtomHero from './components/AtomHero';   
import SwipeableTextMobileStepper from '../../components/UXComponents/carrousel/Carrousel'

const Services = () => {
  return (
      
    <div className="App">
            <Grid id="main-container-services" container spacing={2}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid sx={{marginTop:"50px"}} item xs={12}>
                    <AtomHero id="hero-atom" />
                </Grid>
                <Grid container sx={{marginTop:"100px",paddingRight:"400px", paddingLeft:"400px"}}>
                    <SwipeableTextMobileStepper />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
    </div>
  );
}

export default Services;