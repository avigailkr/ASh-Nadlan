import { useSelector } from "react-redux";
import "../style.css";
const Massage = (props) => {

    const iduserSelect = useSelector(state => state.user.selectedUser.Id);
    const arrMass = useSelector(state => state.chat.arr);
    return <div className="massages" ref={props.refProp}>
        {
            arrMass.map((item, index) =>
                <div key={index} className={`massage${(item.IdUser === iduserSelect ? '-massage--me' : '')}`}>
                    {/* <div className="massag-user">{item.user}</div> */}
                    <div className="massage_content">{item.Massage}</div>
                </div>


            )
        }

    </div>
}
export default Massage;

// .massage-user{
//     font-weight: bold;
//   }
//   .massage.massage--me{
//     background-color: #3e85d1;
//     color:#fff;
//     border-radius:10px 0 10px 10px;
//   }