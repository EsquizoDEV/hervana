import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../../../assets/images/Paso 1.png'
import { Box } from '@mui/system';


export const ImgCardL = (props) => {
  return (
    <Card elevation="0" sx={{display:'flex', maxWidth: 730, justifyContent: 'space-between', backgroundColor:"transparent"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        width="480"
        height="280"
        image={Img}
      />
     <Box sx={{display:'flex', flexDirection:'column'}}>
        <CardContent>
            <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445"}} gutterBottom variant="h4" component="div">
               Paso 1
            </Typography>
            <Typography style={{fontWeight: 'bold', color:'black'}} gutterBottom variant="h5" component="div">
               Discutimos tu proyecto a profundidad
            </Typography>
            <Typography style={{color:'black', fontWeight:"bold"}} variant="body2" color="text.secondary">
            En una llamada de descubrimiento
            entendemos hacia dónde quieres llevar tu
            negocio y cuáles son las barreras y
            frustraciones que tienes al momento para
            lograr tus metas
            </Typography>
        </CardContent>
     </Box>
    </Card>
  );
}