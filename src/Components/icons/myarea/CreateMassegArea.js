import "../../style.css";
import {useForm} from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddMassFromServer } from "../../../Services";
import { addMassage } from "../../../store/Actions/ChatAction";

const CreateMassegArea=()=>{
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
<form  className="create-massageArea" onSubmit={t.handleSubmit(AddMass)}>
<input type="text" id="txt" placeholder="please enter massege" {...t.register("txt") }/>
<input type="submit" value="שלח"/>
</form>
</>
 }
export default CreateMassegArea;