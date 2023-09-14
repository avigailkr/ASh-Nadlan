import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getNumPropByYear } from '../../../Services';
import { useState } from 'react';

export default function Statistic2() {
  let [xLabels,setxLabels] = useState([]);
  let [yLabels,setyLabels] = useState([]);
  const idcity=useSelector(state=>state.statistic.city);
  const idtypesale=useSelector(state=>state.statistic.typesale);
  const fromyear=useSelector(state=>state.statistic.fromyear);
  const untilyear=useSelector(state=>state.statistic.untilyear);
  
  
  useEffect(()=>{
    console.log(idcity+" "+idtypesale+" "+fromyear+" "+untilyear)
    let arryear=[];
    let arryear2=[];
    for(let i=fromyear;i<=fromyear+3;i++){
      arryear.push(i)
      setxLabels(arryear);
  
      getNumPropByYear(idcity,idtypesale,i).then(res=>{
        console.log(res.data[0]['count(*)']);
        arryear2.push(res.data[0]['count(*)']);
        setyLabels(arryear2);
        console.log("xLabels")
        console.log(xLabels)
        console.log("yLabels")
        console.log(yLabels)
    }).catch(err=>alert(err))
    }
    
    },[])
  return (
    <LineChart
      xAxis={[{ data: [2000, 2001, 2002, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
  );
}