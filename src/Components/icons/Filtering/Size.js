import * as React from 'react';
import Box from '@mui/joy/Box';
import Slider, { sliderClasses } from '@mui/joy/Slider';
import { useDispatch } from 'react-redux';
import { saveFromSize, saveUntilSize } from '../../../store/Actions/FilterAction';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';



 export default function Size() {
 const inputRef1 = React.useRef<HTMLInputElement | null>(null);
 const inputRef2 = React.useRef<HTMLInputElement | null>(null);
const dis=useDispatch();
 function fromsize(event){
dis(saveFromSize(event.target.value))
 }
 function untilsize(event){
dis(saveUntilSize(event.target.value));
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
            step: 20,
          },
        }}
    onChange={fromsize}
      />
      -
      <Input
        type="number"
        defaultValue={100}
        slotProps={{
          input: {
            ref: inputRef2,
            min: 0,
            max: 2000,
            step: 20,
          },
        }}
        onChange={untilsize}
      />
  </>
 }











 //   const dis=useDispatch();
//   function valueText(value) {
//     console.log(value.target.value)
//     dis(saveFromSize(value.target.value[0]))
//     dis(saveUntilSize(value.target.value[1]))
//     //  return `${value}`;
//     }
//     // let min=0;
//     // let max=1000;
//   return (
//     <Box sx={{m:3, width: 300 }}>
//       <Slider
//         track={false}
//         defaultValue={[0, 1000]}//למה הוא נתקע על 100???????????
//         getAriaLabel={() => 'Amount'}
//         onChange={valueText}
//        // getAriaValueText={valueText}
//         marks={[
//           {
//             value: 1000,
//             label: '1000',
//           },
//           {
//             value: 1000,
//             label: '1000',
//           },
//         ]}
//         valueLabelDisplay="on"
//         sx={{
//           // Need both of the selectors to make it works on the server-side and client-side
//           [`& [style*="left:0%"], & [style*="left: 0%"]`]: {
//             [`&.${sliderClasses.markLabel}`]: {
//               transform: 'none',
//             },
//             [`& .${sliderClasses.valueLabel}`]: {
//               left: 'calc(var(--Slider-thumbSize) / 2)',
//               borderBottomLeftRadius: 0,
//               '&::before': {
//                 left: 0,
//                 transform: 'translateY(100%)',
//                 borderLeftColor: 'currentColor',
//               },
//             },
//           },
//           [`& [style*="left:100%"], & [style*="left: 100%"]`]: {
//             [`&.${sliderClasses.markLabel}`]: {
//               transform: 'translateX(-100%)',
//             },
//             [`& .${sliderClasses.valueLabel}`]: {
//               right: 'calc(var(--Slider-thumbSize) / 2)',
//               borderBottomRightRadius: 0,
//               '&::before': {
//                 left: 'initial',
//                 right: 0,
//                 transform: 'translateY(100%)',
//                 borderRightColor: 'currentColor',
//               },
//             },
//           },
//         }}
//       />
//     </Box>
//   );