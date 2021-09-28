import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import * as React from 'react';   
import OurStory from './components/OurStory';
import OurTeam from './components/OurTeam';
import MissionVission from './components/MissionVission';


const AboutUs = () => {

  return (
      
    <div className="App">
       <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12}>
                    <OurStory />
                </Grid>
                <Grid item xs={12}>
                    <MissionVission />
                </Grid>
                <Grid item xs={12}>
                    <OurTeam />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
      
      
    </div>
  );
}

export default AboutUs;