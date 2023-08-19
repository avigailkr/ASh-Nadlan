import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';

export const Email = () => {
  const form = useRef();

  
 function fun(e){
    sendEmail(e)
 }
  const sendEmail = (e) => {
    e.preventDefault();
console.log("form.current")
console.log(e)
    emailjs.sendForm('service_dddlq4q', 'template_7dy0nh5',form.current, 'h8uvQnkZ5XPOub0E6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (<>
    <form ref={form} >

    <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name='user_email'
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            
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
          /> 
      <textarea name="message" />
    </form>
    <input type='button' value="sendddddddddddd"onClick={fun}/></>
  );
};