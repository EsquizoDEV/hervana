import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import Pillars from './components/Pillars';
import Processes from './components/Processes';
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
                                    backgroundColor:"black", 
                                    height:400,
                                    width:'100%',
                                    zIndex:3
                                    // aligItems:"right",
                                }}>
                                
                            </Box>
                        </Grid>
                </Grid>
                
                <Grid sx={{display:'flex', alignItems: 'center', justifyContent:'center'}}  id="pillars-item" container>
                    <Pillars id="pillars-component" />
                </Grid>

                <Grid id="process-item" sx={{
                    display:'flex', 
                    justifyContent:'center',
                    marginTop:'80px'
                    }} container spacing={1}>
                        
                    <Processes id="process-component" />
                    
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