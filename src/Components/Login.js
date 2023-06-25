import {useForm} from "react-hook-form";
import "./style.css";
import CloseIcon from '@mui/icons-material/Close';
import {getLogin} from '../Services/index' ;
import { Key, Mail, Password, PasswordOutlined, PasswordRounded } from "@mui/icons-material";
import { ThemeConsumer } from "styled-components";
import { useDispatch } from "react-redux";
import { SaveUser } from "../store/Actions/UserAction";
import { Navigate, useNavigate } from "react-router-dom";
const Login=()=>{
    // let {register,handleSubmit,formState:{isValid,errors}}=useForm({mode:"onChange"});//mode-באיזה מצב אני יבדוק את הקלט/נתונים
    //useForm-מנהל בעצמו בכל מה שקשור לטופס
    //שגיאות הכנסות בדיקות תקינות

    //register-פונק המאפשרת לי להכניס את הפלט ישירות למשתנה 

    //useForm פונק מ handleSubmit
    //יודעת לקחת את הנתונים מהטופס ולשלוח לפונקציה שלי את הנתונים

    const dis=useDispatch();
    const nav=useNavigate();
    const save=(details)=>{
        let user;
        if(details.email){
         user={
           email:details.email,
           tz:null
        }}
        else {
         user={
            email:null,
            tz:details.tz
         }}

         console.log("user")
         console.log(user)
         getLogin(user).then((res)=>{
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
            nav("/register");
        }
            
            )

    }
   
    function funclose(){
        document.getElementById("form-Login").style.display="none";
    }
    const t=useForm();
    // const { register, setError } = useForm();
    return<form id="form-Login" onSubmit={t.handleSubmit(save)}>
          <button className="close-form" onClick={funclose}><CloseIcon/></button> 
    <h2 className="form-field-title">ברוכים הבאים לא"ש נדלן</h2>
    <p>התחברו עם Mail</p>

    <label><div className="form-field"> 
   <Mail/><input type="text" placeholder="Your mail.." {...t.register("email") }  />
    </div></label>
    <p>או</p>
    <label><div className="form-field"> 
    <Key/><input type="text" placeholder="Your id.." {...t.register("tz") } />
    </div></label>

    <label className="form-field">
   <input type="submit"  value="שלח"/>
   </label>
    
    </form>
//     return<form id="form-Login"  onSubmit={t.handleSubmit(save)}>

    //    <button className="close-form" onClick={funclose}><CloseIcon/></button> 
    // <h2 className="form-field-title">ברוכים הבאים לא"ש נדלן</h2>
    // <p>התחברו עם Mail</p>
    
   
//     <label><div className="form-field"> 
//          <input type="text" placeholder="Your mail.."{...register("email",{required:true,pattern:"^[0-9A-Za-z]{3,}@[gmail|com|net]."})}/>
//             {/* {
//                 errors.email?.type=="required"  && <p className="error1">שדה זה חובה*</p>
//             }
//             {
//                 errors.email?.type=="pattern" && <p className="error1">הכנסת תווים שגויים</p>
//             } */}
            
            
           
//        </div></label>
// <p>או</p>
//        <label><div className="form-field">
//         <input type="text" placeholder="Your id.."{...register("tz",{minLength:9,maxLength:9,required:true})}/>
//             {/* {
//                 t.errors.tz?.type=="minLength" && <p className="error1">הכנס  9  תווים  </p>
//             }
//             {
//                 t.errors.tz?.type=="required" && <p className="error1"> שדה זה חובה</p>
//             } */}
            
//        </div> </label>
   
//    <label className="form-field">
//    <input type="submit"  value="שלח"/>
//    </label>
    
//     </form>


}
export default Login;