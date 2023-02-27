import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';



const steps = [
    'Pilih Metode',
    'Bayar',
    'Tiket',
  ];
  
export default function Stopper() {

  return (
<Box sx={{ width: '100%' }}>
     
      <Stepper activeStep={3}> 
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>  );
}