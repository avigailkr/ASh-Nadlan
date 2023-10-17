import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../../style.css";
import ButCity from './Button/ButCity';
import ButPrice from './Button/ButPrice';
import ButRoom from './Button/ButRoom';
import ButSize from './Button/ButSize';
import ButTypeProp from './Button/ButTypeProp';
import ButSaleOrBuy from './Button/ButSaleOrRent';
import ButAdd from './Button/ButAdd';
import ButBetween from './Button/ButBetweenYear';
import { useDispatch, useSelector } from 'react-redux';
import { FilterFromServer } from '../../../Services';
import { SaveArrProp } from '../../../store/Actions/PropAction';
import { saveChooseAddFilter, saveChooseCityFilter, saveChoosePriceFilter, saveChooseRoomFilter, saveChooseSizeFilter, saveChooseTypeFilter, saveChooseTypeSaleFilter, saveChooseYearFilter, saveCity, saveFromPrice, saveFromSize, saveFromYear, saveIsClearFilter, saveRoom, saveTpeySale, saveType, saveUntilPrice, saveUntilSize, saveUntilYear } from '../../../store/Actions/FilterAction';
import { useNavigate } from 'react-router-dom';
export default function Filter() {
    const nav=useNavigate()
    let dis=useDispatch();
    const filterobject=useSelector(state=>state.filter);
    const arrsource=useSelector(state=>state.prop.arrsource)
    function filter(){
FilterFromServer(filterobject).then(res=>{console.log(res.data)
dis(SaveArrProp(res.data))

}).catch(err=>alert(err))


    }

    function clear(){
      dis(saveFromYear(2000))
      dis(saveUntilYear(2023))
      dis(saveFromSize(0))
      dis(saveUntilSize(2000))
      dis(saveFromPrice(0))
      dis(saveUntilPrice(50000000))
      dis(saveRoom(1))
      dis(saveCity(null))
      dis(saveType(null))
      dis(saveTpeySale(null))
      dis(SaveArrProp(arrsource))
      dis(saveIsClearFilter(true))


      dis(saveChooseYearFilter(false))
      dis(saveChooseCityFilter(false))
      dis(saveChooseAddFilter(false))
      dis(saveChoosePriceFilter(false))
      dis(saveChooseRoomFilter(false))
      dis(saveChooseSizeFilter(false))
      dis(saveChooseTypeFilter(false))
      dis(saveChooseTypeSaleFilter(false))
    }
  return (
    <Stack spacing={2} direction="row" className='filter'>

<Button onClick={filter} variant="outlined" href="#outlined-buttons">
        סנן
      </Button>
      <Button onClick={clear} variant="outlined" href="#outlined-buttons">
        נקה
      </Button>
      
      <ButCity/>
      <ButSaleOrBuy/>
      <ButPrice/>
      <ButRoom/>
      <ButSize/>
      <ButTypeProp/>
      {/* <ButAdd/> */}
      <ButBetween/>
     
    </Stack>
  );
}

