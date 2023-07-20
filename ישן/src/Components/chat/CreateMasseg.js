import "../style.css";
import {useForm} from "react-hook-form";
import { useRef } from "react";
import Massage from "./Massage" ;
import { AddMassFromServer, getChatFromServer } from "../../Services";
import { useDispatch, useSelector } from "react-redux";
import { addMassage } from "../../store/Actions/ChatAction";



const CreateMasseg=()=>{
    const dis=useDispatch();
    const iduserSelect = useSelector(state => state.user.selectedUser.Id);//משתמש נוכחי
    const idroom=useSelector(state=>state.chat.selectedRoom);
function AddMass(mass){
    let obj={
        idroom: idroom,
        iduser: iduserSelect,
        massage: mass.txt
    }
AddMassFromServer(obj).then((res)=>{console.log(res.data);
    dis(addMassage(res.data));
    document.getElementById("txt").value=" ";
}).catch(err=>alert(err))

 }

 const t=useForm();
return<>
<form  className="create-massage" onSubmit={t.handleSubmit(AddMass)}>
<input type="text" id="txt" placeholder="please enter massege" {...t.register("txt") }/>
<input type="submit" value="שלח"/>
</form>
</>
 }
export default CreateMasseg;