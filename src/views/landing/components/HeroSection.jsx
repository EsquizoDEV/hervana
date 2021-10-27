import * as React from 'react';
import {Box, Grid} from '@mui/material';
import agTech from '../../../assets/Naturaleza y tecnología.png';
import Typography from '@mui/material/Typography';



const HeroSection = ({ isMobile, theme }) => {
    return (
    <Box sx={
        {
            position:"relative",
            zIndex:998,
            bottom:-150
        }
    } id="box-header-container">
        <Box sx={{display:'flex', justifyContent:"center", zIndex:996}}>
            <Grid 
                container
                direction="row"
                justifyContent="center"
                alignItems={isMobile ? 'stretch' : "center"}
                sx={{marginBottom: 25}}
            > 
                <Grid item sm={12} md={6} xs={{
                    display:'flex',
                    alignItems: 'center',
                }}> 
                {
                // * Imagen Greenhouse
                }
                    <img 
                        style={{
                            alignSelf: 'center',
                            maxWidth: isMobile ? "90%" : "80%",
                            width: isMobile ? 'auto' : '100%',
                            marginLeft: isMobile ? "10px" : "10%"
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
                        width: isMobile ? 'auto' : 'auto'
                    }}>

                        <Typography paragraph sx={{ marginTop:"100px"}} style={{color:"#101111", fontWeight:"bold"}} variant="h3" theme={theme}>Naturaleza y tecnología por un mundo mejor</Typography>
                        <Typography variant="h6" sx={{ marginBottom:"200px" }}
                        style={{color: "#101111",fontWeight:"bold"}}>Un enfoque estratégico a la agricultura a través de innovación y digitalización</Typography>
                        
                    </Box> 
                </Grid>
            </Grid>

        </Box>
    </Box>
    )
}

export default HeroSection;