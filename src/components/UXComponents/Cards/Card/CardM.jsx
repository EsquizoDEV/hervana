import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';



export const ImgCardComponentM = (props) => {


  return (
    <Card elevation={0} sx={{display:'flex',width:"1200px", backgroundColor:"transparent", marginTop:"60px"}}>
        <Grid container
        direction="column"
        justifyContent="center"
        alignItems="stretch" 
        style={{display:"flex", justifyContent:"center"}}>
        
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <Grid container spacing={1}>
                    <Grid item md={12}>
                        <CardContent sx={{width:"90%", marginX:"15px"}}>
                            <Typography style={{fontSize:"70px",fontWeight:'bold', color:"black"}} gutterBottom variant="h4" component="div">
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
            <Grid item md={12}><CardMedia
                component="img"
                alt="green iguana"
                image={props.props.img}
                sx={{maxWidth:"450px", maxHeight:"auto", marginBottom:"20px"}}
            /></Grid>
        </Grid>
    </Card>
  );
}