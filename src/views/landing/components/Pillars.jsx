import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { ImgCard } from '../../../components/UXComponents/Cards/Card';
import { ImgInfoCardR } from '../../../components/UXComponents/Cards/InfoCardR';
import { ImgInfoCardL } from '../../../components/UXComponents/Cards/InfoCardL';
import { Box } from '@mui/system';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Pillars = () => {

    return (
        <Box sx={{
           
        }}>
            {/* Configurar componentes para poder pasar los parametros con el contenido (img, text) y no tener que crear 4 componentes */}
            <Box id="PillarRightImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"350px",
                height:"350px",
                position:'relative',
                right:"130px"
            }}>

            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", width:""}} gutterBottom variant="h3" component="div">
                    Enfoque hacia la <br/> digitalización
                </Typography>
                <ImgInfoCardR/>
            </Box>

            <Box id="PillarLeftImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"350px",
                height:"350px",
                position:'relative',
                left:"430px"
            }}>

            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    Sustentabilidad
                </Typography>
                <ImgInfoCardL/>
            </Box>
           
            <Box id="PillarRightImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"350px",
                height:"350px",
                position:'relative',
                right:"130px"
            }}>

            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", width:""}} gutterBottom variant="h3" component="div">
                    Cannabis Latam
                </Typography>
                <ImgInfoCardR/>
            </Box>
            
            <Box id="PillarLeftImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"350px",
                height:"350px",
                position:'relative',
                left:"430px"
            }}>

            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    Agtech
                </Typography>
                <ImgInfoCardL/>
            </Box>
        </Box>
    )
}

export default Pillars;