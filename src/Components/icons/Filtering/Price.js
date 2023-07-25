import Box from '@mui/joy/Box';
import Slider from '@mui/joy/Slider';
import * as React from 'react';

function valueText(value) {
  return `${value}°C`;
}

export default function Price() {
  const [value, setValue] = React.useState([0, 137]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{m:3, width: 300}}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueText}
      />
    </Box>
  );
}