import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect } from 'react';
import { getNumPropByYear } from '../../../Services';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart } from '@mui/x-charts/BarChart';


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
     
  }).catch(err=>alert(err))
  }
  console.log("xLabels")
  console.log(xLabels)
  console.log("yLabels")
  console.log(yLabels)
  },[])
   
  return <>{idtypesale==1?<h1>נמכרו בראשון לציון</h1>:<h1>הושכרו בראשון לציון</h1>}

    <BarChart
    xAxis={[
      {
        id: 'barCategories',
        data: xLabels,
        scaleType: 'band',
      },
    ]}
    series={[
      {
        data: yLabels,
      },
    ]}
    width={900}
    height={700}
  />
  </>
}