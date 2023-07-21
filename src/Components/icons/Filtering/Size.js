import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider, { sliderClasses } from '@mui/joy/Slider';

function valueText(value) {
  console.log("value")
  console.log(value)
  return `${value}°C`;
}

export default function Size() {
  return (<div className='filter-details'>
    <Box sx={{ m:3,width: 300 }}>
      <Slider
        track={false}
        defaultValue={[0, 1000]}
        getAriaLabel={() => 'Amount'}
        getAriaValueText={valueText}
        marks={[
          {
            value: 0,
            label: '0 מ"ר',
          },
          {
            value: 1000,
            label: '1000 מ"ר',
          },
        ]}
        valueLabelDisplay="on"
        sx={{
          // Need both of the selectors to make it works on the server-side and client-side
          [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
            [`&.${sliderClasses.markLabel}`]: {
              transform: 'none',
            },
            [`& .${sliderClasses.valueLabel}`]: {
              left: 'calc(var(--Slider-thumbSize) / 2)',
              borderBottomLeftRadius: 0,
              '&::before': {
                left: 0,
                transform: 'translateY(100%)',
                borderLeftColor: 'currentColor',
              },
            },
          },
          [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
            [`&.${sliderClasses.markLabel}`]: {
              transform: 'translateX(-100%)',
            },
            [`& .${sliderClasses.valueLabel}`]: {
              right: 'calc(var(--Slider-thumbSize) / 2)',
              borderBottomRightRadius: 0,
              '&::before': {
                left: 'initial',
                right: 0,
                transform: 'translateY(100%)',
                borderRightColor: 'currentColor',
              },
            },
          },
        }}
      />
    </Box></div>
  );
}
