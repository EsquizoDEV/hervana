import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid } from '@mui/material';
import * as React from 'react';
import AtomHero from './components/AtomHero';   
import SwipeableTextMobileStepper from '../../components/UXComponents/carrousel/Carrousel'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import './index.css'

const Services = () => {

    let theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  return (
      
    <div className="App">
            <NavBar isMobile={isMobile} />
            <Grid id="main-container-services" container spacing={2}>
                <Grid sx={{marginTop:"50px"}} item xs={12}>
                    <AtomHero isMobile={isMobile} id="hero-atom" />
                </Grid>
                {isMobile
                ?   null
                :    <Grid item xs={12} sx={{marginTop:"30vh", display:"flex", justifyContent:"center"}} >
                    <SwipeableTextMobileStepper isMobile={isMobile} />
                </Grid>
                }
                <Grid item xs={12}>
                    <Footer isMobile={isMobile} />
                </Grid>
            </Grid>
    </div>
  );
}

export default Services;