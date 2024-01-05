import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { saveCity } from '../../../store/Actions/FilterAction';
import { useEffect } from 'react';
import { getAllNameCitysFromServer, getIdCityByNameFromServer } from '../../../Services';
import { useState } from 'react';

export default function City() {
  const dis=useDispatch();
  const [arrname,setArrName]=useState([]);
 
  useEffect(()=>{
    let arr=[]
    getAllNameCitysFromServer().then((res)=>{
      for(let i=0;i<res.data.length;i++)
      {arr.push(res.data[i].Name)}
      setArrName(arr);
    }).catch(err=>alert(err))

  },[])
  function change(event){
      console.log(event.target.innerText)

    getIdCityByNameFromServer(event.target.innerText).then(res=>{
       console.log(res.data[0].Id)
      dis(saveCity(res.data[0].Id))
    }).catch(err=>alert(err))
  }
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={arrname}
      sx={{width: 300}}
      renderInput={(params,i) => <TextField {...params} label="בחר עיר" id="jjjjjjjjjjjjjjjjjj"/>}
      onChange={change}
    />
  );
}
