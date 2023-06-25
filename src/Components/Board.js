import { useSelector, useDispatch } from "react-redux"
import OneProperty from "./OneProperty"
import {SaveArrProp} from "../store/Actions/PropAction"
import {getAllUsersFromServer} from "../Services/index"
import { useEffect } from "react"
//calender
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "./style.css";


export default function Board(){

const dis=useDispatch()
useEffect(()=>{
    getAllUsersFromServer().then(res=>{
        dis(SaveArrProp(res.data))
        console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))    
},[])

const Arrprop=useSelector(x=>x.prop.arr)

    return<>
    <h1>לוח דירות</h1>
    
    <div id="table-div">
    <table>
    <tr id="arrBoard">
        {Arrprop.map(item=><th id="th-board" key={item.Id}> <OneProperty prop={item}/></th>)}
    </tr>
</table>
</div>

<div id="calender-div">
    <LocalizationProvider   dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
        <DemoItem >
            {/* label={"לוח משימות"} */}
          <DateCalendar id="calen" defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
</div>

    </>
}