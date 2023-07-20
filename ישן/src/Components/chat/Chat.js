import Massage from "./Massage";
import CreateMasseg from "./CreateMasseg";
import { useState,useEffect,useRef } from "react";
import "../style.css";
import { AddRoomFromServer, AddUserServer, DeleteAllMassFromServer, getChatFromServer, getOwnerFromServer, getRoomFromServer } from "../../Services";
import { wait } from "@testing-library/user-event/dist/utils";
import { useDispatch, useSelector } from "react-redux";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { addMassage, deleteChat, saveArrChat, selectedRoom } from "../../store/Actions/ChatAction";
import { useParams } from "react-router-dom";//לשליפת פרמטרים שנשלחו בראוטר
import socketIoClient from  'socket.io-client'; 
import React from 'react';

// let socket=null;

const Chat=()=>{
    let dis=useDispatch();
    
    // if(socket===null)
    // socket=socketIoClient('http://localhost:8080')
  
    // // socket.on('SET_USERNAME',username=>{//הוספת המשתמש
    // //     dis(AddUserServer(username))
    // // });

  

    // let myref=React.createRef();//שרואים את ההודעה האחרונה בלי להוריד למטה
    // socket.on('CREATE_MASSAGE',massageObject=>{//הוספת הודעה
    //     dis(addMassage(massageObject))
    //   myref.current.scrollTop=this.myref.current.clientHeight;//כל פעם שיש הודעה חדשה נראה אותה ולא נצטרך לגלול
    // })
  
    

    //כאשר נשלח פרמטרים בניתוב לפה 
    // שולף את הפרמטרים בניתובuseParams
    let { id } = useParams();
    const ownerProp=id;//בעל הנכס
    let [nameownerProp,setNameownerProp]=useState(" ");//שם בעל הנכס
    const userSelect = useSelector(state => state.user.selectedUser);//משתמש נוכחי
    let idroom=useSelector(state => state.chat.selectedRoom);//חדר

    
    useEffect(()=>{
        dis(selectedRoom(null))//תאפס את מס החדר
        dis(saveArrChat([]))//ואת מערך ההודעות

        //מביא  חדר מהשרתid
            getRoomFromServer(userSelect.Id,ownerProp).then((res)=>{
                //עד שהפונקציה תעדכן בסטייט את החדר היא בינתיים ריקה ותוסיף חדר למרות שיש 
                //ולכן נשתמש בתשובה שחוזרת מהשרת שהיא אמיתית ונשלח אותה לפונקציה צאט
                if(res.data.length!=0) 
                   { 
                    dis(selectedRoom(res.data[0].Id));//כאשר מצאת את החדר תשמור את מס החדר בסטייט הכללי
                    chat(res.data[0].Id);
                   }
                    else add()
                    
                  }).catch(err=>alert(err))
                },[])
                
               
  

function add(){
    console.log("add")
        let users={
            id1:userSelect.Id,
            id2:ownerProp}
   
        AddRoomFromServer(users).then(res=>{
                    dis(selectedRoom(res.data[0].Id))
                    chat(res.data[0].Id)
                } ).catch(err=>alert(err))
}

function chat(id){
 //כאשר נגיע לשליפת ההודעות לא תיהיה בעיה עם חדר שלא נפתח
 getChatFromServer(id).then((res)=>{
    console.log(res.data)
    //כאשר אתה מביא את ההתכתבות מהשרת תשמור אותו במערך בסטייט הכללי
   dis(saveArrChat(res.data))}).catch(err=>alert(err))  
   
   

   getOwnerFromServer(ownerProp).then(res=>{
    console.log("res in chat")
    console.log(res.data[0])
    let name=res.data[0].Name;
    console.log(name)

    setNameownerProp(name);
}
    ).catch()
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
  
// deleteAllMass();
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
return<>{
<div className="root-chat">
 <div className="chat"> 
 <DeleteSweepIcon id="deleteAllMass" onClick={isDelete}/>
 <p className="litel">chat with {nameownerProp}</p>
  <Massage  /*refProp={myref}*/ /> 
<CreateMasseg/>
</div>
</div>
}
</>
}
export default Chat;