import { Box } from '@mui/material';
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {images} from './data.js' 
import { styled } from '@mui/system';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MobileStepperStyled = styled(MobileStepper)`
    .MuiMobileStepper-dots {
      position:relative;
      top:10vh;
    }
    
    .MuiMobileStepper-dot{
      background-color: black;
      width: 20px;
      height:20px
    }

  .MuiMobileStepper-dotActive {
    background-color: #1CF445

  }

`

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ display:'flex',maxWidth: "75vw", height:"75vh",flexGrow: 1, border:"solid 2px black" }}>
      <AutoPlaySwipeableViews
        style={{width:"40vw", backgroundColor:"black", display:"flex", alignItems:"center"}}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "55vh",
                  width: "55vh",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
          <Paper
              square
              elevation={0}
              sx={{
              height: "50vh",
              width:"80%",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center"

              }}
          >
            <Box sx={{paddingLeft:"50px", paddingRight:"50px", paddingTop:"30px", display:"flex", alignItems:"center", flexDirection:"column"}}>
              <Typography variant="h2" style={{fontSize:"4vh",fontWeight:"bold", display:"flex", justifyContent: "center"}}>{images[activeStep].title}</Typography>
              <div>
                  {images[activeStep].label.map((bullet, key)=> (
                    <Typography variant="body1" style={{fontSize:"2vh",fontWeight:"bold"}}>{bullet}</Typography>
                  ))}
              </div>
            </Box>
          </Paper>
          <MobileStepperStyled
              variant="dots"
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
              <Button
              sx={{position:"relative", bottom:"17vh", left:"15vw"}}
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
              >
                  {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                  ) : (
                  <KeyboardArrowRight />
                  )}
              </Button>
              }
              backButton={
              <Button  sx={{position:"relative", bottom:"17vh", right:"15vw"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                  ) : (
                  <KeyboardArrowLeft />
                  )}
              </Button>
              }
          />
      </Box>
      </Box>
  );
}

export default SwipeableTextMobileStepper