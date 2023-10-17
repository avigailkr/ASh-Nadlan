import * as React from 'react';
import Box from '@mui/joy/Box';
import FormLabel from '@mui/joy/FormLabel';
import Radio, { radioClasses } from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveRoom } from '../../../store/Actions/FilterAction';
import { Subscript } from '@mui/icons-material';

export default function Room() {
let [room,setRoom]=useState(1);
let dis=useDispatch()
function valueRoom(value) {
  console.log(value.target._wrapperState.initialValue)
  let num=value.target._wrapperState.initialValue.slice(0,1)
  console.log("sub")
  console.log(num)
  dis(saveRoom(num))
  } 
  return (<div className='filter-details'>
    <Box sx={{ resize: 'horizontal', overflow: 'auto', px: 2 }}>
      <FormLabel
        id="product-size-attribute"
        sx={{
          mb: 1.5,
          fontWeight: 'xl',
          textTransform: 'uppercase',
          fontSize: 'xs',
          letterSpacing: '0.15rem',
        }}
      >
        חדרים
      </FormLabel>
      <RadioGroup
        aria-labelledby="product-size-attribute"
        defaultValue="1"
        onChange={valueRoom}
        sx={{ gap: 2, mb: 2, flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {['1', '2', '3', '4', '5','6+'].map((size) => (
          <Sheet
            key={size}
            sx={{
              position: 'relative',
              width: 40,
              height: 40,
              flexShrink: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '--joy-focus-outlineOffset': '4px',
              '--joy-palette-focusVisible': (theme) =>
                theme.vars.palette.neutral.outlinedBorder,
              [`& .${radioClasses.checked} `]: {
                
                [`& .${radioClasses.label}`]: {
                  fontWeight: 'lg',
                },
                [`& .${radioClasses.action}`]: {
                  '--variant-borderWidth': '2px',
                  borderColor: 'text.secondary',
                },
              },
              [`& .${radioClasses.action}.${radioClasses.focusVisible}`]: {
                outlineWidth: '2px',
              },
            }}
          >
            <Radio color="neutral" overlay disableIcon value={size} label={size} />
             
          </Sheet>
        ))}
      </RadioGroup>
    </Box></div>
  );
}
