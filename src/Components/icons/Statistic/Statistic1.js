import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getNumPropByYear, getPropertyByTypeSaleAndYearSale, getPropertyByTypeSaleAndYearSaleAndCity } from '../../../Services';

import Table from '@mui/joy/Table';
import OnePropStatistic from './OnePropStatistic';


  // const currentEmployer = useSelector(state => state.com.currentEmployer);
  // const arr = useSelector(state => state.com.arrJobs)
  // const dispatch = useDispatch();

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
let [arr,setarr]=useState([])

useEffect(()=>{
  console.log("idcity+idtypesale+fromyear+untilyear")
  console.log(idcity+" "+idtypesale+" "+fromyear+" "+untilyear)
  let arryear=[];
  let arrprop=[];
  if(idtypesale ==1 || idtypesale==2)
  for(let i=fromyear;i<=fromyear+3;i++){
    arryear.push(i)
    setxLabels(arryear);
    //מביא את הדירות לפי עיר סוג מכירה ושנה בה נימכרו או הושכרו
    getPropertyByTypeSaleAndYearSaleAndCity(idcity,idtypesale,i).then(res=>{
      for(let i=0;i<res.data.length;i++){
      arrprop.push(res.data[i])
    }
    setarr(arrprop)
      }).catch(err=>alert(err))
  }
  else{
    for(let i=fromyear;i<=fromyear+3;i++){
    arryear.push(i)
    setxLabels(arryear);
    //מביא את הדירות לפי עיר סוג מכירה ושנה בה נימכרו או הושכרו
    getPropertyByTypeSaleAndYearSale(idcity,i).then(res=>{
      for(let i=0;i<res.data.length;i++){
      arrprop.push(res.data[i])
    }
    setarr(arrprop)
      }).catch(err=>alert(err))
  }
}},[])

    return <>
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
      

      <h1 id='AllJobsT'>פרטי הדירות</h1>
    <Table hoverRow  sx={{width: '60%',marginLeft:45,marginTop:5}}>
      <thead>
        <tr>
          <th>מחיר</th>
          <th>סוג נכס</th>
          <th>נמכר/הושכר</th>
          <th>כתובת </th>
          <th>עיר</th>
          <th>שנת מכירה</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((item) => (
          <tr key={item.Id}>
       <OnePropStatistic props={item}/>
          </tr>
        ))}
      </tbody>
    </Table>
    <div id='imegAllJobs'></div>

      </>
 
}