import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch } from 'react-redux';
import { saveTpeySale } from '../../../store/Actions/FilterAction';
import { saveStatisticTypeSale, updateShow1 } from '../../../store/Actions/StatisticAction';

export default function SaleOrRentStatistic() {
    
  const dis=useDispatch()
  function change(event){
//    alert(event.target.innerText)
dis(updateShow1(false))
   if(event.target.innerText==="מכירה")
   dis(saveStatisticTypeSale(1))
   else if(event.target.innerText==="השכרה")
   dis(saveStatisticTypeSale(2))
  else
  dis(saveStatisticTypeSale(3))
  }
  
  return (
    <>  <Select
    onChange={change}
      placeholder="Select a pet…"
      indicator={<KeyboardArrowDown />}
      className='filter-static'
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
      <Option value="all">הכל</Option>
    </Select></>
  
  );
}