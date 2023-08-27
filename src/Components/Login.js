import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { SaveUser } from '../store/Actions/UserAction';
import { getLogin } from '../Services';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Register from './Register';


export default function Login() {
  const [openLogin, setOpenLogin] = useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(0);
  const [errlogin,setErrLogin]=useState(false)
const dis=useDispatch();
const nav=useNavigate();

  const handleCloseLogin = () => {
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
    nav("/register");})
    handleCloseLogin();
  };
  return (
    <div>
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle className="dialog-title">ברוכים הבאים לא"ש נדלן</DialogTitle>
        <DialogContent>
         { errlogin==false ? <TextField
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
          />:<TextField
          error
          helperText="שדה חובה"
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
          }
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
                setPassword(e.target.value)}
                
              }
          />
        </DialogContent>
        <DialogActions>
        <Button id="butReg" onClick={()=>{handleCloseLogin();
          nav("/register")}}>הרשמה</Button>
          <Button onClick={handleCloseLogin}>ביטול</Button>
          <Button onClick={login}>התחבר</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



