import { useSelector } from "react-redux";
import "../style.css";
const Massage=(props)=>{
    const iduserSelect = useSelector(state => state.user.selectedUser.Id);
    let arrMass=useSelector(state=>state.chat.arr);
    return (arrMass.length!=0 && arrMass !='undefined') && <div className="massages" ref={props.refProp}>
        {
            arrMass.map((item,index)=>
            <div key={index} className={`massage${(item.IdUser===iduserSelect ? '-massage--me':'')}`}>
        {/* <div className="massag-user">{item.user}</div> */}
        <div className="massage_content">{item.Massage}</div>
            </div>
            
       
            )
        }

    </div>
}
export default Massage;