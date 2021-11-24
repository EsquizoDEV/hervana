import * as React from 'react';
import {Box, Grid} from '@mui/material';
import agTech from '../../../assets/Naturaleza y tecnología.png';
import Typography from '@mui/material/Typography';
import useLanguage from '../../../hooks/useLanguage';


const HeroSection = ({ isMobile, theme }) => {
    
    let { getText } = useLanguage();

    return (
    <Box sx={
        {
            position:"",
            zIndex:998,
            bottom: isMobile ? -100 : -100
        }
    } id="box-header-container">
        <Box sx={{display:'flex', zIndex:996}}>
            <Grid 
                container
                direction="row"
                alignItems={isMobile ? 'stretch' : "end"}
                sx={{
                    marginTop: isMobile ? '-12vh' :"-10vh"
                }}
            > 
                <Grid item sm={12} md={6} sx={{
                    display:'flex',
                    justifyContent: 'center',
                    position:"relative",
                    top:"25vh",
                }}> 
                {
                // * Imagen Greenhouse
                }
                    <img 
                        style={{
                            alignSelf: 'center',
                            maxWidth: isMobile ? "90%" : "40vw",
                            width: isMobile ? '90%' : '35vw',
                        }} 
                        src={agTech} 
                        alt="Greenhouse"/>
                </Grid>
                {
                // * Textos
                }  
                <Grid item sm={12} md={6}> 
                    <Box component="span" sx={{ 
                        display:'block',
                        width: isMobile ? 'auto' : '40vw',
                        marginBottom: isMobile ? '100px' : '0px'
                    }}>

                        <Typography 
                            sx={{ 
                                marginBottom:isMobile ? '2vh' :"5vh",
                                marginTop: isMobile ? '25vh' : '',
                                paddingX: isMobile ? '5vw' : '',
                            }} 
                            style={{color:"#101111", fontWeight:"bold", fontSize:"6vh"}} 
                            variant="h2" 
                            theme={theme}
                        >
                            {getText('landing', 'hero-section', 'title')}
                        </Typography>

                        <Typography 
                        variant="body1" 
                        sx={{ marginBottom:"5vh"}}
                        style={{
                            color: "#101111",
                            fontWeight:"bold", 
                            fontSize:isMobile ? "4vw" : "1.2vw",
                            marginInline: isMobile ? '5vw' : ''
                        }}
                        >
                            {getText('landing', 'hero-section', 'subtitle')} 
                        </Typography>
                        
                    </Box> 
                </Grid>
            </Grid>

        </Box>
    </Box>
    )
}

export default HeroSection;