import React from 'react'
import {Grid, Box, Typography} from '@mui/material'
import { NavBar } from '../../../components/navigation/NavBar'
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from '../../../components/core/Footer';
import Amsterdam from './../../../assets/oliver_holanda/holanda.jpg'
import useLanguage from '../../../hooks/useLanguage';


const NuestraHistoria = () => {
    // const [expanded, setExpanded] = React.useState(false);

    // const handleChange = (panel) => (event, isExpanded) => {
    //     setExpanded(isExpanded ? panel : false);
    // }


    let theme = useTheme();

    let {getText} = useLanguage()
    
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <div>
            <Box sx={{flexGrow:0}}>
                <Grid container>
                    <NavBar isMobile={isMobile}/>

                    <Grid container sx={{backgroundColor:"black", height:"40vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <Grid item sx={{marginTop:"40px"}}>
                            <Typography sx={
                                {
                                    padding:isMobile ? "" : "50px", 
                                    color:"white", 
                                    fontSize:"6vh", 
                                    fontWeight:"bold"
                                }
                            } variant="h1">
                               {getText('historia','header', 'title')}
                            </Typography>
                        </Grid>
                    </Grid>
                    
                    <Box sx={
                        {
                            marginBottom:"50px",
                            marginTop:"50px",
                            paddingLeft:isMobile ? "5vw" : "25vw",
                            paddingRight:isMobile ? "5vw" : "25vw",
                            width:"100%", 
                            display:"flex", 
                            flexDirection:"column", 
                            alignItems:"center", 
                            justifyContent:"center"
                        }
                    }>
                        <Typography variant="body2" sx={{marginBottom:"40px ",fontSize:isMobile ? "2vh" : "1.2vw", color:"black"}}>
                            {getText('historia','mainText', 'text')}
                        </Typography>
                        {/* <Accordion sx={{border:"4px solid black"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                            sx={{flexDirection:"column"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                                <Typography variant="h3" sx={{display:"flex", justifyContent:"center",fontWeight:"bold",fontSize:"30px",width: '100%', flexShrink: 0 }}>
                                    {expanded ? 'Mostrar menos' : 'Mostrar más'}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography variant="body2" sx={{fontSize:"25px"}}>
                                Hablamos el lenguaje de la planta, el cultivador y el empresario, derribando
                                barreras operativas y creando una cultura de innovación e integración de
                                negocios en la era digital.
                                </Typography>
                            </AccordionDetails>
                        </Accordion> */}
                    </Box>

                    <Box sx={{display:"flex", flexDirection:isMobile ? "column" : "row", width:"100%"}}>
                        <Box sx={{borderBottom:isMobile ? "1px solid white" : "", borderRight:isMobile ? "" : "2px solid white",height:"60vh",width:isMobile ? "100%" : "50%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
                            <Typography variant="h2" sx={{marginBottom:isMobile ? "2vh" : "",color:"white", fontSize:"6vh"}}>{getText('historia', 'mision', 'title')}</Typography>
                            <Typography variant="body1" sx={{paddingLeft:isMobile ? "5vw" : "10vw", paddingRight:isMobile ? "5vw" : "10vw",color:"white", fontSize:isMobile ? "4vw" : "1.2vw"}}>
                                {getText('historia', 'mision', 'text')}
                            </Typography>
                        </Box>
                        {/* {isMobile ? <div><br /></div> : null} */}
                        <Box sx={{borderTop:isMobile ? "1px solid white" : "",borderLeft:isMobile ? "" : "2px solid white",height:"60vh",width:isMobile ? "100%" : "50%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
                            <Typography variant="h2" sx={{marginBottom:isMobile ? "2vh" : "",color:"white", fontSize:"6vh"}}>{getText('historia', 'vision', 'title')}</Typography>
                            <Typography variant="body2" sx={{paddingLeft:isMobile ? "5vw" : "10vw", paddingRight:isMobile ? "5vw" : "10vw",color:"white", fontSize:isMobile ? "4vw" : "1.2vw"}}>
                                {getText('historia','vision', 'text')}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{width:"100%", height:isMobile ? "auto" : "60vh"}}>
                        <img src={Amsterdam} style={{width:isMobile ? "100%" : "100%", height:isMobile ? "auto" : "100%"}} alt="amsterdam"/>
                    </Box>
                </Grid>
            </Box>
            <Footer isMobile={isMobile}/>
        </div>
    )
}

export default NuestraHistoria
