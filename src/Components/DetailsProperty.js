import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveArrProp } from "../store/Actions/PropAction";

export default function DetailsProperty (){
let dis=useDispatch();
let ArrProp=useSelector(x=>x.prop.arr);
console.log(ArrProp);
return <>
<h1>פרטי הדירה:</h1>
    <label className="label-det">פרטים</label>

</>

}