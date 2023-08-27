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
import Login from '../Login';
import { useDispatch } from 'react-redux';
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
export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const nav=useNavigate();

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
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(0);
  const dis=useDispatch();
  function openAreaLogin(){
    setOpenLogin(true)
  }
  const closeAreaLogin = () => {
    setOpenLogin(false);
  };
  const login = () => {
let details={
    email:email,
    password:password
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
    sendEmail(e)
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
     closeAreaRegister()
  
    
}
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
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={openAreaRegister} value="register">הרשמה</MenuItem>
                    <MenuItem onClick={openAreaLogin} value="connect">התחברות</MenuItem>
                    <MenuItem onClick={myArea} value="myarea">לאזור האישי</MenuItem>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>





    {openLogin && <div>
      <Dialog open={openLogin} onClose={closeAreaLogin}>
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
        </DialogContent>
        <DialogActions>
        <Button id="butReg" onClick={()=>{
          closeAreaLogin();
          openAreaRegister();
          }}>הרשמה</Button>
          <Button onClick={closeAreaLogin}>ביטול</Button>
          <Button onClick={login}>התחבר</Button>
        </DialogActions>
      </Dialog>
    </div>}




    {openRegister && <div>
      <Dialog open={openRegister} onClose={closeAreaRegister}>
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
            onChange={(e)=>{
                console.log(e.target.value)
                setPhone(e.target.value)}}
          />
          </form>
        </DialogContent>
        <DialogActions>
        <Button id="butlog" onClick={()=>{closeAreaRegister();
        openAreaLogin();
        }}>התחברות</Button>
          <Button onClick={closeAreaRegister}>ביטול</Button>
          <Button onClick={(e)=>{register2(e)}}>הצטרפות</Button>
        </DialogActions>
      </Dialog>
    </div>}
    </>
}