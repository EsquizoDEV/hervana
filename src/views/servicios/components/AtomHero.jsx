import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import {Typography} from '@mui/material' 
import * as React from 'react';
import Atom from '../../../assets/svg/Átomo (servicios).svg';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'0 0 0 0',
    marginLeft:"30px"
  }));





const AtomHero = ({ isMobile }) => {
    return (
        <Box sx={{marginTop:"10vh",flexGrow: 0, display:"flex", justifyContent: 'center'}}>
           <Grid sx={{display:"flex",justifyContent:"center"}} container spacing={1}>
                <Grid sx={{position:"relative",display:"flex", justifyContent:"center",flexDirection:"column",alignItems:"center", left:"10vw"}} item xs={12} md={6}>
                    {
                    // * Textos
                    }  
                        <Typography variant="h2" sx={{fontSize:"6vH",fontWeight:"bold",marginLeft:"30px"}}>Nuestros <div style={{backgroundColor:"#1CF445", display:"inline-block", width:"fit-content"}}>seis pilares</div><br/> de servicio</Typography>
                        <Typography 
                            variant="body1" 
                            style={{
                                width:isMobile ? "80%" : "50%", 
                                color:"black",
                                textAlign:"left",
                                fontWeight:"bold", 
                                marginTop:"10vh",
                                fontSize:"1.2vw"
                            }}
                        >
                        Creamos soluciones integradas y a la medida de las necesidades específicas y dependiendo de la fase en la que se encuentre tu negocio. <br/> 
                        Te ayudamos en el diseño de operaciones profesionales de cultivo de vegetales verdes y/o cannabis con enfoque en digitalización. 
                        Ensamblamos cadenas adecuadas de proveeduría y nos encargamos de que funcionen de acuerdo a las metas planteadas. 
                        Administramos sistemas de creación y recolección de datos que estén a disposición en espacios en la nube, donde nos encargamos 
                        de procesarlos para que faciliten visibilidad y transparencia de información a todos los niveles de tu organización.
                        </Typography>
                </Grid>
                <Grid sx={{position: 'relative', right: isMobile ? '0px' : '80px',marginBottom: '100px',top:'60px'}} item xs={12} md={6}>
                    {
                    // * Imagen Greenhouse
                    }
                        <img src={Atom} style={{height:"auto", width:"50%", marginLeft:"15%"}} alt="Atom"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtomHero;