import React from 'react'
import {Grid, Box, Typography} from '@mui/material'
import { NavBar } from '../../../components/navigation/NavBar'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from '../../../components/core/Footer';
import Amsterdam from '../../../assets/Ámsterdam.png'


const NuestraHistoria = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    let theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            <Box sx={{flexGrow:0}}>
                <Grid container spacing={0}>
                    <NavBar isMobile={isMobile}/>

                    <Grid container sx={{backgroundColor:"black", height:"40vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Grid item sx={{marginTop:"40px"}}>
                            <Typography sx={{padding:"50px", color:"white", fontSize:"100px", fontWeight:"bold"}} variant="h1">
                                Nuestra historia
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Box sx={{marginBottom:"50px",marginTop:"50px",paddingLeft:"25vw",paddingRight:"25vw",width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <Typography variant="body2" sx={{marginBottom:"40px ",fontSize:"30px", color:"black"}}>
                            Hervana Group fue fundada para ayudar a empresarios de la industria de
                            horticultura y de cannabis a crecer su negocio, ayudándoles a navegar e
                            implementar el uso de tecnologías de vanguardia, adoptando innovaciones
                            como digitalización de operaciones y manejo de datos, en forma de
                            verdaderas soluciones a la medida de las necesidades específicas y

                            dependiendo la fase en la que se encuentre su negocio.
                        </Typography>
                        <Accordion sx={{border:"4px solid black"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            sx={{flexDirection:"column"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                                <Typography variant="h3" sx={{display:"flex", justifyContent:"center",fontWeight:"bold",fontSize:"40px",width: '100%', flexShrink: 0 }}>
                                    {expanded ? 'Mostrar menos' : 'Mostrar más'}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>
                                Hablamos el lenguaje de la planta, el cultivador y el empresario, derribando
                                barreras operativas y creando una cultura de innovación e integración de
                                negocios en la era digital.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    <Box sx={{display:"flex", width:"100%"}}>
                        <Box sx={{borderRight:"2px solid white",height:"60vh",width:"50%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#808080"}}>
                            <Typography variant="h3" sx={{color:"white"}}>Misión</Typography>
                            <Typography variant="body2" sx={{paddingLeft:"10vw", paddingRight:"10vw",color:"white"}}>
                            Aplicar innovación y conocimiento
                            que ayude a construir el presente y el
                            futuro de la agricultura en
                            Latinoamérica, combinando la
                            naturaleza con tecnología que
                            respalde el desarrollo y el bienestar de
                            la sociedad, en un mundo
                            sustentable.
                            </Typography>
                        </Box>
                        <Box sx={{borderLeft:"2px solid white",height:"60vh",width:"50%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"#808080"}}>
                            <Typography variant="h3" sx={{color:"white"}}>Visión</Typography>
                            <Typography variant="body2" sx={{paddingLeft:"10vw", paddingRight:"10vw",color:"white"}}>
                            Que Latinoamérica sea pionera en
                            aplicación de la tecnología y
                            utilización de data para la
                            transformación a negocios
                            inteligentes que ayuden al bienestar
                            humano y ambiental, que venga a
                            mejorar nuestra relación con la
                            naturaleza y las personas.
                            </Typography>
                        </Box>
                    </Box>
                    {/*             La foto no corresponde. No está en los archivos            */}
                    <Box sx={{width:"100%", height:"60vh"}}>
                        <img src={Amsterdam} style={{width:"100%", height:"100%"}}/>
                    </Box>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                        <Footer isMobile={isMobile}/>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default NuestraHistoria
