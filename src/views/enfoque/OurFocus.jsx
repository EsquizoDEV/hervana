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
import bi from '../../assets/svg/Business intelligence (nuestro enfoque).svg'
import { HexagonsDesk } from './components/HexagonsDesk';
// import useLanguage from '../../hooks/useLanguage';

const OurFocus = () => {
  let theme = useTheme();
  // const {getText} = useLanguage()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
      
    <div className="App">
        <NavBar theme={theme} isMobile={isMobile} />    
        <Box sx={{maxWidth:"100%"}}>
          <Grid item xs={12} sx={{backgroundColor:"#101111", height:"100vh"}} container>
            <FocusHeader isMobile={isMobile}/>
          </Grid>


          <Grid sx={{maxWidth:'100%', display:'flex', alignItems: 'center', justifyContent:'center', marginBottom:"-20vh"}}  id="pillars-item" container>
              {isMobile 
                  ?   <PillarsM  isMobile={isMobile} id="pillars-component" />
                  :   <Pillars isMobile={isMobile} id="pillars-component" />
              }
          </Grid>
          
          {/* //* Renderiza los hexágonos */}
          <HexagonsDesk/>
          
          <Box sx={{display:""}}>
            <Typography variant="h3" style={
              {
                fontSize:isMobile ? "4vw" : "2vw",
                fontWeight:"bold", 
                paddingLeft:isMobile ? "12%" : "5%", 
                marginBottom:"20px"
              }
            }>
              Business intelligence
            </Typography>
            
            <div style={{backgroundColor:"#1CF445", height:"5px", width:"30%"}}></div>

            <Typography variant="body2" 
                sx={{ 
                    fontSize:isMobile ? "4vw" : "1.2vw",
                    fontWeight:"400",
                    width:isMobile ? "80%" : "35%", 
                    marginLeft:"5%", 
                    marginTop:"50px", 
                    marginBottom:"30px",
                    paddingRight:isMobile ? "0" : "1vw",
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
        </Box>

        <Footer isMobile={isMobile}/>
    </div>
  );
}

export default OurFocus;