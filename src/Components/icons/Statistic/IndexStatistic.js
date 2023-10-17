import { useNavigate } from "react-router-dom";
import City from "../Filtering/City";
import CityStatic from "./CityStatic";
import SaleOrRentStatistic from "./SaleOrRentStatistic";
import Statistic1 from "./Statistic1";
import Statistic2 from "./Statistic2";
import Statistic3 from "./Statistic3";
import Statistic4 from "./Statistic4";
import YearStatistic from "./YearStatistic";
import { Button, Stack, colors } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const IndexStatistic = () => {
    //שדות להוספה בדאטה
//פונקציה המקבלת שנה ומחזירה כמה דירות נתפסו
const idcity=useSelector(state=>state.statistic.city);
    //תאריך מכירה או השכרה אחרון
    //ככה שאני יוכל לחשב כמה דירות נמכרו בשנה זו
    // ברגע שהמוכר מעדכן שהדירה תפוסה 
    //הוא מעדכן את התאריך
let [isshows1,setisshows1]=useState(false)
    function s1(){setisshows1(true)}

  return (<>      
  <p id="title-static">הכנס נתונים כדי לצפות בסחר וממכר של דירות באזור מסויים</p>
    <Stack spacing={3} direction="row" className='div-all-static'>
    <Button onClick={s1} variant="outlined" href="#outlined-buttons" disabled={idcity==null?true:false}>
        לצפייה
      </Button>
      {/* <input type="button" value="לצפייה" onClick={s1} disabled={idcity==null?true:false}/> */}
      {/* <SaleOrRentStatistic /> */}
      <YearStatistic /><CityStatic />
</Stack>

{isshows1 == true? <Statistic1/>:<p style={{color:"red"}}>בחר עיר *</p>}

</>
  );
};
export default IndexStatistic;
