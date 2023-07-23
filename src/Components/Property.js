
import { useState,useEffect,useRef } from "react";
import OneProperty from "./OneProperty";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
import { SaveArrLike } from "../store/Actions/LikeAction";
import CardProp from "../Components/icons/CardProp";
import {getAllLikeFromServer, getAllPropertysFromServer} from '../Services/index';
import { SaveArrProp } from "../store/Actions/PropAction";

 const Property=(props)=>{
  const dis=useDispatch();
  const arrProp=useSelector(state=>state.prop.arr);
  useEffect(() => {

    // getAllLikeFromServer()
    //   .then((res) => {
    //     dis(SaveArrLike(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("התרחשה שגיאה בקבלת דירות שכולם אהבווו");
    //   });


      getAllPropertysFromServer().then((res)=>{
        dis(SaveArrProp(res.data));
      }).catch(err=>alert(err));
 
 
 
 
    }, []); 
    return <>
    <div className="all-apartment">
        {arrProp.map((item,index)=>{return <div className="div-apartment"  key={item.id} >
          <CardProp props={item} idcard={index} />
           
      </div>} )}
    </div>

    </>
}

export default Property;