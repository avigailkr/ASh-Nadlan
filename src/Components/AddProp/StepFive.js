import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";
<<<<<<< HEAD
import { addPropToServer, getFromServerIdProp, uploadImage,bringIdPropFromServer, uplaodAddDetails } from "../../Services";
import { useSelector, useDispatch } from "react-redux";
import { json } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; //אפשרות ניתוב לפי הניתובים שהגדרת
import Uplaoded from "../Uplaoded";

import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function  StepFive ({ prevStep, values }) {
  let user=useSelector(state=>state.user.selectedUser);
  let dis=useDispatch();
  const nav = useNavigate();
=======
import { addPropToServer, getFromServerIdProp, uploadImage } from "../../Services";
import { useSelector, useDispatch } from "react-redux";
import { json } from "react-router-dom";
import { useEffect } from "react";



const StepFive = ({ prevStep, values }) => {
  let user=useSelector(state=>state.user.selectedUser);
  let dis=useDispatch();
  const [idProp,setIdProp]=useState(0);  

>>>>>>> 973775d (17.10.23 a)
 
// // שליפת האי די
//        getFromServerIdProp().then( (res)=>{
//         console.log(res.data[0].id);
//       setIdProp(res.data[0].id);
//       }) .catch(err=>alert(err));


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(values);
     

      let date1=new Date();
      let date = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate();

      values.InsertDate=date;
      values.IdUser=user.Id;

        //שליחת פרטי הדירה
       addPropToServer(values).then((res)=>{
<<<<<<< HEAD
=======
       console.log(res.data[0].Id);
       setIdProp(res.data[0].Id);
>>>>>>> 973775d (17.10.23 a)

        //יצירת אובייקט לשליחת נתונים
        const formData = new FormData(); 
         
        for (let i = 0; i < values.image.length; i++) {
          // 'images' name of the formData values must match the action method param on your controller
<<<<<<< HEAD
          formData.append("idProp", values.idProp);
=======
          formData.append("idProp", idProp);
>>>>>>> 973775d (17.10.23 a)
          formData.append("image", values.image[i]);       
//שליחה לשרת שיוסיף את התמונות לטבלת התמונות
         uploadImage(formData).then((res)=>{
         console.log(res.data);
<<<<<<< HEAD
         nav(`/Uplaoded`);
=======
>>>>>>> 973775d (17.10.23 a)
        }).catch(err=>alert(err));
         formData.delete("image");
      }
        
     }).catch(err=>alert(err))

<<<<<<< HEAD
let iP=values.idProp;
let ard=[];
ard=values.plus;

    //  const formDat=new FormData();
    //  formDat.append("idProp", iP);
    //  formDat.append("arrDetails", ard);
    //  alert( values.plus)
     uplaodAddDetails(iP,ard).then(res=>{
       console.log(res.data);
     }).catch(err=>alert(err))
=======
>>>>>>> 973775d (17.10.23 a)
    };
  
    const handlePrev = (e) => {
      e.preventDefault();
      prevStep();
    };
<<<<<<< HEAD

  
    return (<div className="addProp-main">
       
        
      <form onSubmit={handleSubmit} className="form__step">
       <Steps level={4} />
       <div className="div-end">
      <label>
       ו... סיימנו
      </label>
      <label>
      אם ברצונך להעלות את הדירה לאתר המשך לפרסם
      </label>
</div>
  

      <div className="div-but">
        <button type="submit" className="form__button">פרסם</button>
=======
  
    return (<div className="addProp-main">
        <Steps level={4} />
        
      <form onSubmit={handleSubmit} className="form__step">
      
      <label>
        פרטי יצירת קשר
      </label>
      <p>אפשר לשנות את פרטי יצירת הקשר בהמשך , בעריכת המודעה</p>
      <label>
        שם מלא
      </label>
      <input type="txt" dir="rtl" id="inputName" onChange={(e)=>values.name=e.target.value}/>

      <label>
        טלפון
      </label>
      <input type="number" id="inputName" onChange={(e)=>values.phoneNumber=e.target.value}/>
        
      <div className="div-but">
        <button type="submit" className="form__button">שלח</button>
>>>>>>> 973775d (17.10.23 a)
        <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
      </div>
      </form>
      </div>
    );
<<<<<<< HEAD

  };


  export default StepFive;
=======
  };

export default StepFive;
>>>>>>> 973775d (17.10.23 a)
