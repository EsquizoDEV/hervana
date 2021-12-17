import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Box, Typography} from '@mui/material';
import { NavBar } from '../../components/navigation/NavBar';
import {FocusHeader} from './components/FocusHeader';
import Pillars from '../../views/landing/components/Pillars'
import PillarsM from '../../views/landing/components/PillarsM'
// import TextOnImage from './components/TextOnImage'
import { Footer } from '../../components/core/Footer';
import paneles from '../../assets/Artboard 63.png'
import robotica from '../../assets/Artboard 64.png'
import AI from '../../assets/Artboard 65.png'
import bi from '../../assets/svg/Business intelligence (nuestro enfoque).svg'
// import transDigital from '../../assets/svg/Transformación digital (Nuestro enfoque).svg'
// import hands from '../../assets/Robótica.png'
// import panelesInvernadero from '../../assets/Creación de páneles de control.png'
// import latam from '../../assets/Inteligencia artificial.png'
// import digital from '../../assets/Artboard 60.png'


//* Los svg (AI, ROBOT, PANELES) no sirven!!, corregir archivos (Tony)


const OurFocus = () => {
  let theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
      
    <div className="App">
        <NavBar theme={theme} isMobile={isMobile} />    
        <Box sx={{ flexGrow: 0, maxWidth:"100%"}}>
            <Grid 
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="stretch"
            >
                <Grid item xs={12} sx={{backgroundColor:"#101111", height:"100vh"}} container>
                  <FocusHeader isMobile={isMobile}/>
                </Grid>


                <Grid sx={{maxWidth:'100%', display:'flex', alignItems: 'center', justifyContent:'center'}}  id="pillars-item" container>
                    {isMobile 
                        ?   <PillarsM  isMobile={isMobile} id="pillars-component" />
                        :   <Pillars isMobile={isMobile} id="pillars-component" />
                    }
                </Grid>
                
                
                  <Box sx={{marginBottom:"10vh"}}>
                    <Grid 
                        container
                        direction="row"
                        justifyContent="center"
                    >
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                width:"100%",  
                                display:"flex", 
                                flexDirection:"column", 
                                alignItems:"center",
                                justifyContent:"center"
                                }}>
                                <Typography variant="body2" style={{fontWeight:"bold", fontSize:"4vh", marginLeft:"5vw"}}>
                                    Creación de dashboards en la nube
                                </Typography>
                                <img src={paneles} style={{width:isMobile ? "60%" :"50%"}} alt="paneles"/>
                                {/* //*Aqui van los svg que no sirven */}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{width:"100%%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                <Typography variant="body2" style={{fontWeight:"bold", fontSize:"4vh"}}>
                                    Robótica
                                </Typography>
                                {/* //*Aqui van los svg que no sirven */}
                                <img src={robotica} style={{width:isMobile ? "60%" :"50%"}} alt="paneles"/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", marginRight:"3vw", justifyContent:"center"}}>
                                <Typography variant="body2" style={{fontWeight:"bold", fontSize:"4vh"}}>
                                    Inteligencia artificial
                                </Typography>
                                {/* //*Aqui van los svg que no sirven */}
                                <img src={AI} style={{width:isMobile ? "60%" :"50%"}} alt="paneles"/>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box>
                
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h3" style={
                      {
                        fontSize:isMobile ? "8vw" : "2vw",
                        fontWeight:"bold", 
                        paddingLeft:isMobile ? "12%" : "5%", 
                        marginTop:"50px", 
                        marginBottom:"20px"
                      }
                    }>
                      Business intelligence
                    </Typography>
                    
                    <Box component="div" style={
                      {
                        fontSize:"2vw", 
                        fontWeight:"bold", 
                        marginBottom:"", 
                        paddingLeft:"5%",
                        width:"40%"
                      }
                    }>
                      
                    </Box>
                    
                    <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div>

                    <Typography variant="body2" 
                        sx={{ 
                            fontSize:"1.2vw",
                            fontWeight:"400",
                            width:"35%", 
                            marginLeft:isMobile ? "20%" : "5%", 
                            marginTop:"50px", 
                            marginBottom:"30px",
                            paddingRight:"1vw",
                            paddingLeft:""
                        }}
                    >
                    La inteligencia de negocios (BI) combina
                    análisis de negocios, minería, visualización,
                    herramientas e infraestructura de datos,
                    además de prácticas recomendadas para
                    ayudar a las empresas a tomar decisiones
                    basadas en los datos.
                    </Typography>
                    
                    <div style={{padding:"15vw", paddingTop:"0"}}>
                      <img src={bi} alt="business intelligence" style={{width:"100%", height:"200%"}}/>
                    </div>
                  </Box>
                </Grid>
            </Grid>
        </Box>
        <Grid item xs={12}>
          <Footer isMobile={isMobile}/>
        </Grid>
    </div>
  );
}

export default OurFocus;