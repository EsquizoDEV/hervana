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
      top:40px;
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
    <Box sx={{ display:'flex',maxWidth: "90vw", height:"50vh",flexGrow: 1, border:"solid 2px black" }}>
      <AutoPlaySwipeableViews
        style={{width:"75vw", backgroundColor:"black"}}
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
                  height: "50vh",
                  display: 'block',
                  overflow: 'hidden',
                  width: "40vw",
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box style={{width:"100%"}}>
          <Paper
              square
              elevation={0}
              sx={{
              height: "37vh",
              width:"100%",
              display:"flex",
              flexDirection:"column"

              }}
          >
            <Box sx={{paddingLeft:"50px", paddingRight:"50px", paddingTop:"30px"}}>
              <Typography variant="h2" style={{fontSize:"4vh",fontWeight:"bold", display:"flex", justifyContent: "center"}}>{images[activeStep].title}</Typography>
              <div>
                <ul>
                  {images[activeStep].label.map((bullet, key)=> (
                    <li key={key} style={{listStyle:'none'}}><Typography variant="body1" style={{fontSize:"2vh",fontWeight:"bold"}}>{bullet}</Typography></li>
                  ))}
                </ul>
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
              sx={{position:"relative", bottom:"17vh"}}
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
              <Button  sx={{position:"relative", bottom:"17vh"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
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