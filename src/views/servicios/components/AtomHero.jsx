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





const AtomHero = () => {
    return (
        <Box sx={{flexGrow: 0, display:"flex", justifyContent: 'center'}}>
           <Grid sx={{display:"flex",justifyContent:"center"}} container spacing={2}>
                <Grid sx={{position:"relative",left:"190px",marginTop:"50px"}} item xs={12} md={6}>
                    {
                    // * Textos
                    }  
                        <Typography variant="h2" sx={{fontSize:"5vw",fontWeight:"bold",marginLeft:"30px"}}>Nuestros <div style={{backgroundColor:"#1CF445", display:"inline-block", width:"fit-content"}}>seis pilares</div><br/> de servicio</Typography>
                        <Item>
                            <Typography variant="body1" style={{left:"190px",color:"black",textAlign:"left",fontWeight:"bold",paddingRight:"300px", marginTop:"50px"}}>
                                Lorem ipsum dolor sit amet, consec-
                                tetuer adipiscing elit, sed diam nonum-
                                my nibh euismod tincidunt ut laoreet
                                dolore magna aliquam erat volutpat. Ut
                                wisi enim ad minim veniam, quis nostrud
                                exerci tation ullamcorper suscipit lobor-
                                tis nisl ut aliquip ex ea commodo conse-
                                quat. Duis autem vel eum iriure dolor in hen
                            </Typography>
                        </Item>
                </Grid>
                <Grid sx={{position: 'relative',right:' 190px',marginBottom: '100px',top:'60px'}} item xs={12} md={6}>
                    {
                    // * Imagen Greenhouse
                    }
                        <img src={Atom} style={{height:"700px", width:"100%"}} alt="Atom"/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AtomHero;