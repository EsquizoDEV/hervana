import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {ThemeProvider, createTheme} from '@mui/material/styles'
import history from '../../../history'

const theme = createTheme({
  components:{
    MuiCard:{
      styleOverrides:{  
        root:{
          backgroundColor: "transparent",
          overflow:"visible"
        }
      }
    },
  }
})


export const ImgInfoCard = (props) => {
  return (

    <ThemeProvider theme={theme}>
      <Card 
      sx={props.side === "right" ? 
      {
        display:'flex',
        justifyContent:"center",
      } 
      : 
      {display:'flex', justifyContent:"center",
      }} elevation={0}>
      {props.side === "left" ? 
        <CardMedia
        sx={{
          borderColor:"white", 
          backgroundColor:'#2D302E',
          borderRadius:"100%", 
          
        }}
          component="img"
          alt="green iguana"
          width="360"
          height="360"
          image={props.media}
        />
      : null
      }
      <Box sx={{
        display:'flex', 
        flexDirection:'column',
        alignItems:"flex-end" 
      }}>
          <CardContent sx={{opacity:"1",width:"85%"}}>
              <Typography style={{color:"black", fontSize:"1.2vw", fontWeight:"bold"}} variant="body1" color="text.secondary">
                {props.content}
              </Typography>
              <CardActions sx={props.side === "right" ? {justifyContent: 'flex-end'} : {justifyContent: 'flex-end', marginRight:"4vw"}}>
                  <Button onClick={()=> {
                    history.push("ourfocus");
                    window.location.reload();
                  }} sx={{color:"black", fontWeight:"bold", fontSize:"20px"}} size="small">Learn More</Button>
              </CardActions>
          </CardContent>
      </Box>

      {props.side === "right" ? 
      <CardMedia
        sx={{
          border:"solid 1px", 
          borderColor:"white", 
          backgroundColor:'#2D302E',
          borderRadius:"100%",

          
        }}
        component="img"
        alt=""
        width="360"
        height="360"
        image={props.media}
      />
      : null
      }
      </Card>
    </ThemeProvider>
);
}