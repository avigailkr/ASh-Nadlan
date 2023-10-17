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
  name: yup.string().required("שדה חובה").test('len', "אורך לא תקין", x => x.length<=30 && x.length >= 2),
  password: yup.string().required("שדה חובה").matches("^(?=.*[A-Za-z])([0-9])","סיסמה חייבת להכיל תווים ומספרים").test('len',
   "אורך לא תקין", x => x.length <= 10 && x.length >= 2),
  email: yup.string().email('כתובת מייל שגויה'),
  phone:yup.string().test('len',"מספר לא תקין",x => x.length<=10 && x.length >= 9)
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
  const sendEmail = (e) => {
    console.log("sendEmail")
    console.log(form.current)
    console.log(e)
    // e.preventDefault();

    emailjs.sendForm('service_dddlq4q', 'template_7dy0nh5',form.current, 'h8uvQnkZ5XPOub0E6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const registerfun=(e)=>{
console.log(e)
    const user={
        Name:e.name,
        Mail:e.email,
        Phone:e.phone,
        Password:e.password
    } 
    if(e.email)sendEmail(e)//למה אי אפשר לעשות בתוך הוספת משתמש
     AddUserServer(user).then((res)=>{
        alert(res.data.mass)
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
          <TextField autoFocus helperText={errors?.email?.message} 
           margin="dense" label="Email Address" type="email" fullWidth variant="standard" name='user_email'    
          {...register('email')} 
          />
          <TextField helperText={errors?.password?.message} margin="dense" label="Password" type="password" fullWidth variant="standard"
          {...register('password')}
          />
          <TextField helperText={errors?.name?.message} margin="dense" label="Name" type="name" fullWidth variant="standard" name='user_name'
          {...register('name')}
          />
          <TextField helperText={errors?.phone?.message}  margin="dense" label="Phone" type="phone" fullWidth variant="standard" name='phone'
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


// register={register('email', {
              //   onChange: (e) => setEmail(e.target.value)
              // })}


{/* {errors ? <div style={{ color: "red" }}>{errors.email ?
errors.email.message : null}</div> : null} */}