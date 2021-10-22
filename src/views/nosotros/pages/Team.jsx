import React from 'react'
import {Grid, Box, Typography} from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { NavBar } from '../../../components/navigation/NavBar'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from '../../../components/core/Footer';
import CannabisLatam from '../../../assets/images/Enfoque a la digitalización.png'



const Team = () => {
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
                                Nuestro equipo
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Box sx={{marginBottom:"50px",marginTop:"50px",paddingLeft:"25vw",paddingRight:"25vw",width:"100%", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <Typography variant="body2" sx={{marginBottom:"40px ",fontSize:"30px", color:"black"}}>
                        Estamos conformados por un equipo de jóvenes profesionales interdisciplinarios con
                        experiencia en proyectos y organizaciones de clase mundial, que cuenta con una amplia red de
                        contactos y que son especialistas en operaciones de cultivo en ambientes controlados,
                        AgTech, transformación digital, analítica de datos, desarrollo y estrategia de negocios; en
                        industria de cannabis, y en implementación de tecnologías disruptivas como blockchain.
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
                                Somos latinoamericanos que han sido formados académica y profesionalmente en los Países
                                Bajos. Este lugar es un hub de innovación y conocimiento en horticultura, tecnología, negocios
                                con énfasis en sustentabilidad y pionera en la legalización de cannabis. Nos une el interés
                                común de llevar a latinoamerica conocimiento de alto nivel y desarrollar la industria
                                agricultura e impactar las sociedades y el medio ambiente de una manera positiva.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>

                    <Box sx={{width:"100%",display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                      <Typography variant="h2" style={{fontWeight:"bold", fontSize:""}}>
                          Managers
                      </Typography>
                      <Box sx={{paddingLeft:"20vw", paddingRight:"20vw"}}>
                        <Card>
                          <CardContent>
                            <Typography>
                              
                            </Typography>
                          </CardContent>
                          <CardMedia/>
                        </Card>
                      </Box>
                    </Box>

                </Grid>
            </Box>
        </div>
    )
}

export default Team
