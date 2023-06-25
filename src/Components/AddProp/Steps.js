import "../style.css";
// import PanoramaFishEyeTwoToneIcon from '@mui/icons-material/PanoramaFishEyeTwoTone';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
  '1',
  '2',
  '3',
  '4',
  '5',
];


const Steps=({level})=>{
    return<>
     <Box className="steper" sx={{ width: '70%', display:"inline", }}>
      <Stepper activeStep={level} dir="rtl" >
        {steps.map((index) => (
          <Step  key={index} >
           
            {console.log(index)}
            <StepLabel className="stepsMUI"></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
   </>
   
}
export default Steps