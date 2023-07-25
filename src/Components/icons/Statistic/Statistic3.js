import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect } from 'react';
import { getNumPropByYear } from '../../../Services';
import { useState } from 'react';
import { useSelector } from 'react-redux';


// export default function Statistic3() {
// let [xLabels,setxLabels] = useState([]);
// let [uData,setuData] = useState([]);
// let [pData,setpData] = useState([]);


// const idcity=useSelector(state=>state.statistic.city);
// const idtypesale=useSelector(state=>state.statistic.typesale);
// const fromyear=useSelector(state=>state.statistic.fromyear);
// const untilyear=useSelector(state=>state.statistic.untilyear);


// useEffect(()=>{
// console.log(idcity+" "+idtypesale+" "+fromyear+" "+untilyear)
// // let diffrence=(untilyear-fromyear)*-1;
// let arryear=[]
// let arruData=[]
// let arrpData=[]

// for(let i=fromyear;i<=untilyear;i++){
//   console.log("year: "+i)
//   arryear.push(i)
 
//   getNumPropByYear(idcity,idtypesale,i).then(res=>{
//   console.log(res.data[0]['count(*)'])
//   arruData.push(res.data[0]['count(*)'])
// })
// getNumPropByYear(idcity,idtypesale,i).then(res=>{
//   console.log(res.data[0]['count(*)'])
//   arrpData.push(res.data[0]['count(*)'])
// })
// }
  
// setxLabels(arryear);
// setuData(arruData);
// setpData(arrpData)


// },[])
//   return (
//     <LineChart
//       width={500}
//       height={300}
//       series={[
//         { data: pData, label: 'pv' },
//         { data: uData, label: 'uv' },
//       ]}
//       xAxis={[{ scaleType: 'point', data: xLabels }]}
//     />
//   );
// }




export default function Statistic3() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
let xLabels = [];
const idcity=useSelector(state=>state.statistic.city);
const idtypesale=useSelector(state=>state.statistic.typesale);
const fromyear=useSelector(state=>state.statistic.fromyear);
const untilyear=useSelector(state=>state.statistic.untilyear);


useEffect(()=>{
  console.log(idcity+" "+idtypesale+" "+fromyear+" "+untilyear)
  // let diffrence=(untilyear-fromyear)*-1;
  let arryear=[]
  let arruData=[]
  let arrpData=[]
  
  for(let i=fromyear;i<=untilyear;i++){
    console.log("year: "+i)
    arryear.push(i)
   
  //   getNumPropByYear(idcity,1,i).then(res=>{
  //   console.log(res.data[0]['count(*)'])
  //   uData.push(res.data[0]['count(*)'])
  // })
  // getNumPropByYear(idcity,2,i).then(res=>{
  //   console.log(res.data[0]['count(*)'])
  //   pData.push(res.data[0]['count(*)'])
  // })
  }
    
  xLabels=arryear;
  // setuData=arruData;
  // setpData=arrpData;
  console.log(xLabels)
  
  },[])
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData, label: 'pv' },
        { data: uData, label: 'uv' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}