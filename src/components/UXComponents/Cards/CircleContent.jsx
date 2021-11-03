import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {ThemeProvider, createTheme} from '@mui/material/styles'

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
        maxWidth: 730,
        marginBottom: '10px',
      } 
      : 
      {display:'flex'}} elevation={0}>
      {props.side === "left" ? 
        <CardMedia
        sx={{
          border:"solid 1px", 
          borderColor:"white", 
          backgroundColor:'#2D302E',
          borderRadius:"50%", 
          
        }}
          component="img"
          alt="green iguana"
          width="480"
          height="280"
          image={props.media}
        />
      : null
      }
      <Box sx={{
        display:'flex', 
        flexDirection:'column', 
      }}>
          <CardContent sx={{opacity:"1", position:"relative",width:"700px"}}>
              <Typography style={{color:"black"}} variant="body2" color="text.secondary">
                {props.content}
              </Typography>
              <CardActions sx={{justifyContent: 'flex-end'}}>
                  <Button sx={{color:"black", fontWeight:"bold", fontSize:"20px"}} size="small">Learn More</Button>
              </CardActions>
          </CardContent>
      </Box>

      {props.side === "right" ? 
      <CardMedia
        sx={{
          border:"solid 1px", 
          borderColor:"white", 
          backgroundColor:'#2D302E',
          borderRadius:"50%",

          
        }}
        component="img"
        alt=""
        width="480"
        height="280"
        image={props.media}
      />
      : null
      }
      </Card>
    </ThemeProvider>
);
}