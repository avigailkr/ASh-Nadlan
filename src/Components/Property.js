
import { useState,useEffect,useRef } from "react";
import OneProperty from "./OneProperty";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
import { SaveArrLike } from "../store/Actions/LikeAction";
import CardProp from "../Components/icons/CardProp";
import {getAllLikeFromServer, getAllPropertysFromServer, getAllUsersFromServer} from '../Services/index';
import { SaveArrProp } from "../store/Actions/PropAction";
import { SaveArrUser } from "../store/Actions/UserAction";
import Filter from './icons/Filtering/Filter';

 const Property=()=>{
  const dis=useDispatch();
  const arrProp=useSelector(state=>state.prop.arr);
  useEffect(() => {
      getAllPropertysFromServer().then((res)=>{
        dis(SaveArrProp(res.data));
      }).catch(err=>alert(err));

      getAllUsersFromServer().then((res)=>{
        dis(SaveArrUser(res.data));
      }).catch(err=>alert(err));
    }, []); 
    return <>

    <div className="all-apartment">
      <Filter/>
        {arrProp.map((item,index)=>{return <div className="div-apartment" key={item.Id} >
         
         {item.Active.data[0]==1 &&   <CardProp props={item} idcard={index} />}
          
      </div>} )}
    </div>

    </>
}
export default Property;