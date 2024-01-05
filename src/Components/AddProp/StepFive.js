import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";
import { addPropToServer, getFromServerIdProp, uploadImage,bringIdPropFromServer, uplaodAddDetails } from "../../Services";
import { useSelector, useDispatch } from "react-redux";
import { json } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; //אפשרות ניתוב לפי הניתובים שהגדרת
import Uplaoded from "../Uplaoded";
import { SaveDetailsProp } from "../../store/Actions/PropAction";

import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function  StepFive ({ prevStep, values }) {
  let user=useSelector(state=>state.user.selectedUser);
  let dis=useDispatch();
  const nav = useNavigate();

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(values);
     

      let date1=new Date();
      let date = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate();

      values.InsertDate=date;
      values.IdUser=user.Id;

        //שליחת פרטי הדירה
       addPropToServer(values).then((res)=>{

        //יצירת אובייקט לשליחת נתונים
        const formData = new FormData(); 
         
        for (let i = 0; i < values.image.length; i++) {
          // 'images' name of the formData values must match the action method param on your controller
          formData.append("idProp", values.idProp);
          formData.append("image", values.image[i]);       
//שליחה לשרת שיוסיף את התמונות לטבלת התמונות
         uploadImage(formData).then((res)=>{
         console.log(res.data);
         nav(`/Uplaoded`);
        }).catch(err=>alert(err));
         formData.delete("image");
      }
        
      dis(SaveDetailsProp(values))

     }).catch(err=>alert(err))

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
    };
  
    const handlePrev = (e) => {
      e.preventDefault();
      prevStep();
    };

  console.log(values)

    return (<div className="addProp-main">
       
        
      <form onSubmit={handleSubmit} className="form__step">
       <Steps level={4} />
       <div className="div-end">
       <Typography sx={{mt:5}} variant="h6" gutterBottom>
      ו... סיימנו
  </Typography>

  <Typography sx={{mb:10}} variant="h6" gutterBottom>
  אם ברצונך להעלות את הדירה לאתר המשך לפרסם
      </Typography>
</div>
  

      <div className="div-but">
        <button type="submit" className="form__button">פרסם</button>
        <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
      </div>
      </form>
      </div>
    );

  };


  export default StepFive;
