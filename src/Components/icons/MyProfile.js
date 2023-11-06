// import { useDispatch, useSelector } from "react-redux";
// import {useForm} from "react-hook-form";
// import Avatar from '@mui/material/Avatar';
// import { red } from "@mui/material/colors";
// import { Brightness1, Details, PropaneSharp } from "@mui/icons-material";
// import BorderColorIcon from '@mui/icons-material/BorderColor';
// import TextField from '@mui/material/TextField';
// import "../style.css";
// import  {UpdateUser}  from "../../Services";
// const MyProfile=()=>{
//     const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
//     console.log("MyProfile");
//     console.log(selectUser);
// //     const dis=useDispatch();
//     function setting(){
//         console.log("setting");
//        document.getElementById("detailse").style.display="none";
//        document.getElementById("detailsToSetting").style.display="block";
//      }
//      function updatedetails(props){
//             console.log("update")
//             console.log(props)
//             UpdateUser(props).then(res=>console.log(res)).catch(err=>alert(err))
//      }

//      function exite(){
//       document.getElementById("detailsToSetting").style.display="none";
//       document.getElementById("detailse").style.display="block";
//      }
//      const t=useForm();
//     return<>
//     <button id="but-set"  onClick={setting}><BorderColorIcon/></button>
//         <Avatar sx={{ bgcolor: red[500],width: 106, height: 106,marginLeft:90}} aria-label="recipe"> 
//     {selectUser.Mail[0]}
//         </Avatar>

//   <div id="detailse">

//      <h1>{selectUser.Mail}</h1><br/>
//   {selectUser.Name}<br/>
//   {selectUser.Phone}<br/>
//   {selectUser.Tz}<br/>
//   </div>


//   <div id="detailsToSetting">
//   <form id="form-detailsToSetting" onSubmit={t.handleSubmit(updatedetails)}>
//      <TextField  id="Mail" label="Mail" defaultValue={selectUser.Mail} helperText=" " variant="filled" {...t.register("email") } /><br/>
//      <TextField  id="Name" label="Name" defaultValue={selectUser.Name} helperText=" " variant="filled" {...t.register("name") }/><br/>
//      <TextField  id="Phone" label="Phone" defaultValue={selectUser.Phone} helperText=" " variant="filled" {...t.register("phone") }/><br/>
//      <TextField  id="Tz" label="Tz" defaultValue={selectUser.Tz} helperText=" " variant="filled" {...t.register("tz") }/><br/>
//      <input type="submit"  value="עדכן"  className="but-update"/><br/>
//      <input type="button"  value="ביטול" onClick={exite} className="but-update"/>
//    </form> </div>


// </>
// }
// export default MyProfile;


import { useDispatch, useSelector } from "react-redux";
import {useForm} from "react-hook-form";
import Avatar from '@mui/material/Avatar';
import { red } from "@mui/material/colors";
import { Brightness1, Details, PropaneSharp } from "@mui/icons-material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import TextField from '@mui/material/TextField';
import "../style.css";
import  {UpdateUser}  from "../../Services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setRef } from "@mui/material";
import { MdCloudUpload } from "react-icons/md";
// import imgs from "C:\Users\sharo\OneDrive\שולחן העבודה\תמונות\ירושלים במלחמה\20231030_203336.jpg";

const MyProfile=()=>{
    const selectUser = useSelector(state => state.user.selectedUser);//שליפה של המשתמש הנוכחי שהתחבר
    let [mail,setmail]=useState(selectUser.Mail);
    let [name,setname]=useState(selectUser.Name);
    let [phone,setphone]=useState(selectUser.Phone);
    let nav=useNavigate();
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
            UpdateUser(props).then(res=>{
              setname(props.name);
              setmail(props.email);
              setphone(props.phone);
              document.getElementById("detailsToSetting").style.display="none";
      document.getElementById("detailse").style.display="block";
            }).catch(err=>alert(err))

     }

     function exite(){
      document.getElementById("detailsToSetting").style.display="none";
      document.getElementById("detailse").style.display="block";
     }

     function onFileChange(e){
      console.log("onFileChange111111111111111111111111111")
      console.log(e.target.files[0])
      setImage(e.target.files[0])
      // file = URL.createObjectURL(e.target.value)
      // console.log("file")
      // console.log(file)

     }
     const [image, setImage] = useState("");
     
     
     const t=useForm();




    return<>
    <button id="but-set"  onClick={setting}><BorderColorIcon/></button>
        <Avatar sx={{ bgcolor: red[500],width: 106, height: 106,marginLeft:90}} aria-label="recipe"> 
    {selectUser.Mail[0]}
    {/* <img src={URL.createObjectURL(image)} /> */}
  </Avatar>

  <div id="detailse">
     <h1>{mail}</h1><br/>
  {name}<br/>
  {phone}<br/>
  </div>


  <div id="detailsToSetting">
  <form id="form-detailsToSetting" onSubmit={t.handleSubmit(updatedetails)}>
     <TextField  id="Mail" label="Mail" defaultValue={selectUser.Mail} helperText=" " variant="filled" {...t.register("email") } /><br/>
     <TextField  id="Name" label="Name" defaultValue={selectUser.Name} helperText=" " variant="filled" {...t.register("name") }/><br/>
     <TextField  id="Phone" label="Phone" defaultValue={selectUser.Phone} helperText=" " variant="filled" {...t.register("phone") }/><br/>
     {/* <label id="up">
       העלאת תמונות        
      </label>

      <div id="DivfileInput" onClick={()=>document.querySelector('.input-file').click()}>

      <input type="file" accept="image/*" className="input-file" multiple={true} hidden 
      onChange={(e)=>{onFileChange(e)}}/>

   
       {image.length!=0 ?
       <div id="div-upImgs">
       {
        <img src={URL.createObjectURL(image[0])} width={150} height={135} alt={image[0]}/>
      
        }
      </div>
       :
       <>
       <MdCloudUpload color="#1475fc" size={60}/>
       <p>להעלאת תמונות של הנכס</p>
       </>} 


</div>*/}
<input type="file" onChange={(e)=>{onFileChange(e)}}/>

     <input type="submit"  value="עדכן"  className="but-update"/><br/>
     <input type="button"  value="ביטול" onClick={exite} className="but-update"/>
   </form> </div>


</>
}
export default MyProfile;