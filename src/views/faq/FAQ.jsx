import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import * as React from 'react';
import FAQquestions from './components/FAQquestions';
import FAQIntro from './components/FAQIntro';

const FAQ = () => {
  return (
      
      <div className="App">
        <h1>jnignweopgngbtgpbnp</h1>
       <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <NavBar />
                </Grid>
                <Grid item xs={12}>
                    <FAQIntro />
                </Grid>
                <Grid item xs={12}>
                    <FAQquestions />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Box>
      
      
    </div>
  );
}

export default FAQ;