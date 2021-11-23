import { styled } from '@mui/material/styles';
import { Grid, Box, Paper } from '@mui/material';
import {Typography} from '@mui/material' 
import * as React from 'react';
import Atom from '../../../assets/svg/Átomo (servicios).svg';
import useLanguage from '../../../hooks/useLanguage';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow:'0 0 0 0',
    marginLeft:"30px"
  }));


  
  
  const AtomHero = ({ isMobile }) => {

    const { getText } = useLanguage();
    
    return (
        <Box sx={{flexGrow: 0, display:"flex", justifyContent: 'center'}}>
           <Grid sx={{display:"flex",justifyContent:"center"}} container spacing={1}>
                <Grid sx={{position:"relative",left: isMobile ? "20px" : "190px",marginTop:"50px"}} item xs={12} md={6}>
                    {
                    // * Textos
                    }  
                        <Typography variant="h2" sx={{fontSize:"4vw",fontWeight:"bold",marginLeft:"30px"}}>{getText('landing', 'atom', 'title_ours')}<div style={{backgroundColor:"#1CF445", display:"inline-block", width:"fit-content"}}>{getText('landing', 'atom', 'title_pil')}</div><br/>{getText('landing', 'atom', 'title_serv')}</Typography>
                        <Item>
                            <Typography 
                                variant="body1" 
                                style={{
                                    left: isMobile ? "20px" : "190px", 
                                    width:isMobile ? "80%" : "50%", 
                                    color:"black",
                                    textAlign:"left",
                                    fontWeight:"bold",
                                    paddingRight:"300px", 
                                    marginTop:"50px"
                                }}
                            >
                            {getText('landing', 'atom', 'solutions')}
                            </Typography>
                        </Item>
                </Grid>
                <Grid sx={{position: 'relative', right: isMobile ? '0px' : '80px',marginBottom: '100px',top:'60px'}} item xs={12} md={6}>
                    {
                    // * Imagen Greenhouse
                    }
                        <img src={Atom} style={{height:"auto", width:"70%", marginLeft:"15%"}} alt="Atom"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtomHero;