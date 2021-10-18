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
    <Box sx={{ display:'flex',maxWidth: "100%", height:"500px",flexGrow: 1, border:"solid 2px black" }}>
      <AutoPlaySwipeableViews
        style={{width:"900px", backgroundColor:"black"}}
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
                  height: 500,
                  display: 'block',
                  overflow: '',
                  width: 499,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
        <Paper
            square
            elevation={1}
            sx={{
            height: "auto",
            width:"100%",
            }}
        >
            <Typography variant="h2" style={{fontSize:"3vw",fontWeight:"bold", display:"flex", justifyContent: "center"}}>{images[activeStep].title}</Typography>
            <div>
              <ul>
                {images[activeStep].label.map((bullet)=> (
                  <li style={{listStyle:'none'}}><Typography variant="body1" style={{fontWeight:"bold"}}>{bullet}</Typography></li>
                ))}
              </ul>
            </div>
        <MobileStepperStyled
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
            <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
            >
                Next
                {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
                ) : (
                <KeyboardArrowRight />
                )}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
                ) : (
                <KeyboardArrowLeft />
                )}
                Back
            </Button>
            }
        />
        </Paper>
      </Box>
  );
}

export default SwipeableTextMobileStepper