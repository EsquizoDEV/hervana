import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../../../assets/images/Enfoque a la digitalización.png'
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


export const ImgInfoCardR = (props) => {
  return (

    <ThemeProvider theme={theme}>
      <Card sx={{
        display:'flex', 
        maxWidth: 730,
        marginBottom: '50px',
        }} elevation={0}>
      <Box sx={{
        display:'flex', 
        flexDirection:'column', 
      }}>
          <CardContent sx={{opacity:"1", position:"relative",width:"500px"}}>
              <Typography style={{color:"black"}} variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud 
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo consequat. Duis autem vel eum iriure dolor in hen
              </Typography>
              <CardActions sx={{justifyContent: 'flex-end'}}>
                  <Button sx={{color:"black", fontWeight:"bold", fontSize:"20px"}} size="small">Learn More</Button>
              </CardActions>
          </CardContent>
      </Box>
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
          image={Img}
        />
      </Card>
    </ThemeProvider>
);
}