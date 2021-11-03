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
        ? {
                display:'flex', 
                maxWidth: "90%",
                marginBottom: '10px',
            } 
        : {display:'flex'}
        } 
      >
      {props.side === "left" ? 
        <CardMedia
            sx={{
              border:"solid 1px", 
              borderColor:"white", 
              backgroundColor:'#2D302E',
              borderRadius:"50%",
              width:400,
              height:400,
              position:'relative',
              left:280,
              top:220
              
            }}
            component="img"
            alt="right-image"
            image={props.media}
          />
      : null
      }
    <CardContent sx={{opacity:"1", width:"100%"}}>
        <Box sx={{
            display:'flex', 
            flexDirection:'column', 
            maxWidth: "auto",
            position:'relative',
            left: props.side === "left" ? 20 : 140,
            width: props.side === "left" ? 320 : 320,
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
              width:400,
              height:400,
              position:'relative',
              right:90,
              top:220
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