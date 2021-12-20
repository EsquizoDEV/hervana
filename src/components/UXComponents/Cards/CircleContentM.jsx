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
        elevation={0}
        sx={props.side === "right" 
        ? 
        {
          display:'flex', 
        } 
        : 
        {display:'flex'}
        } 
      >
      {props.side === "left" ? 
        <CardMedia
            sx={{
              border:"solid 1px", 
              borderColor:"white", 
              backgroundColor:'#2D302E',
              borderRadius:"50%",
              width:"30vw",
              height:"30vw",
              
            }}
            component="img"
            alt="right-image"
            image={props.media}
          />
      : null
      }
    <CardContent sx={{opacity:"1", width:"100%", padding:"0", marginTop:"5%"}}>
        <Box sx={{
            display:'flex', 
            flexDirection:'column', 
            maxWidth: "auto",
            width: "100%",
        }}>
            <Typography style={{color:"black"}} variant="body2" color="text.secondary">
                {props.content}
            </Typography>
            <CardActions sx={{justifyContent: 'flex-end'}}>
                <Button sx={{color:"black", fontWeight:"bold", fontSize:"20px"}} size="small">Learn More</Button>
            </CardActions>
        </Box>
    </CardContent>

      {props.side === "right" ? 
    //   <Box
    //     sx={{
    //         position:'relative',
    //         width:"90%",
    //         height:"auto",
    //         right:-220
    //     }}
    //   >
          <CardMedia
            sx={{
              border:"solid 1px", 
              borderColor:"white", 
              backgroundColor:'#2D302E',
              borderRadius:"50%",
              width:"30vw",
              height:"30vw",
            }}
            component="img"
            alt="right-image"
            image={props.media}
          />
    // </Box>
      : null
      }
      </Card>
    </ThemeProvider>
);
}