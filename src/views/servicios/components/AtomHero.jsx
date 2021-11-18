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
        <Box sx={{flexGrow: 0, display:"flex", justifyContent: 'center'}}>
           <Grid sx={{display:"flex",justifyContent:"center"}} container spacing={1}>
                <Grid sx={{position:"relative",left: isMobile ? "20px" : "190px",marginTop:"50px"}} item xs={12} md={6}>
                    {
                    // * Textos
                    }  
                        <Typography variant="h2" sx={{fontSize:"4vw",fontWeight:"bold",marginLeft:"30px"}}>Nuestros <div style={{backgroundColor:"#1CF445", display:"inline-block", width:"fit-content"}}>seis pilares</div><br/> de servicio</Typography>
                        <Item>
                            <Typography variant="body1" style={{left: isMobile ? "20px" : "190px", width:isMobile ? "90%" : "50%", color:"black",textAlign:"left",fontWeight:"bold",paddingRight:"300px", marginTop:"50px"}}>
                            Creamos soluciones integradas y a la medida de las necesidades específicas y dependiendo de la fase en la que se encuentre tu negocio. <br/> 
                            Te ayudamos en el diseño de operaciones profesionales de cultivo de vegetales verdes y/o cannabis con enfoque en digitalización. 
                            Ensamblamos cadenas adecuadas de proveeduría y nos encargamos de que funcionen de acuerdo a las metas planteadas. 
                            Administramos sistemas de creación y recolección de datos que estén a disposición en espacios en la nube, donde nos encargamos 
                            de procesarlos para que faciliten visibilidad y transparencia de información a todos los niveles de tu organización.
                            </Typography>
                        </Item>
                </Grid>
                <Grid sx={{position: 'relative', right: isMobile ? '0px' : '80px',marginBottom: '100px',top:'60px'}} item xs={12} md={6}>
                    {
                    // * Imagen Greenhouse
                    }
                        <img src={Atom} style={{height:"auto", width:"70%"}} alt="Atom"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtomHero;