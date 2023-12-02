import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


import MenuOpenIcon from '@mui/icons-material/MenuOpen';//אייקון תפריט
import { useDispatch, useSelector } from 'react-redux';
import { AddUserServer, getLogin } from '../../Services';
import { AddUser, SaveUser } from '../../store/Actions/UserAction';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


// const schema = yup.object({
//   name: yup.string().required("שדה חובה").test('len', "אורך לא תקין", x => x.length<=30 && x.length >= 2)
//   ,  
//   password: yup.string().required("שדה חובה").test('len',"אורך לא תקין", x => x.length <= 10 && x.length >= 4)
//   //password: yup.string().required("שדה חובה").matches("^(?=.*[A-Za-z])([0-9])","סיסמה חייבת להכיל תווים ומספרים")
//   // .test('len',"אורך לא תקין", x => x.length <= 10 && x.length >= 2)
//    ,
//   email: yup.string().email('כתובת מייל שגויה'),
//   phone:yup.string()
//   .required("required")
//   .min(8, "מספר יכיל בין 8-10 תווים")
//   .max(10, "מספר יכיל בין 8-10 תווים")
//   // .test('len',"מספר לא תקין",x => x.length<=10 && x.length >= 9)לא עובדדדדדד
//  }).required();
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

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const nav=useNavigate();
  const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
  const form1 = useRef();
  const { register, handleSubmit, formState: { isValid, errors } } = useForm({ mode: "all",
  resolver: yupResolver(schema)
   });

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
     console.log(event);
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  function myArea(){
    nav("/myarea")
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
//loginnnnnnnnnnnnnn
  const [openLogin, setOpenLogin] = useState(false);
  const dis=useDispatch();
  let mailInput=useRef(null);
  let passInput=useRef(null);
  function openAreaLogin(){
    setOpenLogin(true)
  }
  const closeAreaLogin = () => {
    setOpenLogin(false);
  };
  const login = (e) => {
    alert("loginnnnn")
    console.log("loginnnnn")
    console.log(e)
let details={
    email:e.email,
    password:e.password
}
getLogin(details).then((res)=>{
    console.log("login")
    console.log(res.data.user.Active.data[0])
    if(res.data.user.Active.data[0]==1)
    {
        dis(SaveUser(res.data.user));
        nav("/property");
    }
    else
    alert("אופס... משתמש זה חסום אנא פנה למנהל האתר")
    
}).catch(()=>{
    alert(err=>alert(err.mass))
    openAreaRegister()})
    closeAreaLogin();
  };
  //loginnnnnnnnnnnnnn
//registerrrrrrrrr
  const [openRegister, setOpenRegister] = useState(false);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const form=useRef()
  
  function openAreaRegister(){
    setOpenRegister(true);
  }
  const closeAreaRegister = () => {
    setOpenRegister(false);
  };
  const register2=(e)=>{
    const user={
      Name:form.current.user_name.value,
      Mail:form.current.user_email.value,
      Phone:e.phone,
      Password:e.password
  } 
  if(form.current.user_name)sendEmail()
 
    
     AddUserServer(user).then((res)=>{
        alert(res.data.mass)
        dis(AddUser(user));
        nav("/property");


     }).catch(err=>alert(err))
     closeAreaRegister()
  
    
}
const sendEmail = () => {

  emailjs.sendForm('service_dddlq4q', 'template_7dy0nh5',form.current, 'h8uvQnkZ5XPOub0E6')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  //registerrrrrrrrrr

  return <>
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
            {/*--------------- אייקון תפריט --------------*/}
          <MenuOpenIcon />
          {/* ------------------------------------------- */}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow 
            // sx={{ zIndex: 'tooltip' }}
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper                    
>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                     >
                    <MenuItem onClick={openAreaRegister} value="register">הרשמה</MenuItem>
                    <MenuItem onClick={openAreaLogin} value="connect">התחברות</MenuItem>
                   {selectUser!=null && <MenuItem onClick={myArea} value="myarea">לאזור האישי</MenuItem>}

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>





    {openLogin &&<> <Dialog open={openLogin} onClose={closeAreaLogin}>
        
        <DialogTitle className="dialog-title">ברוכים הבאים לא"ש נדלן</DialogTitle>

        <form ref={form1}  onSubmit={handleSubmit(login)}>
        <DialogContent>
          {/* <input type="text" ref={mailInput}  onChange={()=>{console.log(mailInput.current.value)}}/> */}
          <TextField autoFocus helperText={errors?.email?.message} 
           margin="dense" label="Email Address" type="taxt" fullWidth variant="standard" name='user_email' 
          {...register('email')} 
          />
          
          <TextField helperText={errors?.password?.message} margin="dense" label="Password" type="password" fullWidth variant="standard"
          {...register('password')}
          />
          
        </DialogContent>
        <DialogActions>
        <Button id="butReg" onClick={()=>{
          closeAreaLogin();
          openAreaRegister();
          }}>הרשמה</Button>
          <Button onClick={closeAreaLogin}>ביטול</Button>
          <Button type="submit" >התחבר</Button>
          {/* <input type="button" value="התחבר" /> */}
        </DialogActions> 
        </form>


      </Dialog> 
      </>
    }
{openRegister && <>
      <Dialog open={openRegister} onClose={closeAreaRegister}>
        <form ref={form}  onSubmit={handleSubmit(register2)}>
        <DialogTitle className="dialog-title">ברוכים הבאים לא"ש נדלן</DialogTitle>
        <DialogContent>
          <TextField autoFocus helperText={errors?.email?.message} 
           margin="dense" label="Email Address" type="email" fullWidth variant="standard" name='user_email'    
          // {...register('email')} 
          />
          <TextField helperText={errors?.password?.message} margin="dense" label="Password" type="password" fullWidth variant="standard"
          {...register('password')}
          />
          <TextField helperText={errors?.name?.message} margin="dense" label="Name" type="name" fullWidth variant="standard" name='user_name'
          // {...register('name')}
          />
          <TextField helperText={errors?.phone?.message}  margin="dense" label="Phone" type="number" fullWidth variant="standard" name='phone'
          {...register('phone')}
          />
         
        </DialogContent>
        <DialogActions>
        <Button id="butlog" onClick={()=>{closeAreaRegister();
        openAreaLogin();
        }}>התחברות</Button>
          <Button onClick={closeAreaRegister}>ביטול</Button>
          <Button type="submit">הצטרפות</Button>
        </DialogActions>
         </form>
      </Dialog>
    </>}
    </>
}
