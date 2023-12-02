
<<<<<<< HEAD
// import { useState,useEffect,useRef } from "react";
// import OneProperty from "./OneProperty";
// import "./style.css";
// import { useDispatch,useSelector } from "react-redux";
// import { SaveArrLike } from "../store/Actions/LikeAction";
// import CardProp from "../Components/icons/CardProp";
// import {getAllLikeFromServer, getAllPropertysFromServer, getAllUsersFromServer} from '../Services/index';
// import { SaveArrProp, SaveArrSource } from "../store/Actions/PropAction";
// import { SaveArrUser } from "../store/Actions/UserAction";
// import Filter from './icons/Filtering/Filter';

//  const Property=()=>{
//   const dis=useDispatch();
//   const arrProp=useSelector(state=>state.prop.arr);
  
//   useEffect(() => {
//       getAllPropertysFromServer().then((res)=>{
//         dis(SaveArrProp(res.data));
//         dis(SaveArrSource(res.data))
//       }).catch(err=>alert(err));

//       getAllUsersFromServer().then((res)=>{
//         dis(SaveArrUser(res.data));
//       }).catch(err=>alert(err));
//     }, []); 
//     return <>
//     <div id="all-filters"><Filter /></div> 
//     <div className="all-apartment">

//     {/* למה החליפה לפילטר ולא מאפ
//     {arrProp.map((item,index)=>{return <div className="div-apartment" key={item.Id} >
         
//          {item.Active.data[0]==1 &&   <CardProp props={item} idcard={index} />} */}
          

//         {arrProp.filter(x=>x.Active.data[0]==1).map((item,index)=>{return <div className="div-apartment" key={item.Id} >
         
//          {<CardProp props={item} idcard={index} />}
          
//       </div>} )}
//     </div>

//     </>
// }
// export default Property;

=======
>>>>>>> 973775d (17.10.23 a)
import { useState,useEffect,useRef } from "react";
import OneProperty from "./OneProperty";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
import { SaveArrLike } from "../store/Actions/LikeAction";
import CardProp from "../Components/icons/CardProp";
import {getAllLikeFromServer, getAllPropertysFromServer, getAllUsersFromServer} from '../Services/index';
import { SaveArrProp, SaveArrSource } from "../store/Actions/PropAction";
import { SaveArrUser } from "../store/Actions/UserAction";
import Filter from './icons/Filtering/Filter';

 const Property=()=>{
  const dis=useDispatch();
  const arrProp=useSelector(state=>state.prop.arr);
  
  useEffect(() => {
      getAllPropertysFromServer().then((res)=>{
        dis(SaveArrProp(res.data));
        dis(SaveArrSource(res.data))
      }).catch(err=>alert(err));

      getAllUsersFromServer().then((res)=>{
<<<<<<< HEAD
        // console.log("users from server")
        // console.log(res.data)
=======
>>>>>>> 973775d (17.10.23 a)
        dis(SaveArrUser(res.data));
      }).catch(err=>alert(err));
    }, []); 
    return <>
    <div id="all-filters"><Filter /></div> 
    <div className="all-apartment">

    {/* למה החליפה לפילטר ולא מאפ
    {arrProp.map((item,index)=>{return <div className="div-apartment" key={item.Id} >
         
         {item.Active.data[0]==1 &&   <CardProp props={item} idcard={index} />} */}
          

        {arrProp.filter(x=>x.Active.data[0]==1).map((item,index)=>{return <div className="div-apartment" key={item.Id} >
         
         {<CardProp props={item} idcard={index} />}
          
      </div>} )}
    </div>

    </>
}
export default Property;