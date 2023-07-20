import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import { red } from "@mui/material/colors";
import { Brightness1, Details, PropaneSharp } from "@mui/icons-material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TextField from '@mui/material/TextField';
import "../style.css";
import  {UpdateUser}  from "../../Services";
const MyProfile=()=>{
    const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
    console.log("MyProfile");
    console.log(selectUser);
//     const dis=useDispatch();
    function setting(){
        console.log("setting");
       document.getElementById("detailse").style.display="none";
       document.getElementById("detailsToSetting").style.display="block";
     }
     function updatedetails(props){
            console.log("update")
            console.log(props)
            UpdateUser(props).then(res=>console.log(res)).catch(err=>alert(err))
     }

     function exite(){
      document.getElementById("detailsToSetting").style.display="none";
      document.getElementById("detailse").style.display="block";
     }
     const t=useForm();
    return<>
    <button id="but-set"  onClick={setting}><BorderColorIcon/></button>
        <Avatar sx={{ bgcolor: red[500],width: 106, height: 106,marginLeft:90}} aria-label="recipe"> 
    {selectUser.Mail[0]}
  </Avatar>

  <div id="detailse">

     <h1>{selectUser.Mail}</h1><br/>
  {selectUser.Name}<br/>
  {selectUser.Phone}<br/>
  {selectUser.Tz}<br/>
  </div>


  <div id="detailsToSetting">
  <form id="form-detailsToSetting" onSubmit={t.handleSubmit(updatedetails)}>
     <TextField  id="Mail" label="Mail" defaultValue={selectUser.Mail} helperText=" " variant="filled" {...t.register("email") } /><br/>
     <TextField  id="Name" label="Name" defaultValue={selectUser.Name} helperText=" " variant="filled" {...t.register("name") }/><br/>
     <TextField  id="Phone" label="Phone" defaultValue={selectUser.Phone} helperText=" " variant="filled" {...t.register("phone") }/><br/>
     <TextField  id="Tz" label="Tz" defaultValue={selectUser.Tz} helperText=" " variant="filled" {...t.register("tz") }/><br/>
     <input type="submit"  value="עדכן"  className="but-update"/><br/>
     <input type="button"  value="ביטול" onClick={exite} className="but-update"/>
   </form> </div>


</>
}
export default MyProfile;