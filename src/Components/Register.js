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
import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Register() {
  const [openRegister, setOpenRegister] = useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(0);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const dis=useDispatch();
  const nav=useNavigate()
  const form = useRef();


  const handleCloseRegister = () => {
    setOpenRegister(false);
    nav("/property")
  };
  const sendEmail = (e) => {
    console.log("sendEmail")
    console.log(form.current)
    console.log(e)
    e.preventDefault();

    emailjs.sendForm('service_dddlq4q', 'template_7dy0nh5',form.current, 'h8uvQnkZ5XPOub0E6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const register=(e)=>{

    const user={
        Name:name,
        Mail:email,
        Phone:phone,
        Password:password
    } 
    if(email)sendEmail(e)//למה אי אפשר לעשות בתוך הוספת משתמש
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
          <form ref={form}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name='user_email'
            onChange={(e)=>{
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
            name='user_name'
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
            name='phone'
            onChange={(e)=>{
                console.log(e.target.value)
                setPhone(e.target.value)}}
          /> 
          </form>

        </DialogContent>
        <DialogActions>
        <Button id="butlog" onClick={()=>{handleCloseRegister();
          nav("/login")}}>התחבר</Button>
          <Button onClick={handleCloseRegister}>ביטול</Button>
          <Button onClick={(e)=>{register(e)}}>להרשמה</Button>
        </DialogActions>
        
        
      </Dialog>
      
   
    </div>
  );
}



