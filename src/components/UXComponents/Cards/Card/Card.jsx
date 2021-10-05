import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';



export const ImgCardComponent = (props) => {

  return (
    <Card elevation={0} sx={{display:'flex',width:"730px",alignItems:"space-between", backgroundColor:"transparent"}}>
        {props.props.left ? <CardMedia
        component="img"
        alt="green iguana"
        image={props.props.img}
        sx={{maxWidth:"480px", maxHeight:"280px"}}
        /> 
        : null}
     <Box sx={{display:'flex', flexDirection:'column'}}>
        <CardContent sx={{maxWidth:"500px"}}>
            <Typography style={{fontWeight: 'bold', color:"black", backgroundColor:"#1CF445"}} gutterBottom variant="h4" component="div">
               {props.props.title}
            </Typography>
            <Typography style={{fontWeight: 'bold', color:'black'}} gutterBottom variant="h5" component="div">
              {props.props.subtitle}
            </Typography>
            <Typography style={{color:'black', fontWeight:"bold"}} variant="body2" color="text.secondary">
              {props.props.content}
            </Typography>
        </CardContent>
     </Box>
      {props.props.left ? null :
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.props.img}
        sx={{maxWidth:"480px", maxHeight:"280px"}}
      />}
    </Card>
  );
}