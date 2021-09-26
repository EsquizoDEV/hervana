import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import * as React from 'react';
import AtomHero from './components/AtomHero';   


const Services = () => {
  return (
      
    <div className="App">
       <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12}>
                    <AtomHero />
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
      
      
    </div>
  );
}

export default Services;