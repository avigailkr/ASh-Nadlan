import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { saveTpeySale } from '../../../store/Actions/FilterAction';
import { getIdTypeSale } from '../../../Services';

export default function SaleOrRent() {
  const dis=useDispatch()
  function change(event){
    
    getIdTypeSale(event.target.innerText).then(res=>{
       dis(saveTpeySale(res.data[0].Id))
    }).catch(err=>alert(err))
      
  }
  return (
    <>  <Select
    onChange={change}
      placeholder="בחר"
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