import * as React from 'react';
import { 
    Grid, 
    Typography } from '@mui/material';
import { ImgCard } from '../../../components/UXComponents/Cards/CardIndex';
import ImgSt1 from '../../../assets/images/Paso 1.png'
import ImgSt2 from '../../../assets/images/Paso 2.png'
import ImgSt3 from '../../../assets/Paso 3.png'
import ImgSt4 from '../../../assets/Paso 4.png'
import { Box } from '@mui/system';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

  //Cnvertir componentes IMGCARD a componentes que reciben propiedades IMG Y TEXT
  
const Processes = ({ isMobile }) => {

    return (
        <Box sx={{width:"100%"}}>
            <Box component="div" sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant="h2" style={{fontWeight:'bold', color:'black'}}>Nuestro proceso</Typography>
            </Box>

            <Grid container style={{display:"flex", justifyContent:"center"}}>
                <ImgCard
                isMobile={isMobile} 
                left={false} 
                title={"Paso 1"} 
                subtitle={"Discutimos tu proyecto a profundidad"} 
                content={"En una llamada de descubrimiento entendemos hacia dónde quieres llevar tu negocio y cuáles son las barreras y frustraciones que tienes al momento para lograr tus metas"} 
                img={ImgSt1}/>
            </Grid>
            <Grid style={{marginTop:'50px', display:"flex", justifyContent:"center"}} container>
                {/* Resolver problemática de bullets en renderizado de contenido con props */}
                <ImgCard 
                isMobile={isMobile}
                left={true} 
                title={"Paso 2"} 
                subtitle={"Trabajamos en una propuesta enfocada a resolver tus problemáticas"} 
                content={<div>Te presentamos una solución a la medida de tus necesidades basada en nuestras áreas de conocimiento: <ul style={{listStyle:'none'}}><li>- Horticultura protegida y AgTech</li> <li>- Transformación digital</li> <li>- analítica de datos e inteligencia de negocios</li> <li>- Estrategia y desarrollo de negocios</li> <li>- Industria de Cannabis</li></ul></div>} 
                img={ImgSt2}/>
            </Grid>
            <Grid style={{marginTop:'50px', display:"flex", justifyContent:"center"}} container>
                {/* Pedir foto con correciones de margen */}
                <ImgCard
                isMobile={isMobile}
                 left={false} 
                 title={"Paso 3"} 
                 subtitle={"Nos comprometemos a trabajar por tu exito"} 
                 content={"Te enviamos una propuesta económica condiferentes opciones, seguida de un contrato de prestación de servicios."} 
                 img={ImgSt3}
                />
            </Grid>
            <Grid style={{marginTop:'50px', display:"flex", justifyContent:"center"}} container>
                <ImgCard 
                isMobile={isMobile}
                left={true} 
                title={"Paso 4"} 
                subtitle={"Arrancamos con tu proyecto"} 
                content={"Empezamos a aterrizar nuestros servicios profesionales en tu negocio, de la mano de tu equipo."} 
                img={ImgSt4}/>
            </Grid>
        </Box>
    )
}

export default Processes;