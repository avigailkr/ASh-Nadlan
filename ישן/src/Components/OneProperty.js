/* eslint-disable jsx-a11y/alt-text */
import TimeDate from "./TimeDate";

import "./style.css";
const OneProperty=(details)=>{
    console.log("Apar")
    console.log(details)
   let imgd="m1 (1).png";
    return<>
    <div className="details-apar">
    <img className="img-Apar" src={imgd}/>
    {/* <img src={`../image/${details.props.img}`}/>איך להציג תמונה????????????????????????  */}
    <TimeDate date={new Date(details.props.date).toLocaleDateString()}/>
    {/* {<time date={details.props.date}/>} */}
    <p>{details.props.price}$</p>
   {details.props.room} room |
    {details.props.size} m"r |
    {details.props.kind}
    <p>{details.props.city}</p>
    {/* <p>{new Date(details.props.date).toLocaleDateString()}</p>   */}
    
    </div>
    </>
}
export default OneProperty;