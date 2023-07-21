import { useSelector, useDispatch } from "react-redux"
import OneProperty from "./OneProperty"
import { SaveArrLike } from "../store/Actions/LikeAction"
import {getAllLikeByIdFromServer} from "../Services/index"
import { useEffect } from "react"
import CardProp from "./icons/CardProp"
import { getMyLikeFromServer } from "../Services/index"
//calender
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import "./style.css";


export default function Board(){

let [isFound, setIsFound]= React.useState(false);


let user=useSelector(state=>state.user.selectedUser);
const dis=useDispatch();

useEffect(()=>{
    getAllLikeByIdFromServer(user.Id).then(res=>{
        dis(SaveArrLike(res.data))
        //console.log(res.data)
    }).catch(er=>alert("error in bring arr property from server"))
},[])

const ArrLike=useSelector(x=>x.like.arr);
console.log("ArrLike");
console.log(ArrLike);
// console.log("arrrrrrrrrrr")
// console.log(Arrprop)
// let r=false;

// const checkLike=(it)=>{
//     getMyLikeFromServer(user.Id,it.Id).then(res=>{
//         console.log(res.data.length)})
//     //     if(res.data.length > 0) 
//     //    setIsFound(true)
//     //    else
//     //    setIsFound(false)
//     //     })
//      .catch(er=>alert("error check like"))
     
//      return isFound;
// }


    return<>
    <h1>לוח דירות</h1>
    
    <div id="table-div">
        {ArrLike.map((item,index)=>{return <div className="div-apartment"  key={item.id} >
        <CardProp props={item} idcard={index} />
       </div>})}
</div>

{/* <div id="calender-div">
    <LocalizationProvider   dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['DateCalendar', 'DateCalendar', 'DateCalendar']}>
        <DemoItem >
          <DateCalendar id="calen" defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
</div> */}

    </>
}