import React from 'react'
import {Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Faq from '../../../assets/images/FAQ.png'


export const FAQquestions = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div>
            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", marginTop:"15vh", marginBottom:"15vh"}}>
                <Typography variant="body2" sx={{color:"black", fontSize:"30px"}}>
                    Esta es la sección donde se resuelven varias de las preguntas frecuentes
                </Typography>
                <img src={Faq} alt="faq svg" style={{marginTop:"50px"}}/>
                <Box sx={{paddingLeft:"15vw", paddingRight:"15vw", marginTop:"50px"}}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <Typography variant="h3" sx={{fontWeight:"bold",fontSize:"40px",width: '25%', flexShrink: 0 }}>
                                Pregunta #1
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography>
                            Hervana Group es un socio estratégico formado por un equipo experto de
                            profesionales especializados en la digitalización y operaciones de cultivo
                            en ambientes controlados, analítica e inteligencia de negocios,
                            con experiencia en proyectos de clase mundial.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                            <Typography variant="h3" sx={{fontWeight:"bold",fontSize:"40px",width: '25%', flexShrink: 0 }}>
                                Pregunta #2
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            Hervana Group es un socio estratégico formado por un equipo experto de
                            profesionales especializados en la digitalización y operaciones de cultivo
                            en ambientes controlados, analítica e inteligencia de negocios,
                            con experiencia en proyectos de clase mundial.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
            
        </div>
    )
}


export default FAQquestions