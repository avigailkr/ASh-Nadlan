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
import { AddRowInSmartAgent, CheckSmartAgent, FilterFromServer, GetFromServerByIdSmartAgent } from '../../../Services';
import { SaveArrProp } from '../../../store/Actions/PropAction';
import { AddToArrSmartAgent, saveArrSmartAgent, saveChooseAddFilter, saveChooseCityFilter, saveChoosePriceFilter, saveChooseRoomFilter, saveChooseSizeFilter, saveChooseTypeFilter, saveChooseTypeSaleFilter, saveChooseYearFilter, saveCity, saveFromPrice, saveFromSize, saveFromYear, saveIsClearFilter, saveRoom, saveTpeySale, saveType, saveUntilPrice, saveUntilSize, saveUntilYear } from '../../../store/Actions/FilterAction';
import { useNavigate } from 'react-router-dom';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Filter() {
    const nav=useNavigate()
    let dis=useDispatch();
    const filterobject=useSelector(state=>state.filter);
    const arrsource=useSelector(state=>state.prop.arrsource)
    let [opensmart,SetOpenSmart]=useState(null);
    let selectfilter=useSelector(state=>state.filter);
    let user=useSelector(state=>state.user.selectedUser);
    let [flag,setflag]=useState(false)
    if(user!=null && flag==false) start()

    function start(){
      //מביא את כל הסוכנים של המשתמש
      user!=null &&  GetFromServerByIdSmartAgent(user.Id).then(res=>{
        dis(saveArrSmartAgent(res.data))
      }).catch(err=>alert(err))

      setflag(true)
    }
   function smartagent(){

    let obj={
FromYear: selectfilter.fromyear,
UntilYear: selectfilter.untilyear,
FromPrice: selectfilter.fromprice,
UntilPrice: selectfilter.untilprice,
Type: selectfilter.type,
FromSize: selectfilter.fromsize,
UntilSize: selectfilter.untilsize,
Room: selectfilter.room,
TypeSale: selectfilter.typesale,
City:selectfilter.city,
IdUser:user
    }
AddRowInSmartAgent(obj).then((res)=>{alert("סוכן חכם הופעל בהצלחה");
     addarrsmart(res.data[0].Id)//שולח לפונקציה שתוסיף את האובייקט למערך הסוכנים של המשתמש
  }).catch(err=>alert(err))



    SetOpenSmart(null)
   }

   
function addarrsmart(id){
  let obj={
    FromYear: selectfilter.fromyear,
    UntilYear: selectfilter.untilyear,
    FromPrice: selectfilter.fromprice,
    UntilPrice: selectfilter.untilprice,
    Type: selectfilter.type,
    FromSize: selectfilter.fromsize,
    UntilSize: selectfilter.untilsize,
    Room: selectfilter.room,
    TypeSale: selectfilter.typesale,
    City:selectfilter.city,
    IdUser:user,
    Id:id
        }
  console.log("objjjjjjjjjjj")
  console.log(obj)
  dis(AddToArrSmartAgent(obj))
}

    function filter(){
FilterFromServer(filterobject).then(res=>{console.log(res.data)
dis(SaveArrProp(res.data))
SetOpenSmart(true)
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
      <Button onClick={smartagent}  variant="outlined" href="#outlined-buttons"  disabled={opensmart==null?true:false}>
      <SmartToyOutlinedIcon/>
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
