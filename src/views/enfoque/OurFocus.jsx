import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import * as React from 'react';
import HeaderEnfoque from './components/HeaderEnfoque';
import BodyAgroTech from './components/BodyAgroTech';
import BodySustainability from './components/BodySustainability';
import BodyDigitalTransform from './components/BodyDigitalTransform';
import BodyBusinessIntelligence from './components/BodyBusinessIntelligence';


const OurFocus = () => {
  return (
      
    <div className="App">
       <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <NavBar />    
                </Grid>
                <Grid item xs={12}>
                    <HeaderEnfoque />
                </Grid>
                <Grid item xs={12}>
                    <BodyAgroTech />
                </Grid>
                <Grid item xs={12}>
                    <BodySustainability />
                </Grid>
                <Grid item xs={12}>
                    <BodyDigitalTransform />
                </Grid>
                <Grid item xs={12}>
                    <BodyDigitalTransform />
                </Grid>
                <Grid item xs={12}>
                    <BodyBusinessIntelligence />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
      
      
    </div>
  );
}

export default OurFocus;