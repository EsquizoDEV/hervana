import { NavBar } from './components/navigation/NavBar';
import { Footer } from './components/core/Footer';
import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import * as React from 'react';
import HeroSection from './views/landing/components/HeroSection';
import Pillars from './views/landing/components/Pillars';
import Processes from './views/landing/components/Processes';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const  App = () => {
  

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
                    <Footer />
                </Grid>
            </Grid>
        </Box>
    </div>
  );
}

export default App;