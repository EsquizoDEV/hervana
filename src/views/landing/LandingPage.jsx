import * as React from 'react';
import { NavBar } from '../../components/navigation/NavBar';
import { Footer } from '../../components/core/Footer';
import { Grid, Box, Typography, Button, Stack } from '@mui/material';
import HeroSection from './components/HeroSection';
// import Pillars from './components/Pillars';
// import PillarsM from './components/PillarsM';
import Processes from './components/Processes';
import './index.css'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import history from '../../history';
import Services from '../servicios/Services'
import useLanguage from '../../hooks/useLanguage';

const  LandingPage = () => {
    
    let theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    let { getText } = useLanguage();

    return (
        <div id="body">
            <Grid id="main-container" container>
            <NavBar sx={{zIndex: 999}} id="nav" theme={theme} isMobile={isMobile} />
                <Grid id="hero-container" container spacing={1} >
                    <Grid sx={{}} id="hero-item-container" item sm={12} md={12}>
                        <HeroSection id="hero-component" isMobile={isMobile} theme={theme} />
                    </Grid>
                    <div className="py-5"></div>
                    <Grid item xs={12} 
                        sx={{
                            backgroundColor:"black", 
                            display:"flex", 
                            justifyContent:"flex-end"
                        }}
                    >
                        <Box component='div' sx={{
                            
                            display: 'flex',
                            paddingTop:"3vh",
                            height:"38.5vh",
                            marginLeft: isMobile ? "8%" : "",
                            marginRight: isMobile ? "8%" : "",
                            width: isMobile ? "100%" : '50%',
                            zindex:10
                            
                        }}>
                            <Stack
                                sx={{width: isMobile ? "100%" : "40vw"}}
                            >
                                <Typography  sx={{width: isMobile ? "90%" : "40vw" }} style={{fontWeight: 'bold', color:"white", fontSize: isMobile ? "2.5vh" : "1.2vw"}} variant="body1">
                                    {getText('landing', 'hero-section', 'text')}<a style={{color:"white"}} href="https://www.forbes.com/sites/bernardmarr/2018/08/13/the-4th-industrial-revolution-is-here-are-you-ready/?sh=29efe235628b">{getText('landing', 'hero-section', 'text_rev')}</a> 
                                </Typography>

                                <Box sx={{  
                                    display:'flex',
                                    justifyContent:"flex-end",
                                    marginTop:"3vh",
                                    width:'100%',
                                }}>

                                    <Button variant="filled" 
                                    onClick={()=> {
                                        history.push('/proyecto'); 
                                        window.location.reload();
                                    }}
                                    style={{
                                        marginTop: '2vh',
                                        backgroundColor:"white",
                                        color:"black",
                                        fontWeight:"bold",
                                        borderRadius:"30px",
                                        width:200,
                                        maxHeight:"60px",
                                    }}
                                    >
                                            {getText('landing', 'hero-section', 'text_but')}

                                    </Button>
                                </Box> 
                            </Stack>   
                        </Box>
                    </Grid>
                </Grid>
                
                <Grid sx={{maxWidth:'100%', display:'flex', alignItems: 'center', justifyContent:'center', marginBottom:"20vh"}}  id="pillars-item" item container>
                    <Services landing={true}/>
                </Grid>

                <Grid item id="process-item" sx={{
                    width:'auto', 
                    display:'flex', 
                    justifyContent:'center',
                    }} container spacing={1}>
                        
                    <Processes href="#procesos" isMobile={isMobile} id="process-component" />
                    
                </Grid>
                <Grid item xs={12}> 
                    <Footer isMobile={isMobile} id="footer-component" />
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;