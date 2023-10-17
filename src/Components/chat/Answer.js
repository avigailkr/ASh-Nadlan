import Massage from "./Massage";
import CreateMasseg from "./CreateMasseg";
import { useState,useEffect,useRef } from "react";
import "../style.css";
import { AddRoomFromServer, AddUserServer, DeleteAllMassFromServer, getChatFromServer, getOwnerFromServer, getRoomFromServer } from "../../Services";
import { wait } from "@testing-library/user-event/dist/utils";
import { useDispatch, useSelector } from "react-redux";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { addMassage, deleteChat, saveArrChat, selectedRoom } from "../../store/Actions/ChatAction";
import { useNavigate, useParams } from "react-router-dom";//לשליפת פרמטרים שנשלחו בראוטר
import socketIoClient from  'socket.io-client'; 
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';
// let socket=null;

const Answer=()=>{
    //כאשר נשלח פרמטרים בניתוב לפה 
    // שולף את הפרמטרים בניתובuseParams
    let dis=useDispatch();
    let [username,setUserName]=useState(" ");//שם בעל הנכס
    const userSelect = useSelector(state => state.user.selectedUser);// בעל הדירות ומשתמש נוכחי
    let idroom=useSelector(state => state.chat.selectedRoom);//חדר
    let { userid } = useParams();
    const nav=useNavigate();
    useEffect(()=>{
        dis(selectedRoom(null))//תאפס את מס החדר
        dis(saveArrChat([]))//ואת מערך ההודעות
        //מביא  חדר מהשרתid
        //כגרע אביגיל או כל אחת אחרת ’מיד עונה לצאטים רק אלה ששילת כתבה להם
        //אחר כך תצטרכו להציג למוכר רשימת לקוחות
        //והוא יבחר למי לענות תשובה\
        //id למי שהוא יבחר אז תשנו את ה
            getRoomFromServer(userSelect.Id,userid).then((res)=>{
                //עד שהפונקציה תעדכן בסטייט את החדר היא בינתיים ריקה ותוסיף חדר למרות שיש 
                //ולכן נשתמש בתשובה שחוזרת מהשרת שהיא אמיתית ונשלח אותה לפונקציה צאט
                if(res.data.length!=0) 
                   { 
                    dis(selectedRoom(res.data[0].Id));//כאשר מצאת את החדר תשמור את מס החדר בסטייט הכללי
                    chat(res.data[0].Id);
                   }
                    // else add()
                    
                  }).catch(err=>alert(err))
                },[])
                getOwnerFromServer(userid).then(res=>{
                  let name=res.data[0].Name;
                  setUserName(name);
              }
                  ).catch()
            
  

function chat(idroom){
 //כאשר נגיע לשליפת ההודעות לא תיהיה בעיה עם חדר שלא נפתח
 //שולף את כל ההודעות של חדר זה
 getChatFromServer(idroom).then((res)=>{
    console.log(res.data)
    //כאשר אתה מביא את ההתכתבות מהשרת תשמור אותו במערך בסטייט הכללי
   dis(saveArrChat(res.data))}).catch(err=>alert(err))  
}

function isDelete(){
    // alert("isDelete")
   // alert("האם אתה בטוח שאתה רוצה למחוק"?{deleteAllMass}:'cancel')
//    return <>
//     <h1>האם אתה בטוח שאתה רוצה למחוק</h1>
//     <input type="button" onClick={deleteAllMass}>אישור</input>
//  <input type="button">ביטול</input></>
if (window.confirm('Are you sure you want to delete?')) {
    // Save it!
    console.log('Thing was saved to the database.');
  } else {
    // Do nothing!
    console.log('Thing was not saved to the database.');
  }
  
 deleteAllMass();
}
    function deleteAllMass()
    {
        console.log("deleteAllMass")
        console.log(idroom)
        DeleteAllMassFromServer(idroom).then(res=>{
            //כאשר מחקת מהשרת תמחק מהסטייט
            dis(deleteChat());
        }).catch(err=>{console.log(err)
            console.log(err);})
    }
return<>
{
<div className="root-chat">
 <div className="chat"> 
 <DeleteSweepIcon id="deleteAllMass" onClick={isDelete}/>
 <p className="litel">chat with {username}</p>
 {/* refProp={myref} */}
  <Massage /> 
<CreateMasseg/>
</div>
  <Button className="but-return" onClick={()=>{nav("/myarea")}}><EastIcon/>לאזור האישי</Button>
</div>
}
</>
}
export default Answer;