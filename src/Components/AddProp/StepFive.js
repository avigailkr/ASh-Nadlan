import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";
import { addPropToServer, getFromServerIdProp, uploadImage } from "../../Services";
import { useSelector, useDispatch } from "react-redux";
import { json } from "react-router-dom";
import { useEffect } from "react";



const StepFive = ({ prevStep, values }) => {
  let user=useSelector(state=>state.user.selectedUser);
  let dis=useDispatch();
  const [idProp,setIdProp]=useState(0);  

 
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
       console.log(res.data[0].Id);
       setIdProp(res.data[0].Id);

        //יצירת אובייקט לשליחת נתונים
        const formData = new FormData(); 
         
        for (let i = 0; i < values.image.length; i++) {
          // 'images' name of the formData values must match the action method param on your controller
          formData.append("idProp", idProp);
          formData.append("image", values.image[i]);       
//שליחה לשרת שיוסיף את התמונות לטבלת התמונות
         uploadImage(formData).then((res)=>{
         console.log(res.data);
        }).catch(err=>alert(err));
         formData.delete("image");
      }
        
     }).catch(err=>alert(err))

    };
  
    const handlePrev = (e) => {
      e.preventDefault();
      prevStep();
    };
  
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
        <button type="button" onClick={handlePrev}  className="form__button">הקודם</button>
      </div>
      </form>
      </div>
    );
  };

export default StepFive;