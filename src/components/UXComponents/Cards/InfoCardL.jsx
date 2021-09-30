import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../../../assets/images/Enfoque a la digitalización.png'
import { Box } from '@mui/system';


export const ImgInfoCardL = (props) => {
  return (
    <Card sx={{
        display:'flex', 
        maxWidth: 730, 
        backgroundColor:'#2D302E', 
        marginBottom: '50px',
        }}>
        <CardMedia
            sx={{border:"solid 1px", borderColor:"white", backgroundColor:'#2D302E' }}
            component="img"
            alt="green iguana"
            width="auto"
            height="280"
            image={Img}
        />
        <Box sx={{display:'flex', flexDirection:'column', border:'solid 1px', borderColor:'#1CF445', backgroundColor:'white' }}>
            <CardContent sx={{backgroundColor:'white'}}>
                <Typography style={{fontWeight: 'bold', color:"black"}} gutterBottom variant="h5" component="div">
                    Enfoque hacia la digitalización
                </Typography>
                <Typography style={{color:"black"}} variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
                exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                ea commodo consequat. Duis autem vel eum iriure dolor in hen
                </Typography>
                <CardActions sx={{justifyContent: 'flex-end'}}>
                    <Button sx={{color:"black"}} size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Box>
    </Card>
  );
}