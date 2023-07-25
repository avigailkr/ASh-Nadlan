import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { saveTpeySale } from '../../../store/Actions/FilterAction';

export default function SaleOrRent() {
  const dis=useDispatch()
  function change(event){
   //console.log(event.target.innerText)
   dis(saveTpeySale(event.target.innerText))
  }
  return (
    <>  <Select
    onChange={change}
      placeholder="Select a pet…"
      indicator={<KeyboardArrowDown />}
      sx={{m:4,
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="sale">מכירה</Option>
      <Option value="rent">השכרה</Option>
    </Select></>
  
  );
}