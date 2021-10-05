import {Typography } from '@mui/material';
import * as React from 'react';
// import { ImgCard } from '../../../components/UXComponents/Cards/Card';
import { ImgInfoCardR } from '../../../components/UXComponents/Cards/InfoCardR';
import { ImgInfoCardL } from '../../../components/UXComponents/Cards/InfoCardL';
import { Box } from '@mui/system';


// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

const Pillars = () => {

    return (
        <Box sx={{
        }}>
            {/* Circulo de adorno 1*/}
            <Box id="PillarRightImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                right:"130px"
            }}>
            </Box>
            {/* Configurar componentes para poder pasar los parametros con el contenido (img, text) y no tener que crear 4 componentes */}
            <Box sx={{position:"relative", bottom:"300px",}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", width:"370px"}} gutterBottom variant="h3" component="div">
                    Enfoque hacia la <br/> digitalización
                </Typography>
                <ImgInfoCardR/>
            </Box>

            {/* Circulo de adorno 2*/}
            <Box id="PillarLeftImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                left:"540px",
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    Sustentabilidad
                </Typography>
                <ImgInfoCardL/>
            </Box>

            {/* Circulo de adorno 3*/}
            <Box id="PillarRightImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                right:"130px"
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"300px"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", width:"350px"}} gutterBottom variant="h3" component="div">
                    Cannabis Latam
                </Typography>
                <ImgInfoCardR/>
            </Box>

             {/* Circulo de adorno 4*/}
            <Box id="PillarLeftImage" sx={{
                border:'solid 1px', 
                backgroundColor:'',
                borderRadius:"50%",
                width:"400px",
                height:"400px",
                position:'relative',
                left:"540px",
            }}>
            </Box>
            <Box sx={{position:"relative", bottom:"300px", display:"block"}}>
                <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445", display:"flex", justifyContent:"end"}} gutterBottom variant="h3" component="div">
                    Agtech
                </Typography>
                <ImgInfoCardL/>
            </Box>
        </Box>
    )
}

export default Pillars;