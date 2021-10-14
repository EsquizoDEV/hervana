import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
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
                    <Grid item sm={12} md={12}>
                        <Box component='div' sx={{
                            position:"absolute",
                            backgroundColor:"black", 
                            height:400,
                            width:'100%',
                            zIndex:3
                        }} />
                    </Grid>
                </Grid>
                
                <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'center'}}  id="pillars-item" container>
                    <Pillars id="pillars-component" />
                </Grid>

                <Grid item id="process-item" sx={{
                    display:'flex', 
                    justifyContent:'center',
                    marginTop:'80px',
                    marginBottom:'80px',
                    }} container spacing={1}>
                        
                    <Processes id="process-component" />
                    
                </Grid>
                <Grid item xs={12}> 
                    <Footer id="footer-component" />
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;