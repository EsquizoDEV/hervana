import * as React from 'react';
import {Box, Grid} from '@mui/material';
import agTech from '../../../assets/Naturaleza y tecnología.png';
import Typography from '@mui/material/Typography';



const HeroSection = ({ isMobile, theme }) => {
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
                sx={{marginTop:"-10vh"}}
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
                            width: isMobile ? 'auto' : '35vw',
                            marginLeft: isMobile ? "10px" : ""
                        }} 
                        src={agTech} 
                        alt="Greenhouse"/>
                {
                // * Textos
                }  
                </Grid>
                <Grid item sm={12} md={6}> 
                    <Box component="span" sx={{ 
                        display:'block',
                        width: isMobile ? 'auto' : '40vw',
                        marginBottom: isMobile ? '100px' : '0px'
                    }}>

                        <Typography 
                        sx={{ marginBottom:"5vh"}} 
                        style={{color:"#101111", fontWeight:"bold", fontSize:"6vh"}} 
                        variant="h2" 
                        theme={theme}>
                            Naturaleza y tecnología por un mundo mejor
                        </Typography>

                        <Typography 
                        variant="body1" 
                        sx={{ marginBottom:"5vh"}}
                        style={{color: "#101111",fontWeight:"bold", fontSize:"1.2vw"}}>
                            Entendemos la industria de horticultura desde una perspectiva holística e innovadora. 
                        </Typography>
                        
                    </Box> 
                </Grid>
            </Grid>

        </Box>
    </Box>
    )
}

export default HeroSection;