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

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';


const schema = yup.object({
  password: yup.string().required("שדה חובה").matches("^(?=.*[A-Za-z])([0-9])"," סיסמה חייבת להכיל מספרים ותווים").test('len',
   "אורך לא תקין", x => x.length <= 10 && x.length >= 2),
  email: yup.string().email('כתובת מייל שגויה')
 }).required();

export default function Login() {
  const [openLogin, setOpenLogin] = useState(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState(0);
  const [errlogin,setErrLogin]=useState(false)
const dis=useDispatch();
const nav=useNavigate();
const form = useForm();
  const { register, handleSubmit, formState: { isValid, errors } } = useForm({ mode: "all",
  resolver: yupResolver(schema)
   });

  const handleCloseLogin = () => {
    setOpenLogin(false);
    nav("/property")
  };
  
  const login = (e) => {
let details={
    email:e.email,
    password:e.password
}
getLogin(details).then((res)=>{
  console.log("resssssssssssssssssssssssssss")
  console.log(res.data)
  if(!res.data.user)//כאשר אין משתמש כזה יציג הודעת שגיאה
  alert(res.data.mass)
   else {
    if(res.data.user.Active.data[0]==1)
    {
        dis(SaveUser(res.data.user));
        nav("/property");
    }
    else
    alert("אופס... משתמש זה חסום אנא פנה למנהל האתר")
  }
    
}).catch((err)=>{
    alert(err.mass)
    nav("/register");})
    handleCloseLogin();
  };
  return (
    <div>
      <Dialog open={openLogin} onClose={handleCloseLogin}>
        <DialogTitle className="dialog-title">ברוכים הבאים לא"ש נדלן</DialogTitle>
        <DialogContent>

        <form ref={form}  onSubmit={handleSubmit(login)}>
          <TextField autoFocus helperText={errors?.email?.message} 
           margin="dense" label="Email Address" type="email" fullWidth variant="standard" name='user_email'    
          {...register('email')} 
          />
          <TextField helperText={errors?.password?.message} margin="dense" label="Password" type="password" fullWidth variant="standard"
          {...register('password')}
          />
<DialogActions>
        <Button id="butReg" onClick={()=>{handleCloseLogin();
          nav("/register")}}>הרשמה</Button>
          <Button onClick={handleCloseLogin}>ביטול</Button>
          <Button type="submit">התחבר</Button>
        </DialogActions>
    </form>
      
        </DialogContent>
        
      </Dialog>
    </div>
  );
}



