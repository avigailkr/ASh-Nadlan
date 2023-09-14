import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider, { sliderClasses } from '@mui/joy/Slider';
import { useDispatch } from 'react-redux';
import { saveFromPrice, saveFromSize, saveUntilPrice, saveUntilSize } from '../../../store/Actions/FilterAction';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';



 export default function Price() {
 const inputRef1 = React.useRef<HTMLInputElement | null>(null);
 const inputRef2 = React.useRef<HTMLInputElement | null>(null);
const dis=useDispatch();
 function fromprice(event){
dis(saveFromPrice(event.target.value))
 }
 function untilprice(event){
dis(saveUntilPrice(event.target.value));
 }
  return<>
     <Input
        type="number"
        defaultValue={0}
        slotProps={{
          input: {
            ref: inputRef1,
            min: 0,
            max: 2000,
            step: 100,
          },
        }}
    onChange={fromprice}
      />
      -
      <Input
        type="number"
        defaultValue={50000}
        slotProps={{
          input: {
            ref: inputRef2,
            min: 0,
            max: 2000,
            step: 100,
          },
        }}
        onChange={untilprice}
      />
  </>
 }