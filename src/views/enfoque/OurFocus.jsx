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
import dashboard from '../../assets/Artboard 63.png'
import robotica from '../../assets/Artboard 64.png'
import ai from '../../assets/Artboard 65.png'
import bi from '../../assets/svg/Business intelligence (nuestro enfoque).svg'
import useLanguage from '../../hooks/useLanguage';


//* Los svg (AI, ROBOT, PANELES) no sirven!!, corregir archivos (Tony)


const OurFocus = () => {
  let theme = useTheme();
  const {getText} = useLanguage()
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

                {/* <Grid item xs={12} sx={{maxWidth: "100%"}}>
                    <Box sx={{width:"100%", marginBottom:isMobile ? "10vh" : "40vh"}}>
                        <Typography 
                            variant="h3" 
                            style={{
                                fontSize: isMobile ? "4vw" : "5vh",
                                fontWeight:"bold", 
                                paddingLeft:"5%", 
                                marginTop:"15vh", 
                                marginBottom: isMobile ? "4vh" : "6vh"
                            }}
                        >
                            Sustentabilidad & eficiencia
                        </Typography>
                        <Typography variant="body2" style={
                            {
                            fontSize:isMobile ? "4vw" : "2vw", 
                            fontWeight:"bold", 
                            marginBottom:"30px", 
                            paddingLeft:"5%",
                            width:"40%"
                            }
                        }>
                            Contribuimos con el desarrollo sostenible mediante tecnología
                        </Typography>
                        <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div>  
                        <TextOnImage 
                            imagePosition="left" 
                            img={hands}
                            isMobile={isMobile}
                            text={
                            ` La agricultura en ambientes controlados es
                            por mucho la manera más eficiente y
                            sustentable de producción en la actualidad.
                            Utilizando 90% menos agua y produciendo
                            hasta 30 veces mas a comparación de la
                            agricultura tradicional, sin mencionar que
                            esta está a merced de los cada vez más
                            desafiantes condiciones climáticas.`
                        }/>
                    </Box>
                </Grid> */}

                <Grid sx={{maxWidth:'100%', display:'flex', alignItems: 'center', justifyContent:'center', marginBottom:"-20vh"}}  id="pillars-item" container>
                    {isMobile 
                        ?   <PillarsM id="pillars-component" />
                        :   <Pillars isMobile={isMobile} id="pillars-component" />
                    }
                </Grid>
                
                {/* <Grid item xs={12}>
                    <Box 
                        sx={{
                        marginBottom:"30vh",
                        width:"100%"
                        }}
                    >
                        <Typography variant="body2" style={
                        {
                            fontSize:isMobile ? "4vw" : "2vw",
                            fontWeight:"bold", 
                            paddingLeft:"5%", 
                            marginTop:"50px", 
                            marginBottom:"20px",
                            width:"50%"
                        }
                        }>
                        Agtech & cultivo data driven
                        </Typography>
                    
                        <Typography variant="body2" style={
                        {
                            fontSize:"2vw", 
                            fontWeight:"bold",  
                            width:"40%"
                        }
                        }>
                        </Typography>
                        
                        <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div> 
                        <TextOnImage 
                        imagePosition="right"
                        img={panelesInvernadero} 
                        isMobile={isMobile}
                        text={`
                        Combinar el conocimiento profundo de las
                        recetas de cultivo, principios de plant
                        empowerment y analitica tecnica en la
                        "mente" de nuestros horticultores con las
                        posibilidades de datos, robótica e IA ofrece la
                        oportunidad de incrementar sustancialmente
                        la eficiencia y calidad de la producción.`
                        }/>
                    </Box>
                </Grid> */}
                
                  {/* <Box sx={{marginBottom:"10vh"}}>
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
                                marginLeft:"5vw",
                                justifyContent:"center"
                                }}>
                                <Typography variant="body2" style={{fontWeight:"bold", fontSize:"4vh"}}>
                                    Creación de dashboards en la nube
                                </Typography>
                                <img src={paneles} style={{width:isMobile ? "60%" :"50%"}} alt="paneles"/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{width:"100%%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                                <Typography variant="body2" style={{fontWeight:"bold", fontSize:"4vh"}}>
                                    Robótica
                                </Typography>
                                <img src={robotica} style={{width:"50%"}} alt="paneles"/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center", marginRight:"3vw", justifyContent:"center"}}>
                                <Typography variant="body2" style={{fontWeight:"bold", fontSize:"4vh"}}>
                                    Inteligencia artificial
                                </Typography>
                                <img src={AI} style={{width:"50%"}} alt="paneles"/>
                            </Box>
                        </Grid>
                    </Grid>
                    </Box> */}

                    <Box sx={
                      {
                        paddingLeft:"5vw",
                        paddingRight:"5vw"
                      }}
                    >
                      <Box sx={
                        {
                          display:"flex",
                          justifyContent:"space-evenly",
                          height:"50vh",
                          marginBottom:"3vh"
                        }
                      }>
                        <Box sx={{display:"flex", flexDirection:"column", width:"33%"}}>
                          <div style={
                            {
                              display:"flex", 
                              alignItems:"center",
                              justifyContent:"center", 
                              height:"10vh",
                            }
                          }>
                            
                            <Typography
                            variant="body2"
                            sx={
                              {
                                fontSize:isMobile ? "8vw" : "2vw",
                                fontWeight:"bold",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                              }}
                            >
                              {getText('ourfocus','focus', 'cloud')}
                            </Typography>
                          </div>
                          <div style={
                            {
                              display:"flex", 
                              alignItems:"center", 
                              justifyContent:"center", 
                              height:"40vh",
                            }
                          }>
                            
                            <img style={
                              {
                              }} alt="dashboards_cloud" src={dashboard}/>
                          </div>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"column", width:"33%"}}>
                          <div style={
                            {
                              display:"flex", 
                              alignItems:"center",
                              justifyContent:"center", 
                              height:"10vh"
                            }
                          }>
                            
                            <Typography
                            variant="body2"
                            sx={
                              {
                                fontSize:isMobile ? "8vw" : "2vw",
                                fontWeight:"bold",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                              }}
                            >
                              {getText('ourfocus','focus', 'robotics')}
                            </Typography>
                          </div>
                          <div style={
                            {
                              display:"flex", 
                              alignItems:"center", 
                              justifyContent:"center", 
                              height:"40vh",
                            }
                          }>
                            
                            <img alt="robotics" src={robotica}/>
                          </div>
                        </Box>
                        <Box sx={{display:"flex", flexDirection:"column", width:"33%"}}>
                          <div style={
                            {
                              display:"flex", 
                              alignItems:"center",
                              justifyContent:"center", 
                              height:"10vh",
                            }
                          }>
                            
                            <Typography
                            variant="body2"
                            sx={
                              {
                                fontSize:isMobile ? "8vw" : "2vw",
                                fontWeight:"bold",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center"
                              }}
                            >
                              {getText('ourfocus','focus', 'ai')}
                            </Typography>
                          </div>
                          <div style={
                            {
                              display:"flex", 
                              alignItems:"center", 
                              justifyContent:"center", 
                              height:"40vh",
                            }
                          }>
                            
                            <img  alt="ai" src={ai}/>
                          </div>
                        </Box>
                      </Box>
                    </Box>
                
                <Grid item xs={12}>
                  <Box>
                    <Typography variant="h3" style={
                      {
                        fontSize:isMobile ? "8vw" : "2vw",
                        fontWeight:"bold", 
                        paddingLeft:isMobile ? "12%" : "5%", 
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
                
                {/* <Grid item xs={12}>
                    <Box sx={
                    {
                        marginBottom:"20vh"
                    }}>

                        <Typography variant="h3" style={
                        {
                            fontSize:"2vw",
                            fontWeight:"bold", 
                            paddingLeft:"5%", 
                            marginTop:"", 
                            marginBottom:"20px"
                        }
                        }>
                        Industria del cannabis en Latam
                        </Typography>
                    
                        <Typography variant="body2" style={
                        {
                            fontSize:"2vw", 
                            fontWeight:"bold", 
                            marginBottom:"", 
                            paddingLeft:"150px",
                            width:"40%"
                        }
                        }>
                        </Typography>
                    
                        <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div>
                        <Box sx={{display:"flex",width:"100%", paddingLeft:"5%"}}>
                          <img style={{width:"50%"}} src={latam} alt="cannabis_latam"/>
                          <Typography variant="body2" sx={{fontSize:"1.2vw", width:"50%", paddingRight:"10vw"}}>
                            Los productores en Latam pueden
                            conseguir
                            liderar la industria mundial en calidad y
                            costos por las condiciones favorables
                            para la
                            producción, como los bajos costos
                            laborales,
                            el clima, y la luminosidad, entre otros
                            factores propicios. Hay una gran
                            oportunidad de crear una verdadera y
                            profunda revolución industria y
                            económica
                            en el continente.
                          </Typography>
                        </Box>  
                    </Box>
                </Grid> */}
                
                {/* <Grid item xs={12}>
                  <Box sx={
                  {
                    marginBottom:"10vh",
                    width:"100%"
                  }}>
                    <Typography variant="h3" style={
                      {
                        fontSize:"2vw",
                        fontWeight:"bold", 
                        paddingLeft:"5%", 
                        marginTop:"50px", 
                        marginBottom:"20px"
                      }
                    }>
                      Transformación digital
                    </Typography>
                  
                    <Typography variant="body2" style={
                      {
                        fontSize:"2vw", 
                        fontWeight:"bold", 
                        marginBottom:"30px", 
                        paddingLeft:"150px",
                        width:"40%"
                      }
                    }>
                    </Typography>
                    
                    <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div> 
                    <TextOnImage 
                      imagePosition="right"
                      img={digital}
                      isMobile={isMobile}
                      text={`
                        Definimos la estrategia de transformación
                        digital como una estrategia que coordina
                        el uso de tecnologías emergentes para
                        desbloquear nuevas fuentes de valor para
                        clientes y empleados, impulsar el
                        crecimiento de los ingresos y crear
                        agilidad / eficiencia operativa al servicio
                        de los resultados comerciales.
                        `}
                      />
                  </Box>
                </Grid> */}

                {/* <Box sx={{width:"100%",display:"flex",justifyContent:"center"}}>
                  <img src={transDigital} style={{width:"50%"}} alt="transformación digital"/>
                </Box> */}
            </Grid>
        </Box>
        <Grid item xs={12}>
          <Footer isMobile={isMobile}/>
        </Grid>
    </div>
  );
}

export default OurFocus;