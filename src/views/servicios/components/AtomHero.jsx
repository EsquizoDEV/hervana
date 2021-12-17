// import { styled } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';
import {Typography} from '@mui/material' 
import * as React from 'react';
import Atom from '../../../assets/atoms/NewAtom.png';
import EngAtom from '../../../assets/atoms/atomo.jpeg'
import useLanguage from '../../../hooks/useLanguage';

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(0),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     boxShadow:'0 0 0 0',
//     marginLeft:"30px"
//   }));


  
  
  const AtomHero = ({ isMobile }) => {

    const { getText } = useLanguage();

    let {language} = useLanguage()

    
    return (
        <Box sx={{marginTop:"10vh",flexGrow: 0, display:"flex", justifyContent: 'center'}}>
           <Grid sx={{display:"flex",justifyContent:"center", alignItems:"center", width:"80%"}} container spacing={1}>
                <Grid 
                item xs={12} md={6}>
                    {
                    // * Textos
                    }  
                        <Typography variant="h1" sx={{fontSize:"6vh",fontWeight:"bold", width:"100%"}}>
                            {getText('landing', 'atom', 'title_ours')}
                            <div style={{backgroundColor:"#1CF445", display:"inline-block", width:"fit-content"}}>
                                {getText('servicios', 'atom', 'title_pil')}
                            </div><br/>
                            {getText('servicios', 'atom', 'title_serv')}
                        </Typography>
                        <Typography 
                            variant="body1" 
                            style={{
                                left: isMobile ? "20px" : "", 
                                width:isMobile ? "100%" : "80%", 
                                color:"black",
                                textAlign:"left",
                                fontWeight:"bold",
                                marginTop:"50px",
                                fontSize:isMobile ? "2vh" : "1.2vw"
                            }}
                        >
                        {getText('servicios', 'atom', 'solutions')}
                        </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    {
                    // * Imagen Greenhouse
                    }
                        <img src={language == "es" ? Atom : EngAtom} style={{top: -200 ,height:"auto", width:"95%"}} alt="Atom"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtomHero;