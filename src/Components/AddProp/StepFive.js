import React, { useState } from "react";
import "../style.css";
import Steps from "./Steps";
import { addPropToServer } from "../../Services";
import { useSelector, useDispatch } from "react-redux";



const StepFive = ({ prevStep, values }) => {
  let user=useSelector(state=>state.user.selectedUser);
  let dis=useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values);
     

      let date1=new Date();
      let date = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate();

      values.InsertDate=date;
      values.IdUser=user.Id;
      
      console.log(date);
       addPropToServer(values).then((res)=>{
         alert(res.data)
       }).catch(err=>alert(err));

      // v`Price`, v`IdCity`, v`Adress`, v`Sqm`, v`Mmd`, v`IdKindProp`, v`IdTypeSale`, v`InsertDate`,
      //  v`IdUser`, v`ShowPrice`, v`Floor`, v`InFloor`, v`RoomNum`, `Active`, v`IdStatus`,
      //   v`Description`, v`ImgUrl`, v`IdEnterDate`
      
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