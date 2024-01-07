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
import { useDispatch, useSelector } from "react-redux";
import { updateShow1 } from "../../../store/Actions/StatisticAction";

const IndexStatistic = () => {

const show1=useSelector(state=>state.statistic.show1);
const idcity=useSelector(state=>state.statistic.city);
const fromyear=useSelector(state=>state.statistic.fromyear);
const untilyear=useSelector(state=>state.statistic.untilyear);
let dis=useDispatch()

    function check(){
      console.log("check")
      console.log(idcity)
      if(fromyear>untilyear)
      alert("שים לב לתקינות טווח השנים")
    else dis(updateShow1(true))

    }
  return (<>      
  <p id="title-static">הכנס נתונים כדי לצפות בסחר וממכר של דירות באזור מסויים</p>
    <Stack spacing={3} direction="row" className='div-all-static'>
    <Button onClick={check} variant="outlined" href="#outlined-buttons" disabled={idcity==null?true:false}>
        לצפייה
      </Button>
      <YearStatistic />
      <CityStatic />
      <SaleOrRentStatistic/>
</Stack>

{show1 == true? <Statistic1/>:<p style={{color:"red"}}>בחר עיר *</p>}

</>
  );
};
export default IndexStatistic;
