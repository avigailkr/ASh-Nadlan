import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { AddUser } from '../store/Actions/UserAction';
import { AddUserServer } from '../Services';
import { useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from  "react-hook-form";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  // name: yup.string().required("שדה חובה").test('len', "אורך לא תקין", x => x!=null && (x.length<=30 && x.length >= 2))
  //  ,
  password: yup.string().required("שדה חובה")
  // .matches("^(?=.*[a-z])([0-9])","סיסמה חייבת להכיל תווים ומספרים")
.test('len',"אורך לא תקין", x => x!=null && (x.length <= 10 && x.length >= 4))
   ,
  // mail: yup.string().email('כתובת מייל שגויה'),
  phone:yup.string().test('len',"מספר לא תקין",x => x!=null && (x.length<=10 && x.length >= 9))
 }).required();

export default function Register() {

  const [openRegister, setOpenRegister] = useState(true);
  const dis=useDispatch()
  const nav=useNavigate()
  const form = useRef();
  const { register, handleSubmit, formState: { isValid, errors } } = useForm({ mode: "all",
  resolver: yupResolver(schema)
   });

  const handleCloseRegister = () => {
    setOpenRegister(false);
    nav("/property")
  };
  const sendEmail = () => {
    console.log("sendEmail")
    console.log(form.current)

    emailjs.sendForm('service_dddlq4q', 'template_7dy0nh5',form.current, 'h8uvQnkZ5XPOub0E6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const registerfun=(e)=>{
    const user={
        Name:form.current.user_name.value,
        Mail:form.current.user_email.value,
        Phone:e.phone,
        Password:e.password
    } 
    if(form.current.user_name)sendEmail()
     AddUserServer(user).then((res)=>{
        dis(AddUser(user));
        nav("/property");
     }).catch(err=>alert(err))
     
     handleCloseRegister();
}
  
  return (
    <div>
      <Dialog open={openRegister} onClose={handleCloseRegister}>

        <DialogTitle className="dialog-title">ברוכים הבאים לא"ש נדלן</DialogTitle>
        <DialogContent>

<form ref={form}  onSubmit={handleSubmit(registerfun)}>
          <TextField autoFocus helperText={errors?.mail?.message} 
           margin="dense" label="Email Address" type="text" fullWidth variant="standard" name='user_email' defaultValue="shilat.bedani@gmail.com"
          // {...register('mail')} 
          />
          <TextField helperText={errors?.password?.message} margin="dense" label="Password" type="text" fullWidth variant="standard" defaultValue="12345"
          {...register('password')}
          />
          <TextField helperText={errors?.name?.message} margin="dense" label="Name" type="text" fullWidth variant="standard" name='user_name'defaultValue="אביגיל"
          //  {...register('name')}
          />
          <TextField helperText={errors?.phone?.message}  margin="dense" label="Phone" type="number" fullWidth variant="standard" name='phone'defaultValue="0598833767"
          {...register('phone')}
          />

       <DialogActions>
        <Button id="butlog" onClick={()=>{handleCloseRegister();
          nav("/login")}}>התחבר</Button>
          <Button onClick={handleCloseRegister}>ביטול</Button>
          <Button type="submit">להצטרפות</Button>
        </DialogActions>
    </form>
        </DialogContent>

      </Dialog>
      
   
    </div>
  );
}
