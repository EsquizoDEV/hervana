import React from 'react'
import {Grid, Box, Typography} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NavBar } from '../../../components/navigation/NavBar'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from '../../../components/core/Footer';
import Oliver from '../../../assets/oliver_holanda/image00001.jpeg'
import uno from '../../../assets/medios_pend/1.jpeg'
import dos from '../../../assets/medios_pend/2.jpeg'
import tres from '../../../assets/medios_pend/3.jpeg'
import cuatro from '../../../assets/medios_pend/4.jpeg'
import cinco from '../../../assets/medios_pend/5.jpeg'
import seis from '../../../assets/medios_pend/6.jpeg'
import siete from '../../../assets/medios_pend/7.jpeg'
import useLanguage from '../../../hooks/useLanguage';


const Team = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    
    let theme = useTheme();
    
    let {getText} = useLanguage()
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            <Box sx={{flexGrow:0}}>
                <Grid sx={{overflow: 'hidden'}} container spacing={0}>
                    <NavBar isMobile={isMobile}/>

                    <Grid id="letras-intro" item xs={12} sx={{backgroundColor:"black", marginBottom:"10hv", height:"50vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                            <Typography sx={{padding:"50px", marginTop:"5vh", color:"white", fontSize:"6vh", fontWeight:"bold"}} variant="h1">
                                {getText('team', 'header', 'title')}
                            </Typography>
                    </Grid>
                    
                    <Grid item xs={12} id="intro-texto" sx={{width:"100%", height:"auto"}}>
                        <Box sx={{marginBottom:"50px",marginTop:"100px",paddingLeft:"15vw",paddingRight:"15vw", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                            <Typography variant="body2" sx={{width:"100%", marginBottom:"40px ",fontSize:"25px", color:"black"}}>
                                {getText('team','mainText', 'text')}
                            </Typography>
                            {/* <Accordion sx={{border:"4px solid black"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                sx={{flexDirection:"column"}}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <Typography variant="h3" sx={{display:"flex", justifyContent:"center",fontWeight:"bold",fontSize:"30px",width: '100%', flexShrink: 0 }}>
                                        {expanded ? 'Mostrar menos' : 'Mostrar más'}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography variant="body2" sx={{fontSize:"25px"}}>
                                    Somos latinoamericanos que han sido formados académica y profesionalmente en los Países
                                    Bajos. Este lugar es un hub de innovación y conocimiento en horticultura, tecnología, negocios
                                    con énfasis en sustentabilidad y pionera en la legalización de cannabis. Nos une el interés
                                    común de llevar a latinoamerica conocimiento de alto nivel y desarrollar la industria
                                    agricultura e impactar las sociedades y el medio ambiente de una manera positiva.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion> */}
                        </Box>
                    </Grid>

                    <Grid id="equipo1" item xs={12}>
                        <Box sx={{marginBottom:"10vh",width:"100%",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <Typography variant="h2" style={{fontWeight:"bold", fontSize:"6vh", marginBottom:"10vh"}}>
                                {getText('team','founders', 'title')}
                            </Typography>
                            <Grid 
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="stretch"
                            >
                                <Box sx={{marginBottom:"10vh",paddingLeft:"20vw", paddingRight:"20vw",width:"100%"}}>
                                    <Grid 
                                        container
                                        direction="row"
                                        justifyContent="space-evenly"
                                        spacing={12}
                                    >
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width: "100%", marginBottom:"10vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={uno}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                    <CardContent>
                                                        <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                            Bsc. F.J. Cambero                               
                                                        </Typography>
                                                        <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                            AgTech specialist & Digital lead                              
                                                        </Typography>
                                                    </CardContent>
                                                    <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width:"100%", marginBottom:"5vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={dos}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        MBA. Eduardo Martínez                             
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Strategist & Digital Catalyst                              
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width:"100%", marginBottom:"10vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={Oliver}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        Bsc. Oliver Ledermann                           
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Industry & Business Expert                              
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width:"100%", marginBottom:"10vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={tres}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        MSc. Andrés Estrada                              
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Plant Scientist & Growing Master                              
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                         {/* <Grid item xs={12} md={6}>
                                            <Box sx={{width: "100%", marginBottom:"10vh", display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                <Typography variant="h2" sx={{fontSize:"4vh"}}>Bsc. Oliver Ledermann</Typography>
                                                <Typography variant="body1" sx={{fontSize:"1.2vw"}} >AgTech Futurist</Typography>
                                            </Box>
                                        </Grid>
                                        
                                        
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width: "100%", marginBottom:"10vh",display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                <Typography variant="h2" sx={{fontSize:"4vh"}}>MBA. Eduardo Martinez</Typography>
                                                <Typography variant="body1" sx={{fontSize:"1.2vw"}}>Strategy & Digital Catalyst</Typography>
                                            </Box>
                                        </Grid>
                                        
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width: "100%", marginBottom:"10vh",display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                <Typography variant="h2" sx={{fontSize:"4vh"}}>Bsc. Oliver Ledermann</Typography>
                                                <Typography variant="body1" sx={{fontSize:"1.2vw"}}>Industry & Business Expert</Typography>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width: "100%", marginBottom:"10vh",display:"flex", flexDirection:"column", alignItems:"center"}}>
                                                <Typography variant="h2" sx={{fontSize:"4vh"}}>MSc. Carlos Cambero</Typography>
                                                <Typography variant="body1" sx={{fontSize:"1.2vw"}}>Plant Scientist & Growing Master</Typography>
                                            </Box>
                                        </Grid> */}
                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid id="equipo2" item xs={12}>
                        <Box sx={{marginBottom:"10vh",width:"100%",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                            <Typography variant="h2" style={{fontWeight:"bold", fontSize:"6vh", marginBottom:"10vh"}}>
                                {getText('team', 'advisors', 'title')}
                            </Typography>
                            <Grid 
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="stretch"
                            >
                                <Box sx={{marginBottom:"10vh",paddingLeft:"20vw", paddingRight:"20vw",width:"100%"}}>
                                    <Grid 
                                        container
                                        direction="row"
                                        justifyContent="space-evenly"
                                        spacing={12}
                                    >
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width: "100%", marginBottom:"10vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={cuatro}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                    <CardContent>
                                                        <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                            Eng. Alekos Martinez                            
                                                        </Typography>
                                                        <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                            Entrepreneurship & Tech Master
                                                        </Typography>
                                                    </CardContent>
                                                    <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width:"100%", marginBottom:"5vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={cinco}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        Ba. Antonio Elenes                              
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Creative Media Producer 
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{width:"100%", marginBottom:"5vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={seis}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        MSc. Daniel Ender                              
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Finance & Business Master 
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid>
                                        {/* <Grid item xs={12} md={6}>
                                            <Box sx={{width:"100%", marginBottom:"10vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={user}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        Oliver Lederman                            
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Industry Expert & Project                              
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid> */}
                                        {/* <Grid item xs={12} md={12}>
                                            <Box sx={{width:"100%", marginBottom:"10vh"}}>
                                                <Card
                                                    elevation={0}
                                                >
                                                    <div style={{display:"flex", justifyContent:"center"}}>
                                                        <CardMedia
                                                        sx={{height:"30vh",width:"30vh",borderRadius:"50%"}}
                                                        component="img"
                                                        alt="leader"
                                                        image={user}
                                                        width="200px"
                                                        height="200px"
                                                        />
                                                    </div>
                                                <CardContent>
                                                    <Typography variant="h3" align="center" style={{fontWeight:"bold", fontSize:"5vh", display:"flex", justifyContent:"center"}}>
                                                        Carlos Cambero                              
                                                    </Typography>
                                                    <Typography variant="body2" align="center" style={{display:"flex", justifyContent:"center", fontSize:"3vh"}}>
                                                        Plan scientist & Growing Master                              
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia/>
                                                </Card>
                                            </Box>
                                        </Grid> */}
                                    </Grid>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12}> 
                        <Footer isMobile={isMobile} id="footer-component" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Team
