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
import useLanguage from '../../../hooks/useLanguage'

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

function SwipeableTextMobileStepper({ isMobile }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  let {getText} = useLanguage()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setTimeout(() => {
      setActiveStep(step);
    }, 7000)
  };

  let content = getText(`${images[activeStep].label[0]}`, `${images[activeStep].label[1]}${activeStep.toString()}`, `${images[activeStep].label[2]}`)

  return (
    <Box sx={{ display:'flex',maxWidth: "75vw", height:"75vh",flexGrow: 1, border:"solid 2px black" }}>
      <AutoPlaySwipeableViews
        style={{width:"50%", backgroundColor:"black", display:"flex", alignItems:"Center"}}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        
      >
        {images.map((step, index) => (
          <div style={{display:"flex",alignItems:"center", justifyContent:"center"}} key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: "auto",
                  width: "70%",
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
              <Typography variant="h2" style={{fontSize:"4vh",fontWeight:"bold", display:"flex", justifyContent: "center"}}>{getText(`${images[activeStep].title[0]}`, `${images[activeStep].title[1]}${activeStep.toString()}`, `${images[activeStep].title[2]}`)}</Typography>
              <div>
                {
                  Array.isArray(content)
                  ? 
                  <>
                    <ul style={{listStyle:"none"}}>
                      {content.map((bullet, key)=>(
                        <li>
                          <Typography key={key} variant="body1" style={{fontSize:"2vh",fontWeight:"bold"}}>{bullet}</Typography>
                        </li>
                      ))
                      }
                    </ul>
                  </>
                  :
                  <>
                   <Typography variant="body1" style={{fontSize:"2vh",fontWeight:"bold"}}>{content}</Typography>
                  </>

                }
                  {/* {images[activeStep].label.map((bullet, key)=> (
                    <Typography key={key} variant="body1" style={{fontSize:"2vh",fontWeight:"bold"}}>{bullet}</Typography>
                  ))} */}
                  {/* <Typography variant="body1" sx={{fontSize:"1.2vw"}}>{getText(`${images[activeStep].label[0]}`, `${images[activeStep].label[1]}${activeStep.toString()}`, `${images[activeStep].label[2]}`)}</Typography> */}
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