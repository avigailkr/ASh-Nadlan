import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { saveCity } from '../../../store/Actions/FilterAction';
import { useEffect } from 'react';
import { getAllNameCitysFromServer, getIdCityByNameFromServer } from '../../../Services';
import { useState } from 'react';
import { saveStatisticCity } from '../../../store/Actions/StatisticAction';

export default function CityStatic() {
  const dis=useDispatch();
  const [arrname,setArrName]=useState([])
  useEffect(()=>{
    // dis(saveStatisticCity(null))
    let arr=[]
    getAllNameCitysFromServer().then((res)=>{
      for(let i=0;i<res.data.length;i++)
      {arr.push(res.data[i].Name)}
      setArrName(arr);
    }).catch(err=>alert(err))

  },[])
  function change(event){
    getIdCityByNameFromServer(event.target.innerText).then(res=>{
      //  alert(res.data[0].Id)
        dis(saveStatisticCity(res.data[0].Id))
      }).catch(err=>alert(err))
   

  }
  return (
    <Autocomplete
      disablePortal
      id="filter-city-static"
      className='filter-static'
      options={arrname}
      sx={{width: 300 }}
      renderInput={(params,i) => <TextField {...params} label="City" id="city"/>}
      onChange={change}
    />
  );
}