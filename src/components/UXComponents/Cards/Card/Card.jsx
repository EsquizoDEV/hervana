import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';



export const ImgCardComponent = (props) => {

  return (
    <Card elevation={0} sx={{display:'flex',width:"1200px", backgroundColor:"transparent", marginTop:"60px"}}>
        {props.props.left 
        ? <Grid item md={12}>
            <CardMedia
                component="img"
                alt="green iguana"
                image={props.props.img}
                sx={{width:"400px", height:"auto"}}
            />
        </Grid>
        : null}
     <Box sx={{display:'flex', flexDirection:'column'}}>
         <Grid container spacing={1}>
            <Grid item md={12}>
                <CardContent sx={{width:"600px"}}>
                    <Typography style={{fontSize:"35px",fontWeight:'bold', color:"black"}} gutterBottom variant="h4" component="div">
                    <div style={{backgroundColor:"#1CF445", display:"inline-block"}}>{props.props.title}.</div>
                    </Typography>
                    <Typography style={{fontWeight:900, color:'black'}} gutterBottom variant="h5" component="div">
                    {props.props.subtitle}
                    </Typography>
                    <Typography style={{color:'black'}} variant="body2" color="text.secondary">
                    {props.props.content}
                    </Typography>
                </CardContent>
            </Grid>
         </Grid>
     </Box>
      {props.props.left ? null :
      
      <Grid item md={12}><CardMedia
        component="img"
        alt="green iguana"
        image={props.props.img}
        sx={{maxWidth:"500px", maxHeight:"auto"}}
      /></Grid>}
    </Card>
  );
}