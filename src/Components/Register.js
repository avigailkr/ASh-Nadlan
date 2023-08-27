// import {useForm} from "react-hook-form";
// import { useState } from "react";
// import "./style.css";
// import { Propane } from "@mui/icons-material";
// import CloseIcon from '@mui/icons-material/Close';
// import {AddUserServer} from '../Services/index' ;
// import { useDispatch } from "react-redux";
// import {AddUser} from '../store/Actions/UserAction'
// import { Navigate, useNavigate } from "react-router-dom";
// const Register=()=>{
//     let {register,handleSubmit,formState:{isValid,errors}}=useForm({mode:"onChange"});//mode-באיזה מצב אני יבדוק את הקלט/נתונים
//     //useForm-מנהל בעצמו בכל מה שקשור לטופס
//     //שגיאות הכנסות בדיקות תקינות

//     //register-פונק המאפשרת לי להכניס את הפלט ישירות למשתנה 

//     //useForm פונק מ handleSubmit
//     //יודעת לקחת את הנתונים מהטופס ולשלוח לפונקציה שלי את הנתונים


// const dis=useDispatch();
// const nav=useNavigate();

    // const save=(details)=>{
    //     console.log("details");
    //     console.log(details);
    //     const user={
    //         Id:details.tz,
    //         Name:details.userName,
    //         Mail:details.email,
    //         Phone:details.phone
    //     }
    //     console.log(user)

    //      AddUserServer(user).then((res)=>{
    //         alert(res.data.mass)
    //         dis(AddUser(user));
    //         nav("/property");


    //      }).catch(err=>alert(err))

      
        
    // }
   
//     function funclose(){
//         console.log("funclose")
//         document.getElementById("form").style.display="none";
//     }
//     const t=useForm();


//     return<form id="form" className={isValid?"form-good":"form-error"} onSubmit={t.handleSubmit(save)}>

//        <button className="close-form" onClick={funclose}><CloseIcon/></button> 
//     <h2 className="form-field-title">ברוכים הבאים לא"ש נדלן</h2>
//     <h3>אנו ממלצים לך להירשם</h3>
//     <p>!!על מנת שתוכלו להינות מכל מה שהאתר מציע  בחינם </p>
    
//     {/* <label className="form-field">
//             <input type="text" placeholder="Your name.."{...register("useName",{minLength:1,maxLength:20})}/>
//             {
//                 errors.useName?.type=="minLength" && <div className="error1">מס תוים מינימלי 1</div>
//             }
//              {
//                 errors.useName?.type=="maxLength" && <div className="error1">הגעת למס תווים מקסימלי</div>
//             }
            
//       </label>
 
//     <label><div className="form-field"> 
//          <input type="text" placeholder="Your mail.."{...register("email",{required:true,pattern:"^[0-9A-Za-z]{3,}@[gmail|com|net]."})}/>
//             {
//                 errors.email?.type=="required" && <p className="error1">שדה זה חובה*</p>
//             }
//             {
//                 errors.email?.type=="pattern" && <p className="error1">הכנסת תווים שגויים</p>
//             }
           
//        </div></label>

//        <label><div className="form-field">
//         <input type="text" placeholder="Your id.."{...register("tz",{minLength:9,maxLength:9,required:true})}/>
//             {
//                 errors.tz?.type=="minLength" && <p className="error1">הכנס  9  תווים  </p>
//             }
//             {
//                 errors.tz?.type=="required" && <p className="error1"> שדה זה חובה</p>
//             }
            
//        </div> </label>
   
//        <label><div className="form-field">
//             <input type="text" placeholder="Your phone.."{...register("phone",{maxLength:10})}/>
//             {
//                 errors.phone?.type=="maxLength" && <p className="error1">מס מקסימלי 10</p>
//             } 
       
//        </div></label>

//    <label className="form-field">
//    <input type="submit"  value="שלח"/>
//    </label>
//      */}

// <label><div className="form-field"> 
//    <input type="text" placeholder="Your name.."{...t.register("userName") } />
//     </div></label>

//     <label><div className="form-field"> 
//    <input type="text" placeholder="Your mail.."{...t.register("email") } />
//     </div></label>

//     <label><div className="form-field"> 
//     <input type="text" placeholder="Your id.."{...t.register("tz") } />
//     </div></label>

//     <label><div className="form-field"> 
//     <input type="text" placeholder="Your phone.."{...t.register("phone") } />
//     </div></label>

//     <label className="form-field">
//    <input type="submit"  value="שלח"/>
//    </label>
    
//     </form>


// }
// export default Register;


import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { AddUser, SaveUser } from '../store/Actions/UserAction';
import { AddUserServer, getLogin } from '../Services';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function Register() {
  const [openRegister, setOpenRegister] = useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(0);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
const dis=useDispatch();
const nav=useNavigate()
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  
  const register=()=>{
   
    const user={
        Name:name,
        Mail:email,
        Phone:phone,
        Password:password
    }
    console.log(user)

     AddUserServer(user).then((res)=>{
        alert(res.data.mass)
        dis(AddUser(user));
        nav("/property");


     }).catch(err=>alert(err))

     handleCloseRegister();
    
}
// class="dialog-title"
  return (
    <div>
      <Dialog open={openRegister} onClose={handleCloseRegister}>
        <DialogTitle className="dialog-title">ברוכים הבאים לא"ש נדלן</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>{
            console.log(e.target.value)
            setEmail(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>{
                console.log(e.target.value)
                setPassword(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
            variant="standard"
            onChange={(e)=>{
            console.log(e.target.value)
            setName(e.target.value)}}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone"
            type="phone"
            fullWidth
            variant="standard"
            onChange={(e)=>{
                console.log(e.target.value)
                setPhone(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
        <Button id="butlog" onClick={()=>{handleCloseRegister();
          nav("/login")}}>התחבר</Button>
          <Button onClick={handleCloseRegister}>ביטול</Button>
          <Button onClick={register}>להרשמה</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



