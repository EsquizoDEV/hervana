import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box } from '@mui/material';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FAQquestions from './components/FAQquestions';
import FAQIntro from './components/FAQIntro';
import useLanguage from '../../hooks/useLanguage';

const FAQ = () => {
    let theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    let { getText } = useLanguage();

  return (
      
      <div className="App">
        <Box sx={{flexGrow:0}}>
            <Grid container  spacing={0}>
                <NavBar isMobile={isMobile}/>

                <FAQIntro getText={getText}/>
                
                <FAQquestions getText={getText}/>

                <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Footer isMobile={isMobile}/>
                </Grid>
            </Grid>
        </Box>
      
    </div>
  );
}

export default FAQ;