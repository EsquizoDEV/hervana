import * as React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Grid, Box, Typography} from '@mui/material';
import { NavBar } from '../../components/navigation/NavBar';
import {FocusHeader} from './components/FocusHeader';
import TextOnImage from './components/TextOnImage'
import { Footer } from '../../components/core/Footer';
import paneles from '../../assets/Artboard 63.png'
import robotica from '../../assets/Artboard 64.png'
import AI from '../../assets/Artboard 65.png'
import bi from '../../assets/svg/Business intelligence (nuestro enfoque).svg'
import transDigital from '../../assets/svg/Transformación digital (Nuestro enfoque).svg'
import hands from '../../assets/Robótica.png'
import panelesInvernadero from '../../assets/Creación de páneles de control.png'
import latam from '../../assets/Inteligencia artificial.png'
import digital from '../../assets/Artboard 60.png'


//* Los svg (AI, ROBOT, PANELES) no sirven!!, corregir archivos (Tony)


const OurFocus = () => {
  let theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
      
    <div className="App">
        <NavBar theme={theme} isMobile={isMobile} />    
       <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>

                
                <Grid sx={{backgroundColor:"black", height:"100%"}} container>
                  <FocusHeader/>
                </Grid>

                <Box sx={
                {
                  marginBottom:"500px"
                }}>

                  <Typography variant="h3" style={
                    {
                      fontSize:"4vw",
                      fontWeight:"bold", 
                      paddingLeft:"150px", 
                      marginTop:"50px", 
                      marginBottom:"20px"
                    }
                  }>
                    Sustentabilidad & eficiencia
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
                    Contribuimos con el desarrollo sostenible mediante tecnología
                  </Typography>
                  
                  <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div>  
                  <TextOnImage 
                    imagePosition="left" 
                    img={hands}

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

                <Box sx={
                {
                  marginBottom:"500px",
                  width:"100%"
                }}>
                    <Typography variant="h3" style={
                      {
                        fontSize:"4vw",
                        fontWeight:"bold", 
                        paddingLeft:"150px", 
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
                        marginBottom:"30px", 
                        paddingLeft:"150px",
                        width:"40%"
                      }
                    }>
                    </Typography>
                    
                    <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div> 
                    <TextOnImage 
                      imagePosition="right"
                      img={panelesInvernadero} 
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
                    
                  <Box sx={{display:"flex", paddingRight:"100px",paddingLeft:"100px",justifyContent:"space-between", width:"100%",alignItems:"space-between"}}>
                    <Box sx={{width:"30%",  display:"flex", flexDirection:"column", alignItems:"center",}}>
                      <Typography variant="body2" style={{fontWeight:"bold", fontSize:"30px"}}>
                        Creación de paneles de control en la nube
                      </Typography>
                      {/* //*Aqui van los svg que no sirven */}
                      <img src={paneles} style={{width:"80%"}} alt="paneles"/>
                    </Box>

                    <Box sx={{width:"30%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                      <Typography variant="body2" style={{fontWeight:"bold", fontSize:"30px"}}>
                        Robótica
                      </Typography>
                      {/* //*Aqui van los svg que no sirven */}
                      <img src={robotica} style={{width:"80%"}} alt="paneles"/>
                    </Box>
                    <Box>

                    </Box>
                    <Box sx={{width:"30%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                      <Typography variant="body2" style={{fontWeight:"bold", fontSize:"30px"}}>
                        Inteligencia artificial
                      </Typography>
                      {/* //*Aqui van los svg que no sirven */}
                      <img src={AI} style={{width:"80%"}} alt="paneles"/>
                    </Box>
                  </Box>

                  <Box>
                    <Typography variant="h3" style={
                      {
                        fontSize:"4vw",
                        fontWeight:"bold", 
                        paddingLeft:"150px", 
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
                        marginBottom:"30px", 
                        paddingLeft:"150px",
                        width:"40%"
                      }
                    }>
                      
                    </Box>
                    
                    <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div>

                    <Typography variant="body2" sx={{ fontSize:"30px",fontWeight:"400",width:"40%", marginLeft:"200px", marginTop:"50px", marginBottom:"30px"}}>
                    La inteligencia de negocios (BI) combina
                    análisis de negocios, minería, visualización,
                    herramientas e infraestructura de datos,
                    además de prácticas recomendadas para
                    ayudar a las empresas a tomar decisiones
                    basadas en los datos.
                    </Typography>
                    
                    <div style={{padding:"15vw", paddingTop:"0"}}>
                      <img src={bi} alt="business intelligence" style={{width:"100%", height:"40%"}}/>
                    </div>
                  </Box>

                  <Box sx={
                  {
                    marginBottom:"500px"
                  }}>

                    <Typography variant="h3" style={
                      {
                        fontSize:"4vw",
                        fontWeight:"bold", 
                        paddingLeft:"150px", 
                        marginTop:"50px", 
                        marginBottom:"20px"
                      }
                    }>
                      Industria del cannabis en Latam
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
                      imagePosition="left"
                      img={latam} 

                      text={
                      ` Los productores en Latam pueden
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
                      en el continente.`
                    }/>

                </Box>

                  <Box sx={
                  {
                    marginBottom:"500px",
                    width:"100%"
                  }}>
                    <Typography variant="h3" style={
                      {
                        fontSize:"4vw",
                        fontWeight:"bold", 
                        paddingLeft:"150px", 
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

                  <Box sx={{ width:"100%"}}>
                    <Box sx={{display:"flex",paddingLeft:"100px",paddingRight:"100px",justifyContent:"center"}}>
                      <img src={transDigital} style={{width:"70vw"}} alt="transformación digital"/>
                    </Box>
                  </Box>


                <Grid item xs={12}>
                    <Footer isMobile={isMobile}/>
                </Grid>
                
            </Grid>
        </Box>
      
      
    </div>
  );
}

export default OurFocus;