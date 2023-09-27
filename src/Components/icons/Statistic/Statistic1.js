import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNumPropByYear } from '../../../Services';

export default function Statistic1() {
let [xLabels,setxLabels] = useState([
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
]);
 let [yLabels,setyLabels] = useState([4000, 3000, 2000, 2780, 1890, 2390, 3490]);
 let [yLabels2,setyLabels2] = useState([2400, 1398, 9800, 3908, 4800, 3800, 4300]);
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

//     getNumPropByYear(idcity,1,i).then(res=>{
//       console.log(res.data[0]['count(*)']);
//       arryear2.push(res.data[0]['count(*)']);
//         setyLabels(arryear2);
//   }).catch(err=>alert(err))

//   getNumPropByYear(idcity,2,i).then(res=>{
//     console.log(res.data[0]['count(*)']);
//     arryear2.push(res.data[0]['count(*)']);
//       setyLabels2(arryear2);
// }).catch(err=>alert(err))
  }
  
  },[])


    
    return (
      <div id="static1">
      <BarChart
        width={500}
        height={300}
        
        series={[
          { data: yLabels, label: 'נמכרו', id: 'pvId' },
          { data: yLabels2, label: 'הושכרו', id: 'uvId' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      /></div>
    );
}